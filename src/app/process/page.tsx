'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  MapPin,
  ClipboardCheck,
  Scale,
  FileText,
  Truck,
  Plane,
  Package,
  HandshakeIcon,
  Shield,
  Users,
  Clock,
  Award,
  ChevronRight,
  Search,
  DollarSign,
  Globe,
  Lock,
  Heart
} from 'lucide-react'

export default function ProcessPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const processSteps = [
    {
      step: '01',
      title: 'Sourcing & Identification',
      description: 'We identify and connect with artisanal miners across East Africa — Uganda, DRC, Tanzania, Rwanda, Burundi, and Kenya — who have high-quality gold deposits.',
      detailedDescription: 'Our team travels directly to mining communities, building relationships with local miners and cooperatives. We assess the quality and quantity of available gold, ensuring it meets our sourcing standards.',
      icon: MapPin,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50',
      duration: '1-3 days',
      image: '/process-sourcing.jpg'
    },
    {
      step: '02',
      title: 'Verification & Assessment',
      description: 'Each batch of gold is carefully verified for authenticity, purity, and quality using professional assessment methods.',
      detailedDescription: 'Our trained specialists conduct initial assessments including visual inspection, density testing, and preliminary purity analysis. We verify that the gold meets our minimum quality standards before proceeding.',
      icon: Search,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      duration: '2-4 hours',
      image: '/process-verification.webp'
    },
    {
      step: '03',
      title: 'Fair Valuation & Pricing',
      description: 'We provide transparent, fair market pricing based on current international gold rates and verified purity levels.',
      detailedDescription: 'Using real-time international market rates, we calculate a fair price per gram based on the verified purity. Our pricing model eliminates exploitative middlemen, ensuring miners receive 30-40% more than traditional market rates.',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      duration: '1-2 hours',
      image: '/process-pricing.webp'
    },
    {
      step: '04',
      title: 'Weighing & Documentation',
      description: 'Precise weighing and comprehensive documentation of all transactions with full transparency.',
      detailedDescription: 'All gold is weighed using certified, calibrated scales in the presence of the seller. Complete documentation includes weight certificates, purity reports, origin declarations, and transaction records — all provided to the seller.',
      icon: Scale,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      duration: '1-2 hours',
      image: '/process-weighing.avif'
    },
    {
      step: '05',
      title: 'Payment Processing',
      description: 'Immediate and secure payment to miners via their preferred method — mobile money, bank transfer, or cash.',
      detailedDescription: 'We process payments immediately upon transaction completion. Miners can choose from multiple payment options including mobile money, bank transfers, or secure cash payments. Our goal is to ensure miners receive their money quickly and securely.',
      icon: HandshakeIcon,
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50',
      duration: 'Same day',
      image: '/freight_payment_main_0913.jpg'
    },
    {
      step: '06',
      title: 'Export Documentation',
      description: 'Preparation of all required export permits, certificates of origin, and customs documentation.',
      detailedDescription: 'Our compliance team prepares all necessary documentation for legal export, including export permits, certificates of origin, customs declarations, and any country-specific requirements for the destination market.',
      icon: FileText,
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-red-50',
      duration: '24-48 hours',
      image: '/gd-ultraspeed-ltd-thumb2.jpg'
    },
    {
      step: '07',
      title: 'Secure Logistics',
      description: 'End-to-end secure transportation of gold from source to destination with full chain-of-custody.',
      detailedDescription: 'We arrange secure, insured transportation using armored vehicles and bonded couriers. Every transfer is tracked with GPS and documented with chain-of-custody records, ensuring the gold\'s security from pickup to delivery.',
      icon: Truck,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      duration: '2-7 days',
      image: '/gold1.jpg'
    },
    {
      step: '08',
      title: 'International Export',
      description: 'Shipping gold to international buyers with full compliance and real-time tracking.',
      detailedDescription: 'Gold is prepared for international shipment according to destination country requirements. We work with trusted international freight partners to ensure safe, timely delivery to buyers worldwide.',
      icon: Plane,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50',
      duration: '3-10 days',
      image: '/gold3.jpg'
    },
    {
      step: '09',
      title: 'Final Delivery & Settlement',
      description: 'Secure delivery to buyer with final verification and settlement.',
      detailedDescription: 'Upon delivery, the buyer verifies the gold against documentation. Final settlement is processed, and all transaction records are archived. Both parties receive complete transaction documentation.',
      icon: Package,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50',
      duration: '24 hours',
      image: '/jewelry-manufacturing-process.jpg'
    }
  ]

  const qualityChecks = [
    {
      icon: Shield,
      title: 'Purity Verification',
      description: 'Multi-point verification of gold purity using professional methods'
    },
    {
      icon: ClipboardCheck,
      title: 'Origin Documentation',
      description: 'Complete chain-of-custody and origin certification'
    },
    {
      icon: Lock,
      title: 'Security Protocols',
      description: 'End-to-end security with GPS tracking and armored transport'
    },
    {
      icon: Users,
      title: 'Third-Party Oversight',
      description: 'Independent verification at key transaction points'
    }
  ]

  const certifications = [
    { name: 'Licensed Gold Trader', issuer: 'Uganda Ministry of Energy', icon: Shield },
    { name: 'Export Certified', issuer: 'Uganda Revenue Authority', icon: Globe },
    { name: 'OECD Compliant', issuer: 'Conflict-Free Sourcing', icon: Award },
    { name: 'Fair Trade Partner', issuer: 'Artisanal Mining Association', icon: Heart }
  ]

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, gold 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="text-yellow-500">Process</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            A transparent, ethical, and efficient process that ensures fair value for miners and 
            quality assurance for buyers — from mine to market.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              From Mine to <span className="text-yellow-500">Market</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive 9-step process ensures transparency, fairness, and quality at every stage of the trading journey.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-yellow-200 hidden md:block"></div>

            {processSteps.map((step, index) => (
              <div
                key={step.step}
                ref={ref}
                // initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                // animate={inView ? { opacity: 1, x: 0 } : {}}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%] md:ml-auto'}`}
              >
                <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6`}>
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center shadow-lg border-4 border-white`}>
                      <step.icon className="w-8 h-8 text-yellow-600" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="grid md:grid-cols-2">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-bold text-yellow-500">Step {step.step}</span>
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                            ⏱️ {step.duration}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 mb-3">{step.description}</p>
                        <p className="text-gray-500 text-sm">{step.detailedDescription}</p>
                      </div>
                      <div className="relative h-48 md:h-auto">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-20`} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quality <span className="text-yellow-500">Assurance</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Multiple quality checks throughout the process ensure integrity, accuracy, and trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {qualityChecks.map((check, index) => (
              <div
                key={index}
                // initial={{ opacity: 0, y: 30 }}
                // animate={inView ? { opacity: 1, y: 0 } : {}}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <check.icon className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{check.title}</h3>
                <p className="text-gray-600 text-sm">{check.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 text-center mb-6">Our Certifications & Compliance</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                //   initial={{ opacity: 0, scale: 0.9 }}
                //   animate={inView ? { opacity: 1, scale: 1 } : {}}
                //   transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <cert.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="font-semibold text-gray-900 text-sm">{cert.name}</p>
                  <p className="text-xs text-gray-500">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Operating <span className="text-yellow-500">Principles</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Core values that guide every transaction and relationship.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Ethical First',
                description: 'Every transaction prioritizes fair treatment of miners and responsible sourcing practices.',
                color: 'text-red-500'
              },
              {
                icon: Scale,
                title: 'Total Transparency',
                description: 'Open books, clear pricing, and full documentation for all parties involved.',
                color: 'text-blue-500'
              },
              {
                icon: Clock,
                title: 'Fast & Reliable',
                description: 'Quick turnaround times without compromising on quality or compliance.',
                color: 'text-green-500'
              },
              {
                icon: Shield,
                title: 'Secure Handling',
                description: 'End-to-end security protocols protecting gold from source to destination.',
                color: 'text-purple-500'
              },
              {
                icon: Users,
                title: 'Community Focus',
                description: 'Building lasting relationships with mining communities across East Africa.',
                color: 'text-orange-500'
              },
              {
                icon: Globe,
                title: 'Global Standards',
                description: 'Meeting international requirements for quality, documentation, and compliance.',
                color: 'text-teal-500'
              }
            ].map((principle, index) => (
              <div
                key={index}
                // initial={{ opacity: 0, y: 30 }}
                // animate={inView ? { opacity: 1, y: 0 } : {}}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <principle.icon className={`w-10 h-10 ${principle.color} mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Summary */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              End-to-End <span className="text-yellow-500">Timeline</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From initial contact to final delivery — our efficient process gets results quickly.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500">Day 1-3</div>
              <div className="text-sm text-gray-300">Sourcing & Verification</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500">Day 1</div>
              <div className="text-sm text-gray-300">Valuation & Payment</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500">Day 2-4</div>
              <div className="text-sm text-gray-300">Documentation & Export Prep</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-500">Day 5-15</div>
              <div className="text-sm text-gray-300">Logistics & Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common <span className="text-yellow-500">Questions</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'How long does the process take from sourcing to delivery?',
                a: 'Typically 5-15 days depending on the destination. Local transactions are faster, while international exports require additional time for documentation and shipping.'
              },
              {
                q: 'How do you ensure fair pricing for miners?',
                a: 'We use real-time international gold market rates and provide transparent pricing calculations. Miners receive 30-40% more than traditional market rates.'
              },
              {
                q: 'What documentation do you provide?',
                a: 'Complete documentation including weight certificates, purity reports, certificates of origin, export permits, customs declarations, and chain-of-custody records.'
              },
              {
                q: 'Is the gold ethically sourced?',
                a: 'Yes. We source directly from artisanal miners, ensure conflict-free certification, and comply with OECD due diligence guidelines.'
              },
              {
                q: 'Do you buy gold from individual miners?',
                a: 'Yes, we work directly with individual artisanal miners, small-scale operations, and mining cooperatives across East Africa.'
              },
              {
                q: 'What payment methods do you offer?',
                a: 'Miners can choose from mobile money, bank transfers, or secure cash payments. International buyers have additional options including wire transfers and letters of credit.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                // initial={{ opacity: 0, y: 20 }}
                // animate={inView ? { opacity: 1, y: 0 } : {}}
                // transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
            Whether you're a miner looking for fair prices or a buyer seeking quality East African gold, 
            our transparent process ensures a smooth experience for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Start the Process
            </Link>
            <button 
              onClick={() => document.getElementById('request-assay-modal')?.classList.remove('hidden')}
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Request Process Details
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}