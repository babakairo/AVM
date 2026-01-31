import type { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | AVM Packaging and Crating LLC',
  description: 'Learn about AVM Packaging and Crating LLC - your trusted partner for custom crating and packaging in Metro-Atlanta.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About AVM Packaging and Crating LLC
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Your trusted partner for professional crating and packaging solutions in Metro-Atlanta.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At AVM Packaging and Crating LLC, we&apos;re dedicated to protecting what matters most to 
              you. Whether it&apos;s industrial machinery, priceless artwork, or household treasures, we 
              bring expert craftsmanship and reliable service directly to your doorstep.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Based in Locust Grove, Georgia, we serve the entire Metro-Atlanta area with mobile, 
              on-site crating and packaging services. Our team understands that every shipment is 
              unique, and we&apos;re committed to providing customized solutions that ensure your items 
              arrive safely at their destination.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose AVM Packaging?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <MapPin className="h-12 w-12 text-amber-700 mb-2" />
                <CardTitle>Mobile Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We come to you! Our mobile service saves you time and hassle. No need to transport 
                  heavy or fragile items — we bring our expertise and materials to your location.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-amber-700 mb-2" />
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Our experienced professionals know how to handle everything from delicate antiques 
                  to heavy industrial equipment. We&apos;re trained in the latest packing techniques and safety standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-amber-700 mb-2" />
                <CardTitle>Quality Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We use only high-quality wood and packing materials. Our heat-treated crates meet 
                  ISPM-15 international standards, ensuring your shipments clear customs without issues.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Service Area
            </h2>
            <Card className="border-2 border-amber-700">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="h-8 w-8 text-amber-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Metro-Atlanta Region
                    </h3>
                    <p className="text-gray-700 mb-4">
                      <strong>Principal Office:</strong><br />
                      429 Grove Park Dr<br />
                      Locust Grove, GA 30248
                    </p>
                    <p className="text-gray-700">
                      We proudly serve the entire Metro-Atlanta area, including but not limited to:
                    </p>
                    <ul className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
                      <li>• Atlanta</li>
                      <li>• Marietta</li>
                      <li>• Alpharetta</li>
                      <li>• McDonough</li>
                      <li>• Griffin</li>
                      <li>• Stockbridge</li>
                      <li>• Jonesboro</li>
                      <li>• Newnan</li>
                      <li>• Fayetteville</li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-600">
                      Don&apos;t see your city listed? Contact us — we may still be able to serve your location!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Commitment to You
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  ⚡ Fast Response
                </h3>
                <p className="text-gray-700">
                  We know your time is valuable. We respond to quote requests within hours, not days, 
                  and work with your schedule to complete projects on time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  🛡️ Safe & Secure
                </h3>
                <p className="text-gray-700">
                  Your items&apos; safety is our top priority. We use proven techniques and quality materials 
                  to ensure maximum protection during transport and storage.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  💰 Fair Pricing
                </h3>
                <p className="text-gray-700">
                  We provide transparent, competitive pricing with no hidden fees. Every quote is 
                  detailed and tailored to your specific needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  🌍 Export Ready
                </h3>
                <p className="text-gray-700">
                  Our heat-treated crates meet international ISPM-15 standards, ensuring smooth customs 
                  clearance for your global shipments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
