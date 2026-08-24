export function Experience() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow">Experience</p>
        <h2 className="mt-3 max-w-3xl text-4xl leading-none tracking-tight sm:text-5xl">
          Where I&apos;ve shipped
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Two years of production work — tell me how you want this laid out and I&apos;ll build it.
        </p>

        <div className="mt-12 grid gap-6">
          <div className="rounded-xl border bg-card p-6 text-muted-foreground">
            Experience items go here — your call on timeline vs cards vs log.
          </div>
        </div>
      </div>
    </section>
  )
}
