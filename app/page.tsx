import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import RegulationsSection from "@/components/regulations-section"
import ContinuousBackground from "@/components/continuous-background"

export default function Home() {
  return (
    <ContinuousBackground>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <HeroSection />

        <section id="about" className="w-full">
          <AboutSection />
        </section>

        <section id="services" className="w-full">
          <ServicesSection />
        </section>

        <section id="projects" className="w-full">
          <ProjectsSection />
        </section>

        <section id="regulations" className="w-full">
          <RegulationsSection />
        </section>

        <section id="contact" className="w-full">
          <ContactSection />
        </section>
      </main>
    </ContinuousBackground>
  )
}
