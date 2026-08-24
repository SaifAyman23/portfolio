import { ProjectCard } from '@/components/projects'
import { Stack } from '@/components/ui/stack'
import { projects } from '@/lib/projects'

export function Projects() {
  return (
    <section className="relative bg-background px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Selected Work</p>
        <h2 className="font-heading mt-3 text-4xl leading-none tracking-tight sm:text-5xl">
          Things I&apos;ve built
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Production-grade — not demos. Each one runs, scales, and survives real users.
        </p>

        <Stack className="mt-12 flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Stack>
      </div>
    </section>
  )
}
