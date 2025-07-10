
'use client'

import { useEffect, useRef, useState } from 'react'
import { Camera, Eye, Zap, RotateCcw, HardDrive, Shield } from 'lucide-react'

const features = [
  {
    icon: Camera,
    title: 'فيديو فائق الدقة 4K',
    description: 'دقة 4K فائقة الوضوح تلتقط أدق التفاصيل بوضوح واحترافية مذهلة.',
    color: 'text-blue-400'
  },
  {
    icon: Eye,
    title: 'عدسة بزاوية عريضة 170°',
    description: 'زاوية الرؤية العريضة تغطي عدة مسارات لضمان مراقبة شاملة للطريق.',
    color: 'text-purple-400'
  },
  {
    icon: Shield,
    title: 'رؤية ليلية متقدمة',
    description: 'أداء عالي في الإضاءة المنخفضة يضمن تسجيلًا واضحًا حتى في الظلام الدامس.',
    color: 'text-green-400'
  },
  {
    icon: Zap,
    title: 'كشف الحركة',
    description: 'حساس حركة ذكي يبدأ التسجيل تلقائيًا عند اكتشاف أي حركة.',
    color: 'text-yellow-400'
  },
  {
    icon: RotateCcw,
    title: 'تسجيل حلقي',
    description: 'التسجيل الحلقي المتواصل يستبدل الملفات القديمة تلقائيًا دون فقدان أي لحظة.',
    color: 'text-red-400'
  },
  {
    icon: HardDrive,
    title: 'بطاقة ذاكرة 32 جيجا مضمنة',
    description: 'تأتي مع بطاقة ذاكرة عالية الجودة تدعم حتى 128 جيجا لتسجيل طويل المدى.',
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
            <span className="text-[#007BFF]">مزايا</span> احترافية
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            كل ميزة مصممة بعناية لتحقيق أعلى أداء. استمتع بتقنية احترافية تحدث فرقًا في كل رحلة.
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
            ✨ جميع المزايا متوفرة في كل كاميرا داش شام
          </div>
        </div>
      </div>
    </section>
  )
}
