"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef } from "react"

const testimonials = [
  {
    quote: "StackReveal has transformed how we understand our market. The insights are invaluable.",
    name: "Sarah Chen",
    role: "CTO",
    company: "TechForward"
  },
  {
    quote: "The competitive intelligence we get from StackReveal is a game-changer for our sales team.",
    name: "Michael Rodriguez",
    role: "VP of Sales",
    company: "SalesMatrix"
  },
  {
    quote: "Finally, a tool that gives us real-time insights into our competitors' tech decisions.",
    name: "David Park",
    role: "Head of Engineering",
    company: "InnovateCorp"
  },
  {
    quote: "The accuracy and depth of data we get from StackReveal is remarkable.",
    name: "Emma Thompson",
    role: "Product Director",
    company: "DataDrive"
  }
]

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    
    const container = scrollContainerRef.current
    const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        const isAtEnd = container.scrollLeft + container.offsetWidth >= container.scrollWidth
        if (isAtEnd) {
          container.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          container.scrollBy({ left: container.offsetWidth, behavior: 'smooth' })
        }
      }, 5000)
    }

    const stopAutoScroll = () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current)
        autoScrollRef.current = null
      }
    }

    startAutoScroll()

    container.addEventListener('mouseenter', stopAutoScroll)
    container.addEventListener('mouseleave', startAutoScroll)
    container.addEventListener('touchstart', stopAutoScroll)
    container.addEventListener('touchend', startAutoScroll)

    return () => {
      stopAutoScroll()
      container.removeEventListener('mouseenter', stopAutoScroll)
      container.removeEventListener('mouseleave', startAutoScroll)
      container.removeEventListener('touchstart', stopAutoScroll)
      container.removeEventListener('touchend', startAutoScroll)
    }
  }, [])

  return (
    <>
      <div className="text-center mb-12">
        <h3 className="text-[#00C389] text-lg font-semibold mb-4">SUCCESS STORIES</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Industry Leaders</h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          See how companies are gaining competitive advantages with StackReveal&apos;s
          technology intelligence platform.
        </p>
      </div>

      <div className="testimonials-container">
        <div className="testimonials-wrapper">
          <button 
            onClick={() => scroll('left')}
            className="testimonial-nav-button left"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div 
            ref={scrollContainerRef}
            className="testimonials-track"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <blockquote className="testimonial-quote">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {testimonial.name[0]}
                    </div>
                    <div className="testimonial-info">
                      <div className="testimonial-name">{testimonial.name}</div>
                      <div className="testimonial-role">{testimonial.role}</div>
                      <div className="testimonial-company">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => scroll('right')}
            className="testimonial-nav-button right"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  )
}
