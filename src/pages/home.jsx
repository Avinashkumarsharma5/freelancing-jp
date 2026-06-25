import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo2.png";
import heroVideo from "../assets/jpmp5.mp4";
import logo2 from "../assets/logo.png";
import CityCenter32 from "../assets/city center 32.png";

import MayurForestVilla from "../assets/mayurforest.png";
import BhutaniAstrathum from "../assets/astrathum.png";
import ResidentialPlots from "../assets/residential plots.png";
import StudioApartments from "../assets/studio apartments.png";
import SOHOSuites from "../assets/soho suites.png";
import CommercialOffice from "../assets/commercial office.png";
import RetailShops from "../assets/retail shops.png";  
import FoodCourt from "../assets/food court.png";
import astrathumImg from "../assets/astrathum.png";
import foodzaniImg from "../assets/foodzani.png";
import citycenterImg from "../assets/citycenter.png";
import mayurforestImg from "../assets/mayurforest.png";
import noidaImg from "../assets/noida.png";
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
  Store,
  Utensils,
  BriefcaseBusiness,
  Building,
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
// UPDATED STATIC DATA
// ======================================

// 1. UPDATED: Featured Properties
export const featuredProperties = [
  {
    id: 1,
    slug: "bhutani-astrathum",

    badge: "PRE-LAUNCH",
    title: "Bhutani Astrathum",
    location: "Sector 133 Noida",
    price: "₹6,990/sq.ft",
    area: "Commercial",
    builder: "Bhutani Infra",
    rating: 4.9,

    image: astrathumImg,

    images: [
      astrathumImg,
      astrathumImg,
      astrathumImg,
      astrathumImg,
    ],

    type: "Commercial Office",
    status: "Ready To Move",
    rera: "UPRERAPRJ123456",
    possession: "2028",
    size: "500 - 2500 Sq.ft",
    investment: "High ROI",
    brochure: "/brochures/astrathum.pdf",

    description:
      "Bhutani Astrathum is a premium commercial project located in Sector 133 Noida offering retail shops, food court, office spaces and high investment returns.",

    amenities: [
      "Parking",
      "Power Backup",
      "Food Court",
      "High Speed Lift",
      "CCTV",
      "24x7 Security",
      "Metro Connectivity",
      "Fire Safety"
    ]
  },

  {
    id: 2,
    slug: "foodzani",

    badge: "FOOD COURT",
    title: "Foodzani",
    location: "133 Avenue Noida",
    price: "₹32,990/sq.ft",
    area: "Retail",
    builder: "Bhutani Infra",
    rating: 4.8,

    image: foodzaniImg,

    images: [
      foodzaniImg,
      foodzaniImg,
      foodzaniImg,
      foodzaniImg,
    ],

    type: "Food Court",
    status: "Ready For Leasing",
    rera: "UPRERAPRJ654321",
    possession: "Ready",
    size: "250 - 1200 Sq.ft",
    investment: "Rental Income",

    description:
      "Foodzani is one of Noida's premium food court investment destinations offering excellent rental returns.",

    amenities: [
      "Food Court",
      "Parking",
      "Escalator",
      "Lift",
      "Security",
      "CCTV"
    ]
  },

  {
    id: 3,
    slug: "city-center-32",

    badge: "HOT DEAL",
    title: "City Center 32",
    location: "Sector 32 Noida",
    price: "₹33,000/sq.ft",
    area: "Food Court",
    builder: "Bhutani Infra",
    rating: 4.9,

    image: citycenterImg,

    images: [
      citycenterImg,
      citycenterImg,
      citycenterImg,
      citycenterImg,
    ],

    type: "Retail & Food Court",
    status: "Operational",
    rera: "UPRERAPRJ852741",
    possession: "Ready",

    size: "300 - 2000 Sq.ft",

    investment: "Premium",

    description:
      "City Center 32 is a premium commercial destination offering retail, food court and entertainment spaces.",

    amenities: [
      "Parking",
      "Food Court",
      "Lift",
      "Security",
      "Power Backup"
    ]
  },

  {
    id: 4,
    slug: "mayur-forest-villa",

    badge: "NEW LAUNCH",
    title: "Mayur Forest Villa",
    location: "Dholera Smart City",
    price: "₹10,450/sq.yd",
    area: "Plots",
    builder: "Mirrikh Infratech",
    rating: 4.7,

    image: mayurforestImg,

    images: [
      mayurforestImg,
      mayurforestImg,
      mayurforestImg,
      mayurforestImg,
    ],

    type: "Residential Plot",

    status: "New Launch",

    possession: "2027",

    size: "100 - 500 Sq.yd",

    investment: "Future Growth",

    description:
      "Mayur Forest Villa offers premium residential plots in Dholera Smart City with excellent long-term appreciation potential.",

    amenities: [
      "Wide Roads",
      "Garden",
      "Club House",
      "Security",
      "Street Lights"
    ]
  }
];

