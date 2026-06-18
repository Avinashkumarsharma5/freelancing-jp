import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Star, 
  MapPin, 
  Building2, 
  Home, 
  Users, 
  Award, 
  Clock, 
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Phone,
  CalendarDays,
  MessageCircle,
  TrendingUp,
  Heart,
  GitCompare,
  Eye,
  CheckCircle,
  Layers,
  Crown,
  Gem,
  Infinity,
  Droplets,
  Wind,
  Coffee,
  Wifi,
  Tv,
  Car,
  Dumbbell,
  Utensils,
  Trees,
  Lock,
  Sun,
  Moon,
  Cloud,
  Zap,
  BadgeCheck,
  CircleDollarSign,
  Landmark
} from "lucide-react";
import "./PropertyTypePage.css";

// ======================================
// ANIMATION VARIANTS
// ======================================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// ======================================
// MAIN COMPONENT
// ======================================
export default function PropertyTypePage() {
  const { slug } = useParams();

  // Dynamic property data based on slug
  const getPropertyData = () => {
    const data = {
      "luxury-apartment": {
        title: "Luxury Apartments",
        subtitle: "Elegant Living Redefined",
        description: "Experience unparalleled luxury with our premium apartments featuring world-class amenities, breathtaking views, and prime locations across NCR.",
        startingPrice: "₹1.8 Cr",
        projects: "25+",
        rating: "4.9★",
        stats: [
          { value: "450+", label: "Luxury Units", icon: Building2 },
          { value: "25+", label: "Premium Projects", icon: Crown },
          { value: "4.9★", label: "Average Rating", icon: Star },
          { value: "24/7", label: "Concierge Service", icon: Clock }
        ],
        properties: [
          { 
            title: "The Royal Heights", 
            location: "Sector 150, Noida", 
            price: "₹2.8 Cr", 
            bhk: "4 BHK", 
            area: "2,850 sq.ft",
            badge: "Luxury Collection",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
          },
          { 
            title: "Panorama Towers", 
            location: "Golf Course Road, Gurgaon", 
            price: "₹4.2 Cr", 
            bhk: "5 BHK", 
            area: "3,400 sq.ft",
            badge: "Premium",
            rating: 5.0,
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
          },
          { 
            title: "The Sapphire", 
            location: "Sector 62, Noida", 
            price: "₹1.9 Cr", 
            bhk: "3 BHK", 
            area: "1,950 sq.ft",
            badge: "Hot Deal",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop"
          },
          { 
            title: "Riverfront Estate", 
            location: "Greater Noida West", 
            price: "₹3.6 Cr", 
            bhk: "4 BHK", 
            area: "3,100 sq.ft",
            badge: "Exclusive",
            rating: 4.7,
            image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&h=600&fit=crop"
          },
          { 
            title: "The Orchid", 
            location: "Sector 128, Noida", 
            price: "₹2.2 Cr", 
            bhk: "3.5 BHK", 
            area: "2,100 sq.ft",
            badge: "Top Pick",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop"
          },
          { 
            title: "Golden Gate Estate", 
            location: "Sector 45, Gurgaon", 
            price: "₹5.8 Cr", 
            bhk: "5 BHK", 
            area: "4,200 sq.ft",
            badge: "Signature",
            rating: 5.0,
            image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop"
          }
        ],
        amenities: [
          { icon: Infinity, label: "Infinity Pool" },
          { icon: Dumbbell, label: "State-of-art Gym" },
          { icon: Trees, label: "Private Garden" },
          { icon: ShieldCheck, label: "24/7 Security" },
          { icon: Tv, label: "Home Theatre" },
          { icon: Coffee, label: "Cafe Lounge" },
          { icon: Wifi, label: "High-speed WiFi" },
          { icon: Car, label: "Covered Parking" },
          { icon: Utensils, label: "Fine Dining" },
          { icon: Droplets, label: "Spa & Sauna" },
          { icon: Wind, label: "Central AC" },
          { icon: Lock, label: "Biometric Access" }
        ],
        testimonials: [
          { name: "Dr. Ananya Sharma", review: "The attention to detail and quality of construction is unmatched. Truly a premium experience.", rating: 5, image: "https://randomuser.me/api/portraits/women/44.jpg" },
          { name: "Mr. Rajat Kapoor", review: "Excellent location, world-class amenities, and the team was incredibly helpful throughout.", rating: 5, image: "https://randomuser.me/api/portraits/men/32.jpg" }
        ]
      },
      "premium-villa": {
        title: "Premium Villas",
        subtitle: "Exclusive Estate Living",
        description: "Discover the epitome of luxury with our premium villas offering unmatched privacy, spacious living, and exquisite architecture.",
        startingPrice: "₹4.8 Cr",
        projects: "15+",
        rating: "5.0★",
        stats: [
          { value: "180+", label: "Luxury Villas", icon: Home },
          { value: "15+", label: "Gated Communities", icon: ShieldCheck },
          { value: "5.0★", label: "Average Rating", icon: Star },
          { value: "100%", label: "Customer Satisfaction", icon: Users }
        ],
        properties: [
          { 
            title: "The Crown Estate", 
            location: "Sector 42, Noida", 
            price: "₹6.5 Cr", 
            bhk: "5 BHK", 
            area: "4,800 sq.ft",
            badge: "Royal",
            rating: 5.0,
            image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&h=600&fit=crop"
          },
          { 
            title: "Heritage Villas", 
            location: "Golf Course Extn, Gurgaon", 
            price: "₹8.2 Cr", 
            bhk: "6 BHK", 
            area: "5,500 sq.ft",
            badge: "Heritage",
            rating: 4.9,
            image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop"
          },
          { 
            title: "Emerald Valley", 
            location: "Greater Noida", 
            price: "₹4.8 Cr", 
            bhk: "4 BHK", 
            area: "3,600 sq.ft",
            badge: "Premium",
            rating: 4.8,
            image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop"
          }
        ],
        amenities: [
          { icon: Crown, label: "Private Pool" },
          { icon: Trees, label: "Landscaped Garden" },
          { icon: ShieldCheck, label: "Gated Security" },
          { icon: Gem, label: "Premium Finishes" },
          { icon: Sun, label: "Solar Power" },
          { icon: Cloud, label: "Smart Home" }
        ],
        testimonials: []
      }
    };
    return data[slug] || data["luxury-apartment"];
  };

  const propertyData = getPropertyData();

  return (
    <div className="property-page">

      {/* ============================================================
          HERO SECTION (Enhanced with Stats & Trust Strip)
      ============================================================ */}
      <motion.section 
        className="property-hero-premium"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-particles"></div>
          {/* 👑 Luxury Pattern Overlay */}
          <div className="hero-pattern-overlay"></div>
        </div>
        
        <div className="hero-content-premium">
          <motion.div 
            className="hero-breadcrumb"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span>Home</span>
            <ChevronRight size={14} />
            <span>Properties</span>
            <ChevronRight size={14} />
            <span className="gold-text">{propertyData.title}</span>
          </motion.div>

          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Sparkles size={16} />
            Premium Collection
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {propertyData.title}
            <span className="gold-text"> </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {propertyData.description}
          </motion.p>

          {/* 🆕 Hero Property Stats */}
          <motion.div 
            className="hero-property-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <div className="hero-stat-item">
              <strong>{propertyData.startingPrice}</strong>
              <span>Starting Price</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <strong>{propertyData.projects}</strong>
              <span>Projects</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat-item">
              <strong>{propertyData.rating}</strong>
              <span>Rating</span>
            </div>
          </motion.div>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className="primary-btn gold-btn">
              Explore Properties <ArrowRight size={18} />
            </button>
            <button className="secondary-btn glass-btn">
              <Phone size={18} />
              Talk to Expert
            </button>
          </motion.div>

          <motion.div 
            className="hero-trust-badges"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span><ShieldCheck size={16} /> RERA Approved</span>
            <span><Award size={16} /> ISO Certified</span>
            <span><Users size={16} /> 15K+ Happy Families</span>
          </motion.div>

          {/* 🆕 Trust Strip */}
          <motion.div 
            className="trust-strip"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <span>✓ RERA Verified</span>
            <span>✓ Legal Checked</span>
            <span>✓ Best Price Guarantee</span>
            <span>✓ 15,000+ Happy Families</span>
          </motion.div>
        </div>

        <div className="hero-floating-card">
          <div className="floating-card-content">
            <div className="floating-icon"><Gem size={24} /></div>
            <div>
              <span className="floating-label">Featured Property</span>
              <strong className="floating-value">{propertyData.startingPrice}</strong>
            </div>
            <ArrowRight size={20} className="floating-arrow" />
          </div>
        </div>
      </motion.section>

      {/* ============================================================
          STATS SECTION
      ============================================================ */}
      <motion.section 
        className="stats-premium"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="stats-premium-container">
          {propertyData.stats.map((stat, index) => (
            <motion.div 
              className="stat-premium-card" 
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8 }}
            >
              <stat.icon size={32} color="#B8892D" />
              <div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ============================================================
          PROPERTY GRID (Enhanced Cards)
      ============================================================ */}
      <section className="listing-premium">
        <div className="listing-premium-header">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-kicker">
              <Building2 size={16} />
              Featured Properties
            </span>
            <h2>Exclusive <span className="gold-text">Luxury</span> Collection</h2>
            <p>Handpicked premium residences designed for the discerning few</p>
          </motion.div>
          
          <motion.div 
            className="listing-filter"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <button className="filter-btn active">All</button>
            <button className="filter-btn">3 BHK</button>
            <button className="filter-btn">4 BHK</button>
            <button className="filter-btn">5 BHK+</button>
            <button className="filter-btn">Luxury</button>
          </motion.div>
        </div>

        <motion.div 
          className="property-grid-premium"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {propertyData.properties.map((property, index) => (
            <motion.div 
              className="property-card-premium" 
              key={index}
              variants={fadeUp}
              whileHover="hover"
            >
              <div className="property-image-wrapper">
                <img src={property.image} alt={property.title} loading="lazy" />
                <div className="property-image-overlay"></div>
                
                {/* 🆕 Exclusive Ribbon */}
                <div className="exclusive-ribbon">
                  Exclusive Collection
                </div>
                
                <span className="property-badge-premium">{property.badge}</span>
                
                <div className="property-actions-float">
                  <button className="float-btn"><Heart size={18} /></button>
                  <button className="float-btn"><GitCompare size={18} /></button>
                  <button className="float-btn"><Eye size={18} /></button>
                </div>
                <div className="property-rating-premium">
                  <Star size={14} fill="#B8892D" color="#B8892D" />
                  {property.rating}
                </div>
              </div>

              <div className="property-body-premium">
                <h3>{property.title}</h3>
                <p className="property-location-premium">
                  <MapPin size={14} />
                  {property.location}
                </p>
                
                <div className="property-details-premium">
                  <span>{property.bhk}</span>
                  <span>•</span>
                  <span>{property.area}</span>
                </div>

                <div className="property-amenities-mini">
                  <span>🏊 Pool</span>
                  <span>🏋 Gym</span>
                  <span>🛡 Security</span>
                </div>

                {/* 🆕 Enhanced Card Footer with Price Block */}
                <div className="card-footer-premium">
                  <div className="price-block">
                    <span>Starting From</span>
                    <strong>{property.price}</strong>
                  </div>
                  <button className="property-cta-premium">
                    Explore <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ============================================================
          AMENITIES SECTION (Enhanced with Glow)
      ============================================================ */}
      <section className="amenities-premium">
        <div className="amenities-premium-container">
          <motion.div 
            className="amenities-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="section-kicker">
              <Gem size={16} />
              World-Class Amenities
            </span>
            <h2>Designed for <span className="gold-text">Luxury</span> Living</h2>
            <p>Every detail crafted to elevate your lifestyle experience</p>
          </motion.div>

          <motion.div 
            className="amenities-grid-premium"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {propertyData.amenities.map((amenity, index) => (
              <motion.div 
                className="amenity-premium-item" 
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="amenity-icon-wrapper">
                  <amenity.icon size={24} color="#B8892D" />
                </div>
                <span>{amenity.label}</span>
                <CheckCircle size={16} color="#B8892D" className="amenity-check" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================================================
          TESTIMONIALS (Enhanced with Left Border)
      ============================================================ */}
      {propertyData.testimonials.length > 0 && (
        <section className="testimonials-premium">
          <div className="testimonials-premium-container">
            <motion.div 
              className="testimonials-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="section-kicker">
                <Award size={16} />
                Client Testimonials
              </span>
              <h2>What Our <span className="gold-text">Clients</span> Say</h2>
            </motion.div>

            <motion.div 
              className="testimonials-grid-premium"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {propertyData.testimonials.map((testimonial, index) => (
                <motion.div 
                  className="testimonial-premium-card" 
                  key={index}
                  variants={fadeUp}
                >
                  <div className="testimonial-rating-premium">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill={i < testimonial.rating ? "#B8892D" : "none"} color="#B8892D" />
                    ))}
                  </div>
                  <p>"{testimonial.review}"</p>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div>
                      <strong>{testimonial.name}</strong>
                      <span>Verified Buyer</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ============================================================
          CTA SECTION
      ============================================================ */}
      <section className="cta-premium">
        <div className="cta-premium-container">
          <motion.div 
            className="cta-content-premium"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="cta-badge">Ready to Move</span>
            <h2>Find Your <span className="gold-text">Dream</span> Property Today</h2>
            <p>Get expert consultation and access to exclusive deals</p>
            
            <div className="cta-actions-premium">
              <button className="primary-btn gold-btn large">
                <Phone size={18} />
                Book Consultation
              </button>
              <button className="secondary-btn glass-btn large">
                <MessageCircle size={18} />
                WhatsApp Us
              </button>
            </div>

            <div className="cta-features">
              <span><CheckCircle size={16} /> Free Site Visit</span>
              <span><CheckCircle size={16} /> Expert Advisory</span>
              <span><CheckCircle size={16} /> Best Price Guarantee</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}