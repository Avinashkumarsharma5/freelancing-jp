import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Building2,
  ShieldCheck,
  Headphones,
  Loader2,
} from "lucide-react";
import "./Contact.css";

const faqItems = [
  {
    q: "Do you provide site visits?",
    a: "Yes. We arrange guided site visits for all listed projects free of cost.",
  },
  {
    q: "Is consultation free?",
    a: "Yes. Our consultation and portfolio assistance is 100% free.",
  },
  {
    q: "Which locations do you cover?",
    a: "We primary cover Gurgaon, Noida, Delhi, Greater Noida, and prime corridors across NCR.",
  },
];

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  
  // 3. Sync formData states layout
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property: "",
    city: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // 8. Strict Form Parameter Validations
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.city) newErrors.city = "Please select preferred city";
    if (!formData.property) newErrors.property = "Please select a specific property context";
    if (!formData.budget) newErrors.budget = "Please select your target budget bracket";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsLoading(true);

  try {
    // Email bhejega
    await sendEnquiry(formData);

    // WhatsApp Open
    const whatsappMessage = `🏠 *New Property Enquiry*

👤 Name: ${formData.name}

📞 Phone: ${formData.phone}

📧 Email: ${formData.email || "Not Provided"}

🏙 City: ${formData.city}

🏢 Property: ${formData.property}

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

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    setFormData({
      name: "",
      phone: "",
      email: "",
      property: "",
      city: "",
      budget: "",
      message: "",
    });
  } catch (err) {
    console.error(err);
    alert("Unable to send enquiry.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <main className="contact-page">
      {/* Floating Action Navigation Anchors */}
      <a
        href="https://wa.me/916201486202"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-contact whatsapp-btn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 8.001 0C3.589 0 0 3.589 0 8c0 1.409.368 2.784 1.066 3.999L0 16l4.113-1.047A7.97 7.97 0 0 0 8.001 16C12.411 16 16 12.411 16 8a7.95 7.95 0 0 0-2.399-5.674z"/>
        </svg>
      </a>

      <a href="tel:+916201486202" className="floating-contact call-btn">
        <Phone size={24} />
      </a>

      {/* ===== HERO CONTENT HEADER SECTION ===== */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="site-container">
          <div className="contact-hero-content">
            <span className="hero-tag">Luxury Real Estate Advisory</span>
            <h1>Let's Find Your<span> Dream Property</span></h1>
            <p>
              Connect with Milesquare Realty and discover luxury homes, premium 
              investments, and exclusive real estate opportunities across NCR.
            </p>
            <div className="hero-actions">
              <a href="#contact-form" className="hero-primary-btn">Get Free Consultation</a>
              <a href="tel:+916201486202" className="hero-secondary-btn">Call Now</a>
            </div>
          </div>

          <div className="contact-stats">
            <div className="stat-card"><h3>500+</h3><p>Properties Sold</p></div>
            <div className="stat-card"><h3>1200+</h3><p>Happy Clients</p></div>
            <div className="stat-card"><h3>15+</h3><p>Years Experience</p></div>
            <div className="stat-card"><h3>₹500Cr+</h3><p>Transactions Closed</p></div>
          </div>
        </div>
      </section>

      {/* ===== CENTRAL INTERACTIVE FORM COMPONENT AREA ===== */}
      <section className="contact-main" id="contact-form">
        <div className="site-container contact-grid">
          
          {/* LEFT INTERACTION ADVISORY INFORMATION CARD LAYER */}
          <div className="contact-info">
            <span className="section-kicker">Contact Us</span>
            <h2>Speak With Our <span className="gold-text">Property Experts</span></h2>
            <p>
              Whether you're looking for a dream home, premium investment, luxury 
              apartment, villa, plot or commercial space, our experts are ready to help.
            </p>

            <div className="contact-benefits">
              <div><CheckCircle size={16} /> Verified Properties Only</div>
              <div><CheckCircle size={16} /> Free Consultation Support</div>
              <div><CheckCircle size={16} /> End-to-End Documentation Assistance</div>
              <div><CheckCircle size={16} /> Priority Advisor Response Within 30 Mins</div>
            </div>

            <div className="advisor-box">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300" alt="Corporate Property Lead Advisor" />
              <div>
                <h4>Dedicated Property Advisor</h4>
                <p>Get personalized asset guidance profiles for custom requirements natively.</p>
              </div>
            </div>

            <div className="contact-cards">
              <div className="info-card"><Phone size={20} /><div><h4>Call Node</h4><p>+91 62014 86202</p></div></div>
              <div className="info-card"><Mail size={20} /><div><h4>Official Mailbox</h4><p>info@milesquarerealty.com</p></div></div>
              <div className="info-card"><MapPin size={20} /><div><h4>Visit Office HQ</h4><p>Golf Course Road, Gurgaon, Haryana</p></div></div>
            </div>
          </div>

          {/* RIGHT SIDE DATA EXTRACTION CAPTURE MODULE FORM PANEL */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Request Free Consultation</h3>
            <p className="form-subtitle">An assigned advisor will respond natively inside 30 business minutes.</p>

            <div className="form-row-block">
              <div className="input-group-element">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className={errors.name ? "input-field-error" : ""} />
                {errors.name && <span className="inline-field-error">{errors.name}</span>}
              </div>
              
              <div className="input-group-element">
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className={errors.phone ? "input-field-error" : ""} />
                {errors.phone && <span className="inline-field-error">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-row-block">
              <div className="input-group-element">
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address (Optional)" className={errors.email ? "input-field-error" : ""} />
                {errors.email && <span className="inline-field-error">{errors.email}</span>}
              </div>

              {/* 4. Location Dropdown Renamed to City Option Metrics */}
              <div className="input-group-element">
                <select name="city" value={formData.city} onChange={handleChange} className={errors.city ? "input-field-error" : ""}>
                  <option value="">Preferred Location City</option>
                  <option value="Gurgaon">Gurgaon</option>
                  <option value="Noida">Noida</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Greater Noida">Greater Noida</option>
                </select>
                {errors.city && <span className="inline-field-error">{errors.city}</span>}
              </div>
            </div>

            <div className="form-row-block">
              <div className="input-group-element">
                <select name="budget" value={formData.budget} onChange={handleChange} className={errors.budget ? "input-field-error" : ""}>
                  <option value="">Budget Range Bracket</option>
                  <option value="Under ₹25 Lakh">Under ₹25 Lakh</option>
                  <option value="₹25L - ₹50L">₹25L - ₹50L</option>
                  <option value="₹50L - ₹1Cr">₹50L - ₹1Cr</option>
                  <option value="₹1Cr - ₹2Cr">₹1Cr - ₹2Cr</option>
                  <option value="₹2Cr - ₹5Cr">₹2Cr - ₹5Cr</option>
                  <option value="₹5Cr+">₹5Cr+</option>
                </select>
                {errors.budget && <span className="inline-field-error">{errors.budget}</span>}
              </div>

              {/* 5. Property Type Dropdown Renamed with updated Custom Project Asset selections */}
              <div className="input-group-element">
                <select name="property" value={formData.property} onChange={handleChange} className={errors.property ? "input-field-error" : ""}>
                  <option value="">Select Target Asset Project</option>
                  <option value="Bhutani Astrathum">Bhutani Astrathum</option>
                  <option value="Foodzani">Foodzani</option>
                  <option value="City Center 32">City Center 32</option>
                  <option value="Mayur Forest Villa">Mayur Forest Villa</option>
                  <option value="133 Avenue">133 Avenue</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
                {errors.property && <span className="inline-field-error">{errors.property}</span>}
              </div>
            </div>

            <div className="input-group-element">
              <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Tell us about your custom space configuration requirements..." />
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? (
                <><Loader2 className="spinning-loader" size={16} /> Processing Transmission...</>
              ) : (
                <>Submit Enquiry <ArrowRight size={18} /></>
              )}
            </button>

            {/* 9. Success State UI Framework elements */}
            {submitted && (
              <div className="success-box">
                <strong>✓ Enquiry Submitted Successfully</strong>
                <p>Our dedicated structural property advisor will reach out coordinates shortly.</p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* ===== DEDICATED BRAND BENEFITS GRID LAYER ===== */}
      <section className="why-us">
        <div className="site-container">
          <div className="section-header">
            <span>Why Milesquare Realty</span>
            <h2>Trusted By Hundreds Of Premium Real Estate Investors</h2>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <Building2 size={36} color="var(--gold-primary)" />
              <h3>Premium Asset Classes</h3>
              <p>Verified ultra luxury suites, boutique high-street commercial hubs and corporate lounges.</p>
            </div>
            <div className="why-card">
              <ShieldCheck size={36} color="var(--gold-primary)" />
              <h3>Compliant Integrity Guidance</h3>
              <p>Rigorous transparency check matrices across escrow nodes and title records parameters.</p>
            </div>
            <div className="why-card">
              <Headphones size={36} color="var(--gold-primary)" />
              <h3>End-to-End Asset Care</h3>
              <p>Personalized structural consultations tracking execution roadmaps right up to official possession cycles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STRUCTURAL FAQ ACCORDION DISPLAY ===== */}
      <section className="faq-section">
        <div className="site-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid-wrapper">
            {faqItems.map((item, id) => (
              <div className="faq-card" key={id}>
                <h4>{item.q}</h4>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HQ GEO TRACKING MAP INTERFACE MAP PLACEMENT */}
      <section className="map-section">
        <iframe
          title="Milesquare Headquarters Map Node"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.971556950293!2d77.0943485761358!3d28.450259892336444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18bf14736fdf%3A0x6b77cd5c67e7c489!2sGolf%20Course%20Rd%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
        />
      </section>

      {/* FOOTER CALL-TO-ACTION PRIORITY NODE ANCHOR */}
      <section className="contact-cta">
        <div className="site-container">
          <h2>Ready To Secure Your Ideal Strategic Asset Allotment?</h2>
          <p>Initialize your free structured alignment blueprint consultation setup natively today.</p>
          <a href="#contact-form" className="cta-btn">Schedule Priority Appointment</a>
        </div>
      </section>
    </main>
  );
}

export default Contact;