import { About, Experience, Footer, Gallery, Hero, Projects, Skills } from '@/components/home'

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-background">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <About />
      <Gallery />
      <Footer />
    </div>
  )
}
