import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import heroVideo from "../assets/jpmp5.mp4";
import logo2 from "../assets/logo.png";
import { useMemo, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CircleDollarSign,
  FileCheck2,
  Home,
  Landmark,
  Mail,
  Menu,
  Heart,
  MapPin,
  Train,
  School,
  Hospital,
  Phone,
  ShieldCheck,
  TrendingUp,
  WalletCards,
  X,
  Star,
  MessageCircle,
  GitCompare,
  Award,
  Sparkles,
  ChevronRight,
  Headphones,
  Briefcase,
  Globe,
  Languages,
  Play,
  ChevronLeft,
} from "lucide-react";
import './home.css';

// ======================================
// ANIMATION VARIANTS (Enhanced)
// ======================================
const fadeUp = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

// ======================================
// STATIC DATA (unchanged)
// ======================================
const browseTypes = [
  {
    title: "Luxury Apartment",
    slug: "luxury-apartment",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80",
    count: "245 properties",
  },
  {
    title: "Premium Villa",
    slug: "premium-villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    count: "128 properties",
  },
  {
    title: "Luxury Plot",
    slug: "luxury-plot",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    count: "89 properties",
  },
  {
    title: "Commercial Space",
    slug: "commercial-space",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    count: "156 properties",
  },
  {
    title: "Farmhouse",
    slug: "farmhouse",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    count: "42 properties",
  },
  {
    title: "Penthouse",
    slug: "penthouse",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
    count: "67 properties",
  },
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
  {
    name: "Noida",
    slug: "noida",
    properties: 245,
    growth: 15.2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Greater Noida",
    slug: "greater-noida",
    properties: 186,
    growth: 22.8,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Gurgaon",
    slug: "gurgaon",
    properties: 340,
    growth: 18.5,
    image: "https://images.unsplash.com/photo-1494524983934-85a5d6126f96?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Delhi",
    slug: "delhi",
    properties: 198,
    growth: 12.3,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Noida Extension",
    slug: "noida-extension",
    properties: 167,
    growth: 28.4,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Dwarka Expressway",
    slug: "dwarka-expressway",
    properties: 234,
    growth: 25.7,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80"
  }
];
const services = [
  { title: 'Buy Luxury Homes', icon: Home, desc: 'Curated collection of premium properties', color: '#B8892D' },
  { title: 'Sell Your Property', icon: CircleDollarSign, desc: 'Expert valuation & marketing', color: '#1B1B1B' },
  { title: 'Premium Rentals', icon: Building2, desc: 'Luxury leasing solutions', color: '#B8892D' },
  { title: 'Investment Advisory', icon: TrendingUp, desc: 'High-ROI opportunities', color: '#1B1B1B' },
  { title: 'Home Loan Assistance', icon: Landmark, desc: 'Best rates from top banks', color: '#B8892D' },
  { title: 'Legal Consultation', icon: FileCheck2, desc: 'End-to-end documentation', color: '#1B1B1B' },
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
  { name: 'DLF', logo: 'DLF', color: '#1B1B1B' },
  { name: 'Godrej', logo: 'Godrej', color: '#B8892D' },
  { name: 'ATS', logo: 'ATS', color: '#1B1B1B' },
  { name: 'Sobha', logo: 'Sobha', color: '#B8892D' },
  { name: 'M3M', logo: 'M3M', color: '#1B1B1B' },
  { name: 'TATA', logo: 'TATA', color: '#B8892D' },
  { name: 'ACE', logo: 'ACE', color: '#1B1B1B' },
  { name: 'Prestige', logo: 'Prestige', color: '#B8892D' },
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
// ENHANCEMENT COMPONENTS
// ======================================

function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="luxury-loader">

      <div className="loader-bg-grid"></div>

      <div className="loader-card">

        <div className="logo-wrapper">

          {/* Replace with your logo */}
         <img
  src={logo2}
  alt="Milesquare Realty"
  className="loader-logo"
/>

          <div className="gold-ring"></div>
        </div>

        <h1 className="loader-title">
          Milesquare Realty
        </h1>

        <p className="loader-tagline">
          Luxury Living Across NCR
        </p>

        <div className="premium-progress">
          <motion.div
            className="premium-progress-fill"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 3 }}
          />
        </div>

        <motion.div
          className="loader-percent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Loading Premium Properties...
        </motion.div>

      </div>

    </div>
  );
}
// 2. Scroll Progress Bar
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(progress);
    };
    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="scroll-progress-bar">
      <div className="scroll-progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}

