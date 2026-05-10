'use client'

import { useState, useEffect } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
    review: 'Excellent hotel with amazing service! The rooftop pool has stunning city views and the staff is incredibly friendly. The rooms are spacious and well-maintained. Highly recommend for anyone visiting Anantapur!'
  },
  {
    name: 'Priya & Arjun Patel',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rating: 5,
    review: 'Perfect location near the bus stand! We had a comfortable stay with excellent hospitality. The restaurant serves great food at reasonable prices. The owner\'s personal supervision ensures everything is of high quality. Will definitely stay again!'
  },
  {
    name: 'Vikram Singh',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rating: 5,
    review: 'Outstanding experience! The grand interiors are beautifully decorated. Free WiFi throughout the hotel is a great feature. The complimentary parking and breakfast made our stay hassle-free. Best hotel in Anantapur!'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Guest Reviews</h2>
          <p className="section-subtitle">
            {"What our guests have to say about their wonderful experience at Lakshmi Hotel."}
          </p>
        </div>

        {/* Testimonials Slider */}
        <div className="testimonials-slider">
          <div 
            className="testimonials-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  {/* Quote Icon */}
                  <div className="testimonial-quote">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  {/* Rating */}
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`star ${i < testimonial.rating ? 'star-filled' : ''}`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </span>
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="testimonial-text">{testimonial.review}</p>

                  {/* Author */}
                  <div className="testimonial-author">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="author-image"
                    />
                    <span className="author-name">{testimonial.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid (Desktop) */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card-static">
              <div className="testimonial-quote-small">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              <div className="testimonial-rating-small">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`star-small ${i < testimonial.rating ? 'star-filled' : ''}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </span>
                ))}
              </div>

              <p className="testimonial-text-small">{testimonial.review}</p>

              <div className="testimonial-author-small">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="author-image-small"
                />
                <span className="author-name-small">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
