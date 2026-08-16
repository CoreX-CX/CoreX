export default function StorePage() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-slate-100">Store</h2>
        <p className="mt-3 text-slate-300">Store placeholder — add catalog, filters, and product pages here.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl bg-zinc-900/50 border border-zinc-800 p-4">
              <div className="h-36 bg-gradient-to-br from-blue-800/30 via-purple-700/20 to-transparent rounded-md" />
              <h3 className="mt-3 text-lg font-medium text-slate-100">Product {i}</h3>
              <p className="mt-1 text-sm text-slate-300">Short product description</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