const premiumAgents = [
  {
    name: "Rahul Sharma",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.9,
    specialization: "Commercial Property Consultant",
    experience: "12+ Years",
    deals: "180+",
    languages: ["Hindi", "English"],
    whatsapp: "916201486202",
    phone: "+919876543210",
    badge: "Top Performer"
  },

  {
    name: "Priya Malhotra",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.8,
    specialization: "Luxury Investment Advisor",
    experience: "10+ Years",
    deals: "150+",
    languages: ["Hindi", "English"],
    whatsapp: "916201486202",
    phone: "+919876543210",
    badge: "Investment Expert"
  },

  {
    name: "Amit Bansal",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 5.0,
    specialization: "Dholera & Commercial Specialist",
    experience: "15+ Years",
    deals: "250+",
    languages: ["Hindi", "English", "Punjabi"],
    whatsapp: "916201486202",
    phone: "+919876543210",
    badge: "Senior Consultant"
  }
];

// 2. UPDATED: Premium Locations
{/*const premiumLocations = [
  {
    name: "Noida",
    properties: 850,
    growth: 24.5,
    image: noidaImg 
  },
  {
    name: "Greater Noida",
    properties: 520,
    growth: 18.8,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    slug: "greater-noida"
  },
  {
    name: "Dholera",
    properties: 300,
    growth: 35.0,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    slug: "dholera"
  },
  {
    name: "Gurgaon",
    properties: 670,
    growth: 20.5,
    image: "https://images.unsplash.com/photo-1538842679288-5940c9cb042c?auto=format&fit=crop&w=800&q=80",
    slug: "gurgaon"
  }
];*/}

// 3. UPDATED: Browse By Type
const browseTypes = [
  {
    title: "Commercial Office",
    slug: "commercial-office",
    image: CommercialOffice,
    count: "156 Properties",
  },

  {
    title: "Retail Shops",
    slug: "retail-shops",
    image: RetailShops,
    count: "89 Properties",
  },

  {
    title: "Food Court",
    slug: "food-court",
    image: FoodCourt,
    count: "42 Properties",
  },

  {
    title: "SOHO Suites",
    slug: "soho-suites",
    image: SOHOSuites,
    count: "67 Properties",
  },

  {
    title: "Studio Apartments",
    slug: "studio-apartments",
    image: StudioApartments,
    count: "128 Properties",
  },

  {
    title: "Residential Plots",
    slug: "residential-plots",
    image: ResidentialPlots,
    count: "245 Properties",
  }
];

// 4. UPDATED: Launches
const launches = [
  {
    name: 'Bhutani Astrathum',
    launchDate: 'Launch: Sept 2025',
    price: '₹6,990/sq.ft',
    possession: 'Commercial',
    builder: 'Bhutani Infra',
    brochure: '#',
    image:BhutaniAstrathum,
  },
  {
    name: 'Mayur Forest Villa',
    launchDate: 'Launch: May 2026',
    price: '₹10,450/sq.yd',
    possession: 'Plots',
    builder: 'Mirrikh Infratech',
    brochure: '#',
    image: MayurForestVilla,
  },
  {
    name: 'Foodzani',
    launchDate: 'Ready For Leasing',
    price: '₹32,990/sq.ft',
    possession: 'Retail',
    builder: 'Bhutani Infra',
    brochure: '#',
    image: foodzaniImg,
  },
  {
    name: 'City Center 32',
    launchDate: 'Operational',
    price: '₹33,000/sq.ft',
    possession: 'Food Court',
    builder: 'Bhutani Infra',
    brochure: '#',
    image: CityCenter32,
  },
];

