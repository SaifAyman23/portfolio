import { Github, Linkedin, Mail } from 'lucide-react'

import footerBg from '@/assets/img/footer-bg.webp'
import mountain from '@/assets/img/mountains 1.webp'
import name from '@/assets/img/Saif Eldin Ayman.svg'
import { CONTACT } from '@/lib/constants'

const classes =
  'flex items-center gap-2 rounded-full border border-white/25 to-transparent px-4 py-1.5 text-xl text-muted-foreground hover:text-white backdrop-blur-sm transition duration-300 hover:bg-white/20'

export default function Footer() {
  const year = new Date().getFullYear()
  const hasEmail = CONTACT.email !== ''
  const hasGithub = CONTACT.github !== ''
  const hasLinkedin = CONTACT.linkedin !== ''

  return (
    <footer className="relative bg-background px-4 sm:px-6 md:px-10">
      <div className="relative mx-auto overflow-hidden rounded-t-3xl bg-black">
        <img
          src={footerBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute inset-0 opacity-20 h-full w-full object-cover"
        />

        <div className="relative flex flex-col w-full pt-10 sm:pt-12">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            {hasEmail && (
              <a href={`mailto:${CONTACT.email}`} className={classes}>
                <Mail className="h-5 w-5" aria-hidden="true" />
                <span>{CONTACT.email}</span>
              </a>
            )}
            {hasGithub && (
              <a href={CONTACT.github} target="_blank" rel="noreferrer" className={classes}>
                <Github className="h-5 w-5" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            )}
            {hasLinkedin && (
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className={classes}>
                <Linkedin className="h-5 w-5" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            )}
          </div>

          <p className="font-body mx-auto mt-15 max-w-4xl text-center text-md max-sm:mx-5 leading-relaxed text-muted-foreground sm:text-xl">
            Full-stack engineer from Alexandria with two years of shipping real products. ERPs,
            delivery platforms, AI tools, live streams. I care about the details users never notice
            and the performance they always feel.
          </p>

          {/* <h2
            aria-label="Saif Eldin Ayman"
            className="font-heading mt-16 text-center select-none whitespace-nowrap uppercase tracking-tight text-white/90 text-[clamp(2rem,9vw,7rem)]"
          >
            Saif Eldin Ayman
          </h2> */}
          <img
            src={name}
            alt="Saif Eldin Ayman"
            className="mx-auto mt-16 select-none w-5/6 sm:w-2/3"
          />

          <p className="mt-15 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            &copy; {year} Saif Eldin Ayman &middot; Ship it &amp; forget it &reg; &middot; All
            rights reserved
          </p>

          <div className="relative h-56 sm:h-72 md:h-150">
            <img
              src={mountain}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="pointer-events-none mt-10 contrast-100 opacity-10 h-full saturate-0 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
