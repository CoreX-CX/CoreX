import Services from '../../components/Services'

export default function ServicesPage() {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-100">Services</h1>
        <p className="mt-3 text-slate-400">Explore the services we provide to help your business thrive.</p>

        <div className="mt-6">
          <Services />
        </div>
      </div>
    </div>
  )
}
