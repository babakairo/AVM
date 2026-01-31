'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-xl font-bold text-primary">
            AVM <span className="text-amber-700">Packaging</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/quote">
            <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
              Request a Quote
            </Button>
          </Link>
          <a href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE || ''}`}>
            <Button variant="outline" size="lg" className="gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-medium text-gray-700 hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/quote" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-amber-700 hover:bg-amber-800">
                Request a Quote
              </Button>
            </Link>
            <a href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE || ''}`}>
              <Button variant="outline" className="w-full gap-2">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
