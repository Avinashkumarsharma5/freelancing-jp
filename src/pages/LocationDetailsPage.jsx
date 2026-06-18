import { useParams } from "react-router-dom";
import "./LocationDetailsPage.css";

const locationData = {
  noida: {
    name: "Noida",
    properties: 245,
    growth: "15.2%",
    price: "₹7,200/sq.ft",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80",
  },

  "greater-noida": {
    name: "Greater Noida",
    properties: 186,
    growth: "22.8%",
    price: "₹6,500/sq.ft",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80",
  },

  gurgaon: {
    name: "Gurgaon",
    properties: 340,
    growth: "18.5%",
    price: "₹8,500/sq.ft",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80",
  },

  delhi: {
    name: "Delhi",
    properties: 198,
    growth: "12.3%",
    price: "₹12,000/sq.ft",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1800&q=80",
  },

  "noida-extension": {
    name: "Noida Extension",
    properties: 167,
    growth: "28.4%",
    price: "₹5,800/sq.ft",
    image:
      "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?auto=format&fit=crop&w=1800&q=80",
  },

  "dwarka-expressway": {
    name: "Dwarka Expressway",
    properties: 234,
    growth: "25.7%",
    price: "₹9,200/sq.ft",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=80",
  },
};
export default function LocationDetailsPage() {
  const { slug } = useParams();

  const location =
    locationData[slug] || locationData.gurgaon;

  return (
    <div className="location-page">

      {/* HERO */}

      <section
        className="location-hero"
        style={{
          backgroundImage: `url(${location.image})`,
        }}
      >
        <div className="hero-overlay">

          <span className="hero-badge">
            Premium Investment Destination
          </span>

          <h1>{location.name}</h1>

          <p>
            Explore premium living and investment
            opportunities in one of NCR's fastest
            growing locations.
          </p>

        </div>
      </section>

      {/* STATS */}

      <section className="stats-section">
        <div className="site-container">

          <div className="stats-grid">

            <div className="stat-card">
              <h3>{location.properties}+</h3>
              <p>Properties</p>
            </div>

            <div className="stat-card">
              <h3>{location.growth}</h3>
              <p>Annual Growth</p>
            </div>

            <div className="stat-card">
              <h3>{location.price}</h3>
              <p>Avg Price</p>
            </div>

          </div>

        </div>
      </section>

      {/* ABOUT */}

      <section className="content-section">
        <div className="site-container">

          <h2>About {location.name}</h2>

          <p>
            {location.name} has emerged as one of
            the most sought-after destinations for
            luxury residential developments,
            commercial growth and long-term
            investment opportunities.
          </p>

        </div>
      </section>

      {/* PRICE TRENDS */}

      <section className="content-section alt-bg">
        <div className="site-container">

          <h2>Price Trends</h2>

          <div className="price-grid">

            <div className="price-card">
              <h3>₹8,500</h3>
              <p>Average Price / Sq.ft</p>
            </div>

            <div className="price-card">
              <h3>18.5%</h3>
              <p>Annual Appreciation</p>
            </div>

            <div className="price-card">
              <h3>4.8%</h3>
              <p>Rental Yield</p>
            </div>

          </div>

        </div>
      </section>

      {/* TOP PROJECTS */}

      <section className="content-section">
        <div className="site-container">

          <h2>Top Projects</h2>

          <div className="project-grid">

            <div className="project-card">
              <h3>DLF Privana</h3>
              <p>Luxury Residences</p>
            </div>

            <div className="project-card">
              <h3>M3M Golf Hills</h3>
              <p>Premium Apartments</p>
            </div>

            <div className="project-card">
              <h3>Godrej Aristocrat</h3>
              <p>High-End Living</p>
            </div>

          </div>

        </div>
      </section>

      {/* ADVANTAGES */}

      <section className="content-section alt-bg">
        <div className="site-container">

          <h2>Location Advantages</h2>

          <div className="advantages-grid">

            <div className="adv-card">
              🚇 Metro Connectivity
            </div>

            <div className="adv-card">
              🏫 Top Schools
            </div>

            <div className="adv-card">
              🏥 Hospitals Nearby
            </div>

            <div className="adv-card">
              🛍 Lifestyle Hubs
            </div>

          </div>

        </div>
      </section>

      {/* INVESTMENT HIGHLIGHTS */}

      <section className="content-section">
        <div className="site-container">

          <h2>Why Invest Here?</h2>

          <div className="highlights-grid">

            <div>✓ Strong Capital Appreciation</div>
            <div>✓ Growing Infrastructure</div>
            <div>✓ High Rental Demand</div>
            <div>✓ Excellent Connectivity</div>

          </div>

        </div>
      </section>

      {/* FAQ */}

      <section className="content-section alt-bg">
        <div className="site-container">

          <h2>Frequently Asked Questions</h2>

          <div className="faq-list">

            <div className="faq-item">
              Is Gurgaon a good investment?
            </div>

            <div className="faq-item">
              What is the average property price?
            </div>

            <div className="faq-item">
              Which sectors are most popular?
            </div>

          </div>

        </div>
      </section>

      {/* FINAL CTA */}

      <section className="cta-section">

        <h2>
          Ready To Invest In {location.name}?
        </h2>

        <p>
          Talk with our real estate experts today.
        </p>

        <a
          href="/#contact"
          className="contact-btn"
        >
          Contact Our Expert
        </a>

      </section>

    </div>
  );
}