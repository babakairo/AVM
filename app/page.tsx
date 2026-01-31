import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Box, 
  Truck, 
  Ship, 
  Shield, 
  CheckCircle, 
  Clock, 
  MapPin,
  Star,
  Package
} from 'lucide-react'

export default function Home() {
  const services = [
    {
      icon: Box,
      title: 'Custom Crating',
      description: 'Tailored wooden crates designed for your unique items and dimensions.',
    },
    {
      icon: Truck,
      title: 'On-Site Packaging',
      description: 'We come to your location for convenient, professional packaging services.',
    },
    {
      icon: Ship,
      title: 'Container Loading',
      description: 'Expert ocean transport container loading and securing.',
    },
    {
      icon: Shield,
      title: 'Vacuum Packaging',
      description: 'Protection for sensitive surfaces and high-value items.',
    },
    {
      icon: Package,
      title: 'Heat-Treated Crates',
      description: 'ISPM-15 compliant crates for international shipping requirements.',
    },
  ]

  const howItWorks = [
    {
      step: '1',
      title: 'Request a Quote',
      description: 'Fill out our quick form or give us a call with your packaging needs.',
    },
    {
      step: '2',
      title: 'Get Your Quote',
      description: 'We respond within hours with a detailed quote tailored to your requirements.',
    },
    {
      step: '3',
      title: 'We Pack & Ship',
      description: 'Our team arrives on-site or at our facility to expertly crate your items.',
    },
  ]

  const industries = [
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Export/International', icon: '🌍' },
    { name: 'Moving/Residential', icon: '🏠' },
    { name: 'High-Value Items', icon: '💎' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20 lg:py-32 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/images/crate-1.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Custom Wooden Crates & On-Site Packaging in{' '}
              <span className="text-amber-700">Metro-Atlanta</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600">
              Professional crating and packaging solutions for manufacturers, exporters, 
              and residential clients. Mobile service that comes to you.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/quote">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 bg-amber-700 hover:bg-amber-800">
                  Request a Free Quote
                </Button>
              </Link>
              <a href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE || ''}`}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-white">
                  Call Now
                </Button>
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-gray-600">
              <MapPin className="h-5 w-5 text-amber-700" />
              <span>Serving Metro-Atlanta | Based in Locust Grove, GA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive crating and packaging solutions for every need
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-2 hover:border-amber-700 transition-colors">
                  <CardHeader>
                    <Icon className="h-10 w-10 text-amber-700 mb-2" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Simple, fast, and professional — just three steps
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-700 text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
            <div className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Fast Response</h3>
              <p className="mt-2 text-gray-600">Quote requests answered within hours</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Safe & Secure</h3>
              <p className="mt-2 text-gray-600">Expert packing for maximum protection</p>
            </div>
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Export Ready</h3>
              <p className="mt-2 text-gray-600">Heat-treated, ISPM-15 compliant crates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg border-2 hover:border-amber-700 transition-colors"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 text-center">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/industries">
              <Button variant="outline" size="lg">
                Learn More About Industries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Work
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional crating and packaging in action
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/images/crate-1.jpg" alt="Wooden export crate" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/images/crate-2.jpg" alt="Custom pallet box" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/images/crate-3.jpg" alt="Bespoke packaging solution" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img src="/images/crate-4.jpg" alt="Collapsible crate system" className="w-full h-full object-cover hover:scale-105 transition-transform" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/gallery">
              <Button variant="outline" size="lg">
                View Full Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-700 to-orange-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Protect Your Shipment?
          </h2>
          <p className="mt-4 text-xl text-amber-100">
            Get a free quote today — fast response guaranteed
          </p>
          <div className="mt-10">
            <Link href="/quote">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Your Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
