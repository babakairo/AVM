import type { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  Box, 
  Truck, 
  Ship, 
  Shield, 
  Package,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services | AVM Packaging and Crating LLC',
  description: 'Custom crating, on-site packaging, container loading, vacuum packaging, and heat-treated crates for international shipping in Metro-Atlanta.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: Box,
      title: 'Custom Crating',
      description: 'Every item is unique, and so are our crates. We design and build custom wooden crates tailored to your specific dimensions and requirements.',
      benefits: [
        'Exact fit for your items',
        'Multiple wood grades available',
        'Reinforced for heavy loads',
        'Cost-effective solutions',
      ],
      useCases: [
        'Machinery and equipment',
        'Large furniture pieces',
        'Artwork and sculptures',
        'Industrial components',
      ],
    },
    {
      icon: Truck,
      title: 'On-Site Packaging',
      description: 'We bring our expertise directly to your location. Our mobile service saves you time and ensures your items are packed professionally without the hassle of transport.',
      benefits: [
        'No need to move heavy items',
        'Convenient scheduling',
        'Professional team comes to you',
        'All materials provided',
      ],
      useCases: [
        'Factory floor packaging',
        'Warehouse shipping prep',
        'Residential moving',
        'Last-minute shipments',
      ],
    },
    {
      icon: Ship,
      title: 'Container Loading',
      description: 'Maximize space and minimize damage with our expert container loading services. We ensure your items are secured properly for ocean transport.',
      benefits: [
        'Maximize container space',
        'Proper weight distribution',
        'Secure blocking and bracing',
        'Documentation assistance',
      ],
      useCases: [
        'International exports',
        'Bulk shipments',
        'Mixed cargo loading',
        'Fragile item transport',
      ],
    },
    {
      icon: Shield,
      title: 'Vacuum Packaging',
      description: 'Protect sensitive surfaces and high-value items from moisture, dust, and scratches with our professional vacuum packaging service.',
      benefits: [
        'Moisture protection',
        'Dust and dirt barrier',
        'Scratch prevention',
        'Long-term storage ready',
      ],
      useCases: [
        'Polished metal surfaces',
        'Glass and mirrors',
        'Electronics',
        'High-value collectibles',
      ],
    },
    {
      icon: Package,
      title: 'Heat-Treated Crates',
      description: 'ISPM-15 compliant heat-treated crates for international shipping. All wood is properly treated and certified for export to meet global regulations.',
      benefits: [
        'ISPM-15 certified',
        'Pest-free guarantee',
        'Global customs compliance',
        'Proper documentation',
      ],
      useCases: [
        'International exports',
        'European Union shipments',
        'Asian market exports',
        'Regulated industries',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-amber-50/30 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Comprehensive crating and packaging solutions designed to protect your valuable items during shipping and storage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className={`flex flex-col gap-8 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <Icon className="h-12 w-12 text-amber-700" />
                      <h2 className="text-3xl font-bold text-gray-900">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">
                          Key Benefits
                        </h3>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">
                          Common Use Cases
                        </h3>
                        <ul className="space-y-2">
                          {service.useCases.map((useCase, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-amber-700 mt-0.5">•</span>
                              <span className="text-gray-700">{useCase}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-center">
                    <div className="w-full h-64 lg:h-96 rounded-lg overflow-hidden">
                      <img 
                        src={`/images/crate-${(index % 4) + 1}.jpg`} 
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="border-2 border-amber-700">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Need a Custom Solution?</CardTitle>
              <CardDescription className="text-lg">
                Every project is unique. Contact us to discuss your specific packaging needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="w-full sm:w-auto bg-amber-700 hover:bg-amber-800">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
