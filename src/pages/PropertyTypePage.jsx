import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BhutaniAstrathumImage from "../assets/Bhutani Astrathum.jpg"
import FoodzaniImage from "../assets/foodzani.jpg"
import CityCenter32Image from "../assets/City Center 32.jpg"
import mayurimg from "../assets/Mayur Forest Villa.jpg"
import StudioApartmentsImage from "../assets/studio apartments.jpg"
import CommercialOfficeImage from "../assets/Commercial Office.jpg"
import ResidentialPlotsImage from "../assets/residential plots.jpg"
import { 
  ArrowRight, 
  Star, 
  MapPin, 
  Building2, 
  TrendingUp,
  Store,
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
  WalletCards,
  CheckCircle,
  Crown,
  Gem,
  Droplets,
  Coffee,
  Wifi,
  Tv,
  Car,
  Dumbbell,
  Utensils,
  Trees,
  Sun,
} from "lucide-react";
import "./PropertyTypePage.css";

// ======================================
// ANIMATION VARIANTS
// ======================================
const fadeUp = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      mass: 0.8
    }
  }
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
  const [activeGalleryImage, setActiveGalleryImage] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // ======================================
  // UPDATED DATA STRUCTURE
  // ======================================
  const getPropertyData = () => {
    const data = {
      "bhutani-astrathum": {
        title: "Bhutani Astrathum",
        subtitle: "Premium Commercial Investment",
        description: "A high-growth commercial destination in Sector 133 Noida with office spaces, retail shops, food court and premium investor demand.",
        startingPrice: "₹6,990/sq.ft",
        projects: "4+",
        rating: "4.9★",
        stats: [
          { value: "4+", label: "Investment Options", icon: Building2 },
          { value: "8-12%", label: "Rental Yield", icon: TrendingUp },
          { value: "4.9★", label: "Investor Rating", icon: Star },
          { value: "100%", label: "RERA Verified", icon: ShieldCheck }
        ],
        properties: [
          {
            title: "Office Spaces",
            location: "Sector 133 Noida",
            price: "₹6,990/sq.ft",
            bhk: "Commercial Office",
            area: "500 - 2500 Sq.ft",
            badge: "PRE-LAUNCH",
            rating: 4.9,
            image: BhutaniAstrathumImage,
            slug: "bhutani-astrathum",
          },
          {
            title: "Retail Shops",
            location: "Sector 133 Noida",
            price: "₹16,000/sq.ft",
            bhk: "Retail Shop",
            area: "300 - 1200 Sq.ft",
            badge: "HOT DEAL",
            rating: 4.8,
            image: BhutaniAstrathumImage,
            slug: "bhutani-astrathum",
          },
          {
            title: "Food Court Units",
            location: "Sector 133 Noida",
            price: "₹32,990/sq.ft",
            bhk: "Food Court",
            area: "250 - 1000 Sq.ft",
            badge: "HIGH FOOTFALL",
            rating: 4.8,
            image: FoodzaniImage,
            slug: "foodzani",
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

      "foodzani": {
        title: "Foodzani",
        subtitle: "Retail & Food Court Investment",
        description: "Premium food court and retail leasing opportunities with strong footfall, premium branding and attractive rental income.",
        startingPrice: "₹32,990/sq.ft",
        projects: "3+",
        rating: "4.8★",
        stats: [
          { value: "3+", label: "Retail Options", icon: Store },
          { value: "7-10%", label: "Lease Yield", icon: TrendingUp },
          { value: "4.8★", label: "Investor Rating", icon: Star },
          { value: "Ready", label: "Leasing Status", icon: ShieldCheck }
        ],
        properties: [
          {
            title: "Food Court Units",
            location: "133 Avenue Noida",
            price: "₹32,990/sq.ft",
            bhk: "Food Court",
            area: "250 - 1200 Sq.ft",
            badge: "RENTAL INCOME",
            rating: 4.8,
            image: FoodzaniImage,
            slug: "foodzani",
          },
          {
            title: "Retail Kiosks",
            location: "133 Avenue Noida",
            price: "₹24,000/sq.ft",
            bhk: "Retail",
            area: "150 - 700 Sq.ft",
            badge: "FAST LEASING",
            rating: 4.7,
            image: FoodzaniImage,
            slug: "foodzani",
          },
          {
            title: "Brand Zone Spaces",
            location: "133 Avenue Noida",
            price: "₹27,000/sq.ft",
            bhk: "Brand Zone",
            area: "200 - 900 Sq.ft",
            badge: "PREMIUM",
            rating: 4.8,
            image: FoodzaniImage,
            slug: "foodzani",
          }
        ],
        amenities: [
          { icon: Utensils, label: "Food Court" },
          { icon: Car, label: "Parking" },
          { icon: ShieldCheck, label: "24/7 Security" },
          { icon: Wifi, label: "High Footfall" }
        ],
        testimonials: [
          { name: "Mr. Aman Verma", review: "Foodzani is one of the strongest retail food court investments in Noida. The demand is very healthy.", rating: 5, image: "https://randomuser.me/api/portraits/men/42.jpg" }
        ]
      },

      "city-center-32": {
        title: "City Center 32",
        subtitle: "Premium Retail & Food Court",
        description: "An operational retail and food court destination with active footfall, entertainment value and strong investment demand.",
        startingPrice: "₹33,000/sq.ft",
        projects: "3+",
        rating: "4.9★",
        stats: [
          { value: "3+", label: "Commercial Spaces", icon: Building2 },
          { value: "4.9★", label: "Investor Rating", icon: Star },
          { value: "Operational", label: "Status", icon: ShieldCheck },
          { value: "High", label: "Demand", icon: TrendingUp }
        ],
        properties: [
          {
            title: "Food Court Spaces",
            location: "Sector 32 Noida",
            price: "₹33,000/sq.ft",
            bhk: "Food Court",
            area: "300 - 2000 Sq.ft",
            badge: "OPERATIONAL",
            rating: 4.9,
            image: CityCenter32Image,
            slug: "city-center-32",
          },
          {
            title: "Retail Frontage",
            location: "Sector 32 Noida",
            price: "₹29,500/sq.ft",
            bhk: "Retail",
            area: "350 - 1500 Sq.ft",
            badge: "PREMIUM",
            rating: 4.8,
            image: CityCenter32Image,
            slug: "city-center-32",
          },
          {
            title: "Entertainment Zones",
            location: "Sector 32 Noida",
            price: "₹31,000/sq.ft",
            bhk: "Entertainment",
            area: "400 - 1800 Sq.ft",
            badge: "HOT DEAL",
            rating: 4.9,
            image: CityCenter32Image,
            slug: "city-center-32",
          }
        ],
        amenities: [
          { icon: Building2, label: "Retail Frontage" },
          { icon: Coffee, label: "Food Court" },
          { icon: Car, label: "Parking" },
          { icon: ShieldCheck, label: "Security" }
        ],
        testimonials: [
          { name: "Mr. Kartik Singh", review: "City Center 32 delivers premium commercial visibility and strong footfall for investment.", rating: 5, image: "https://randomuser.me/api/portraits/men/58.jpg" }
        ]
      },

      "mayur-forest-villa": {
        title: "Mayur Forest Villa",
        subtitle: "Future Growth Destination",
        description: "Residential plots in Dholera Smart City with long-term appreciation, premium planning and government-backed growth potential.",
        startingPrice: "₹10,450/sq.yd",
        projects: "2+",
        rating: "4.7★",
        stats: [
          { value: "2+", label: "Plot Options", icon: Home },
          { value: "35%", label: "Growth Potential", icon: TrendingUp },
          { value: "4.7★", label: "Investor Rating", icon: Star },
          { value: "Smart City", label: "Location", icon: Crown }
        ],
        properties: [
          {
            title: "Premium Residential Plots",
            location: "Dholera Smart City",
            price: "₹10,450/sq.yd",
            bhk: "Residential Plot",
            area: "100 - 500 Sq.yd",
            badge: "NEW LAUNCH",
            rating: 4.7,
            image: mayurimg,
            slug: "mayur-forest-villa",
          },
          {
            title: "Garden Facing Plots",
            location: "Dholera Smart City",
            price: "₹11,200/sq.yd",
            bhk: "Premium Plot",
            area: "150 - 450 Sq.yd",
            badge: "FUTURE GROWTH",
            rating: 4.7,
            image: mayurimg,
            slug: "mayur-forest-villa",
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

      "gaur-codename-bento": {
        title: "Gaur Codename Bento",
        subtitle: "Fully Furnished Studio Apartments",
        description: "Luxury studio apartments on Yamuna Expressway with premium interiors, smart layouts, and strong rental potential.",
        startingPrice: "₹85 Lakh",
        projects: "1+",
        rating: "4.8★",
        heroImage: StudioApartmentsImage,
        stats: [
          { value: "1+", label: "Studio Options", icon: Building2 },
          { value: "4.8★", label: "Buyer Rating", icon: Star },
          { value: "650-675", label: "Sq. Ft", icon: Home },
          { value: "Ready", label: "Status", icon: ShieldCheck }
        ],
        highlights: [
          "RERA Approved",
          "Fully Furnished Studios",
          "Airport Connectivity",
          "Premium Lifestyle"
        ],
        gallery: [
          StudioApartmentsImage,
          CommercialOfficeImage,
          ResidentialPlotsImage,
          BhutaniAstrathumImage
        ],
        properties: [
          {
            title: "Studio Apartment",
            location: "Yamuna Expressway",
            price: "₹85 Lakh",
            bhk: "Studio",
            area: "650 - 675 Sq.ft",
            badge: "NEW LAUNCH",
            rating: 4.8,
            image: StudioApartmentsImage,
            slug: "gaur-codename-bento"
          }
        ],
        amenities: [
          { icon: Home, label: "Fully Furnished" },
          { icon: Wifi, label: "High Speed Internet" },
          { icon: Car, label: "Parking" },
          { icon: ShieldCheck, label: "Security" }
        ],
        masterPlan: StudioApartmentsImage,
        floorPlan: CommercialOfficeImage,
        paymentPlan: [
          { stage: "Booking", amount: "10%" },
          { stage: "Construction", amount: "40%" },
          { stage: "Possession", amount: "50%" }
        ],
        locationAdvantages: [
          { place: "Airport", distance: "25 Min" },
          { place: "Expressway", distance: "5 Min" },
          { place: "Metro", distance: "15 Min" }
        ],
        testimonials: [
          { name: "Mr. Arjun Nair", review: "Excellent investment opportunity with premium design and strong appreciation potential.", rating: 5, image: "https://randomuser.me/api/portraits/men/24.jpg" }
        ],
        faq: [
          { question: "Is the project ready for possession?", answer: "Yes, the project is scheduled for early possession with complete legal approval." },
          { question: "What is the size of studio units?", answer: "Studio apartments range from 650 to 675 sq. ft." }
        ],
        contact: {
          phone: "+91 98765 43210",
          whatsapp: "919876543210"
        }
      },

      "gaur-plume": {
        title: "Gaur Codename Plume",
        subtitle: "Luxury 3 & 4 BHK Residences",
        description: "Premium residences near Noida International Airport with elegant interiors, club amenities, and strong investment value.",
        startingPrice: "₹84.99/sq.ft",
        projects: "2+",
        rating: "4.9★",
        heroImage: ResidentialPlotsImage,
        stats: [
          { value: "2+", label: "BHK Options", icon: Building2 },
          { value: "4.9★", label: "Buyer Rating", icon: Star },
          { value: "1600+", label: "Sq. Ft", icon: Home },
          { value: "Airport", label: "Location", icon: Crown }
        ],
        highlights: [
          "3 & 4 BHK Luxury",
          "Clubhouse & Pool",
          "Airport Proximity",
          "Premium Smart Homes"
        ],
        gallery: [
          ResidentialPlotsImage,
          StudioApartmentsImage,
          BhutaniAstrathumImage,
          FoodzaniImage
        ],
        properties: [
          {
            title: "3 BHK Residence",
            location: "Near Airport",
            price: "₹1.36 Cr",
            bhk: "3 BHK",
            area: "1600 Sq.ft",
            badge: "LUXURY",
            rating: 4.9,
            image: ResidentialPlotsImage,
            slug: "gaur-plume"
          },
          {
            title: "4 BHK Residence",
            location: "Near Airport",
            price: "₹1.75 Cr",
            bhk: "4 BHK",
            area: "2000 Sq.ft",
            badge: "PREMIUM",
            rating: 4.9,
            image: CommercialOfficeImage,
            slug: "gaur-plume"
          }
        ],
        amenities: [
          { icon: Building2, label: "Clubhouse" },
          { icon: Droplets, label: "Swimming Pool" },
          { icon: Dumbbell, label: "Fitness Center" },
          { icon: ShieldCheck, label: "24/7 Security" }
        ],
        masterPlan: ResidentialPlotsImage,
        floorPlan: StudioApartmentsImage,
        paymentPlan: [
          { stage: "Booking", amount: "15%" },
          { stage: "Construction", amount: "35%" },
          { stage: "Possession", amount: "50%" }
        ],
        locationAdvantages: [
          { place: "Airport", distance: "20 Min" },
          { place: "Expressway", distance: "10 Min" },
          { place: "Hospital", distance: "12 Min" }
        ],
        testimonials: [
          { name: "Ms. Neha Kapoor", review: "The design, facilities, and location make this a premium long-term investment.", rating: 5, image: "https://randomuser.me/api/portraits/women/27.jpg" }
        ],
        faq: [
          { question: "What are the available unit types?", answer: "The project offers 3 BHK and 4 BHK residences with luxury finishing." },
          { question: "Is the project close to the airport?", answer: "Yes, it is located close to the airport with excellent road connectivity." }
        ],
        contact: {
          phone: "+91 98765 43211",
          whatsapp: "919876543211"
        }
      },

      "gaur-meloddy-30": {
        title: "Gaur Meloddy 30",
        subtitle: "Ultra Luxury Apartments",
        description: "3 & 4 BHK apartments in Greater Noida West with premium amenities, lush surroundings, and smart living features.",
        startingPrice: "₹2.24 Cr",
        projects: "2+",
        rating: "4.9★",
        heroImage: CommercialOfficeImage,
        stats: [
          { value: "2+", label: "Apartment Options", icon: Building2 },
          { value: "4.9★", label: "Buyer Rating", icon: Star },
          { value: "3 & 4", label: "BHK", icon: Home },
          { value: "Ultra", label: "Luxury", icon: Crown }
        ],
        highlights: [
          "Ultra Luxury Residences",
          "Greater Noida West",
          "Smart Home Features",
          "Green Surroundings"
        ],
        gallery: [
          CommercialOfficeImage,
          ResidentialPlotsImage,
          StudioApartmentsImage,
          CityCenter32Image
        ],
        properties: [
          {
            title: "3 BHK Apartment",
            location: "Greater Noida West",
            price: "₹2.24 Cr",
            bhk: "3 BHK",
            area: "1700 Sq.ft",
            badge: "ULTRA LUXURY",
            rating: 4.9,
            image: CommercialOfficeImage,
            slug: "gaur-meloddy-30"
          },
          {
            title: "4 BHK Apartment",
            location: "Greater Noida West",
            price: "₹2.6 Cr",
            bhk: "4 BHK",
            area: "2200 Sq.ft",
            badge: "PRESTIGE",
            rating: 4.9,
            image: ResidentialPlotsImage,
            slug: "gaur-meloddy-30"
          }
        ],
        amenities: [
          { icon: Trees, label: "Landscaped Greens" },
          { icon: Wifi, label: "Smart Security" },
          { icon: Car, label: "Vehicle Parking" },
          { icon: Sun, label: "Open Balconies" }
        ],
        masterPlan: CommercialOfficeImage,
        floorPlan: ResidentialPlotsImage,
        paymentPlan: [
          { stage: "Booking", amount: "20%" },
          { stage: "Construction", amount: "30%" },
          { stage: "Possession", amount: "50%" }
        ],
        locationAdvantages: [
          { place: "Metro", distance: "18 Min" },
          { place: "School", distance: "10 Min" },
          { place: "Hospital", distance: "12 Min" }
        ],
        testimonials: [
          { name: "Mr. Vikram Das", review: "A premium address with excellent amenities and a peaceful lifestyle environment.", rating: 5, image: "https://randomuser.me/api/portraits/men/33.jpg" }
        ],
        faq: [
          { question: "Are these apartments ready to move-in?", answer: "They are available with flexible payment plans and possession timelines." },
          { question: "What amenities are included?", answer: "The project includes clubhouse, parking, green spaces, and smart security features." }
        ],
        contact: {
          phone: "+91 98765 43212",
          whatsapp: "919876543212"
        }
      },

      "default": {
        title: "Premium Properties",
        subtitle: "Exclusive Collection",
        description: "Discover our curated selection of premium properties across NCR.",
        startingPrice: "₹34.9 L",
        projects: "50+",
        rating: "4.9★",
        heroImage: BhutaniAstrathumImage,
        stats: [
          { value: "50+", label: "Projects", icon: Building2 },
          { value: "4.9★", label: "Rating", icon: Star },
          { value: "100%", label: "RERA Verified", icon: ShieldCheck },
          { value: "24/7", label: "Support", icon: Clock }
        ],
        highlights: [
          "Trusted Developer",
          "Premium Locations",
          "High ROI"
        ],
        gallery: [BhutaniAstrathumImage, FoodzaniImage, CityCenter32Image, mayurimg],
        properties: [
          {
            title: "Bhutani Astrathum",
            location: "Sector 133 Noida",
            price: "₹6,990/sq.ft",
            bhk: "Commercial Office",
            area: "Commercial",
            badge: "TOP PICK",
            rating: 4.9,
            image: BhutaniAstrathumImage,
            slug: "bhutani-astrathum"
          }
        ],
        amenities: [
          { icon: Building2, label: "Premium Spaces" },
          { icon: ShieldCheck, label: "RERA Approved" },
          { icon: Wifi, label: "Smart Infrastructure" },
          { icon: Car, label: "Parking" }
        ],
        masterPlan: BhutaniAstrathumImage,
        floorPlan: FoodzaniImage,
        paymentPlan: [],
        locationAdvantages: [],
        testimonials: [],
        faq: [],
        contact: { phone: "+91 98765 43210", whatsapp: "919876543210" }
      }
    };

    const slugMap = {
      "commercial-office": "bhutani-astrathum",
      "retail-shops": "foodzani",
      "food-court": "foodzani",
      "soho-suites": "bhutani-astrathum",
      "studio-apartments": "gaur-codename-bento",
      "residential-plots": "gaur-plume",
      "gaur-codename-bento": "gaur-codename-bento",
      "gaur-plume": "gaur-plume",
      "gaur-meloddy-30": "gaur-meloddy-30"
    };

    return data[slug] || data[slugMap[slug] || "default"] || data["default"];
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
        <div className="hero-background" style={{ backgroundImage: `url(${propertyData.heroImage || BhutaniAstrathumImage})` }}>
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
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="stats-premium-container">
          {propertyData.stats.map((stat, index) => (
            <motion.div 
              className="stat-premium-card motion-element" 
              key={index}
              variants={fadeUp}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
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
          HIGHLIGHTS SECTION
      ============================================================ */}
      {propertyData.highlights && propertyData.highlights.length > 0 && (
        <section className="highlights-premium">
          <div className="highlights-premium-container">
            <motion.div
              className="highlights-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="section-kicker"><Sparkles size={16} /> Key Highlights</span>
              <h2>Why <span className="gold-text">Invest</span> Here</h2>
            </motion.div>

            <motion.div
              className="highlights-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {propertyData.highlights.map((item, index) => (
                <motion.div key={index} className="highlight-card motion-element" variants={fadeUp}>
                  <CheckCircle size={18} color="#B8892D" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ============================================================
          GALLERY SECTION
      ============================================================ */}
      {propertyData.gallery && propertyData.gallery.length > 0 && (
        <section className="gallery-premium">
          <div className="gallery-premium-container">
            <motion.div
              className="gallery-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="section-kicker"><Eye size={16} /> Project Gallery</span>
              <h2>Explore the <span className="gold-text">Visuals</span></h2>
            </motion.div>

            <motion.div
              className="gallery-visual"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="gallery-main-image">
                <img src={propertyData.gallery[activeGalleryImage]} alt="Project gallery" />
              </div>
              <div className="gallery-thumbs">
                {propertyData.gallery.map((image, index) => (
                  <button
                    key={index}
                    className={`gallery-thumb ${index === activeGalleryImage ? "active" : ""}`}
                    onClick={() => setActiveGalleryImage(index)}
                  >
                    <img src={image} alt={`Gallery ${index + 1}`} />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ============================================================
          PROPERTY GRID (6. UPDATED: Listing Title)
      ============================================================ */}
      <section className="listing-premium">
        <div className="listing-premium-header">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <span className="section-kicker">
              <Building2 size={16} />
              Featured Properties
            </span>
            {/* 6. UPDATED: Listing Title */}
            <h2>{propertyData.title} <span className="gold-text">Investment Options</span></h2>
            <p>{propertyData.description}</p>
          </motion.div>
          
          <motion.div 
            className="listing-filter"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
            viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {propertyData.properties.map((property, index) => (
            <motion.div 
              className="property-card-premium motion-element" 
              key={index}
              variants={fadeUp}
              whileHover={{ y: -12, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
            >
              <div className="property-image-wrapper">
                <img src={property.image} alt={property.title} loading="lazy" decoding="async" />
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
                  <div className="property-actions-stack">
                    <Link to={`/property/${property.slug}`} className="property-cta-premium">
                      Explore <ArrowRight size={16} />
                    </Link>
                    <Link to="/contact" className="property-cta-premium secondary-cta">
                      Contact <Phone size={16} />
                    </Link>
                  </div>
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
            viewport={{ once: true, amount: 0.2 }}
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
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {propertyData.amenities.map((amenity, index) => (
              <motion.div 
                className="amenity-premium-item motion-element" 
                key={index}
                variants={fadeUp}
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
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
          MASTER PLAN
      ============================================================ */}
      {propertyData.masterPlan && (
        <section className="plan-premium">
          <div className="plan-premium-container">
            <motion.div
              className="plan-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="section-kicker"><Building2 size={16} /> Master Plan</span>
              <h2>Blueprint of the <span className="gold-text">Project</span></h2>
            </motion.div>
            <motion.div className="plan-image-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <img src={propertyData.masterPlan} alt="Master plan" />
            </motion.div>
          </div>
        </section>
      )}

      {/* ============================================================
          FLOOR PLAN
      ============================================================ */}
      {propertyData.floorPlan && (
        <section className="plan-premium secondary-plan">
          <div className="plan-premium-container">
            <motion.div
              className="plan-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <span className="section-kicker"><Home size={16} /> Floor Plan</span>
              <h2>Thoughtful <span className="gold-text">Spaces</span></h2>
            </motion.div>
            <motion.div className="plan-image-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <img src={propertyData.floorPlan} alt="Floor plan" />
            </motion.div>
          </div>
        </section>
      )}

      {/* ============================================================
          PAYMENT PLAN
      ============================================================ */}
      {propertyData.paymentPlan && propertyData.paymentPlan.length > 0 && (
        <section className="payment-premium">
          <div className="payment-premium-container">
            <motion.div className="payment-header" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <span className="section-kicker"><WalletCards size={16} /> Payment Plan</span>
              <h2>Simple <span className="gold-text">Payment</span> Structure</h2>
            </motion.div>
            <div className="payment-table">
              {propertyData.paymentPlan.map((plan, index) => (
                <div key={index} className="payment-row">
                  <span>{plan.stage}</span>
                  <strong>{plan.amount}</strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          LOCATION ADVANTAGES
      ============================================================ */}
      {propertyData.locationAdvantages && propertyData.locationAdvantages.length > 0 && (
        <section className="location-premium">
          <div className="location-premium-container">
            <motion.div className="location-header" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <span className="section-kicker"><MapPin size={16} /> Location Advantage</span>
              <h2>Connected to <span className="gold-text">Everything</span></h2>
            </motion.div>
            <div className="location-grid">
              {propertyData.locationAdvantages.map((item, index) => (
                <div key={index} className="location-card">
                  <h3>{item.place}</h3>
                  <p>{item.distance}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
                viewport={{ once: true, amount: 0.2 }}
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
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {propertyData.testimonials.map((testimonial, index) => (
                  <motion.div 
                    className="testimonial-premium-card motion-element" 
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
                    <img src={testimonial.image} alt={testimonial.name} loading="lazy" decoding="async" />
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
          FAQ SECTION
      ============================================================ */}
      {propertyData.faq && propertyData.faq.length > 0 && (
        <section className="faq-premium">
          <div className="faq-premium-container">
            <motion.div className="faq-header" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <span className="section-kicker"><ShieldCheck size={16} /> FAQs</span>
              <h2>Common <span className="gold-text">Questions</span></h2>
            </motion.div>
            <div className="faq-list">
              {propertyData.faq.map((item, index) => (
                <div key={index} className="faq-item">
                  <button className="faq-question" onClick={() => setOpenFaq(index === openFaq ? -1 : index)}>
                    <span>{item.question}</span>
                    <ChevronRight size={16} className={openFaq === index ? "faq-icon rotated" : "faq-icon"} />
                  </button>
                  {openFaq === index && <div className="faq-answer">{item.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          CONTACT SECTION
      ============================================================ */}
      {propertyData.contact && (
        <section className="contact-premium">
          <div className="contact-premium-container">
            <motion.div className="contact-card" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
              <div>
                <span className="section-kicker"><Phone size={16} /> Book a Consultation</span>
                <h2>Talk to our <span className="gold-text">Experts</span></h2>
                <p>Get complete details on pricing, possession, and site visit availability.</p>
              </div>
              <div className="contact-actions">
                <a href={`tel:${propertyData.contact.phone}`} className="primary-btn gold-btn">Call Now</a>
                <a href={`https://wa.me/${propertyData.contact.whatsapp}`} target="_blank" rel="noreferrer" className="secondary-btn glass-btn">WhatsApp</a>
              </div>
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
            viewport={{ once: true, amount: 0.2 }}
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

      <footer className="property-footer">
        <div className="property-footer-container">
          <p>© 2026 Milesquare Realty. Premium property investments across NCR.</p>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}