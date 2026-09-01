'use client'

import Image from 'next/image'
import { Heart, HandshakeIcon, TrendingUp, Users, Award, Globe, Target, Shield } from 'lucide-react'

export default function CommunityStory() {
  const storyPoints = [
    {
      title: 'From Villages to Global Markets',
      description: 'We travel to remote villages across East Africa, working directly with artisanal miners who have been mining gold for generations. These communities often lack access to fair markets and are exploited by middlemen.',
      icon: Globe
    },
    {
      title: 'Empowerment Through Education',
      description: 'We conduct workshops teaching miners about sustainable mining practices, safety protocols, and financial literacy. Knowledge is power, and we ensure our partners have the tools they need to succeed.',
      icon: Users
    },
    {
      title: 'Fair Compensation',
      description: 'By linking raw materials directly to final consumers, we eliminate exploitative middlemen. Miners receive 30-40% more than traditional market rates, allowing them to support their families and invest in their communities.',
      icon: HandshakeIcon
    },
    {
      title: 'Community Development',
      description: 'A portion of every transaction goes back to community projects — building schools, funding healthcare, and providing clean water access. Your purchase directly transforms lives.',
      icon: Heart
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold mb-4">
            Our Story of Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Every Piece of Gold Has a Story of{' '}
            <span className="text-yellow-500">Hope & Transformation</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        {/* Main Story Block */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="w-8 h-8 text-yellow-500" />
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                The gold we trade comes from the hands of hardworking men and women in 
                poverty-stricken communities across East Africa. These are not just miners — 
                they are mothers, fathers, and dreamers working to build better lives 
                for their families.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We believe that the true value of gold lies not in its market price, but 
                in the lives it touches. That's why we've made it our mission to sensitize, 
                support, and empower these communities by connecting their raw materials 
                directly to final consumers — ensuring they earn a dignified living from 
                their labor.
              </p>
              <div className="bg-yellow-50 p-6 rounded-xl mt-6 border border-yellow-200">
                <p className="text-gray-800 font-semibold mb-2">Our Commitment:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <span className="text-gray-700">100% ethically sourced gold</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <span className="text-gray-700">Fair trade practices with no exploitation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <span className="text-gray-700">Direct support to mining communities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-[450px]">
                <Image
                  src="/images/5.jpeg"
                  alt="Gold miners in Ugandan community"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-sm font-semibold">Local mining community</p>
                <p className="text-xs opacity-90">Supporting over 500 families through ethical trade</p>
              </div>
            </div>
          </div>
        </div>

        {/* Story Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {storyPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-yellow-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{point.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Impact Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500">500+</div>
            <div className="text-sm text-gray-600">Families Supported</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500">15+</div>
            <div className="text-sm text-gray-600">Communities Reached</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500">30-40%</div>
            <div className="text-sm text-gray-600">Higher Income for Miners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-500">100%</div>
            <div className="text-sm text-gray-600">Ethically Sourced</div>
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-12 text-center bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
          <p className="text-xl text-gray-800 italic max-w-3xl mx-auto">
            "When you choose Huanqiu Precious Metal, you're not just buying gold — you're 
            investing in communities, supporting families, and helping build a future where 
            every miner earns a fair and dignified living."
          </p>
          <div className="mt-6">
            <button className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-2 px-6 rounded-lg transition">
              Support Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}