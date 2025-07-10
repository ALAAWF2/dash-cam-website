
'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, X, Shield, FileText, Eye } from 'lucide-react'

const comparisonData = [
  { feature: '4K Ultra HD Recording', dashSham: true, others: false },
  { feature: '170° Wide Angle View', dashSham: true, others: 'Limited' },
  { feature: 'Advanced Night Vision', dashSham: true, others: 'Basic' },
  { feature: 'Motion Detection', dashSham: true, others: false },
  { feature: 'Loop Recording', dashSham: true, others: true },
  { feature: '2 Year Warranty', dashSham: true, others: '6 months' },
  { feature: 'Professional Support', dashSham: true, others: false },
  { feature: '32GB SD Card Included', dashSham: true, others: false }
]

const benefits = [
  {
    icon: Shield,
    title: 'Ultimate Security',
    description: 'Continuous monitoring and recording provides 24/7 protection for your vehicle, even when parked.',
    color: 'text-green-400'
  },
  {
    icon: FileText,
    title: 'Accident Evidence',
    description: 'High-quality video evidence protects you from false claims and ensures fair insurance settlements.',
    color: 'text-blue-400'
  },
  {
    icon: Eye,
    title: 'Parking Surveillance',
    description: 'Motion detection activates recording when your car is parked, catching vandalism and break-ins.',
    color: 'text-purple-400'
  }
]

export default function WhyChoose() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-[#007BFF]">Dash-Sham</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't settle for inferior quality. See how our premium dash cam outperforms the competition.
          </p>
        </div>

        {/* Comparison Table */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
            {/* Table Header */}
            <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-[#007BFF]/10 to-[#007BFF]/5 border-b border-gray-700">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-400">Features</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#007BFF]">Dash-Sham</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-400">Other Brands</h3>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-700">
              {comparisonData.map((row, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-3 gap-4 p-4 hover:bg-[#007BFF]/5 transition-colors duration-300 ${
                    isVisible ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-white font-medium">{row.feature}</div>
                  <div className="text-center">
                    {row.dashSham === true ? (
                      <Check className="w-6 h-6 text-green-400 mx-auto" />
                    ) : (
                      <span className="text-[#007BFF] font-medium">{row.dashSham}</span>
                    )}
                  </div>
                  <div className="text-center">
                    {row.others === true ? (
                      <Check className="w-6 h-6 text-gray-400 mx-auto" />
                    ) : row.others === false ? (
                      <X className="w-6 h-6 text-red-400 mx-auto" />
                    ) : (
                      <span className="text-gray-400">{row.others}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Three Critical Benefits You Can't Ignore
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="group text-center p-8 bg-[#1a1a1a] rounded-2xl shadow-xl border border-gray-800 hover:border-[#007BFF]/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#007BFF]/20 to-[#007BFF]/5 rounded-2xl mb-6 group-hover:from-[#007BFF]/30 group-hover:to-[#007BFF]/10 transition-all duration-300">
                    <Icon className={`w-8 h-8 ${benefit.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-[#007BFF] transition-colors duration-300">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
