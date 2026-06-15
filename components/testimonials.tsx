'use client'

export function Testimonials() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">\"Exceptional service and attention to detail.\"</p>
              <p className="font-semibold">Client {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
