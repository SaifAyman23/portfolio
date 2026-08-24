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

export function ProjectCard({ eyebrow, title, description, tags, image, href, className }: ProjectCardProps) {
  const content = (
    <Card
      className={`stack-card flex w-full flex-col overflow-hidden border bg-card shadow-sm transition-shadow hover:shadow-md md:flex-row ${className ?? ''}`.trim()}
    >
      <div className="bg-muted relative aspect-square w-full shrink-0 md:w-[320px]">
        {image ? (
          <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
        ) : (
          <div className="absolute inset-0 grid place-items-center p-6 text-sm text-muted-foreground">Image</div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <CardHeader>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <CardTitle className="font-heading mt-2 text-2xl leading-none tracking-tight sm:text-3xl">
            {title}
          </CardTitle>
          <CardDescription className="font-body mt-3 text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="font-body font-medium">
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
