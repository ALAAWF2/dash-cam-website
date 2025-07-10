
'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

const faqData = [
  {
    question: 'ما مدى سهولة عملية التركيب؟',
    answer: 'التركيب سهل للغاية ولا يستغرق أكثر من 10-15 دقيقة. تأتي الكاميرا مع دليل تركيب مفصل وحامل وجميع الكابلات اللازمة. كل ما عليك تثبيت الحامل على الزجاج الأمامي وتوصيل الكابل بمنفذ الشحن وستكون جاهزاً دون الحاجة إلى فني.'
  },
  {
    question: 'ما السعة التخزينية التي أحتاجها؟',
    answer: 'بطاقة الذاكرة المرفقة بسعة 32 جيجا توفر حوالي 4-6 ساعات تصوير بدقة 4K. عند امتلاء البطاقة يتم استبدال الملفات الأقدم تلقائياً بالتسجيل الحلقي. ولتسجيل أطول يمكنك استخدام بطاقة 64 أو 128 جيجا لما يصل إلى 20 ساعة متواصلة.'
  },
  {
    question: 'هل تعمل الكاميرا أثناء إيقاف السيارة؟',
    answer: 'نعم، خاصية كشف الحركة تقوم بتفعيل التسجيل تلقائياً عند استشعار أي حركة حول مركبتك المتوقفة، ما يساعد على الحماية من التخريب أو السرقة أو حوادث الاصطدام أثناء الوقوف. يمكن تشغيل الكاميرا على بطارية السيارة أو بطارية خارجية اختيارية.'
  },
  {
    question: 'ماذا يشمل ضمان السنتين؟',
    answer: 'ضمان السنتين الشامل يغطي جميع عيوب التصنيع والأعطال في المكونات بما في ذلك وحدة الكاميرا والبطاقة والكابلات وملحقات التثبيت. كما نوفر خدمة إصلاح أو استبدال مجانية ودعم فني مخصص طوال فترة الضمان.'
  },
  {
    question: 'ما مدى وضوح التصوير الليلي؟',
    answer: 'تعتمد تقنية الرؤية الليلية المتقدمة على حساسات ومعالجة صور توفر لقطات واضحة تماماً حتى في الظلام الدامس. تعدل الكاميرا التعرض وتعزز التباين لالتقاط اللوحات وإشارات الطريق والتفاصيل المهمة التي تفوتها الكاميرات الأخرى.'
  },
  {
    question: 'هل يمكنني مشاهدة المقاطع على هاتفي؟',
    answer: 'نعم، تدعم الكاميرا الاتصال عبر الواي فاي لتتمكن من الربط بتطبيق الجوال ومشاهدة البث المباشر أو تحميل المقاطع وضبط الإعدادات وإدارة التخزين مباشرة من هاتفك. التطبيق متوفر لأجهزة iOS وأندرويد.'
  },
  {
    question: 'ماذا لو احتجت إلى دعم فني؟',
    answer: 'نقدم دعماً فنياً على مدار الساعة عبر واتساب والبريد الإلكتروني والهاتف. يمكن لفريقنا مساعدتك في التركيب أو حل المشاكل أو طلبات الضمان وغيرها، كما نوفر إرشادات بالفيديو للمسائل الشائعة.'
  },
  {
    question: 'هل الكاميرا متوافقة مع جميع المركبات؟',
    answer: 'نعم، تم تصميم الكاميرا للعمل مع مختلف أنواع المركبات بما فيها السيارات والشاحنات والدراجات النارية والمركبات التجارية. يضمن نظام التثبيت الشامل والحامل القابل للتعديل ملاءمة مثالية لأي زاوية زجاج أمامي أو تصميم لوحة قيادة.'
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])
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

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    )
  }

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#007BFF]/20 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-[#007BFF]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-[#007BFF]">الأسئلة</span> الشائعة
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            اطلع على إجابات أكثر الأسئلة شيوعاً حول كاميرا الداش الاحترافية. إذا لم تجد ما تبحث عنه، تواصل مع فريق الدعم.
          </p>
        </div>

        {/* FAQ Items */}
        <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(index)
            
            return (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-2xl border border-gray-800 hover:border-[#007BFF]/50 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#007BFF]/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-6 h-6 text-[#007BFF] transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-[#007BFF]/50 to-transparent mb-4" />
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">
              ما زالت لديك أسئلة؟
            </h3>
            <p className="text-gray-300 mb-6">
              فريق الدعم المتخصص جاهز لمساعدتك على مدار الساعة. احصل على إجابات فورية عبر واتساب أو البريد الإلكتروني.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/966553377408"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] hover:bg-[#1ea952] text-white rounded-lg transition-colors duration-300"
              >
                دعم واتساب
              </a>
              <a
                href="mailto:wafaiealaa@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#007BFF] hover:bg-[#0056b3] text-white rounded-lg transition-colors duration-300"
              >
                دعم عبر البريد
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
