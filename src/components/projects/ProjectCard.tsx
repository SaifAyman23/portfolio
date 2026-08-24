import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface ProjectCardProps {
  eyebrow?: string
  title: string
  description: string
  tags: readonly string[]
  image?: string
  href?: string
  className?: string
}

export function ProjectCard({
  eyebrow,
  title,
  description,
  tags,
  image,
  href,
  className,
}: ProjectCardProps) {
  const content = (
    <Card
      className={`flex w-full overflow-hidden border-3 border-black bg-card md:flex-row md:h-full ${className ?? ''}`.trim()}
    >
      <div className="bg-muted relative aspect-square ms-6 w-[calc(50%-2rem)] shrink-0 overflow-hidden rounded-2xl max-md:w-[calc(50%-1.5rem)]">
        {image ? (
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center p-6 text-sm text-muted-foreground">
            Image
          </div>
        )}
      </div>

      <div className="flex h-full w-1/2 min-w-0 flex-col px-8 py-5 lg:px-10 lg:py-6">
        <CardHeader className="p-0">
          {eyebrow ? <p className="eyebrow text-accent-sky">{eyebrow}</p> : null}
          <CardTitle className="font-heading mt-3 text-3xl leading-none tracking-tight sm:text-4xl">
            {title}
          </CardTitle>
          <CardDescription className="font-body mt-4 text-lg leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto p-0 pt-6">
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="border-transparent bg-muted px-3 py-1 font-body text-sm font-medium text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {content}
      </a>
    )
  }

  return content
}
