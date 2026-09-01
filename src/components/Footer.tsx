import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'How It Works', href: '/process' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'News & Insights', href: '/news' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
{ name: 'Ethical Gold Sourcing', href: '/services/ethical-gold-sourcing' },
  { name: 'Cross-Border Trading', href: '/services/cross-border-trading' },
  { name: 'International Export', href: '/services/international-export' },
  { name: 'Fair Trade Assurance', href: '/services/fair-trade-assurance' },
  { name: 'Documentation & Compliance', href: '/services/documentation-compliance' },
  { name: 'Secure Logistics', href: '/services/secure-logistics' }
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">QUICK LINKS</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">SERVICES</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">CONTACT US</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Kololo IV, Kampala, Uganda.<br />
                  P.O Box 7361
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+243 966 344357</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@huanqiupreciousmetal.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Mon–Fri: 8:00am – 6:00pm</p>
                  <p>Saturday: 9:00am – 2:00pm</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Brand & Social Section */}
          <div>
            <div className="mb-6">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.png"
                    alt="Huanqiu Precious Metal Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="font-bold text-sm">HUANQIU</span>
                  <span className="text-yellow-500 font-bold text-sm">{" "}PRECIOUS METAL</span>
                  <p className="text-xs text-gray-400">Trading Limited - Kampala, Uganda</p>
                </div>
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                Uganda's Most Trusted Precious Metal Trading Company, delivering certified, precise gold testing and precious metals analysis.
              </p>
            </div>
            
            {/* Social Media Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-gray-300">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-yellow-500 p-2 rounded-full transition-colors group"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="mt-6">
              <a
                href="https://wa.me/243966344357"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">WhatsApp: +243 966 344357</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Banner */}
      <div className="bg-red-600 text-white text-center py-2 text-sm">
        <span className="font-bold">DISCLAIMER:</span> BEWARE OF SCAMMERS | OUR VERIFIED WHATSAPP: +243966344357
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Huanqiu Precious Metal Trading Limited - Kampala, Uganda. All rights reserved.
            </p>
                        <div className="flex space-x-4 text-xs text-gray-500">
            <Link href="/privacy-policy" className="hover:text-yellow-500 transition">
              Privacy Policy
            </Link> <span>|</span>
            <Link href="/cookie-policy" className="hover:text-yellow-500 transition">
              Cookie Policy
            </Link> <span>|</span>
            <Link href="/terms-and-conditions" className="hover:text-yellow-500 transition">
              Terms & Conditions
            </Link>
              <span>|</span>
              <Link href="/sitemap" className="hover:text-yellow-500 transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}