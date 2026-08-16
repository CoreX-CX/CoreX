import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChoose from '../components/WhyChoose'
import ContactCTA from '../components/ContactCTA'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <main className="-mt-12">
        <section className="max-w-6xl mx-auto px-6">
          <Services />
          <WhyChoose />
        </section>

        <ContactCTA />
      </main>

      <Footer />
    </div>
  )
}
