
import AccordionGallery, { type AccordionGalleryItem } from '../bits/AccordionGallery'

import g1 from '@/assets/img/gallery/1.webp'
import g2 from '@/assets/img/gallery/2.webp'
import g3 from '@/assets/img/gallery/3.webp'
import g4 from '@/assets/img/gallery/4.webp'
import g5 from '@/assets/img/gallery/5.webp'
import { cn } from '@/lib/utils'

interface GalleryProps {
  className?: string
}

const items: AccordionGalleryItem[] = [
  { image: g1 },
  { image: g2 },
  { image: g3 },
  { image: g4 },
  { image: g5 },
]

export default function Gallery({ className }: GalleryProps) {

  return (
    <section className={cn('relative overflow-hidden bg-background px-6 pb-36', className)}>
      <div className="mx-auto max-w-7xl">
        <p className="eyebrow text-center">Gallery</p>
        <h2 className="font-libertine my-8 mb-16 text-center text-[clamp(3rem,8vw,7.5rem)] italic leading-[1.05] tracking-tight text-foreground">
          Through my lens
        </h2>

        <AccordionGallery
          items={items}
          defaultIndex={2}
          expandRatio={0.52}
          trigger="hover"
          accentColor="#ffffff"
          overlayColor="#000000"
          textColor="#ffffff"
          grayscale
          showLabels={false}
          duration={0.6}
          ease="power3.out"
          parallax={0.5}
          tilt={8}
          stagger={0.06}
          height={460}
          gap={10}
          radius={16}
          orientation="horizontal"
        />
      </div>
    </section>
  )
}
