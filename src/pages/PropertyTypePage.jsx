import { useParams } from "react-router-dom";
import "./PropertyTypePage.css";

export default function PropertyTypePage() {
  const { slug } = useParams();

  return (
    <div className="property-page">

      {/* HERO */}
      <section className="property-hero">
        <div className="hero-overlay">
          <span className="property-badge">
            Premium Collection
          </span>

          <h1>{slug.replace("-", " ").toUpperCase()}</h1>

          <p>
            Explore luxury residences, premium amenities,
            strategic locations and high-return investment
            opportunities.
          </p>

          <button className="explore-btn">
            Explore Properties
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="property-stats">
        <div className="stat-card">
          <h2>250+</h2>
          <p>Properties</p>
        </div>

        <div className="stat-card">
          <h2>15+</h2>
          <p>Cities</p>
        </div>

        <div className="stat-card">
          <h2>98%</h2>
          <p>Client Satisfaction</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Support</p>
        </div>
      </section>

      {/* PROPERTY GRID */}
      <section className="listing-section">

        <div className="section-header">
          <h2>Featured Properties</h2>
          <p>Handpicked premium listings</p>
        </div>

        <div className="property-grid">

          {[1,2,3,4,5,6].map((item) => (
            <div className="property-card" key={item}>
              <img
                src={`https://picsum.photos/600/400?random=${item}`}
                alt=""
              />

              <div className="property-content">
                <h3>Luxury Residence</h3>

                <p>
                  Modern architecture with premium amenities.
                </p>

                <div className="property-meta">
                  <span>3 BHK</span>
                  <span>2200 sqft</span>
                  <span>₹1.2 Cr</span>
                </div>

                <button>
                  View Details
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* AMENITIES */}
      <section className="amenities-section">

        <h2>World Class Amenities</h2>

        <div className="amenities-grid">
          <div>🏊 Swimming Pool</div>
          <div>🏋 Gym</div>
          <div>🌳 Garden</div>
          <div>🚗 Parking</div>
          <div>🎮 Club House</div>
          <div>🛡 Security</div>
        </div>

      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Find Your Dream Property</h2>

        <p>
          Get expert consultation and exclusive deals.
        </p>

        <button>
          Contact Advisor
        </button>
      </section>

    </div>
  );
}