// 5. UPDATED: Developers
const developers = [
  { name: 'Bhutani Infra', logo: 'Bhutani', color: '#B8892D' },
  { name: 'Mirrikh Infratech', logo: 'Mirrikh', color: '#1B1B1B' },
  { name: 'DLF', logo: 'DLF', color: '#B8892D' },
  { name: 'M3M', logo: 'M3M', color: '#1B1B1B' },
  { name: 'Godrej', logo: 'Godrej', color: '#B8892D' },
  { name: 'ACE', logo: 'ACE', color: '#1B1B1B' },
  { name: 'ATS', logo: 'ATS', color: '#B8892D' },
];

// 6. UPDATED: Services
const services = [
  { title: 'RERA Approved Projects', icon: ShieldCheck, desc: '100% verified properties with complete transparency', color: '#B8892D' },
  { title: 'Verified Developers', icon: Building2, desc: 'Trusted builders with proven delivery records', color: '#1B1B1B' },
  { title: 'Guaranteed Site Visits', icon: CalendarDays, desc: 'Personalized property tours guided by experts', color: '#B8892D' },
  { title: 'Investment Advisory', icon: TrendingUp, desc: 'Data-driven insights for high-growth opportunities', color: '#1B1B1B' },
  { title: 'Commercial Leasing Support', icon: BriefcaseBusiness, desc: 'End-to-end commercial property leasing assistance', color: '#B8892D' },
  { title: 'Legal Documentation', icon: FileCheck2, desc: 'Complete legal verification and secure transactions', color: '#1B1B1B' },
];

// 8. UPDATED: Testimonials
const premiumTestimonials = [
  {
    name: 'Rahul Sharma',
    location: 'Noida',
    property: 'Commercial Investor',
    review: 'Bhutani Astrathum is a game-changer for commercial investment. The team helped me secure prime retail space with excellent ROI potential.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5
  },
  {
    name: 'Priya Malhotra',
    location: 'City Center 32',
    property: 'Retail Investor',
    review: 'Investing in City Center 32 was the best decision. The location is perfect and the returns are already exceeding expectations.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5
  },
  {
    name: 'Amit Bansal',
    location: 'Dholera Smart City',
    property: 'Plot Investor',
    review: 'Dholera Smart City is the next big thing. Mayur Forest Villa offers incredible value and the growth potential is massive.',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    rating: 4.9
  },
];

const faqs = [
  {
    q: "Are all projects RERA approved?",
    a: "Yes, all recommended projects are verified and RERA compliant."
  },
  {
    q: "Do you provide site visits?",
    a: "Yes, we provide guided site visits."
  },
  {
    q: "Is Dholera a good investment?",
    a: "Dholera Smart City is a long-term growth opportunity."
  }
];

// 9. NEW: Commercial Investment Data
const commercialInvestments = [
  {
    title: "Bhutani Astrathum",
    price: "₹6,990/sq.ft",
    roi: "24.5%",
    rentalYield: "8.2%",
    location: "Sector 133 Noida",
   image:BhutaniAstrathum,
  },
  {
    title: "Foodzani",
    price: "₹32,990/sq.ft",
    roi: "21.3%",
    rentalYield: "9.5%",
    location: "133 Avenue Noida",
    image: foodzaniImg
  },
  {
    title: "City Center 32",
    price: "₹33,000/sq.ft",
    roi: "26.8%",
    rentalYield: "10.2%",
    location: "Sector 32 Noida",
    image: CityCenter32
  },
  {
    title: "133 Avenue",
    price: "₹28,500/sq.ft",
    roi: "22.7%",
    rentalYield: "8.8%",
    location: "Sector 133 Noida",
    image: StudioApartments
  }
];

