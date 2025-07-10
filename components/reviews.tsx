
'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Ahmed Al-Rashid',
    location: 'Riyadh, Saudi Arabia',
    rating: 5,
    review: 'Outstanding quality! The 4K recording is incredibly clear, and the night vision saved me during a recent incident. Best investment for my car.',
    date: 'December 2024',
    verified: true
  },
  {
    name: 'Sarah Thompson',
    location: 'Dubai, UAE',
    rating: 5,
    review: 'The wide-angle lens captures everything perfectly. Installation was straightforward, and the motion detection gives me peace of mind when parked.',
    date: 'November 2024',
    verified: true
  },
  {
    name: 'Omar Hassan',
    location: 'Cairo, Egypt',
    rating: 5,
    review: 'Professional grade quality at an amazing price. The loop recording feature works flawlessly, and customer support was exceptional.',
    date: 'November 2024',
    verified: true
  },
  {
    name: 'Jennifer Park',
    location: 'Seoul, South Korea',
    rating: 5,
    review: 'Exceeded my expectations in every way. The build quality is premium, and the 32GB SD card included was a nice touch. Highly recommend!',
    date: 'October 2024',
    verified: true
  },
  {
    name: 'Mohammed Al-Zahra',
    location: 'Jeddah, Saudi Arabia',
    rating: 5,
    review: 'The parking surveillance mode is genius! Caught someone trying to break into my car. This dash cam literally paid for itself.',
    date: 'October 2024',
    verified: true
  }
]

export default function Reviews() {
  const [visibleReviews, setVisibleReviews] = useState<number[]>([])
  const reviewRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleReviews(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.2 }
    )

    reviewRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ))
  }

  return (
    <section id="reviews" className="py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Customer <span className="text-[#007BFF]">Reviews</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Don't just take our word for it. See what our satisfied customers have to say about their Dash-Sham experience.
          </p>
          
          {/* Overall Rating Display */}
          <div className="inline-flex items-center bg-[#1a1a1a] rounded-2xl p-6 border border-gray-800">
            <div className="text-center mr-8">
              <div className="text-4xl font-bold text-[#007BFF] mb-2">4.8</div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <div className="text-gray-400 text-sm">Overall Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">10,000+</div>
              <div className="text-gray-400 text-sm">Happy Customers</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => {
            const isVisible = visibleReviews.includes(index)
            
            return (
              <div
                key={index}
                ref={(el) => { reviewRefs.current[index] = el }}
                data-index={index}
                className={`group bg-[#1a1a1a] rounded-2xl p-8 shadow-2xl border border-gray-800 hover:border-[#007BFF]/50 transition-all duration-500 hover:transform hover:scale-105 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-8 h-8 text-[#007BFF] opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                  {review.verified && (
                    <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full border border-green-500/30">
                      ✓ Verified Purchase
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                  "{review.review}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-[#007BFF] transition-colors duration-300">
                        {review.name}
                      </h4>
                      <p className="text-gray-400 text-sm">{review.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">{review.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-full text-[#007BFF] text-lg font-medium">
            ⭐ Join 10,000+ satisfied customers today
          </div>
        </div>
      </div>
    </section>
  )
}
