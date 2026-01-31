import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              AVM <span className="text-amber-500">Packaging</span>
            </h3>
            <p className="text-sm mb-4">
              Professional custom crating and packaging services in Metro-Atlanta. 
              Reliable, mobile, on-site solutions for all your shipping needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-amber-500">Services</Link></li>
              <li><Link href="/industries" className="hover:text-amber-500">Industries</Link></li>
              <li><Link href="/gallery" className="hover:text-amber-500">Gallery</Link></li>
              <li><Link href="/quote" className="hover:text-amber-500">Request a Quote</Link></li>
              <li><Link href="/about" className="hover:text-amber-500">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Custom Crating</li>
              <li>On-Site Packaging</li>
              <li>Container Loading</li>
              <li>Vacuum Packaging</li>
              <li>Heat-Treated Crates</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span>429 Grove Park Dr<br />Locust Grove, GA 30248</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a 
                  href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE || ''}`}
                  className="hover:text-amber-500"
                >
                  {process.env.NEXT_PUBLIC_COMPANY_PHONE || '(XXX) XXX-XXXX'}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a 
                  href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL || ''}`}
                  className="hover:text-amber-500"
                >
                  {process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'info@avmpackaging.com'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} AVM Packaging and Crating LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
