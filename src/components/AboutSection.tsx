'use client'

import Image from 'next/image'
import { CheckCircle, Shield, Lock, Clock } from 'lucide-react'

export default function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Regulated',
      description: 'Fully licensed under Uganda\'s Ministry of Energy and Mineral Development.',
      color: 'text-yellow-500'
    },
    {
      icon: Lock,
      title: 'Confidential & Secure',
      description: 'Strict chain-of-custody and full confidentiality for all samples and results.',
      color: 'text-yellow-500'
    },
    {
      icon: Clock,
      title: '24–48 Hour Turnaround',
      description: 'Results in 24–48 hours, with expedited same-day service available.',
      color: 'text-yellow-500'
    }
  ]

  const methodologies = [
    'Fire Assay',
    'XRF Analysis',
    'ICP Spectrometry'
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold mb-6">
              ABOUT HUANQIU PRECIOUS METAL
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Precious Metal Trading
              <br />
              <span className="text-yellow-500">You Can Trust</span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              HUANQIU PRECIOUS METAL is East Africa's leading gold precious metal trading company, providing certified 
              precious metals testing to miners, exporters, jewellers, and investors across the region.
            </p>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our facility uses internationally recognised methodologies —{' '}
              <span className="font-semibold text-gray-900">Fire Assay, XRF, and ICP spectrometry</span> — 
              delivering results that meet global standards for gold trade and export documentation.
            </p>
            
            {/* Methodologies Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {methodologies.map((method) => (
                <span
                  key={method}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                >
                  {method}
                </span>
              ))}
            </div>
            
            {/* CTA Button */}
            <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              LEARN MORE ABOUT PAU
            </button>
          </div>
          
          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[400px] md:h-[500px]">
                <Image
                  src="/gold3.jpg"
                  alt="HUANQIU PRECIOUS METAL Laboratory"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-500 rounded-full opacity-10 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-yellow-500 rounded-full opacity-10 blur-2xl" />
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-lg mb-4">
                <feature.icon className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}