import './About.css'

const features = [
  {
    icon: '�',
    title: 'Rooftop Pool',
    description: 'Refreshing rooftop pool with stunning city views of Anantapur'
  },
  {
    icon: '🍽️',
    title: 'On-site Restaurant',
    description: 'Diverse menu with good food quality and pleasant atmosphere'
  },
  {
    icon: '🎉',
    title: 'Event Spaces',
    description: 'Dedicated spaces for parties, engagement functions, and gatherings'
  },
  {
    icon: '🅿️',
    title: 'Complimentary Parking',
    description: 'Free on-site parking for all guests with 24/7 security'
  },
  {
    icon: '✨',
    title: 'Grand Interiors',
    description: 'Attractively decorated rooms and reception areas with opulent decor'
  },
  {
    icon: '📍',
    title: 'Prime Location',
    description: 'Centrally located near the main bus stand and local market'
  }
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <span className="section-label">About Us</span>
          <h2 className="section-title">Premium Hospitality Experience</h2>
          <p className="section-subtitle">
            Lakshmi Hotel offers flawless service with owner-supervised quality and maintenance. 
            Our prime location near Anantapur's main bus stand makes us your perfect choice.
          </p>
        </div>

        {/* Content Grid */}
        <div className="about-content">
          {/* Image Side */}
          <div className="about-image-wrapper">
            <div className="about-image-main">
              <img 
                src="/1.webp" 
                alt="Hotel luxury room interior"
                className="about-image"
              />
            </div>
            <div className="about-image-accent">
              <img 
                src="/4.webp" 
                alt="Hotel reception area"
                className="about-image"
              />
            </div>
            <div className="about-experience-badge">
              <span className="experience-number">25+</span>
              <span className="experience-text">Years of Excellence</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="about-text">
            <h3 className="about-heading">
              Hospitality Excellence Since 1999
            </h3>
            <p className="about-description">
              At Lakshmi Hotel, we believe every guest deserves an exceptional experience. 
              Our dedicated team works tirelessly to ensure your comfort and satisfaction, 
              with meticulous attention to every detail.
            </p>
            <p className="about-description">
              From corporate stays to family vacations and grand celebrations, our versatile 
              spaces and world-class amenities provide the perfect setting for all your 
              occasions and cherished memories.
            </p>
            
            {/* Stats */}
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Happy Guests</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Expert Staff</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h4 className="feature-title">{feature.title}</h4>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
