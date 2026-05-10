import './Packages.css'

const packages = [
  {
    name: 'Standard Room',
    price: '₹2,500',
    featured: false,
    features: [
      { label: 'Room Size', value: 'Spacious and comfortable' },
      { label: 'Air Conditioning', value: 'Full A/C' },
      { label: 'Amenities', value: 'TV, WiFi, Room Service' },
      { label: 'Bathroom', value: 'Modern with hot water' },
      { label: 'Complimentary', value: 'Breakfast included' },
      { label: 'Parking', value: 'Free parking' },
      { label: 'Services', value: 'Housekeeping daily' },
    ]
  },
  {
    name: 'Premium Room',
    price: '₹4,500',
    featured: true,
    features: [
      { label: 'Room Size', value: 'Extra spacious & luxurious' },
      { label: 'Air Conditioning', value: 'Full A/C with climate control' },
      { label: 'Amenities', value: 'Smart TV, Premium WiFi, Minibar' },
      { label: 'Bathroom', value: 'Premium fixtures with toiletries' },
      { label: 'Complimentary', value: 'Breakfast + Tea/Coffee Maker' },
      { label: 'Services', value: '24-hour room service' },
      { label: 'Views', value: 'City views available' },
    ]
  },
  {
    name: 'Suite',
    price: '₹7,500',
    featured: false,
    features: [
      { label: 'Room Size', value: 'Expansive generously sized' },
      { label: 'Air Conditioning', value: 'Premium climate control' },
      { label: 'Amenities', value: 'All Premium + Fireplace' },
      { label: 'Bathroom', value: 'Luxurious with premium toiletries' },
      { label: 'Complimentary', value: 'Full breakfast + Beverages' },
      { label: 'Services', value: '24-hour concierge & valet' },
      { label: 'Features', value: 'Rooftop pool access' },
    ]
  }
]

export default function Packages() {
  return (
    <section id="packages" className="packages">
      <div className="packages-container">
        {/* Section Header */}
        <div className="packages-header">
          <span className="section-label">Our Rooms</span>
          <h2 className="section-title">Choose Your Perfect Room</h2>
          <p className="section-subtitle">
            We offer comfortable rooms designed to match your needs and budget. 
            Every room includes our signature hospitality and complimentary WiFi.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`package-card ${pkg.featured ? 'package-featured' : ''}`}
            >
              {pkg.featured && (
                <span className="package-badge">Most Popular</span>
              )}
              
              <div className="package-header">
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">
                  <span className="price-amount">{pkg.price}</span>
                  <span className="price-period">Starting from</span>
                </div>
              </div>

              <ul className="package-features">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="package-feature">
                    <span className="feature-check">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </span>
                    <div className="feature-content">
                      <span className="feature-label">{feature.label}</span>
                      <span className="feature-value">{feature.value}</span>
                    </div>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`package-btn ${pkg.featured ? 'package-btn-featured' : ''}`}
              >
                Book Room
              </a>
            </div>
          ))}
        </div>

        {/* Custom Package Note */}
        <div className="custom-package">
          <p>
            Looking for something custom? 
            <a href="#contact" className="custom-link">Contact us</a> 
            to create your personalized package.
          </p>
        </div>
      </div>
    </section>
  )
}
