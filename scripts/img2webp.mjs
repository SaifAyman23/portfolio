#!/usr/bin/env node
import { readdirSync, statSync } from 'node:fs'
import { extname, join, relative, resolve } from 'node:path'
import process from 'node:process'
import sharp from 'sharp'

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png'])

function parseArgs(argv) {
  const args = { quality: 82, lossless: false, inputs: [] }
  for (const arg of argv) {
    if (arg.startsWith('--quality=')) {
      args.quality = Number.parseInt(arg.split('=')[1], 10)
    } else if (arg === '-q') {
      const idx = argv.indexOf(arg)
      args.quality = Number.parseInt(argv[idx + 1], 10)
    } else if (arg === '--lossless') {
      args.lossless = true
    } else {
      args.inputs.push(arg)
    }
  }
  return args
}

function collectImages(target, files = []) {
  const stats = statSync(target)
  if (stats.isDirectory()) {
    for (const entry of readdirSync(target)) {
      collectImages(join(target, entry), files)
    }
  } else if (IMAGE_EXTENSIONS.has(extname(target).toLowerCase())) {
    files.push(target)
  }
  return files
}

function formatKB(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`
}

async function main() {
  const args = parseArgs(process.argv.slice(2))

  if (args.inputs.length === 0) {
    console.error('Usage: node scripts/img2webp.mjs <file-or-folder...> [--quality=82] [-q 82] [--lossless]')
    process.exitCode = 1
    return
  }

  if (Number.isNaN(args.quality) || args.quality < 1 || args.quality > 100) {
    console.error(`Invalid quality: ${args.quality}`)
    process.exitCode = 1
    return
  }

  const targets = args.inputs.flatMap((input) => collectImages(resolve(input)))

  if (targets.length === 0) {
    console.error('No JPG/PNG images found in the given paths.')
    process.exitCode = 1
    return
  }

  let totalBefore = 0
  let totalAfter = 0
  const rows = []

  for (const source of targets) {
    const output = `${source.slice(0, -extname(source).length)}.webp`
    let pipeline = sharp(source).webp({ quality: args.quality, lossless: args.lossless })
    const info = await pipeline.toFile(output)
    const before = statSync(source).size
    const after = statSync(output).size
    totalBefore += before
    totalAfter += after
    rows.push({ file: relative(process.cwd(), output), before, after })
  }

  const width = Math.max(...rows.map((r) => r.file.length)) + 2
  for (const row of rows) {
    const saved = 100 - Math.round((row.after / row.before) * 100)
    console.log(`${row.file.padEnd(width)} ${formatKB(row.before).padStart(9)} -> ${formatKB(row.after).padStart(9)}  (-${saved}%)`)
  }
  console.log('-'.repeat(width + 34))
  console.log(
    `${`Total (${rows.length} files)`.padEnd(width)} ${formatKB(totalBefore).padStart(9)} -> ${formatKB(totalAfter).padStart(9)}  (-${100 - Math.round((totalAfter / totalBefore) * 100)}%)`
  )
}

main().catch((error) => {
  console.error(error.message)
  process.exitCode = 1
})
