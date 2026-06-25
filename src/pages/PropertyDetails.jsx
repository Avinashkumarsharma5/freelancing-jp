// PropertyDetails.jsx
import { useState, useEffect } from "react";
import { sendEnquiry } from "../services/email";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Star,
  Building2,
  Calendar,
  Download,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Heart,
  X,
  CheckCircle,
  Send,
  Zap,
  Eye,
  Info,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ZoomIn,
  Layers,
  Loader,
} from "lucide-react";
import "./PropertyDetailsPage.css"; // Binds your custom layout sheet
import { featuredProperties } from "./home";

const faqItems = [
  {
    q: "What is the booking amount?",
    a: "The initial booking amount is typically 10% of the total value, adjusted in the final payment.",
  },
  {
    q: "Can I use a loan for this property?",
    a: "Yes, this property is bank-finance ready and we can assist with loan documentation.",
  },
  {
    q: "Is the project RERA approved?",
    a: "Yes. This project is fully RERA registered and compliant with regulations.",
  },
  {
    q: "When is possession available?",
    a: "Possession is available as per the listed timeline in the property details section.",
  },
  {
    q: "Can I get a brochure?",
    a: "Yes. Download the digital brochure directly from the amenities tab.",
  },
];

function PropertyDetails() {
  const { slug } = useParams();
  const [property, setProperty] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [showFAQ, setShowFAQ] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  
  // FIXED: Removed inline property dependency to prevent app crash on mount
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property: "",
    city: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Sync data dynamically once property is verified and mounted
  useEffect(() => {
    window.scrollTo(0, 0);
    const found = featuredProperties.find(item => item.slug === slug);
    setProperty(found);
  }, [slug]);

  // FIXED: Hydrates form state safe from reference errors
  useEffect(() => {
    if (property) {
      setFormData((prev) => ({
        ...prev,
        property: property.title,
      }));
    }
  }, [property]);

  useEffect(() => {
    if (!property?.images?.length) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) =>
        prev === property.images.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [property]);

  // FIXED: Validations extended for city and budget bounds
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit phone";
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select budget.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!validateForm()) return;

  try {
    setIsLoading(true);

    await sendEnquiry(formData);

    const whatsappMessage = `🏡 *New Property Enquiry*

👤 Name: ${formData.name}

📞 Phone: ${formData.phone}

📧 Email: ${formData.email || "Not Provided"}

🏢 Property: ${formData.property}

🏙 City: ${formData.city}

💰 Budget: ${formData.budget}

📝 Message:

${formData.message || "No Message"}
`;

    window.open(
      `https://wa.me/916201486202?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );

    setShowEnquiry(false);
    setShowSuccess(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      property: property.title,
      city: "",
      budget: "",
      message: "",
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  } catch (err) {
    console.error(err);
    alert("Unable to send enquiry.");
  } finally {
    setIsLoading(false);
  }
};

  if (!property) {
    return (
      <div className="property-not-found">
        <h1>Property Not Found</h1>
        <Link to="/" className="primary-btn gold-btn">
          Back to Listings
        </Link>
      </div>
    );
  }

  const contactPhone = property.phone || "+919876543210";
  const contactWhatsapp = property.whatsapp || "919876543210";
  const mapSrc = property.map
    ? property.map
    : `https://maps.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`;
  const brochureLink = property.brochure || "#";

  const overviewDetails = [
    { label: "Property Type", value: property.type || "Commercial" },
    { label: "Project Status", value: property.status || "Ready To Move" },
    { label: "RERA Number", value: property.rera || "✅ Approved" },
    { label: "Possession", value: property.possession || "Immediate" },
    { label: "Size Range", value: property.size || property.area },
    { label: "Investment", value: property.investment || "High Growth" },
  ];

  const nearbyPlaces = [
    { icon: "🚇", label: "Metro Station", time: "2 min" },
    { icon: "🛣️", label: "Expressway", time: "5 min" },
    { icon: "✈️", label: "Airport", time: "35 min" },
    { icon: "🏥", label: "Hospital", time: "4 min" },
    { icon: "🏫", label: "School", time: "6 min" },
    { icon: "🛍️", label: "Mall", time: "3 min" },
  ];

  return (
    <div className="property-details page-shell">
      {/* ===== HERO TOP SECTION ===== */}
      <div className="page-banner">
        <div className="banner-breadcrumbs">
          <Link to="/" className="banner-link">
            <ChevronLeft size={16} /> Back to listings
          </Link>
          <div className="banner-pill">{property.badge}</div>
          <div className="banner-pill banner-pill--soft">{property.status}</div>
        </div>

        <section className="hero-section">
          <div className="hero-copy">
            <span className="hero-tag">Premium Commercial Investment</span>
            <h1>{property.title}</h1>
            <div className="hero-location">
              <MapPin size={18} />
              <span>{property.location}</span>
            </div>
            <p className="hero-description">{property.description}</p>
            <div className="hero-meta-row">
              <div className="hero-meta-card">
                <span>Starting Price</span>
                <strong>{property.price}</strong>
              </div>
              <div className="hero-meta-card">
                <span>Builder</span>
                <strong>{property.builder}</strong>
              </div>
              <div className="hero-meta-card">
                <span>Rating</span>
                <strong>{property.rating} / 5</strong>
              </div>
            </div>

            <div className="hero-actions">
              <button className="primary-btn gold-btn" onClick={() => setShowEnquiry(true)}>
                <Zap size={18} /> Enquire Now
              </button>
              <button className="secondary-btn glass-btn" onClick={() => window.open(`https://wa.me/${contactWhatsapp}`, "_blank")}>
                <MessageCircle size={18} /> WhatsApp
              </button>
            </div>

            <div className="hero-highlights">
              <div className="highlight-pill"><Star size={14} /> Top rated investment</div>
              <div className="highlight-pill"><ShieldCheck size={14} /> Pre-launch price benefits</div>
              <div className="highlight-pill"><Sparkles size={14} /> Ready for leasing</div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <img
                src={property.images[currentImage]}
                alt={property.title}
                className="hero-image"
                onClick={() => setShowEnquiry(true)}
              />
              <div className="hero-image-label">Tap image to view gallery</div>
              <div className="hero-image-controls">
                <button onClick={(e) => { e.stopPropagation(); setCurrentImage((prev) => (prev === 0 ? property.images.length - 1 : prev - 1)); }}>
                  <ChevronLeft size={16} />
                </button>
                <span>{currentImage + 1}/{property.images.length}</span>
                <button onClick={(e) => { e.stopPropagation(); setCurrentImage((prev) => (prev === property.images.length - 1 ? 0 : prev + 1)); }}>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== VALUE HIGHLIGHT CARDS ===== */}
      <section className="summary-grid">
        <div className="summary-card"><span>Investment Outlook</span><strong>High ROI</strong></div>
        <div className="summary-card"><span>Possession</span><strong>{property.possession || "Immediate"}</strong></div>
        <div className="summary-card"><span>Property Size</span><strong>{property.size || property.area}</strong></div>
        <div className="summary-card"><span>Best Use</span><strong>{property.investment || "Commercial"}</strong></div>
      </section>

      {/* ===== SPLIT GRID RESPONSIVE ENGINE ===== */}
      <div className="details-layout">
        <main className="details-main">
          <div className="tabs-row">
            {[
              { id: "overview", label: "Overview", icon: Info },
              { id: "amenities", label: "Amenities", icon: Zap },
              { id: "gallery", label: "Gallery", icon: Eye },
              { id: "location", label: "Location", icon: MapPin },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? "tab-button--active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={15} />{tab.label}
                </button>
              );
            })}
          </div>

          <div className="tab-content">
            {activeTab === "overview" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="section-card section-card--spacious">
                  <div className="section-header">
                    <div>
                      <h2>Project Overview</h2>
                      <p>Complete commercial project details and investment profile.</p>
                    </div>
                    <a href={brochureLink} className="secondary-btn small" download>
                      <Download size={15} /> Brochure
                    </a>
                  </div>

                  <div className="overview-grid">
                    <div className="overview-copy">
                      <p>{property.description}</p>
                      <ul className="overview-list">
                        <li>Ready for corporate tenants and premium retail brands.</li>
                        <li>Strong location advantage in primary commercial corridors.</li>
                        <li>Proven track record with premium certified structural safety.</li>
                      </ul>
                    </div>

                    <div className="overview-stats">
                      {overviewDetails.map((item) => (
                        <div key={item.label} className="detail-pill">
                          <span>{item.label}</span>
                          <strong>{item.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "amenities" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="section-card">
                  <h2>Project Amenities</h2>
                  <p className="section-copy">Premium spaces designed for modern high-end commercial success.</p>
                  <div className="amenity-grid">
                    {property.amenities?.map((item) => (
                      <div key={item} className="amenity-card">
                        <Sparkles size={16} color="var(--gold-primary)" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "gallery" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="section-card">
                  <div className="section-header">
                    <div>
                      <h2>Gallery Portfolio</h2>
                      <p>Explore the property visuals and premium structural design blueprints.</p>
                    </div>
                  </div>
                  <div className="gallery-grid">
                    {property.images.map((image, index) => (
                      <button key={index} className="gallery-item" onClick={() => setCurrentImage(index)}>
                        <img src={image} alt={`${property.title} - ${index + 1}`} />
                        <div className="gallery-overlay"><ZoomIn size={18} /></div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "location" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="section-card">
                  <h2>Location Advantages</h2>
                  <p className="section-copy">Nearby primary landmarks and transit corridors.</p>
                  <div className="location-grid">
                    {nearbyPlaces.map((place) => (
                      <div key={place.label} className="location-card">
                        <span className="loc-emoji">{place.icon}</span>
                        <div className="loc-info">
                          <strong>{place.label}</strong>
                          <span>{place.time} close</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="map-card">
                    <iframe src={mapSrc} title="Project location" loading="lazy" allowFullScreen />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ===== FAQ ACCORDION CARD ===== */}
            <div className="section-card faq-card">
              <div className="section-header">
                <div>
                  <h2>Frequently Asked Questions</h2>
                  <p>Common structural and investment compliance clearings.</p>
                </div>
                <button className="tab-button" onClick={() => setShowFAQ((prev) => !prev)}>
                  {showFAQ ? "Collapse" : "Expand All"}
                </button>
              </div>
              {showFAQ && (
                <div className="faq-list">
                  {faqItems.map((item, index) => (
                    <div key={item.q} className="faq-item">
                      <button className="faq-question" onClick={() => setExpandedFAQ((prev) => (prev === index ? null : index))}>
                        <span>{item.q}</span>
                        <strong>{expandedFAQ === index ? "−" : "+"}</strong>
                      </button>
                      {expandedFAQ === index && <p className="faq-answer">{item.a}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>

        {/* ===== DESKTOP ONLY SIDEBAR PANEL ===== */}
        <aside className="details-sidebar">
          <div className="contact-card">
            <div className="contact-card__head">
              <div>
                <span>Valuation Pricing</span>
                <strong>{property.price}</strong>
              </div>
              <button className="icon-button-circle" onClick={() => setIsLiked((prev) => !prev)}>
                <Heart size={18} fill={isLiked ? "var(--maroon)" : "none"} color={isLiked ? "var(--maroon)" : "var(--charcoal)"} />
              </button>
            </div>
            <p>Leave an elite response application. Our corporate portfolio assignment manager will connect natively.</p>
            <button className="primary-btn gold-btn full-btn-span" onClick={() => setShowEnquiry(true)}>
              <Send size={16} /> Request Consultant Call
            </button>

            <div className="contact-tile-grid">
              <div className="contact-tile"><Building2 size={16} /><span>{property.builder}</span></div>
              <div className="contact-tile"><Calendar size={16} /><span>{property.possession || "Ready"}</span></div>
              <div className="contact-tile"><Layers size={16} /><span>{property.size || property.area}</span></div>
            </div>

            <div className="trust-strip">
              <div><CheckCircle2 size={16} color="var(--gold-primary)" /><span>RERA Approved</span></div>
              <div><ShieldCheck size={16} color="var(--gold-primary)" /><span>Secure Escrow</span></div>
            </div>
          </div>

          <div className="agent-card">
            <div className="agent-avatar">SC</div>
            <div>
              <span>Assigned Relationship Lead</span>
              <strong>{property.builder} Corporation</strong>
            </div>
          </div>

          <div className="quick-contact-card">
            <span>Direct Coordinate Nodes</span>
            <div className="quick-contact-actions">
              <a href={`tel:${contactPhone}`} className="secondary-btn small full-btn-span"><Phone size={14} /> Call</a>
              <a href={`https://wa.me/${contactWhatsapp}`} target="_blank" rel="noreferrer" className="cta-whatsapp small-height"><MessageCircle size={14} /> WhatsApp</a>
            </div>
          </div>
        </aside>
      </div>

      {/* ===== MOBILE BOTTOM BAR POPUP ===== */}
      <div className="mobile-bottom-bar">
        <div>
          <span>Investment Valuation</span>
          <h3>{property.price}</h3>
        </div>
        <button className="primary-btn gold-btn" onClick={() => setShowEnquiry(true)}>Enquire Now</button>
      </div>

      {/* ===== ENQUIRY MODAL (WITH MODAL-FIELD STYLINGS FIXED) ===== */ }
      <AnimatePresence>
        {showEnquiry && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowEnquiry(false)}>
            <motion.div className="modal-panel" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setShowEnquiry(false)}>
                <X size={18} />
              </button>
              <h2>Premium Consultation Form</h2>
              <p>Fill out the parameters securely; our team will follow up natively.</p>
              
              <form className="modal-form" onSubmit={handleSubmit}>
                {/* Fixed Field: Property Read-only Input */}
                <div className="modal-field">
                  <label>Selected Asset Property</label>
                  <input type="text" name="property" value={formData.property} readOnly className="readonly-input" />
                </div>

                <div className="modal-field">
                  <label>Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={errors.name ? "input-error" : ""} placeholder="Legal Full Name" />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>

                <div className="modal-field">
                  <label>Mobile Coordinate</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={errors.phone ? "input-error" : ""} placeholder="10-Digit Contact Node" />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>

                {/* Added Field: City Input Column */}
                <div className="modal-field">
                  <label>City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleInputChange} className={errors.city ? "input-error" : ""} placeholder="E.g. Ranchi, Noida" />
                  {errors.city && <span className="field-error">{errors.city}</span>}
                </div>

                {/* Added Field: Budget Select Dropdown Option */}
                <div className="modal-field">
                  <label>Budget Range Bracket</label>
                  <select name="budget" value={formData.budget} onChange={handleInputChange} className={errors.budget ? "input-error" : ""}>
                    <option value="">Select Budget Bracket</option>
                    <option value="Under ₹25 Lakh">Under ₹25 Lakh</option>
                    <option value="₹25L - ₹50L">₹25L - ₹50L</option>
                    <option value="₹50L - ₹1Cr">₹50L - ₹1Cr</option>
                    <option value="Above ₹1Cr">Above ₹1Cr</option>
                  </select>
                  {errors.budget && <span className="field-error">{errors.budget}</span>}
                </div>

                <div className="modal-field">
                  <label>Corporate Email Box ID (Optional)</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={errors.email ? "input-error" : ""} placeholder="name@domain.com" />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>

                <div className="modal-field">
                  <label>Custom Customization Requirements</label>
                  <textarea name="message" rows="3" value={formData.message} onChange={handleInputChange} placeholder="E.g., Floor preferences, specific business type niche..." />
                </div>

                <button type="submit" className="primary-btn gold-btn full-btn-span" disabled={isLoading}>
                  {isLoading ? <Loader size={16} className="spinning" /> : <><Send size={14} /> Transmit Priority Request</>}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== TOAST ALERTS ===== */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div className="success-toast" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 30 }}>
            <CheckCircle size={20} color="var(--gold-light)" />
            <div>
              <strong>Secure Submission Transmitted</strong>
              <p>A relationship portfolio manager has been mapped to you.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PropertyDetails;