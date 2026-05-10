import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <img 
          src="/IMAGE.PNG" 
          alt="Grand luxury banquet hall with elegant purple and gold décor"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <span className="hero-badge animate-fade-in">Welcome to Lakshmi Hotel</span>
        
        <h1 className="hero-title animate-fade-in-up">
          Grand Spaces &
          <span className="hero-title-accent">Elegant Events</span>
        </h1>
        
        <p className="hero-subtitle animate-fade-in-up animation-delay-200">
          Host unforgettable celebrations and events at our premium banquet halls 
          with world-class amenities and impeccable service.
        </p>

        {/* <div className="hero-buttons animate-fade-in-up animation-delay-400">
          <a href="#contact" className="hero-btn hero-btn-primary">
            Book Now
          </a>
        </div> */}

        {/* Scroll Indicator */}
        <div className="scroll-indicator animate-bounce-subtle">
          {/* <span className="scroll-text">Scroll Down</span> */}
          {/* <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div> */}
        </div>
      </div>
    </section>
  )
}
