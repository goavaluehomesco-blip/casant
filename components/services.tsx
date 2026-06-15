'use client'

export function Services() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Events', 'Corporate', 'Weddings'].map((service) => (
            <div key={service} className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">Professional {service.toLowerCase()} management</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
