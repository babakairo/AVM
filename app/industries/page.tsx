import type { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Industries We Serve | AVM Packaging and Crating LLC',
  description: 'Crating and packaging services for manufacturing, export, moving, and high-value items in Metro-Atlanta.',
}

export default function IndustriesPage() {
  const industries = [
    {
      icon: '🏭',
      title: 'Manufacturing',
      description: 'Protect your industrial equipment, machinery, and parts with custom crates built to withstand rigorous shipping conditions.',
      challenges: [
        'Heavy machinery transport',
        'Precision equipment protection',
        'Just-in-time delivery requirements',
        'Irregular shapes and sizes',
      ],
      solutions: [
        'Reinforced crates for heavy loads',
        'Custom internal blocking and bracing',
        'On-site packaging at your facility',
        'Fast turnaround times',
      ],
    },
    {
      icon: '🌍',
      title: 'Export / International Shipping',
      description: 'Navigate international shipping regulations with confidence. Our ISPM-15 compliant heat-treated crates meet global standards.',
      challenges: [
        'ISPM-15 compliance requirements',
        'Ocean freight damage prevention',
        'Customs documentation',
        'Long transit times',
      ],
      solutions: [
        'Heat-treated, certified wood crates',
        'Container loading expertise',
        'Moisture barrier protection',
        'Proper export documentation',
      ],
    },
    {
      icon: '🏠',
      title: 'Moving / Residential',
      description: 'Whether you\'re relocating across the country or moving treasured items, we provide professional crating for residential clients.',
      challenges: [
        'Fragile family heirlooms',
        'Large furniture pieces',
        'Piano and instrument transport',
        'Limited time for preparation',
      ],
      solutions: [
        'On-site packing at your home',
        'Custom crates for odd-sized items',
        'Vacuum packaging for delicate surfaces',
        'Flexible scheduling',
      ],
    },
    {
      icon: '💎',
      title: 'High-Value Items',
      description: 'Artwork, antiques, electronics, and other valuable items require special care. We provide museum-quality protection.',
      challenges: [
        'Irreplaceable items at risk',
        'Temperature-sensitive materials',
        'Surface scratch prevention',
        'Insurance requirements',
      ],
      solutions: [
        'Climate-controlled packaging options',
        'Vacuum seal protection',
        'Multi-layer cushioning systems',
        'Photo documentation for insurance',
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Industries We Serve
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Specialized crating and packaging solutions tailored to your industry\'s unique requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:gap-16">
            {industries.map((industry, index) => (
              <Card key={index} className="border-2 hover:border-amber-700 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="text-5xl">{industry.icon}</div>
                    <CardTitle className="text-3xl">{industry.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Common Challenges
                      </h3>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-red-500 mt-1">⚠️</span>
                            <span className="text-gray-700">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Our Solutions
                      </h3>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-600 mt-1">✓</span>
                            <span className="text-gray-700">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Do you provide heat-treated crates?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Yes! All of our heat-treated crates are ISPM-15 compliant, which is required for 
                    international shipping to prevent the spread of invasive species. We provide proper 
                    certification and stamps with every heat-treated crate.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How long does the crating process take?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Timeline depends on the complexity and size of your items. Simple crating can often 
                    be completed same-day or next-day. Custom crates for large machinery may take 2-5 
                    business days. We always work with your schedule and can accommodate rush orders.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Do you come on-site to pack items?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Absolutely! On-site packaging is one of our specialties. We bring all necessary 
                    materials and equipment directly to your location — whether it\'s a factory floor, 
                    warehouse, or residence — throughout Metro-Atlanta.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Can you load shipping containers?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Yes, we provide expert container loading services. Our team knows how to maximize 
                    space, distribute weight properly, and secure cargo to prevent shifting during ocean 
                    transport. We can also help with documentation and container inspection.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What areas do you serve?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We serve the entire Metro-Atlanta area from our base in Locust Grove, GA. This 
                    includes Atlanta, Marietta, Alpharetta, McDonough, Griffin, and surrounding cities. 
                    Contact us to confirm service to your specific location.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get a free quote tailored to your industry and specific needs.
            </p>
            <Link href="/quote">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
                Request Your Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
