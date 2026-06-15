'use client'

export function FeaturedWork() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Project {i}</h3>
              <p className="text-gray-600">Exceptional event management and planning</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