// 3. Hero Glow (Mouse Follow)
function HeroGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (rect) {
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div 
      className="hero-glow-wrapper" 
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="hero-glow"
        style={{
          left: position.x - 200,
          top: position.y - 200,
        }}
      />
    </div>
  );
}

// 4. Floating Particles
const floatingParticlesData = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: Math.random() * 8 + 4,
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 10,
  x: Math.random() * 100,
  y: Math.random() * 100,
}));

function FloatingParticles() {
  return (
    <div className="floating-particles">
      {floatingParticlesData.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// 5. Video Popup Modal
function VideoPopup({ videoSrc, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="video-popup-overlay" onClick={onClose}>
      <div className="video-popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-popup-close" onClick={onClose}>
          <X size={32} />
        </button>
        <video controls autoPlay className="video-popup-player">
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

// 6. Counter with comma formatting
// 7. Animated Location Counter
function LocationCounter({ target, suffix = "", duration = 1500 }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  const formatted = new Intl.NumberFormat('en-IN').format(count);
  return <span ref={ref}>{formatted}{suffix}</span>;
}

// 8. Section Divider
function SectionDivider() {
  return (
    <div className="section-divider">
      <div className="divider-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,0 720,60 1080,30 C1260,15 1380,30 1440,30 L1440,60 L0,60 Z" fill="#FAF7F1" />
        </svg>
      </div>
      <div className="divider-gold-line" />
    </div>
  );
}

// 9. Horizontal Slider (NEW)
const HorizontalSlider = ({ 
  children, 
  autoScroll = false, 
  scrollAmount = 420, 
  interval = 4000,
  className = "" 
}) => {
  const sliderRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  // Auto-scroll for testimonials
  useEffect(() => {
    if (!autoScroll) return;
    const intervalId = setInterval(() => {
      const el = sliderRef.current;
      if (!el) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }, interval);
    return () => clearInterval(intervalId);
  }, [autoScroll, scrollAmount, interval]);

  return (
    <div className={`horizontal-slider-wrapper ${className}`}>
      <div className="slider-controls">
        <button 
          className={`slider-arrow left ${!showLeft ? 'hidden' : ''}`}
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className={`slider-arrow right ${!showRight ? 'hidden' : ''}`}
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="horizontal-slider" ref={sliderRef}>
        {children}
      </div>
    </div>
  );
};

// ======================================
// NAVBAR
// ======================================

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`site-header ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <nav className="nav-shell">

        {/* Logo */}

        <Link
          to="/"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="Milesquare Realty"
            className="brand-logo"
          />
        </Link>

        {/* Navigation */}

        <div
          className={`nav-links ${
            open ? "is-open" : ""
          }`}
        >
          <a
            href="#home"
            onClick={() => setOpen(false)}
          >
            Home
          </a>

          <a
            href="#properties"
            onClick={() => setOpen(false)}
          >
            Properties
          </a>

          <a
            href="#services"
            onClick={() => setOpen(false)}
          >
            Services
          </a>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>

        {/* Right Side */}

        <div className="nav-right">

          <Link
            to="/contact"
            className="nav-cta"
          >
            <Phone size={17} />
            Contact Us
          </Link>

          <button
            type="button"
            className="menu-btn"
            aria-label="Toggle Navigation"
            onClick={() =>
              setOpen(!open)
            }
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>

      </nav>
    </header>
  );
}


// ======================================
// HERO (with all enhancements)
// ======================================
function PremiumVideoHero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="premium-hero">
      {/* Background Video */}
      <div className="hero-video-container">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="hero-video-overlay"></div>
      </div>

      {/* Effects */}
      <HeroGlow />
      <FloatingParticles />

      <div className="site-container hero-content">
        <div className="hero-left">

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Luxury Living
            <span className="gold-text">
              Beyond Expectations
            </span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Discover handpicked residences, exclusive investment
            opportunities, and premium living experiences across NCR.
          </motion.p>

          <motion.div
            className="hero-stats"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="stat">
              <strong>₹800Cr+</strong>
              <span>Transaction Value</span>
            </div>

            <div className="stat">
              <strong>15000+</strong>
              <span>Families Served</span>
            </div>

            <div className="stat">
              <strong>4.9★</strong>
              <span>Client Rating</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <a
              href="#properties"
              className="primary-btn gold-btn"
            >
              Explore Properties
              <ArrowRight size={18} />
            </a>

            <button
              className="secondary-btn glass-btn"
              onClick={() => setVideoOpen(true)}
            >
              <Play size={18} />
              Watch Tour
            </button>

            <Link
              to="/contact"
              className="secondary-btn glass-btn"
            >
              <CalendarDays size={18} />
              Book Site Visit
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Popup Video */}
      <VideoPopup
        videoSrc={heroVideo}
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />
    </section>
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
// BROWSE BY TYPE (3D hover)
// ======================================
function BrowseByType() {
  const navigate = useNavigate();

  return (
    <section className="section type-section">
      <div className="site-container">
        <SectionHeading kicker="Browse by type" title="Choose the property style that fits your plan." />
        <div className="type-grid">
          {browseTypes.map((type) => (
            <motion.article
              key={type.title}
              className="premium-type-card"
              whileHover={{ y: -10, scale: 1.02, rotateX: 3, rotateY: -3 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate(`/property-type/${type.slug}`)}
            >
              <img src={type.image} alt={type.title} />
              <div className="premium-overlay">
                <div>
                  <span className="property-tag">{type.count} Properties</span>
                  <h3>{type.title}</h3>
                  <p>Explore premium listings, luxury amenities and investment opportunities.</p>
                </div>
                <div className="arrow-circle">
                  <ArrowRight size={22} />
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
// FEATURED PROPERTIES (3D hover + shine)
// ======================================
function PremiumFeaturedProperties() {
  const [savedProperties, setSavedProperties] = useState([]);

  const toggleSave = (title) => {
    setSavedProperties((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  return (
    <section id="properties" className="section properties-section premium-properties">
      <div className="site-container">
        <SectionHeading kicker="Featured Collection" title="Handpicked Luxury Homes Across NCR" />

        <div className="property-grid premium-property-grid">
          {featuredProperties.map((property, idx) => (
            <motion.article
              className="premium-property-card"
              key={property.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ 
                y: -15, 
                rotateX: 3, 
                rotateY: -3,
                transition: { duration: 0.3 }
              }}
            >
              {/* Image with shine (via CSS) */}
              <div className="property-image-container">
                <img src={property.image} alt={property.title} loading="lazy" />
                <div className="property-image-overlay"></div>

                <span className={`property-badge ${property.badge.toLowerCase().replace(/\s+/g, "-")}`}>
                  {property.badge}
                </span>

                <div className="property-floating-price">{property.price}</div>
                <div className="property-floating-rating">
                  <Star size={14} fill="#B8892D" color="#B8892D" />
                  <span>{property.rating}</span>
                </div>

                <div className="property-quick-actions">
                  <button className="quick-action-btn" onClick={() => toggleSave(property.title)} aria-label="Save property">
                    <Heart size={18} fill={savedProperties.includes(property.title) ? "#B8892D" : "none"} color={savedProperties.includes(property.title) ? "#B8892D" : "#fff"} />
                  </button>
                  <button className="quick-action-btn" aria-label="Compare">
                    <GitCompare size={18} color="#fff" />
                  </button>
                </div>

                <div className="exclusive-tag">
                  <Sparkles size={12} /> Exclusive
                </div>
              </div>

              <div className="property-content">
                <div className="property-status">
                  <span className="status-badge ready">Ready To Move</span>
                  <span className="status-badge rera">RERA Approved</span>
                </div>

                <h3 className="property-title">{property.title}</h3>
                <p className="property-location">
                  <MapPin size={14} className="location-icon" />
                  {property.location}
                </p>

                <div className="property-highlights">
                  <span>🏆 Verified</span>
                  <span>🔥 Top Pick</span>
                  <span>⭐ Premium</span>
                </div>

                <div className="property-specs">
                  <div className="spec-item"><strong>{property.bhk}</strong><span>Config</span></div>
                  <div className="spec-divider"></div>
                  <div className="spec-item"><strong>{property.area}</strong><span>Area</span></div>
                  <div className="spec-divider"></div>
                  <div className="spec-item"><strong>{property.builder}</strong><span>Builder</span></div>
                </div>

                <div className="property-amenities">
                  <div className="amenity-item"><Train size={14} /><span>Metro {property.metro}</span></div>
                  <div className="amenity-item"><School size={14} /><span>School {property.school}</span></div>
                  <div className="amenity-item"><Hospital size={14} /><span>Hospital {property.hospital}</span></div>
                </div>

                <div className="property-ctas">
                  <button className="btn-primary-luxury">Explore Property <ArrowRight size={18} /></button>
                  <button className="btn-secondary-luxury"><CalendarDays size={16} /> Site Visit</button>
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
// PREMIUM LOCATIONS V3
// ======================================
function PremiumLocations() {

  const navigate = useNavigate();

  return (
    <section
      id="locations"
      className="section locations-section premium-locations"
    >
      <div className="site-container">

        <SectionHeading
          kicker="Top Locations"
          title="Explore NCR's Most Desirable Destinations"
        />

        <div className="premium-location-grid">

          {premiumLocations.map(
            (location, idx) => (
              <motion.article
               onClick={() =>
    navigate(`/location/${location.slug}`)
  }
                key={location.name}
                className="premium-location-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{
                  delay: idx * 0.08,
                }}
                whileHover={{
                  scale: 1.02,
                }}
              >

                <img
                  src={location.image}
                  alt={location.name}
                  loading="lazy"
                />

                <div className="location-overlay">

                  {/* TOP */}

                  <div className="location-top">

                    <span className="location-tag">
                      Investment Hotspot
                    </span>

                    <div className="growth-badge">
                      <TrendingUp size={14} />
                      +{location.growth}%
                    </div>

                  </div>

                  {/* BOTTOM */}

                  <div className="location-bottom">

                    <h3>
                      {location.name}
                    </h3>

                    <p>
                      <LocationCounter
                        target={
                          location.properties
                        }
                      />{" "}
                      Properties Available
                    </p>

                    <div className="location-footer">

                      <span>
                        Explore Area
                      </span>

                      <div className="location-arrow">
                        <ArrowRight
                          size={20}
                        />
                      </div>

                    </div>

                  </div>

                </div>

              </motion.article>
            )
          )}

        </div>

      </div>
    </section>
  );
}

function PremiumWhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "RERA Approved Projects",
      desc: "100% verified properties with complete transparency and trust."
    },
    {
      icon: FileCheck2,
      title: "Legal Documentation",
      desc: "End-to-end legal verification and secure transactions."
    },
    {
      icon: WalletCards,
      title: "Home Loan Support",
      desc: "Exclusive offers and best rates from top banks."
    },
    {
      icon: CalendarDays,
      title: "Free Site Visits",
      desc: "Personalized property tours guided by experts."
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      desc: "Data-driven insights for high-growth opportunities."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Dedicated relationship managers for every client."
    }
  ];

  return (
    <section className="section why-section premium-why">
      <div className="site-container">

        <SectionHeading
          kicker="Why Choose Milesquare"
          title="A Real Estate Experience Built Around Trust & Results"
          align="center"
        />

        <div className="premium-feature-grid">
          {features.map((feature, idx) => (
            <motion.div
              className="premium-feature-card"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1
              }}
            >
              <span className="feature-number">
                {String(idx + 1).padStart(2, "0")}
              </span>

              <div className="feature-icon">
                <feature.icon size={34} />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.desc}</p>

              <div className="feature-arrow">
                →
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}

        <div className="why-stats">

          <div className="why-stat">
            <h2>1500+</h2>
            <span>Homes Sold</span>
          </div>

          <div className="why-stat">
            <h2>500+</h2>
            <span>Happy Investors</span>
          </div>

          <div className="why-stat">
            <h2>₹800Cr+</h2>
            <span>Property Transactions</span>
          </div>

        </div>

      </div>
    </section>
  );
}
// ======================================
// SERVICES (Slider)
// ======================================
function PremiumServicesSection() {
  return (
    <section id="services" className="section services-section premium-services">
      <div className="site-container">
        <SectionHeading kicker="Services" title="Everything you need before and after buying." align="center" />
        <HorizontalSlider className="premium-services-slider" scrollAmount={340}>
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
              <div className="service-icon" style={{ backgroundColor: service.color === '#B8892D' ? 'rgba(184, 137, 45, 0.1)' : 'rgba(27, 27, 27, 0.05)' }}>
                <service.icon size={32} color={service.color} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <div className="service-link">
                Learn More <ArrowRight size={16} />
              </div>
            </motion.article>
          ))}
        </HorizontalSlider>
      </div>
    </section>
  );
}

function PremiumLaunchAndReady() {
  return (
    <section className="section launch-section premium-launch">
      <div className="site-container">

        <SectionHeading
          kicker="Featured Opportunities"
          title="Explore New Launches & Ready To Move Homes"
          align="center"
        />

        {/* NEW LAUNCHES */}

        <div className="launch-block">

          <div className="section-mini-heading">
            <span>NEW LAUNCHES</span>
          </div>

          <div className="premium-launch-grid">

            {launches.map((launch, idx) => (
              <motion.article
                className="premium-launch-card"
                key={launch.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1
                }}
              >

                <div className="launch-image-wrapper">

                  <img
                    src={launch.image}
                    alt={launch.name}
                    className="launch-image"
                  />

                  <span className="launch-badge">
                    NEW LAUNCH
                  </span>

                </div>

                <div className="launch-body">

                  <span className="launch-date">
                    {launch.launchDate}
                  </span>

                  <h3>{launch.name}</h3>

                  <div className="launch-price">
                    {launch.price}
                  </div>

                  <div className="launch-meta">

                    <div>
                      <span>Builder</span>
                      <strong>{launch.builder}</strong>
                    </div>

                    <div>
                      <span>Possession</span>
                      <strong>{launch.possession}</strong>
                    </div>

                  </div>

                  <div className="launch-ctas">

                    <button className="primary-btn small">
                      Download Brochure
                    </button>

                    <button className="secondary-btn small">
                      Contact Advisor
                    </button>

                  </div>

                </div>

              </motion.article>
            ))}

          </div>

        </div>

        {/* READY TO MOVE */}

        <div className="launch-block">

          <div className="section-mini-heading">
            <span>READY TO MOVE</span>
          </div>

          <div className="premium-launch-grid">

            {readyHomes.map((home, idx) => (
              <motion.article
                className="premium-ready-card"
                key={home.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1
                }}
              >

                <div className="ready-image-wrapper">

                  <img
                    src={home.image}
                    alt={home.name}
                  />

                  <span className="ready-badge">
                    READY TO MOVE
                  </span>

                </div>

                <div className="ready-content">

                  <h3>{home.name}</h3>

                  <p>{home.highlight}</p>

                  <div className="ready-price">
                    {home.price}
                  </div>

                  <div className="ready-location">
                    <MapPin size={15} />
                    {home.location}
                  </div>

                  <button className="primary-btn small">
                    Schedule Visit
                  </button>

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
// DEVELOPER SHOWCASE (Auto-marquee)
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
// TESTIMONIALS (Slider with Auto-Scroll)
// ======================================
function PremiumTestimonials() {
  return (
    <section className="section testimonials-section premium-testimonials">
      <div className="site-container">
        <SectionHeading kicker="Testimonials" title="What our customers say about us." align="center" />
        <HorizontalSlider 
          className="premium-testimonial-slider" 
          autoScroll={true} 
          scrollAmount={440}
          interval={4500}
        >
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
                      <Star key={i} size={14} fill={i < testimonial.rating ? '#B8892D' : 'none'} color="#B8892D" />
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
        </HorizontalSlider>
      </div>
    </section>
  );
}

// ======================================
// AGENTS (Slider)
// ======================================
function LuxuryAgentShowcase() {
  return (
    <section className="section team-section luxury-agents">
      <div className="site-container">
        <SectionHeading kicker="Our Experts" title="Meet your dedicated real estate advisors." align="center" />
        <HorizontalSlider className="luxury-agent-slider" scrollAmount={400}>
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
                  <Star key={i} size={16} fill={i < Math.floor(agent.rating) ? "#B8892D" : "none"} color="#B8892D" />
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
        </HorizontalSlider>
      </div>
    </section>
  );
}

// ======================================
// FAQ
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
// CTA
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
          <Link to="/contact" className="primary-btn gold-btn large">
            Book Consultation <CalendarDays size={20} />
         </Link>
          <a href="tel:+919876543210" className="secondary-btn glass-btn large">
            Talk to Expert <Headphones size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ======================================
// FOOTER
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
           <Link to="/contact">Contact Us</Link>
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
        <a href="https://wa.me/916201486202" target="_blank" rel="noreferrer" className="floating-btn whatsapp">
          <MessageCircle size={24} />
        </a>
        <a href="tel:+919876543210" className="floating-btn call">
          <Phone size={24} />
        </a>
        <Link to="/contact" className="floating-btn book">
          <CalendarDays size={24} />
        </Link>
      </div>
    </>
  );
}

// ======================================
// MAIN HOMEPAGE
// ======================================
function HomePage() {
  const [loading, setLoading] = useState(true);
// <PremiumLocations /> //
  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <ScrollProgress />
      <main>
        <Navbar />
        <PremiumVideoHero />
        <SectionDivider />
     
        <SectionDivider />
        <BrowseByType />
        <SectionDivider />
        <PremiumFeaturedProperties />
        <SectionDivider />
        <PremiumLocations />
        <SectionDivider />
        <PremiumWhyChooseUs />
        <SectionDivider />
        <PremiumServicesSection />
        <SectionDivider />
        <PremiumLaunchAndReady />
        <SectionDivider />
        <PremiumDeveloperShowcase />
        <SectionDivider />
        <PremiumTestimonials />
        <SectionDivider />
        <LuxuryAgentShowcase />
        <SectionDivider />
        <PremiumFAQ />
        <SectionDivider />
   
        <SectionDivider />
        <LuxuryCTASection />
        <PremiumFooter />
        <FloatingActions />
      </main>
    </>
  );
}

export default HomePage;