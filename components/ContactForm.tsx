'use client'

import { useState, FormEvent, useEffect } from 'react'
import emailjs from 'emailjs-com'
import './ContactForm.css'

interface FormData {
  name: string
  phone: string
  checkInDate: string
  roomType: string
  message: string
}

interface FormErrors {
  name?: string
  phone?: string
  checkInDate?: string
  roomType?: string
  message?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    checkInDate: '',
    roomType: '',
    message: ''
  })

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('2SGmOP3JsG8wq5rKU')
  }, [])

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number'
    }

    if (!formData.checkInDate) {
      newErrors.checkInDate = 'Check-in date is required'
    }

    if (!formData.roomType) {
      newErrors.roomType = 'Please select a room type'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Send email via EmailJS
      await emailjs.send(
        'service_dh2mk0p', // Gmail service
        'template_ttyoplh', // Email template
        {
          to_email: 'shiv1590319@gmail.com',
          from_name: formData.name,
          phone: formData.phone,
          check_in_date: formData.checkInDate,
          room_type: formData.roomType,
          message: formData.message,
        }
      )

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          phone: '',
          checkInDate: '',
          roomType: '',
          message: ''
        })
      }, 3000)
    } catch (error) {
      console.error('Failed to send email:', error)
      setIsSubmitting(false)
      alert('Failed to send enquiry. Please try again.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <span className="section-label">Book Your Stay</span>
            <h2 className="contact-title">Reserve Your Room at Lakshmi Hotel</h2>
            <p className="contact-description">
              Experience luxury and comfort at our premium hotel. Fill out the form 
              and our team will confirm your booking within 24 hours.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <div className="contact-item-content">
                  <span className="contact-label">Address</span>
                  <span className="contact-value">Kandukur, Anantapur, India</span>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <div className="contact-item-content">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91 8919641171</span>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <div className="contact-item-content">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">contact@lakshmihotel.com</span>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="business-hours">
              <h4 className="hours-title">Reception Hours</h4>
              <p className="hours-text">24-Hour Front Desk Service</p>
              <p className="hours-text">Complimentary WiFi • Parking • Breakfast</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            {isSubmitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <h3 className="success-title">Thank You!</h3>
                <p className="success-text">
                  Your enquiry has been submitted successfully. 
                  Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input ${errors.phone ? 'input-error' : ''}`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <span className="error-text">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="checkInDate" className="form-label">Check-in Date</label>
                  <input
                    type="date"
                    id="checkInDate"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    className={`form-input ${errors.checkInDate ? 'input-error' : ''}`}
                  />
                  {errors.checkInDate && <span className="error-text">{errors.checkInDate}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="roomType" className="form-label">Select Room Type</label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className={`form-input form-select ${errors.roomType ? 'input-error' : ''}`}
                  >
                    <option value="">Choose a room type</option>
                    <option value="standard">Standard Room - ₹2,500</option>
                    <option value="premium">Premium Room - ₹4,500</option>
                    <option value="suite">Suite - ₹7,500</option>
                  </select>
                  {errors.roomType && <span className="error-text">{errors.roomType}</span>}
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="message" className="form-label">Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
                    placeholder="Any special requests or preferences for your stay..."
                    rows={4}
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="submit-spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    'Send Enquiry'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
