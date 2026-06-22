import { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle,
  Building2,
  ShieldCheck,
  Headphones,
} from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    budget: "",
    propertyType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Integration
    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      budget: formData.budget,
      propertyType: formData.propertyType,
      message: formData.message,
    };

    emailjs.send(
      "YOUR_SERVICE_ID",     // Replace with your Service ID
      "YOUR_TEMPLATE_ID",    // Replace with your Template ID
      templateParams,
      "YOUR_PUBLIC_KEY"      // Replace with your Public Key
    );

    // WhatsApp Integration
    const whatsappMessage = `
New Property Enquiry

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Location: ${formData.location}
Budget: ${formData.budget}
Property Type: ${formData.propertyType}

Message:
${formData.message}
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
      location: "",
      budget: "",
      propertyType: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">

      {/* Floating Contact Buttons */}
      <a
        href="https://wa.me/916201486202"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-contact whatsapp-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 8.001 0C3.589 0 0 3.589 0 8c0 1.409.368 2.784 1.066 3.999L0 16l4.113-1.047A7.97 7.97 0 0 0 8.001 16C12.411 16 16 12.411 16 8a7.95 7.95 0 0 0-2.399-5.674z"/>
        </svg>
      </a>

      <a
        href="tel:+916201486202"
        className="floating-contact call-btn"
      >
        <Phone size={26} />
      </a>

      {/* HERO SECTION */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="site-container">
          <div className="contact-hero-content">
            <span className="hero-tag">
              Luxury Real Estate Advisory
            </span>
            <h1>
              Let's Find Your
              <span> Dream Property</span>
            </h1>
            <p>
              Connect with Milesquare Realty and
              discover luxury homes, premium
              investments, and exclusive real estate
              opportunities across NCR.
            </p>
            <div className="hero-actions">
              <a
                href="#contact-form"
                className="hero-primary-btn"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+919876543210"
                className="hero-secondary-btn"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* STATS */}
          <div className="contact-stats">
            <div className="stat-card">
              <h3>500+</h3>
              <p>Properties Sold</p>
            </div>
            <div className="stat-card">
              <h3>1200+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>₹500Cr+</h3>
              <p>Transactions Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT MAIN SECTION */}
      <section className="contact-main" id="contact-form">
        <div className="site-container contact-grid">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="contact-info">
            <span className="section-kicker">
              Contact Us
            </span>
            <h2>
              Speak With Our
              <span className="gold-text">
                {" "}Property Experts
              </span>
            </h2>
            <p>
              Whether you're looking for a dream
              home, premium investment, luxury
              apartment, villa, plot or commercial
              space, our experts are ready to help.
            </p>

            {/* BENEFITS */}
            <div className="contact-benefits">
              <div>
                <CheckCircle size={18} />
                Verified Properties Only
              </div>
              <div>
                <CheckCircle size={18} />
                Free Consultation
              </div>
              <div>
                <CheckCircle size={18} />
                End-to-End Support
              </div>
              <div>
                <CheckCircle size={18} />
                Response Within 30 Minutes
              </div>
            </div>

            {/* ADVISOR BOX */}
            <div className="advisor-box">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300"
                alt="Advisor"
              />
              <div>
                <h4>
                  Dedicated Property Advisor
                </h4>
                <p>
                  Get personalized guidance for
                  buying, investing, and selling.
                </p>
              </div>
            </div>

            {/* CONTACT CARDS */}
            <div className="contact-cards">
              <div className="info-card">
                <Phone size={22} />
                <div>
                  <h4>Call Us</h4>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              <div className="info-card">
                <Mail size={22} />
                <div>
                  <h4>Email Us</h4>
                  <p>
                    info@milesquarerealty.com
                  </p>
                </div>
              </div>
              <div className="info-card">
                <MapPin size={22} />
                <div>
                  <h4>Visit Office</h4>
                  <p>
                    Golf Course Road,
                    Gurgaon, Haryana
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>
              Request Free Consultation
            </h3>
            <p className="form-subtitle">
              Our advisor will contact you
              within 30 minutes.
            </p>

            <div className="form-row">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="form-row">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              >
                <option value="">Preferred Location</option>
                <option value="Gurgaon">Gurgaon</option>
                <option value="Noida">Noida</option>
                <option value="Delhi">Delhi</option>
                <option value="Greater Noida">Greater Noida</option>
              </select>
            </div>

            <div className="form-row">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Budget Range</option>
                <option value="₹50L - ₹1Cr">₹50L - ₹1Cr</option>
                <option value="₹1Cr - ₹2Cr">₹1Cr - ₹2Cr</option>
                <option value="₹2Cr - ₹5Cr">₹2Cr - ₹5Cr</option>
                <option value="₹5Cr+">₹5Cr+</option>
              </select>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
              >
                <option value="">Property Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="Plot">Plot</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              placeholder="Tell us about your requirements..."
            />

            <button type="submit" className="submit-btn">
              Submit Enquiry
              <ArrowRight size={18} />
            </button>

            {submitted && (
              <div className="success-box">
                <strong>
                  ✓ Enquiry Submitted Successfully
                </strong>
                <p>
                  Our property advisor will
                  contact you shortly.
                </p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why-us">
        <div className="site-container">
          <div className="section-header">
            <span>
              Why Milesquare Realty
            </span>
            <h2>
              Trusted By Hundreds Of
              Home Buyers
            </h2>
          </div>
          <div className="why-grid">
            <div className="why-card">
              <Building2 size={40} />
              <h3>
                Premium Properties
              </h3>
              <p>
                Verified luxury apartments,
                villas and commercial spaces.
              </p>
            </div>
            <div className="why-card">
              <ShieldCheck size={40} />
              <h3>
                Trusted Guidance
              </h3>
              <p>
                Professional support through
                every step of your journey.
              </p>
            </div>
            <div className="why-card">
              <Headphones size={40} />
              <h3>
                Dedicated Support
              </h3>
              <p>
                Personalized assistance from
                consultation to possession.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="site-container">
          <h2>
            Frequently Asked Questions
          </h2>
          <div className="faq-card">
            <h4>
              Do you provide site visits?
            </h4>
            <p>
              Yes. We arrange guided site visits
              for all listed projects.
            </p>
          </div>
          <div className="faq-card">
            <h4>
              Is consultation free?
            </h4>
            <p>
              Yes. Consultation is 100% free.
            </p>
          </div>
          <div className="faq-card">
            <h4>
              Which locations do you cover?
            </h4>
            <p>
              Gurgaon, Noida, Delhi,
              Greater Noida and NCR.
            </p>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=gurgaon&output=embed"
          loading="lazy"
        />
      </section>

      {/* CTA SECTION */}
      <section className="contact-cta">
        <div className="site-container">
          <h2>
            Ready To Find Your Dream Property?
          </h2>
          <p>
            Schedule a consultation with our
            property experts today.
          </p>
          <a
            href="#contact-form"
            className="cta-btn"
          >
            Schedule Consultation
          </a>
        </div>
      </section>

    </main>
  );
}

export default Contact;