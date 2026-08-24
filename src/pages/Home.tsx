import { Experience, Hero, Projects } from '@/components/home'

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-background">
      <Hero />
      <Experience />
      <Projects />
    </div>
  )
}