// 10. NEW: Dholera Investment Data
const dholeraData = {
  title: "Mayur Forest Villa",
  startingPrice: "₹10,450/sq.yd",
  expectedReturn: "₹25,976/month",
  return36Months: "₹9,35,136",
  location: "Dholera Smart City",
  image: MayurForestVilla
};

// ======================================
// 9. NEW: Commercial Investment Section
// ======================================
function CommercialInvestmentSection() {
const openWhatsApp = (property) => {
  const phone = "916201486202";

  const message = `🏢 *Milesquare Realty - Property Enquiry*

Hello Team,

I am interested in the following property:

━━━━━━━━━━━━━━━━━━
🏢 Property : ${property.title}
📍 Location : ${property.location}
💰 Price : ${property.price}
📈 ROI : ${property.roi}
💵 Rental Yield : ${property.rentalYield}
━━━━━━━━━━━━━━━━━━

Please share:

✅ Brochure
✅ Floor Plan
✅ Price List
✅ Payment Plan
✅ Site Visit Details

Current Page:
${window.location.href}

Thank you.`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
  return (
    <section className="section commercial-investment-section">
      <div className="site-container">
        <SectionHeading 
          kicker="Commercial Investment" 
          title="High-Yield Commercial Opportunities" 
          align="center" 
        />
        <div className="commercial-investment-grid">
          {commercialInvestments.map((item, idx) => (
            <motion.article
              className="commercial-investment-card"
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -10 }}
            >
              <div className="investment-image">
                <img src={item.image} alt={item.title} />
                <div className="investment-badge">Premium</div>
              </div>
              <div className="investment-content">
                <h3>{item.title}</h3>
                <p className="investment-location">
                  <MapPin size={14} /> {item.location}
                </p>
                <div className="investment-metrics">
                  <div className="metric">
                    <span className="metric-label">Price</span>
                    <strong className="metric-value">{item.price}</strong>
                  </div>
                  <div className="metric">
                    <span className="metric-label">ROI</span>
                    <strong className="metric-value gold">{item.roi}</strong>
                  </div>
                  <div className="metric">
                    <span className="metric-label">Rental Yield</span>
                    <strong className="metric-value">{item.rentalYield}</strong>
                  </div>
                </div>
                <button
  className="btn-primary-luxury small"
  onClick={() => openWhatsApp(item)}
>
  Invest Now <ArrowRight size={16} />
</button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================
// 10. NEW: Dholera Investment Section
// ======================================
function DholeraInvestmentSection() {
  const navigate = useNavigate();
  const openWhatsApp = () => {
  const phone = "916201486202";

  const message = `🏡 *Milesquare Realty - Dholera Smart City Enquiry*

Hello Team,

I am interested in the following investment:

━━━━━━━━━━━━━━━━━━
🏗 Project : ${dholeraData.title}
📍 Location : ${dholeraData.location}
💰 Starting Price : ${dholeraData.startingPrice}
📈 Expected Return : ${dholeraData.expectedReturn}
🚀 36 Months Return : ${dholeraData.return36Months}
━━━━━━━━━━━━━━━━━━

Please share:

✅ Brochure
✅ Master Plan
✅ Price List
✅ Payment Plan
✅ Site Visit Details

Current Page:
${window.location.href}

Thank you.`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
  
  return (
    <section className="section dholera-investment-section">
      <div className="site-container">
        <SectionHeading 
          kicker="Dholera Smart City" 
          title="India's First Greenfield Smart City" 
          align="center" 
        />
        <motion.div 
          className="dholera-investment-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
        >
          <div className="dholera-image">
            <img src={dholeraData.image} alt={dholeraData.title} />
            <span className="dholera-badge">🚀 High Growth Zone</span>
          </div>
          <div className="dholera-content">
            <h2>{dholeraData.title}</h2>
            <p className="dholera-location">
              <MapPin size={18} /> {dholeraData.location}
            </p>
            <div className="dholera-stats">
              <div className="dholera-stat">
                <span className="stat-label">Starting Price</span>
                <strong>{dholeraData.startingPrice}</strong>
              </div>
              <div className="dholera-stat">
                <span className="stat-label">Expected Return</span>
                <strong>{dholeraData.expectedReturn}</strong>
              </div>
              <div className="dholera-stat highlight">
                <span className="stat-label">36 Months Return</span>
                <strong>{dholeraData.return36Months}</strong>
              </div>
            </div>
            <div className="dholera-ctas">
             <button
  className="btn-primary-luxury"
  onClick={openWhatsApp}
>
  Explore Investment <ArrowRight size={18} />
</button>
              <button
  className="btn-secondary-luxury"
  onClick={openWhatsApp}
>
  <Phone size={16} /> Talk to Expert
</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ======================================
// ENHANCEMENT COMPONENTS (unchanged)
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
          <img src={logo2} alt="Milesquare Realty" className="loader-logo" />
          <div className="gold-ring"></div>
        </div>
        <h1 className="loader-title">Milesquare Realty</h1>
        <p className="loader-tagline">Luxury Living Across NCR</p>
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
    <div className="hero-glow-wrapper" ref={heroRef} onMouseMove={handleMouseMove}>
      <div className="hero-glow" style={{ left: position.x - 200, top: position.y - 200 }} />
    </div>
  );
}

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

function HorizontalSlider({ children, autoScroll = false, scrollAmount = 420, interval = 4000, className = "" }) {
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
        <button className={`slider-arrow left ${!showLeft ? 'hidden' : ''}`} onClick={scrollLeft} aria-label="Scroll left">
          <ChevronLeft size={24} />
        </button>
        <button className={`slider-arrow right ${!showRight ? 'hidden' : ''}`} onClick={scrollRight} aria-label="Scroll right">
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="horizontal-slider" ref={sliderRef}>
        {children}
      </div>
    </div>
  );
}

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-shell">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Milesquare Realty" className="brand-logo" />
        </Link>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#properties" onClick={() => setOpen(false)}>Properties</a>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
        <div className="nav-right">
          <Link to="/contact" className="nav-cta">
            <Phone size={17} /> Contact Us
          </Link>
          <button type="button" className="menu-btn" aria-label="Toggle Navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

// ======================================
// 6. UPDATED: HERO
// ======================================
function PremiumVideoHero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="premium-hero">
      <div className="hero-video-container">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto">
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-video-overlay"></div>
      </div>
      <HeroGlow />
      <FloatingParticles />
      <div className="site-container hero-content">
        <div className="hero-left">
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp}>
            Invest In NCR's Fastest Growing
            <span className="gold-text"> Commercial & Luxury Real Estate</span>
          </motion.h1>
          <motion.p className="hero-description" initial="hidden" animate="visible" variants={fadeUp}>
            Explore Bhutani Astrathum, Foodzani, City Center 32, Dholera Smart City
            and other high growth investment destinations.
          </motion.p>
          <motion.div className="hero-stats" initial="hidden" animate="visible" variants={fadeUp}>
            <div className="stat">
              <strong>₹5000Cr+</strong>
              <span>Assets</span>
            </div>
            <div className="stat">
              <strong>15000+</strong>
              <span>Investors</span>
            </div>
            <div className="stat">
              <strong>50+</strong>
              <span>Premium Projects</span>
            </div>
          </motion.div>
          <motion.div className="hero-buttons" initial="hidden" animate="visible" variants={fadeUp}>
            <a href="#properties" className="primary-btn gold-btn">
              Explore Properties <ArrowRight size={18} />
            </a>
            <button className="secondary-btn glass-btn" onClick={() => setVideoOpen(true)}>
              <Play size={18} /> Watch Tour
            </button>
            <Link to="/contact" className="secondary-btn glass-btn">
              <CalendarDays size={18} /> Book Site Visit
            </Link>
          </motion.div>
        </div>
      </div>
      <VideoPopup videoSrc={heroVideo} isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}

// ======================================
// SECTION HEADING
// ======================================
function SectionHeading({ kicker, title, align = 'left' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'center-heading' : ''}`}>
      <span className="section-kicker"><Award size={16} /> {kicker}</span>
      <h2>{title}</h2>
    </div>
  );
}

// ======================================
// BROWSE BY TYPE (updated data)
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
                  <span className="property-tag">{type.count}</span>
                  <h3>{type.title}</h3>
                  <p>Explore premium listings, luxury amenities and investment opportunities.</p>
                </div>
                <div className="arrow-circle"><ArrowRight size={22} /></div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================================
// FEATURED PROPERTIES (updated data)
// ======================================
function PremiumFeaturedProperties() {
  const [savedProperties, setSavedProperties] = useState([]);
 const navigate = useNavigate(); 
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
              whileHover={{ y: -15, rotateX: 3, rotateY: -3, transition: { duration: 0.3 } }}
            >
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
                <div className="exclusive-tag"><Sparkles size={12} /> Exclusive</div>
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
                  <div className="spec-item"><strong>Commercial</strong><span>Type</span></div>
                  <div className="spec-divider"></div>
                  <div className="spec-item"><strong>{property.area}</strong><span>Area</span></div>
                  <div className="spec-divider"></div>
                  <div className="spec-item"><strong>{property.builder}</strong><span>Builder</span></div>
                </div>
                <div className="property-ctas">
                  <button
 className="btn-primary-luxury"
 onClick={() => navigate(`/property/${property.slug}`)}
>
   Explore Property
   <ArrowRight size={18}/>
</button>
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
// PREMIUM LOCATIONS (updated data)
// ======================================
function PremiumLocations() {
  const navigate = useNavigate();

  return (
    <section id="locations" className="section locations-section premium-locations">
      <div className="site-container">
        <SectionHeading kicker="Top Locations" title="Explore NCR's Most Desirable Destinations" />
        <div className="premium-location-grid">
          {premiumLocations.map((location, idx) => (
            <motion.article
              onClick={() => navigate(`/location/${location.slug}`)}
              key={location.name}
              className="premium-location-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <img src={location.image} alt={location.name} loading="lazy" />
              <div className="location-overlay">
                <div className="location-top">
                  <span className="location-tag">Investment Hotspot</span>
                  <div className="growth-badge">
                    <TrendingUp size={14} /> +{location.growth}%
                  </div>
                </div>
                <div className="location-bottom">
                  <h3>{location.name}</h3>
                  <p><LocationCounter target={location.properties} /> Properties Available</p>
                  <div className="location-footer">
                    <span>Explore Area</span>
                    <div className="location-arrow"><ArrowRight size={20} /></div>
                  </div>
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
// 7. UPDATED: WHY CHOOSE US
// ======================================
function PremiumWhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "RERA Approved Projects",
      desc: "100% verified properties with complete transparency and trust."
    },
    {
      icon: Building2,
      title: "Verified Developers",
      desc: "Partnered with the most trusted and reputed builders in the industry."
    },
    {
      icon: CalendarDays,
      title: "Guaranteed Site Visits",
      desc: "Personalized property tours guided by our expert advisors."
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      desc: "Data-driven insights for high-growth investment opportunities."
    },
    {
      icon: BriefcaseBusiness,
      title: "Commercial Leasing Support",
      desc: "End-to-end assistance for commercial property leasing and management."
    },
    {
      icon: FileCheck2,
      title: "Legal Documentation",
      desc: "Complete legal verification and secure transaction documentation."
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
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <span className="feature-number">{String(idx + 1).padStart(2, "0")}</span>
              <div className="feature-icon"><feature.icon size={34} /></div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
              <div className="feature-arrow">→</div>
            </motion.div>
          ))}
        </div>
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
// SERVICES (updated data)
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
              <div className="service-link">Learn More <ArrowRight size={16} /></div>
            </motion.article>
          ))}
        </HorizontalSlider>
      </div>
    </section>
  );
}

// ======================================
// 4. UPDATED: LAUNCH SECTION
// ======================================
function PremiumLaunchAndReady() {

  const openWhatsApp = (launch, action) => {
  const phone = "916201486202";

  const message = `🏢 *Milesquare Realty - ${action}*

Hello Team,

I am interested in the following project:

━━━━━━━━━━━━━━━━━━
🏗 Project : ${launch.name}
📅 Status : ${launch.launchDate}
💰 Price : ${launch.price}
🏢 Builder : ${launch.builder}
🏠 Type : ${launch.possession}
━━━━━━━━━━━━━━━━━━

Request:
${action === "Download Brochure"
  ? "📄 Please send me the project brochure, price list, floor plan and payment plan."
  : "📞 Please contact me and arrange a site visit."}

Current Page:
${window.location.href}

Thank you.`;

  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
  return (
    <section className="section launch-section premium-launch">
      <div className="site-container">
        <SectionHeading
          kicker="Featured Opportunities"
          title="Explore New Launches & Ready To Move Homes"
          align="center"
        />
        <div className="launch-block">
          <div className="section-mini-heading">
            <span>NEW LAUNCHES & OPPORTUNITIES</span>
          </div>
          <div className="premium-launch-grid">
            {launches.map((launch, idx) => (
              <motion.article
                className="premium-launch-card"
                key={launch.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="launch-image-wrapper">
                  <img src={launch.image} alt={launch.name} className="launch-image" />
                  <span className="launch-badge">{launch.launchDate.includes('Launch') ? 'NEW LAUNCH' : launch.launchDate.includes('Leasing') ? 'READY FOR LEASING' : 'OPERATIONAL'}</span>
                </div>
                <div className="launch-body">
                  <span className="launch-date">{launch.launchDate}</span>
                  <h3>{launch.name}</h3>
                  <div className="launch-price">{launch.price}</div>
                  <div className="launch-meta">
                    <div>
                      <span>Builder</span>
                      <strong>{launch.builder}</strong>
                    </div>
                    <div>
                      <span>Type</span>
                      <strong>{launch.possession}</strong>
                    </div>
                  </div>
                  <div className="launch-ctas">
                    <button className="primary-btn small" onClick={() => openWhatsApp(launch, "Download Brochure")}>
                      Download Brochure
                    </button>
                    <button className="secondary-btn small" onClick={() => openWhatsApp(launch, "Contact Advisor")}>
                      Contact Advisor
                    </button>
                  </div>
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
// 5. UPDATED: DEVELOPER SHOWCASE
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
// 8. UPDATED: TESTIMONIALS
// ======================================
function PremiumTestimonials() {
  return (
    <section className="section testimonials-section premium-testimonials">
      <div className="site-container">
        <SectionHeading kicker="Testimonials" title="What our customers say about us." align="center" />
        <HorizontalSlider className="premium-testimonial-slider" autoScroll={true} scrollAmount={440} interval={4500}>
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
                {testimonial.property}
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
// AGENTS
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
          <span className="cta-kicker">Ready to invest?</span>
          <h2>Ready To Find <span className="gold-text">Your Dream Investment?</span></h2>
          <p>Join 15,000+ happy investors who found their perfect property with Milesquare Realty.</p>
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

return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <ScrollProgress />
      <main>
        <Navbar />
        <PremiumVideoHero />
        <SectionDivider />
        <BrowseByType />
        <SectionDivider />
        <PremiumFeaturedProperties />
        <SectionDivider />
       
        <SectionDivider />
        <CommercialInvestmentSection />
        <SectionDivider />
        <DholeraInvestmentSection />
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
        {/* ✅ Uncommented: Agent section with premiumAgents */}
        <LuxuryAgentShowcase />
        <SectionDivider />
        <PremiumFAQ />
        <SectionDivider />
        <LuxuryCTASection />
        <PremiumFooter />
        <FloatingActions />
      </main>
    </>
  );
}

export default HomePage;