
'use client'

import { useEffect, useRef, useState } from 'react'
import { Camera, Eye, Zap, RotateCcw, HardDrive, Shield } from 'lucide-react'

const features = [
  {
    icon: Camera,
    title: '4K Ultra HD Video',
    description: 'Crystal clear 4K resolution captures every detail with stunning clarity and precision.',
    color: 'text-blue-400'
  },
  {
    icon: Eye,
    title: '170° Wide Angle Lens',
    description: 'Ultra-wide viewing angle covers multiple lanes for comprehensive road coverage.',
    color: 'text-purple-400'
  },
  {
    icon: Shield,
    title: 'Advanced Night Vision',
    description: 'Superior low-light performance ensures clear recording even in complete darkness.',
    color: 'text-green-400'
  },
  {
    icon: Zap,
    title: 'Motion Detection',
    description: 'Intelligent motion sensor automatically starts recording when movement is detected.',
    color: 'text-yellow-400'
  },
  {
    icon: RotateCcw,
    title: 'Loop Recording',
    description: 'Seamless loop recording overwrites old files automatically, never missing a moment.',
    color: 'text-red-400'
  },
  {
    icon: HardDrive,
    title: '32GB SD Card Included',
    description: 'Premium SD card included, supports up to 128GB for extended recording time.',
    color: 'text-cyan-400'
  }
]

export default function Features() {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])
  const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleFeatures(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.2 }
    )

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Premium <span className="text-[#007BFF]">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every feature engineered for excellence. Experience the difference professional-grade technology makes.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isVisible = visibleFeatures.includes(index)

            return (
              <div
                key={index}
                ref={(el) => { featureRefs.current[index] = el }}
                data-index={index}
                className={`group bg-[#0d0d0d] rounded-2xl p-8 shadow-2xl border border-gray-800 hover:border-[#007BFF]/50 transition-all duration-500 hover:transform hover:scale-105 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-br from-[#007BFF]/20 to-[#007BFF]/5 group-hover:from-[#007BFF]/30 group-hover:to-[#007BFF]/10 transition-all duration-300`}>
                    <Icon className={`w-8 h-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#007BFF] transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-[#007BFF] to-transparent mt-6 group-hover:w-full transition-all duration-500" />
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-full text-[#007BFF] text-lg font-medium">
            ✨ All features included in every Dash-Sham camera
          </div>
        </div>
      </div>
    </section>
  )
}
