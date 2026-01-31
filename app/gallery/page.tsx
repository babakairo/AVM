import type { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gallery | AVM Packaging and Crating LLC',
  description: 'View our custom wooden crates and professional packaging work in Metro-Atlanta.',
}

export default function GalleryPage() {
  const images = [
    {
      src: '/images/crate-1.jpg',
      title: 'Expendable Export Crate',
      description: 'Heavy-duty wooden export crate with reinforced corners'
    },
    {
      src: '/images/crate-2.jpg',
      title: 'Custom Pallet Box',
      description: 'ISPM-15 exempt support dunnage for international shipping'
    },
    {
      src: '/images/crate-3.jpg',
      title: 'CNC Precision Components',
      description: 'Custom design with precise machining in plywood'
    },
    {
      src: '/images/crate-4.jpg',
      title: 'Collapsible Crate System',
      description: '18mm plywood export crate with clipped system'
    },
    {
      src: '/images/export-crate.jpg',
      title: 'Industrial Equipment Crating',
      description: 'Customized foam tray support for sensitive equipment'
    },
    {
      src: '/images/design-drawing.jpg',
      title: 'Custom CAD Design',
      description: 'Precision engineering and attention to detail'
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Work Gallery
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Professional custom crating and packaging solutions delivered across Metro-Atlanta
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg border-2 border-gray-200 hover:border-amber-700 transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Our Crates Stand Out
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border">
                <div className="text-3xl mb-3">🔨</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Custom Engineering
                </h3>
                <p className="text-gray-700 text-sm">
                  Every crate is designed to exact specifications using modern CAD software
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <div className="text-3xl mb-3">🌍</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  ISPM-15 Certified
                </h3>
                <p className="text-gray-700 text-sm">
                  Heat-treated and certified for international shipping compliance
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Zero Damage
                </h3>
                <p className="text-gray-700 text-sm">
                  Our priority is to ship your products with NO DAMAGE guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-amber-700 to-orange-700 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">
              Ready for Expert Crating?
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Get a custom quote for your packaging needs today
            </p>
            <Link href="/quote">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Request a Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
