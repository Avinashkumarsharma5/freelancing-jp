

import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  CircleDollarSign,
  FileCheck2,
  Gavel,
  Home,
  Landmark,
  Mail,
  Map,
  MapPin,
  Menu,
  Mic,
  Phone,
  Search,
  ShieldCheck,
  TrendingUp,
  WalletCards,
  X,
  Star,
  MessageCircle,
  Users,
  Heart,
  GitCompare,
  Clock,
  School,
  Hospital,
  Train,
  Award,
  Sparkles,
  Video,
  Zap,
  ChevronRight,
  CheckCircle,
  Headphones,
  Briefcase,
  Globe,
  Languages,
} from "lucide-react";
import './home.css';

// ======================================
// ANIMATION VARIANTS
// ======================================
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const scaleHover = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

// ======================================
// STATIC DATA
// ======================================
const quickFilters = ['Luxury', 'Ready To Move', 'New Launch', 'Smart Homes', 'Golf View'];

const browseTypes = [
  { title: 'Luxury Apartment', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80', count: '245 properties' },
  { title: 'Premium Villa', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', count: '128 properties' },
  { title: 'Luxury Plot', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80', count: '89 properties' },
  { title: 'Commercial Space', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80', count: '156 properties' },
  { title: 'Farmhouse', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', count: '42 properties' },
  { title: 'Penthouse', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80', count: '67 properties' },
];

const featuredProperties = [
  {
    badge: 'HOT DEAL',
    title: 'ACE Terra Residences',
    location: 'Sector 150, Noida',
    price: '₹1.45 Cr',
    area: '1,650 sq.ft',
    bhk: '3 BHK',
    builder: 'ACE Group',
    image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1000&q=80',
    metro: '5 min',
    school: '8 min',
    hospital: '12 min',
    rating: 4.8
  },
  {
    badge: 'TOP PICK',
    title: 'M3M Golf Estate',
    location: 'Golf Course Extn, Gurgaon',
    price: '₹3.25 Cr',
    area: '2,350 sq.ft',
    bhk: '4 BHK',
    builder: 'M3M India',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
    metro: '3 min',
    school: '6 min',
    hospital: '10 min',
    rating: 4.9
  },
  {
    badge: 'RERA',
    title: 'Godrej Woods',
    location: 'Sector 43, Noida',
    price: '₹2.10 Cr',
    area: '1,950 sq.ft',
    bhk: '3.5 BHK',
    builder: 'Godrej Properties',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=80',
    metro: '7 min',
    school: '4 min',
    hospital: '15 min',
    rating: 4.7
  },
  {
    badge: 'LUXURY',
    title: 'ATS Pristine Villas',
    location: 'Greater Noida West',
    price: '₹4.80 Cr',
    area: '3,900 sq.ft',
    bhk: '5 BHK',
    builder: 'ATS Group',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
    metro: '10 min',
    school: '8 min',
    hospital: '18 min',
    rating: 4.9
  },
];

const premiumLocations = [
  { name: 'Noida', properties: 245, growth: 15.2, image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80' },
  { name: 'Greater Noida', properties: 186, growth: 22.8, image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80' },
  { name: 'Gurgaon', properties: 340, growth: 18.5, image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80' },
  { name: 'Delhi', properties: 198, growth: 12.3, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80' },
  { name: 'Noida Extension', properties: 167, growth: 28.4, image: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=900&q=80' },
  { name: 'Dwarka Expressway', properties: 234, growth: 25.7, image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80' },
];



const services = [
  { title: 'Buy Luxury Homes', icon: Home, desc: 'Curated collection of premium properties', color: '#D4AF37' },
  { title: 'Sell Your Property', icon: CircleDollarSign, desc: 'Expert valuation & marketing', color: '#0F172A' },
  { title: 'Premium Rentals', icon: Building2, desc: 'Luxury leasing solutions', color: '#D4AF37' },
  { title: 'Investment Advisory', icon: TrendingUp, desc: 'High-ROI opportunities', color: '#0F172A' },
  { title: 'Home Loan Assistance', icon: Landmark, desc: 'Best rates from top banks', color: '#D4AF37' },
  { title: 'Legal Consultation', icon: FileCheck2, desc: 'End-to-end documentation', color: '#0F172A' },
];

const launches = [
  { name: 'Skyline Avenue', launchDate: '15 Jul 2026', price: '₹82 L', possession: 'Dec 2029', builder: 'Gaur Group', brochure: '#' },
  { name: 'Urban Crest', launchDate: '28 Aug 2026', price: '₹1.15 Cr', possession: 'Mar 2030', builder: 'Godrej Properties', brochure: '#' },
  { name: 'The Green Arc', launchDate: '10 Sep 2026', price: '₹95 L', possession: 'Jun 2029', builder: 'ATS Group', brochure: '#' },
];

const readyHomes = [
  { name: 'Palm Court Homes', highlight: 'Immediate Possession', price: '₹1.05 Cr', location: 'Sector 76, Noida', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80' },
  { name: 'Emerald Suites', highlight: 'Immediate Possession', price: '₹1.85 Cr', location: 'Golf Course Road', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
  { name: 'Riverfront Floors', highlight: 'Immediate Possession', price: '₹72 L', location: 'Greater Noida West', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80' },
];

const developers = [
  { name: 'DLF', logo: 'DLF', color: '#0F172A' },
  { name: 'Godrej', logo: 'Godrej', color: '#D4AF37' },
  { name: 'ATS', logo: 'ATS', color: '#0F172A' },
  { name: 'Sobha', logo: 'Sobha', color: '#D4AF37' },
  { name: 'M3M', logo: 'M3M', color: '#0F172A' },
  { name: 'TATA', logo: 'TATA', color: '#D4AF37' },
  { name: 'ACE', logo: 'ACE', color: '#0F172A' },
  { name: 'Prestige', logo: 'Prestige', color: '#D4AF37' },
];

const premiumAgents = [
  {
    name: 'Neha Kapoor',
    rating: 4.9,
    experience: '9 Years',
    deals: '320+',
    specialization: 'Luxury Homes Specialist',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    badge: 'Premium Agent',
    languages: ['English', 'Hindi'],
    phone: '+919876543210',
    whatsapp: '919876543210'
  },
  {
    name: 'Arjun Malhotra',
    rating: 4.8,
    experience: '11 Years',
    deals: '410+',
    specialization: 'Commercial & IT Parks',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    badge: 'Top Rated',
    languages: ['English', 'Hindi', 'Punjabi'],
    phone: '+919876543211',
    whatsapp: '919876543211'
  },
  {
    name: 'Sana Khan',
    rating: 5.0,
    experience: '7 Years',
    deals: '260+',
    specialization: 'New Launches Expert',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    badge: 'Client Choice',
    languages: ['English', 'Hindi', 'Urdu'],
    phone: '+919876543212',
    whatsapp: '919876543212'
  },
];

const premiumTestimonials = [
  {
    name: 'Rohit Sharma',
    location: 'Noida',
    property: 'ACE Terra Residences',
    review: 'The team shortlisted only verified options and helped us close our 3 BHK without confusion. Exceptional service!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5
  },
  {
    name: 'Priya Mehta',
    location: 'Gurgaon',
    property: 'M3M Golf Estate',
    review: 'Site visits, price comparison, loan support, everything was handled professionally. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5
  },
  {
    name: 'Amit Bansal',
    location: 'Delhi',
    property: 'Godrej Woods',
    review: 'Their investment advice around upcoming corridors was clear and practical. Best decision we made.',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    rating: 4.9
  },
];

const faqs = [
  { q: 'Are all listings RERA verified?', a: 'Yes. Every property we list is RERA registered and verified for authenticity, pricing, and delivery timelines.' },
  { q: 'Do you provide home loan assistance?', a: 'Absolutely. We partner with HDFC, SBI, ICICI, and Axis Bank to get you the best interest rates and quick approval.' },
  { q: 'Can I schedule a site visit?', a: 'Yes, our concierge team will arrange a guided site visit at your preferred time, including transportation if needed.' },
  { q: 'What are your service charges?', a: 'Initial consultation and property discovery are completely free. Service fees are transparent and discussed upfront.' },
  { q: 'Do you assist with legal verification?', a: 'Yes, our legal team does complete due diligence including title search, encumbrance check, and documentation.' },
];

// ======================================
// NAVBAR COMPONENT
// ======================================
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = ["Home", "Properties", "Locations", "Services", "About", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">MS</span>
          <span className="brand-text">Milesquare Realty</span>
        </a>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
        </div>
        <div className="nav-right">
          <a className="nav-cta" href="tel:+919876543210">
            <Phone size={17} />
            Call Now
          </a>
          <button className="menu-btn" type="button" aria-label="Toggle navigation" onClick={() => setOpen((value) => !value)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

// ======================================
// PREMIUM VIDEO HERO SECTION
// ======================================
function PremiumVideoHero() {
  const [activeTab, setActiveTab] = useState('buy');

  const tabs = [
    { id: 'buy', label: 'Buy', icon: Home },
    { id: 'rent', label: 'Rent', icon: Building2 },
    { id: 'commercial', label: 'Commercial', icon: Briefcase },
    { id: 'plot', label: 'Plot', icon: Map },
  ];

  const floatingCards = [
    { icon: Zap, text: 'Hot Deal', color: '#D4AF37', bg: 'rgba(212, 175, 55, 0.15)' },
    { icon: TrendingUp, text: '₹1.45 Cr | ACE Terra', color: '#0F172A', bg: 'rgba(15, 23, 42, 0.85)' },
    { icon: Star, text: '⭐ 4.9 Rating', color: '#D4AF37', bg: 'rgba(212, 175, 55, 0.15)' },
    { icon: Sparkles, text: '📈 15% ROI Potential', color: '#0F172A', bg: 'rgba(15, 23, 42, 0.85)' },
  ];

  return (
    <section className="premium-hero">
      <div className="hero-video-container">
        <video 
          className="hero-video" 
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=80"
        >
          <source src="https://assets.mixkit.co/videos/premium/mixkit-drone-flying-over-a-luxury-villa-32879.mp4" type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>

      <div className="site-container hero-content">
        <div className="hero-left">
          <motion.div className="trust-badge" initial="hidden" animate="visible" variants={fadeUp}>
            <ShieldCheck size={18} />
            Verified Real Estate Advisory
          </motion.div>
          
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}>
            Find Your Dream Home
            <span className="gold-text"> Across NCR's Best Locations</span>
          </motion.h1>

          <motion.div className="hero-stats" initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.2 }}>
            <div className="stat"><strong>1200+</strong><span>Verified Listings</span></div>
            <div className="stat"><strong>15000+</strong><span>Happy Families</span></div>
            <div className="stat"><strong>50+</strong><span>Developer Partners</span></div>
          </motion.div>

          <motion.div className="hero-buttons" initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.3 }}>
            <a href="#properties" className="primary-btn gold-btn">
              Explore Properties <ArrowRight size={18} />
            </a>
            <a href="#contact" className="secondary-btn glass-btn">
              Book Site Visit <CalendarDays size={18} />
            </a>
          </motion.div>
        </div>

        
      </div>

      
    </section>
  );
}



function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <strong ref={ref}>{count}{suffix}</strong>;
}

function StatsBar() {
  const stats = [
    { value: 20, suffix: "+", label: "Years Advisory" },
    { value: 15000, suffix: "+", label: "Families Served" },
    { value: 50, suffix: "+", label: "Developer Partners" },
    { value: 1200, suffix: "+", label: "Verified Listings" },
  ];

  return (
    <>
      {/* STATS */}

      <section className="stats-strip">
        <div className="site-container stats-grid">
          {stats.map((stat, idx) => (
            <div className="stat-item" key={idx}>
              <Counter end={stat.value} suffix={stat.suffix} />
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

{/* VIDEO SECTION */}

<section className="stats-video-section">

  <div className="video-info">
    <span className="video-tag">
      Premium Property Tour
    </span>

    <h2>
      Discover Luxury Living Across NCR
    </h2>

    <p>
      Explore premium villas, luxury apartments,
      commercial spaces and high-return investment
      opportunities across Noida, Gurgaon and Delhi.
    </p>
  </div>

  <div className="video-wrapper">

    <video
      autoPlay
      muted
      loop
      playsInline
      className="stats-video"
    >
      <source
        src="/videos/property.mp4"
        type="video/mp4"
      />
    </video>

    <div className="video-overlay">
      <span className="overlay-badge">
        Featured Project
      </span>

      <h3>
        Experience Premium Living
      </h3>

      <p>
        Luxury Apartments • Villas • Commercial Spaces
      </p>

      <div className="overlay-buttons">
        <button className="primary-btn gold-btn">
          Explore Properties
        </button>

        <button className="secondary-btn glass-btn">
          Book Site Visit
        </button>
      </div>
    </div>

  </div>

</section>
    </>
  );
}
// ======================================
// SECTION HEADING
// ======================================
function SectionHeading({ kicker, title, align = 'left' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'center-heading' : ''}`}>
      <span className="section-kicker">
        <Award size={16} />
        {kicker}
      </span>
      <h2>{title}</h2>
    </div>
  );
}

// ======================================
// BROWSE BY TYPE
// ======================================
function BrowseByType() {
  return (
    <section className="section type-section">
      <div className="site-container">
        <SectionHeading kicker="Browse by type" title="Choose the property style that fits your plan." />
        <div className="type-grid">
          {browseTypes.map((type) => (
            <motion.article 
              className="image-card premium-type-card" 
              key={type.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <img src={type.image} alt={type.title} loading="lazy" />
              <div className="image-card-overlay">
                <h3>{type.title}</h3>
                <p>{type.count}</p>
                <ArrowRight size={20} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================
// PREMIUM FEATURED PROPERTIES
// ======================================
function PremiumFeaturedProperties() {
  const [savedProperties, setSavedProperties] = useState([]);

  const toggleSave = (title) => {
    if (savedProperties.includes(title)) {
      setSavedProperties(savedProperties.filter(t => t !== title));
    } else {
      setSavedProperties([...savedProperties, title]);
    }
  };

  return (
    <section id="properties" className="section properties-section premium-properties">
      <div className="site-container">
        <SectionHeading kicker="Featured properties" title="Handpicked listings with verified details." />
        <div className="property-grid premium-property-grid">
          {featuredProperties.map((property, idx) => (
            <motion.article 
              className="premium-property-card" 
              key={property.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -12 }}
            >
              <div className="property-image-container">
                <img src={property.image} alt={property.title} loading="lazy" />
                <span className={`property-badge ${property.badge.toLowerCase().replace(' ', '-')}`}>{property.badge}</span>
                <div className="property-quick-actions">
                  <button className="quick-action" onClick={() => toggleSave(property.title)}>
                    <Heart size={18} fill={savedProperties.includes(property.title) ? '#D4AF37' : 'none'} color={savedProperties.includes(property.title) ? '#D4AF37' : '#fff'} />
                  </button>
                  <button className="quick-action">
                    <GitCompare size={18} />
                  </button>
                </div>
              </div>
              <div className="property-body">
                <div className="property-price-rating">
                  <span className="price">{property.price}</span>
                  <div className="rating">
                    <Star size={14} fill="#D4AF37" color="#D4AF37" />
                    <span>{property.rating}</span>
                  </div>
                </div>
                <h3>{property.title}</h3>
                <p className="location"><MapPin size={14} />{property.location}</p>
                <div className="property-specs">
                  <span>{property.bhk}</span>
                  <span>{property.area}</span>
                  <span>{property.builder}</span>
                </div>
                <div className="property-amenities">
                  <div className="amenity"><Train size={12} /> Metro: {property.metro}</div>
                  <div className="amenity"><School size={12} /> School: {property.school}</div>
                  <div className="amenity"><Hospital size={12} /> Hospital: {property.hospital}</div>
                </div>
                <div className="property-ctas">
                  <button className="primary-btn small">View Details</button>
                  <button className="secondary-btn small">Schedule Visit</button>
                  <button className="outline-btn small">Contact Advisor</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================
// PREMIUM LOCATIONS
// ======================================
function PremiumLocations() {
  return (
    <section id="locations" className="section locations-section premium-locations">
      <div className="site-container">
        <SectionHeading kicker="Top locations" title="Explore high-demand city pockets with growth potential." />
        <div className="location-grid premium-location-grid">
          {premiumLocations.map((location, idx) => (
            <motion.article 
              className="premium-location-card" 
              key={location.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={location.image} alt={location.name} loading="lazy" />
              <div className="location-overlay">
                <div className="location-info">
                  <h3>{location.name}</h3>
                  <p>{location.properties} Properties</p>
                  <div className="growth-badge">
                    <TrendingUp size={14} />
                    ↑ {location.growth}% Growth
                  </div>
                </div>
                <ArrowRight size={24} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================
// WHY CHOOSE US (PREMIUM)
// ======================================
function PremiumWhyChooseUs() {
  const features = [
    { icon: ShieldCheck, title: 'RERA Approved Projects', desc: '100% verified properties with RERA certification' },
    { icon: FileCheck2, title: 'Legal Documentation', desc: 'Complete due diligence and title verification' },
    { icon: WalletCards, title: 'Home Loan Support', desc: 'Best rates from 20+ leading banks' },
    { icon: CalendarDays, title: 'Free Site Visits', desc: 'Guided tours with expert advisors' },
    { icon: TrendingUp, title: 'Investment Advisory', desc: 'High-ROI micro-market insights' },
    { icon: Headphones, title: '24/7 Customer Support', desc: 'Dedicated relationship manager' },
  ];

  return (
    <section className="section why-section premium-why">
      <div className="site-container">
        <SectionHeading kicker="Why choose us" title="Experience the difference with Milesquare." align="center" />
        <div className="premium-feature-grid">
          {features.map((feature, idx) => (
            <motion.div 
              className="premium-feature-card"
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <div className="feature-icon">
                <feature.icon size={32} color="#D4AF37" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================
// SERVICES SECTION
// ======================================
function PremiumServicesSection() {
  return (
    <section id="services" className="section services-section premium-services">
      <div className="site-container">
        <SectionHeading kicker="Services" title="Everything you need before and after buying." align="center" />
        <div className="services-grid premium-services-grid">
          {services.map((service, idx) => (
            <motion.article 
              className="premium-service-card" 
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon" style={{ backgroundColor: service.color === '#D4AF37' ? 'rgba(212, 175, 55, 0.1)' : 'rgba(15, 23, 42, 0.05)' }}>
                <service.icon size={32} color={service.color} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="service-link">
                Learn More <ArrowRight size={16} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================
// NEW LAUNCHES & READY TO MOVE
// ======================================
function PremiumLaunchAndReady() {
  return (
    <section className="section launch-section premium-launch">
      <div className="site-container launch-ready-grid">
        <div>
          <SectionHeading kicker="New launch" title="Upcoming projects with launch-stage pricing." />
          <div className="info-card-list">
            {launches.map((launch, idx) => (
              <motion.article 
                className="premium-launch-card" 
                key={launch.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="launch-header">
                  <span className="ribbon premium">NEW LAUNCH</span>
                  <span className="launch-date">{launch.launchDate}</span>
                </div>
                <h3>{launch.name}</h3>
                <div className="launch-details">
                  <div><span>Builder</span><strong>{launch.builder}</strong></div>
                  <div><span>Starting Price</span><strong>{launch.price}</strong></div>
                  <div><span>Possession</span><strong>{launch.possession}</strong></div>
                </div>
                <div className="launch-ctas">
                  <button className="primary-btn small">Download Brochure</button>
                  <button className="secondary-btn small">Contact Advisor</button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading kicker="Ready to move" title="Immediate possession homes." />
          <div className="ready-grid">
            {readyHomes.map((home, idx) => (
              <motion.article 
                className="premium-ready-card" 
                key={home.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: idx * 0.05 }}
              >
                <img src={home.image} alt={home.name} loading="lazy" />
                <div className="ready-content">
                  <span className="ready-badge premium">READY TO MOVE</span>
                  <h3>{home.name}</h3>
                  <p>{home.highlight}</p>
                  <div className="ready-price">{home.price}</div>
                  <div className="ready-location"><MapPin size={14} />{home.location}</div>
                  <button className="primary-btn small">Schedule Visit</button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ======================================
// DEVELOPER SHOWCASE
// ======================================
function PremiumDeveloperShowcase() {
  return (
    <section className="section developer-section premium-developer">
      <div className="site-container">
        <SectionHeading kicker="Developer showcase" title="Trusted builders and proven delivery records." align="center" />
        <div className="premium-logo-marquee">
          <div className="premium-logo-track">
            {[...developers, ...developers].map((dev, idx) => (
              <div className="premium-logo-card" key={idx}>
                <span style={{ color: dev.color }}>{dev.logo}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="developer-stats premium">
          <div><strong>20+ Years</strong><span>Market experience</span></div>
          <div><strong>15000+ Families</strong><span>Home buying support</span></div>
          <div><strong>50+ Projects</strong><span>Developer network</span></div>
        </div>
      </div>
    </section>
  );
}



// ======================================
// PREMIUM TESTIMONIALS
// ======================================
function PremiumTestimonials() {
  return (
    <section className="section testimonials-section premium-testimonials">
      <div className="site-container">
        <SectionHeading kicker="Testimonials" title="What our customers say about us." align="center" />
        <div className="premium-testimonial-slider">
          {premiumTestimonials.map((testimonial, idx) => (
            <motion.article 
              className="premium-testimonial-card" 
              key={testimonial.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.location}</span>
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < testimonial.rating ? '#D4AF37' : 'none'} color="#D4AF37" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="testimonial-property">
                <Building2 size={14} />
                Purchased: {testimonial.property}
              </div>
              <p>"{testimonial.review}"</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================
// LUXURY AGENT SHOWCASE
// ======================================
function LuxuryAgentShowcase() {
  return (
    <section className="section team-section luxury-agents">
      <div className="site-container">
        <SectionHeading kicker="Our Experts" title="Meet your dedicated real estate advisors." align="center" />
        <div className="team-grid premium-grid luxury-agent-grid">
          {premiumAgents.map((agent, idx) => (
            <motion.article 
              className="luxury-agent-card" 
              key={agent.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -12 }}
            >
              <div className="agent-badge premium">{agent.badge}</div>
              <img src={agent.image} alt={agent.name} className="agent-photo" loading="lazy" />
              <h3 className="agent-name">{agent.name}</h3>
              <div className="agent-rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(agent.rating) ? "#D4AF37" : "none"} color="#D4AF37" />
                ))}
                <span>{agent.rating}</span>
              </div>
              <p className="agent-specialization">{agent.specialization}</p>
              <div className="agent-stats-premium">
                <div><span>📅 {agent.experience}</span></div>
                <div><span>🏆 {agent.deals} Deals</span></div>
              </div>
              <div className="agent-languages">
                <Languages size={14} />
                {agent.languages.join(' • ')}
              </div>
              <div className="agent-actions premium">
                <a href={`https://wa.me/${agent.whatsapp}`} className="whatsapp-btn" aria-label="WhatsApp"><MessageCircle size={18} /> WhatsApp</a>
                <a href={`tel:${agent.phone}`} className="call-btn" aria-label="Call"><Phone size={18} /> Call</a>
                <a href="#contact" className="consult-btn">Book Consultation</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================
// PREMIUM FAQ
// ======================================
function PremiumFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section premium-faq">
      <div className="site-container faq-layout">
        <SectionHeading kicker="FAQ" title="Common questions, clear answers." />
        <div className="faq-list premium">
          {faqs.map((faq, index) => (
            <motion.div 
              className="premium-faq-item" 
              key={faq.q}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: index * 0.05 }}
            >
              <button type="button" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <span>{faq.q}</span>
                <strong>{openIndex === index ? '−' : '+'}</strong>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: 'auto', opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }}
                  >
                    {faq.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================
// SITE VISIT BOOKING FORM
// ======================================
function SiteVisitBooking() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Thank you! Our concierge team will contact you within 30 minutes.');
    event.currentTarget.reset();
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="section booking-section">
      <div className="site-container booking-grid">
        <div className="booking-info">
          <span className="section-kicker">Schedule a Visit</span>
          <h2>Experience luxury <span className="gold-text">in person.</span></h2>
          <p>Our expert advisors will guide you through premium properties, arrange site visits, and help you make an informed decision.</p>
          <div className="booking-benefits">
            <div><CheckCircle size={18} /> Free site visit coordination</div>
            <div><CheckCircle size={18} /> Personalized property shortlist</div>
            <div><CheckCircle size={18} /> Expert advisor accompaniment</div>
            <div><CheckCircle size={18} /> Tea/Coffee refreshments</div>
          </div>
        </div>

        <form className="premium-booking-form" onSubmit={handleSubmit}>
          <h3>Book a Site Visit</h3>
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-row">
            <select required defaultValue="">
              <option value="" disabled>Budget Range</option>
              <option>₹50 L - ₹1 Cr</option>
              <option>₹1 Cr - ₹2 Cr</option>
              <option>₹2 Cr - ₹4 Cr</option>
              <option>₹4 Cr+</option>
            </select>
            <select required defaultValue="">
              <option value="" disabled>Preferred Location</option>
              <option>Noida</option>
              <option>Gurgaon</option>
              <option>Greater Noida</option>
              <option>Delhi</option>
            </select>
          </div>
          <div className="form-row">
            <select required defaultValue="">
              <option value="" disabled>Property Type</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Plot</option>
              <option>Commercial</option>
            </select>
            <input type="date" required />
          </div>
          <div className="form-row">
            <select defaultValue="">
              <option>Preferred Time Slot</option>
              <option>10 AM - 12 PM</option>
              <option>12 PM - 3 PM</option>
              <option>3 PM - 6 PM</option>
            </select>
            <input type="text" placeholder="Additional Message" />
          </div>
          <button className="primary-btn gold-btn full-width" type="submit">
            Request Callback <ArrowRight size={18} />
          </button>
          {status && <p className="form-status success">{status}</p>}
        </form>
      </div>
    </section>
  );
}

// ======================================
// LUXURY CTA SECTION
// ======================================
function LuxuryCTASection() {
  return (
    <section className="luxury-cta">
      <div className="site-container cta-content">
        <motion.div 
          className="cta-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="cta-kicker">Ready to move?</span>
          <h2>Ready To Find <span className="gold-text">Your Dream Home?</span></h2>
          <p>Join 15,000+ happy families who found their perfect home with Milesquare Realty.</p>
        </motion.div>
        <motion.div 
          className="cta-buttons"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <a href="#contact" className="primary-btn gold-btn large">
            Book Consultation <CalendarDays size={20} />
          </a>
          <a href="tel:+919876543210" className="secondary-btn glass-btn large">
            Talk to Expert <Headphones size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ======================================
// PREMIUM FOOTER
// ======================================
function PremiumFooter() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="premium-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark">MS</span>
              <span>Milesquare Realty</span>
            </a>
            <p>India's most trusted real estate advisory, helping you find luxury homes with verified listings and expert guidance.</p>
            <div className="footer-contact">
              <a href="tel:+919876543210"><Phone size={18} /> +91 98765 43210</a>
              <a href="mailto:hello@milesquare.com"><Mail size={18} /> hello@milesquare.com</a>
              <p><MapPin size={18} /> Sector 62, Noida | Gurgaon | Delhi NCR</p>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Globe size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Briefcase size={20} /></a>
              <a href="#" aria-label="Instagram"><Building2 size={20} /></a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <a href="#properties">Properties</a>
            <a href="#locations">Locations</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact Us</a>
            <a href="#">About Us</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">RERA Information</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Sitemap</a>
          </div>
          <div>
            <h4>Newsletter</h4>
            <p>Get exclusive property deals and market insights.</p>
            <div className="footer-newsletter">
              <input type="email" placeholder="Email address" />
              <button type="button"><ArrowRight size={18} /></button>
            </div>
            <div className="rera-badge">
              <ShieldCheck size={16} />
              RERA Registered: UPRERAPRJ123456
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Copyright {year} Milesquare Realty. All rights reserved.</span>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">RERA Information</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ======================================
// FLOATING ACTIONS
// ======================================
function FloatingActions() {
  return (
    <>
      <div className="floating-actions">
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="floating-btn whatsapp">
          <MessageCircle size={24} />
        </a>
        <a href="tel:+919876543210" className="floating-btn call">
          <Phone size={24} />
        </a>
        <a href="#contact" className="floating-btn book">
          <CalendarDays size={24} />
        </a>
      </div>
      
    </>
  );
}

// ======================================
// MAIN HOMEPAGE
// ======================================
function HomePage() {
  return (
    <main>
      <Navbar />
      <PremiumVideoHero />
      
      <StatsBar />
      <BrowseByType />
      <PremiumFeaturedProperties />
      <PremiumLocations />
      <PremiumWhyChooseUs />
      <PremiumServicesSection />
      <PremiumLaunchAndReady />
      <PremiumDeveloperShowcase />
     
      <PremiumTestimonials />
      <LuxuryAgentShowcase />
      <PremiumFAQ />
      <SiteVisitBooking />
      <LuxuryCTASection />
      <PremiumFooter />
      <FloatingActions />
    </main>
  );
}

export default HomePage;