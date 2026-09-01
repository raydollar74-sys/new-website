'use client'

import Image from 'next/image'
import { Shield, Lock, Clock, CheckCircle } from 'lucide-react'

export default function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Regulated',
      description: 'Fully licensed under Uganda\'s Ministry of Energy and Mineral Development.',
    },
    {
      icon: Lock,
      title: 'Confidential & Secure',
      description: 'Strict chain-of-custody and full confidentiality for all samples and results.',
    },
    {
      icon: Clock,
      title: '24–48 Hour Turnaround',
      description: 'Results in 24–48 hours, with expedited same-day service available.',
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wide">
            About Huanqiu Precious Metal
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Precision Testing <span className="text-yellow-500">You Can Trust</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[400px] md:h-[450px]">
                <Image
                  src="/about-lab.jpg"
                  alt="Huanqiu Precious Metal Laboratory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-4 border-yellow-500 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-500 rounded-2xl -z-10 opacity-20" />
          </div>
          
          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Huanqiu Precious Metal is East Africa's leading gold assay laboratory, providing certified 
              precious metals testing to miners, exporters, jewellers, and investors across the region.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our facility uses internationally recognised methodologies —{' '}
              <span className="font-semibold text-gray-900">Fire Assay, XRF, and ICP spectrometry</span> — 
              delivering results that meet global standards for gold trade and export documentation.
            </p>
            
            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-yellow-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md inline-flex items-center gap-2">
              LEARN MORE ABOUT PAU
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}