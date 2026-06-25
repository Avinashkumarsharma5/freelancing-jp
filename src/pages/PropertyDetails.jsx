import { useState, useEffect } from "react";
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
} from "lucide-react";
import "./PropertyDetailsPage.css";
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    interest: "Booking",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = featuredProperties.find((item) => item.slug === slug);
    setProperty(found);
  }, [slug]);

  useEffect(() => {
    if (!property?.images?.length) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) =>
        prev === property.images.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [property]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Enter a valid 10-digit phone";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowEnquiry(false);
      setShowSuccess(true);
      setFormData({ name: "", phone: "", email: "", message: "", interest: "Booking" });
      setTimeout(() => setShowSuccess(false), 3500);
    }, 1700);
  };

  if (!property) {
    return (
      <div className="property-not-found">
        <h1>Property Not Found</h1>
        <Link to="/" className="button button--primary">
          Back to Listings
        </Link>
      </div>
    );
  }

  const contactPhone = property.phone || "+919876543210";
  const contactWhatsapp = property.whatsapp || "919876543210";
  const mapSrc = property.map
    ? property.map
    : `https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`;
  const brochureLink = property.brochure || "#";

  const overviewDetails = [
    { label: "Property Type", value: property.type },
    { label: "Project Status", value: property.status },
    { label: "RERA Number", value: property.rera || "Available" },
    { label: "Possession", value: property.possession },
    { label: "Size Range", value: property.size },
    { label: "Investment", value: property.investment },
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
              <button className="button button--primary" onClick={() => setShowEnquiry(true)}>
                <Zap size={18} /> Enquire Now
              </button>
              <button className="button button--outline" onClick={() => window.open(`https://wa.me/${contactWhatsapp}`, "_blank") }>
                <MessageCircle size={18} /> WhatsApp
              </button>
            </div>

            <div className="hero-highlights">
              <div className="highlight-pill">
                <Star size={16} /> Top rated investment
              </div>
              <div className="highlight-pill">
                <ShieldCheck size={16} /> Pre-launch price benefits
              </div>
              <div className="highlight-pill">
                <Sparkles size={16} /> Ready for corporate leasing
              </div>
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
              <div className="hero-image-label">Tap image to enquire</div>
              <div className="hero-image-controls">
                <button onClick={() => setCurrentImage((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))}>
                  <ChevronLeft size={18} />
                </button>
                <span>
                  {currentImage + 1}/{property.images.length}
                </span>
                <button onClick={() => setCurrentImage((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))}>
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="summary-grid">
        <div className="summary-card">
          <span>Investment Outlook</span>
          <strong>High ROI</strong>
        </div>
        <div className="summary-card">
          <span>Possession</span>
          <strong>{property.possession}</strong>
        </div>
        <div className="summary-card">
          <span>Property Size</span>
          <strong>{property.size}</strong>
        </div>
        <div className="summary-card">
          <span>Best Use</span>
          <strong>{property.investment}</strong>
        </div>
      </section>

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
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="tab-content">
            {activeTab === "overview" && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                <div className="section-card section-card--spacious">
                  <div className="section-header">
                    <div>
                      <h2>Project Overview</h2>
                      <p>Complete commercial project details and investment profile.</p>
                    </div>
                    <a href={brochureLink} className="button button--ghost">
                      <Download size={16} /> Download Brochure
                    </a>
                  </div>

                  <div className="overview-grid">
                    <div className="overview-copy">
                      <p>{property.description}</p>
                      <ul className="overview-list">
                        <li>Ready for corporate tenants and premium retail brands.</li>
                        <li>Strong location advantage in Noida's commercial corridor.</li>
                        <li>Proven track record with a reliable builder partner.</li>
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
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                <div className="section-card">
                  <h2>Project Amenities</h2>
                  <p className="section-copy">Premium amenities designed for modern commercial success.</p>
                  <div className="amenity-grid">
                    {property.amenities.map((item) => (
                      <div key={item} className="amenity-card">
                        <Sparkles size={18} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "gallery" && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                <div className="section-card">
                  <div className="section-header">
                    <div>
                      <h2>Gallery</h2>
                      <p>Explore the property visuals and premium design details.</p>
                    </div>
                    <span className="gallery-count">{property.images.length} Photos</span>
                  </div>
                  <div className="gallery-grid">
                    {property.images.map((image, index) => (
                      <button key={index} className="gallery-item" onClick={() => setCurrentImage(index)}>
                        <img src={image} alt={`${property.title} - ${index + 1}`} />
                        <div className="gallery-overlay">
                          <ZoomIn size={20} />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "location" && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                <div className="section-card">
                  <div className="section-header">
                    <div>
                      <h2>Location Insights</h2>
                      <p>Nearby landmarks, transportation and prime connectivity.</p>
                    </div>
                  </div>
                  <div className="location-grid">
                    {nearbyPlaces.map((place) => (
                      <div key={place.label} className="location-card">
                        <span>{place.icon}</span>
                        <div>
                          <strong>{place.label}</strong>
                          <span>{place.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="map-card">
                    <iframe src={mapSrc} title="Project location" loading="lazy" />
                  </div>
                </div>
              </motion.div>
            )}

            <div className="section-card faq-card">
              <div className="section-header">
                <div>
                  <h2>FAQs</h2>
                  <p>Answers to the most common investor questions.</p>
                </div>
                <button className="button button--ghost" onClick={() => setShowFAQ((prev) => !prev)}>
                  {showFAQ ? "Hide" : "Show"} FAQs
                </button>
              </div>
              {showFAQ && (
                <div className="faq-list">
                  {faqItems.map((item, index) => (
                    <div key={item.q} className="faq-item">
                      <button
                        className="faq-question"
                        onClick={() => setExpandedFAQ((prev) => (prev === index ? null : index))}
                      >
                        <span>{item.q}</span>
                        <span>{expandedFAQ === index ? "-" : "+"}</span>
                      </button>
                      {expandedFAQ === index && <p className="faq-answer">{item.a}</p>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>

        <aside className="details-sidebar">
          <div className="contact-card">
            <div className="contact-card__head">
              <div>
                <span>Property price</span>
                <strong>{property.price}</strong>
              </div>
              <button className="icon-button" onClick={() => setIsLiked((prev) => !prev)}>
                <Heart size={18} fill={isLiked ? "#8b2e2e" : "none"} color={isLiked ? "#8b2e2e" : "#1a1a1a"} />
              </button>
            </div>
            <p>Request a callback and receive full investment guidance from our team.</p>
            <button className="button button--primary button--full" onClick={() => setShowEnquiry(true)}>
              <Send size={18} /> Request Callback
            </button>

            <div className="contact-tile-grid">
              <div className="contact-tile">
                <Building2 size={18} />
                <span>{property.builder}</span>
              </div>
              <div className="contact-tile">
                <Calendar size={18} />
                <span>{property.possession}</span>
              </div>
              <div className="contact-tile">
                <Layers size={18} />
                <span>{property.size}</span>
              </div>
            </div>

            <div className="trust-strip">
              <div>
                <CheckCircle2 size={18} />
                <span>RERA Approved</span>
              </div>
              <div>
                <ShieldCheck size={18} />
                <span>Secure Booking</span>
              </div>
            </div>
          </div>

          <div className="agent-card">
            <div className="agent-avatar">BH</div>
            <div>
              <span>Lead Consultant</span>
              <strong>{property.builder}</strong>
            </div>
          </div>

          <div className="quick-contact-card">
            <span>Need immediate assistance?</span>
            <div className="quick-contact-actions">
              <a href={`tel:${contactPhone}`} className="button button--outline button--full">
                <Phone size={16} /> Call
              </a>
              <a href={`https://wa.me/${contactWhatsapp}`} target="_blank" rel="noreferrer" className="button button--secondary button--full">
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </aside>
      </div>

      <div className="mobile-bottom-bar">
        <div>
          <span>Contact now</span>
          <strong>{property.price}</strong>
        </div>
        <button className="button button--primary" onClick={() => setShowEnquiry(true)}>
          Enquire
        </button>
      </div>

      <AnimatePresence>
        {showEnquiry && (
          <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="modal-panel" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}>
              <button className="modal-close" onClick={() => setShowEnquiry(false)}>
                <X size={18} />
              </button>
              <h2>Send Your Inquiry</h2>
              <p>Complete the form and our expert will call you within 2 hours.</p>
              <form className="modal-form" onSubmit={handleSubmit}>
                <div className="modal-field">
                  <label>Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} className={errors.name ? "input-error" : ""} />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
                <div className="modal-field">
                  <label>Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={errors.phone ? "input-error" : ""} />
                  {errors.phone && <span className="field-error">{errors.phone}</span>}
                </div>
                <div className="modal-field">
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={errors.email ? "input-error" : ""} />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
                <div className="modal-field">
                  <label>Interest</label>
                  <select name="interest" value={formData.interest} onChange={handleInputChange}>
                    <option>Booking</option>
                    <option>Investment</option>
                    <option>Brochure</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="modal-field">
                  <label>Message</label>
                  <textarea name="message" rows="4" value={formData.message} onChange={handleInputChange} />
                </div>
                <button type="submit" className="button button--primary button--full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Request"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSuccess && (
          <motion.div className="success-toast" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 24 }}>
            <CheckCircle size={20} />
            <div>
              <strong>Request submitted</strong>
              <p>Our team will contact you shortly.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PropertyDetails;
