import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BhutaniAstrathumImage from "../assets/Bhutani Astrathum.png"
import FoodzaniImage from "../assets/foodzani.png"
import CityCenter32Image from "../assets/City Center 32.png"
import mayurimg from "../assets/Mayur Forest Villa.png"
import { 
  ArrowRight, 
  Star, 
  MapPin, 
  Building2, 
  TrendingUp, // ✅ ADDED TrendingUp
  Home, 
  Users, 
  Award, 
  Clock, 
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Phone,
  MessageCircle, 
  Heart,
  GitCompare,
  Eye,
  CheckCircle,
  Crown,
  Gem,
  Infinity as InfinityIcon,
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
  Cloud,
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
console.log("Slug:", slug);
  // ======================================
  // UPDATED DATA STRUCTURE
  // ======================================
  const getPropertyData = () => {
    const data = {
      // 2. NEW: Commercial Space Data
      "commercial-space": {
        title: "Commercial Investments",
        subtitle: "High ROI Commercial Assets",
        description: "Explore premium commercial opportunities including office spaces, retail shops, food courts and SOHO suites in NCR's fastest growing corridors.",
        startingPrice: "₹34.9 L",
        projects: "50+",
        rating: "4.9★",
        stats: [
          { value: "50+", label: "Commercial Projects", icon: Building2 },
          { value: "8-12%", label: "Rental Yield", icon: TrendingUp },
          { value: "4.9★", label: "Investor Rating", icon: Star },
          { value: "100%", label: "RERA Verified", icon: ShieldCheck }
        ],
        properties: [
          { 
            title: "Bhutani Astrathum", 
            location: "Sector 133 Noida", 
            price: "₹6,990/sq.ft", 
            bhk: "Office Space", 
            area: "Commercial",
            badge: "TOP PICK",
            rating: 4.9,
            image: BhutaniAstrathumImage,
          },
          { 
            title: "Foodzani", 
            location: "Noida", 
            price: "₹32,990/sq.ft", 
            bhk: "Food Court", 
            area: "Retail",
            badge: "HOT DEAL",
            rating: 4.8,
            image: FoodzaniImage,
          },
          { 
            title: "City Center 32", 
            location: "Sector 32 Noida", 
            price: "₹33,000/sq.ft", 
            bhk: "Retail", 
            area: "Commercial",
            badge: "PREMIUM",
            rating: 4.9,
            image: CityCenter32Image,
          },
          { 
            title: "133 Avenue", 
            location: "Noida", 
            price: "₹26,990/sq.ft", 
            bhk: "Retail Shop", 
            area: "Investment",
            badge: "INVESTMENT",
            rating: 4.8,
            image: mayurimg,
          }
        ],
        amenities: [
          { icon: Building2, label: "Grade A Offices" },
          { icon: Coffee, label: "Food Court" },
          { icon: Wifi, label: "Business Lounge" },
          { icon: Car, label: "Parking" },
          { icon: ShieldCheck, label: "24/7 Security" },
          { icon: Tv, label: "Entertainment Zone" }
        ],
        testimonials: [
          { name: "Mr. Rajesh Kumar", review: "Bhutani Astrathum is a game-changer for commercial investment. The location and ROI potential are unmatched.", rating: 5, image: "https://randomuser.me/api/portraits/men/32.jpg" },
          { name: "Ms. Priya Singh", review: "Excellent commercial properties with great rental yields. The team provided exceptional guidance throughout.", rating: 5, image: "https://randomuser.me/api/portraits/women/44.jpg" }
        ]
      },

      // 2. NEW: Dholera Investment Data
      "dholera-investment": {
        title: "Dholera Smart City",
        subtitle: "Future Growth Destination",
        description: "Invest in one of India's most ambitious smart city developments with residential plots and long-term appreciation potential.",
        startingPrice: "₹13.8 L",
        projects: "300+",
        rating: "4.7★",
        stats: [
          { value: "35%", label: "Growth Potential", icon: TrendingUp },
          { value: "300+", label: "Available Plots", icon: MapPin },
          { value: "36 Months", label: "Return Plan", icon: Clock },
          { value: "Smart City", label: "Govt Backed", icon: Crown }
        ],
        properties: [
          { 
            title: "Mayur Forest Villa", 
            location: "Dholera Smart City", 
            price: "₹10,450/sq.yd", 
            bhk: "Residential Plot", 
            area: "301 sq.yd",
            badge: "NEW LAUNCH",
            rating: 4.7,
            image: mayurimg
          }
        ],
        amenities: [
          { icon: Trees, label: "Green Township" },
          { icon: Car, label: "Road Network" },
          { icon: ShieldCheck, label: "Gated Entry" },
          { icon: Sun, label: "Smart Infrastructure" }
        ],
        testimonials: [
          { name: "Mr. Amit Bansal", review: "Dholera Smart City is the next big thing. Mayur Forest Villa offers incredible value and growth potential.", rating: 4.9, image: "https://randomuser.me/api/portraits/men/62.jpg" }
        ]
      },

      // 4. REMOVED: luxury-apartment and premium-villa
      // Keeping for fallback but removing from browse types
      "default": {
        title: "Premium Properties",
        subtitle: "Exclusive Collection",
        description: "Discover our curated selection of premium properties across NCR.",
        startingPrice: "₹34.9 L",
        projects: "50+",
        rating: "4.9★",
        stats: [
          { value: "50+", label: "Projects", icon: Building2 },
          { value: "4.9★", label: "Rating", icon: Star },
          { value: "100%", label: "RERA Verified", icon: ShieldCheck },
          { value: "24/7", label: "Support", icon: Clock }
        ],
        properties: [
          { 
            title: "Bhutani Astrathum", 
            location: "Sector 133 Noida", 
            price: "₹6,990/sq.ft", 
            bhk: "Office Space", 
            area: "Commercial",
            badge: "TOP PICK",
            rating: 4.9,
            image: BhutaniAstrathumImage
          }
        ],
        amenities: [
          { icon: Building2, label: "Premium Spaces" },
          { icon: ShieldCheck, label: "RERA Approved" },
          { icon: Wifi, label: "Smart Infrastructure" },
          { icon: Car, label: "Parking" }
        ],
        testimonials: []
      }
    };
    
    const slugMap = {
  "commercial-office": "commercial-space",
  "retail-shops": "commercial-space",
  "food-court": "commercial-space",
  "soho-suites": "commercial-space",
  "studio-apartments": "commercial-space",
  "residential-plots": "dholera-investment",
};

console.log("Mapped:", slugMap[slug] || slug);
console.log("Data:", data[slugMap[slug] || slug]);

return data[slugMap[slug] || slug] || data["default"];

  };

  const propertyData = getPropertyData();

  return (
    <div className="property-page">

      {/* ============================================================
          HERO SECTION
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

          {/* 5. UPDATED: Hero Title */}
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

          {/* Hero Property Stats */}
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
            <Link to="/contact" className="secondary-btn glass-btn">
              <Phone size={18} />
              Talk to Expert
            </Link>
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

          {/* Trust Strip */}
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
          STATS SECTION - ✅ REPLACED with simplified version
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
              <div className="stat-icon-wrapper">
                <stat.icon size={32} color="#B8892D" />
              </div>
              <div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ============================================================
          PROPERTY GRID (6. UPDATED: Listing Title)
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
            {/* 6. UPDATED: Listing Title */}
            <h2>Top <span className="gold-text">Commercial & Investment</span> Projects</h2>
            <p>Handpicked premium properties designed for the discerning investor</p>
          </motion.div>
          
          <motion.div 
            className="listing-filter"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Commercial</button>
            <button className="filter-btn">Retail</button>
            <button className="filter-btn">Plots</button>
            <button className="filter-btn">Investment</button>
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
                
                <div className="exclusive-ribbon">
                  Premium Investment
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
                  <span>🏢 Commercial</span>
                  <span>📈 High ROI</span>
                  <span>🛡 RERA</span>
                </div>

                <div className="card-footer-premium">
                  <div className="price-block">
                    <span>Starting From</span>
                    <strong>{property.price}</strong>
                  </div>
                  <Link to="/contact" className="property-cta-premium">
                    Explore <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ============================================================
          AMENITIES SECTION - ✅ REPLACED with simplified version
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
            <h2>Designed for <span className="gold-text">Investment</span> Success</h2>
            <p>Every detail crafted to maximize value and returns</p>
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
          TESTIMONIALS
      ============================================================ */}
      {propertyData.testimonials && propertyData.testimonials.length > 0 && (
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
                Investor Testimonials
              </span>
              <h2>What Our <span className="gold-text">Investors</span> Say</h2>
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
                      <span>Verified Investor</span>
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
            <span className="cta-badge">Ready to Invest</span>
            <h2>Find Your <span className="gold-text">Dream</span> Investment Today</h2>
            <p>Get expert consultation and access to exclusive investment deals</p>
            
            <div className="cta-actions-premium">
              <Link to="/contact" className="primary-btn gold-btn large">
                <Phone size={18} />
                Book Consultation
              </Link>
              <Link to="/contact" className="secondary-btn glass-btn large">
                <MessageCircle size={18} />
                WhatsApp Us
              </Link>
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