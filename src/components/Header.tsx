'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'INDUSTRIES', href: '/industries' },
  { name: 'PROCESS', href: '/process' },
  { name: 'SUSTAINABILITY', href: '/sustainability' },
  { name: 'NEWS', href: '/blog' },
//   { name: 'CONTACT', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      {/* Disclaimer Banner */}
      <div className="bg-red-600 text-white text-center py-2 text-sm">
        <span className="font-bold">DISCLAIMER:</span> BEWARE OF SCAMMERS | OUR VERIFIED WHATSAPP: +243966344357
      </div>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Image */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.png"
                alt="Huanqiu Precious Metal Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div> 
                <span className="font-bold text-base md:text-base">HUANQIU</span>
                <span className="text-yellow-500 font-bold text-base md:text-base"> PRECIOUS METAL</span>
              </div>
              <p className="text-xs text-gray-400">Trading Limited - Kampala, Uganda</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-yellow-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Request Assay Button */}
          <div className="hidden lg:block">
            <Link 
            href={"/contact"}
              // onClick={() => document.getElementById('request-assay-modal')?.classList.remove('hidden')}
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-yellow-500 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                 
            href={"/contact"}
                className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-center"
              >
                CONTACT US
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}