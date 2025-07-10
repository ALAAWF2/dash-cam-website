
'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Clock, Shield, Truck, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  })
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

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleOrderNow = () => {
    // Open WhatsApp with pre-filled message
    const message = encodeURIComponent('Hi Dash-Sham! I want to order the premium 4K dash cam for 300,000 SYP. Please confirm my order details.')
    window.open(`https://wa.me/966553377408?text=${message}`, '_blank')
  }

  return (
    <section id="pricing" ref={sectionRef} className="py-20 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Special <span className="text-[#007BFF]">Offer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Limited time exclusive pricing. Don't miss this opportunity to secure your premium dash cam at an unbeatable price.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className={`max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative bg-gradient-to-br from-[#007BFF]/10 to-[#007BFF]/5 rounded-3xl p-8 shadow-2xl border-2 border-[#007BFF]/30 overflow-hidden">
            {/* Limited Time Badge */}
            <div className="absolute top-6 right-6">
              <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                LIMITED TIME
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="text-center mb-8">
              <h3 className="text-lg text-gray-300 mb-4">Offer expires in:</h3>
              <div className="flex justify-center space-x-4">
                <div className="bg-[#0d0d0d] rounded-lg p-3 min-w-[60px] border border-gray-700">
                  <div className="text-2xl font-bold text-[#007BFF]">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400">Hours</div>
                </div>
                <div className="bg-[#0d0d0d] rounded-lg p-3 min-w-[60px] border border-gray-700">
                  <div className="text-2xl font-bold text-[#007BFF]">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400">Minutes</div>
                </div>
                <div className="bg-[#0d0d0d] rounded-lg p-3 min-w-[60px] border border-gray-700">
                  <div className="text-2xl font-bold text-[#007BFF]">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs text-gray-400">Seconds</div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="text-3xl text-gray-400 line-through">450,000 SYP</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">-33%</span>
              </div>
              <div className="text-6xl md:text-7xl font-bold text-[#007BFF] mb-2 animate-count-up">
                300,000
              </div>
              <div className="text-xl text-gray-300">Syrian Pounds</div>
              <div className="text-lg text-green-400 font-semibold mt-2">
                You Save: 150,000 SYP
              </div>
            </div>

            {/* What's Included */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-6 text-center">What's Included:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Premium 4K Ultra HD Dash Cam',
                  '32GB High-Speed SD Card',
                  'Car Charger & USB Cable',
                  'Mounting Bracket & Accessories',
                  '2-Year Manufacturer Warranty',
                  'Free Installation Guide',
                  '24/7 Customer Support',
                  'Lifetime Software Updates'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Button */}
            <Button
              onClick={handleOrderNow}
              className="w-full bg-[#007BFF] hover:bg-[#0056b3] text-white py-6 text-xl rounded-2xl shadow-glow-hover transition-all duration-300 transform hover:scale-105 font-bold"
            >
              Order Now & Save 150,000 SYP
            </Button>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-[#007BFF] mb-2" />
                <span className="text-xs text-gray-400">2 Year Warranty</span>
              </div>
              <div className="flex flex-col items-center">
                <Truck className="w-8 h-8 text-[#007BFF] mb-2" />
                <span className="text-xs text-gray-400">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-[#007BFF] mb-2" />
                <span className="text-xs text-gray-400">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center">
                <CreditCard className="w-8 h-8 text-[#007BFF] mb-2" />
                <span className="text-xs text-gray-400">Secure Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="text-center mt-12">
          <h4 className="text-lg text-gray-300 mb-6">Accepted Payment Methods:</h4>
          <div className="flex justify-center space-x-6 items-center">
            <div className="bg-[#0d0d0d] rounded-lg px-4 py-2 border border-gray-700">
              <span className="text-white font-semibold">VISA</span>
            </div>
            <div className="bg-[#0d0d0d] rounded-lg px-4 py-2 border border-gray-700">
              <span className="text-white font-semibold">Mastercard</span>
            </div>
            <div className="bg-[#0d0d0d] rounded-lg px-4 py-2 border border-gray-700">
              <span className="text-white font-semibold">STC Pay</span>
            </div>
            <div className="bg-[#0d0d0d] rounded-lg px-4 py-2 border border-gray-700">
              <span className="text-white font-semibold">Cash on Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
