import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  Sparkles,
  Calendar,
  Send
} from 'lucide-react';
import { studioLocations, faqList } from '../data/studioData';
import './ContactPage.css';

export const ContactPage = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Private Villa / Residence',
    estimatedBudget: '€400,000 – €750,000',
    location: '',
    description: '',
    preferredTimeline: 'Immediate (1–3 Months)'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // Field Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide your telephone or mobile number.';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Please enter a valid telephone number.';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Please indicate the property location or city.';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please provide a brief outline of your architectural aspirations.';
    } else if (formData.description.trim().length < 15) {
      newErrors.description = 'Please describe your project in a little more detail (min 15 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate instant secure processing & store in localStorage
    setTimeout(() => {
      const enquiryRecord = {
        ...formData,
        submittedAt: new Date().toISOString(),
        id: `ENQ-${Date.now().toString().slice(-6)}`
      };

      try {
        const stored = JSON.parse(localStorage.getItem('aurel_enquiries') || '[]');
        stored.unshift(enquiryRecord);
        localStorage.setItem('aurel_enquiries', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage failed:', err);
      }

      setSubmittedData(enquiryRecord);
      setIsSubmitting(false);

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: 'Private Villa / Residence',
        estimatedBudget: '€400,000 – €750,000',
        location: '',
        description: '',
        preferredTimeline: 'Immediate (1–3 Months)'
      });
    }, 900);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="contact-page-wrapper">
      {/* Page Hero Banner */}
      <section className="contact-hero-banner theme-dark">
        <div
          className="contact-hero-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2200&q=85')`
          }}
        />
        <div className="contact-hero-veil" />

        <div className="container contact-hero-container">
          <span className="eyebrow eyebrow-dark">
            <Sparkles size={14} />
            <span>Consultation & Enquiries</span>
          </span>
          <h1 className="heading-hero contact-hero-title">
            Begin Your Spatial<br />
            <em>Transformation</em>
          </h1>
          <p className="text-lead contact-hero-lead">
            We accept a strictly limited number of private residential and commercial commissions
            each calendar year to ensure unwavering architectural devotion. Submit your project
            parameters below.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="contact-main-section section-padding">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Column: Consultation Form */}
            <div className="contact-form-column">
              <div className="form-card-container glass-panel">
                <span className="eyebrow">Project Enquiry</span>
                <h2 className="form-heading">Request Architectural Consultation</h2>
                <p className="form-subtext">
                  Please complete the briefing parameters. Our Principal Architects will review
                  your submission and schedule a confidential introductory conversation.
                </p>

                {submittedData ? (
                  /* Success Confirmation Box */
                  <div className="enquiry-success-box animate-fade-in">
                    <div className="success-icon-wrap">
                      <CheckCircle2 size={42} className="text-gold" />
                    </div>
                    <h3 className="success-heading">Consultation Dossier Received</h3>
                    <p className="success-msg">
                      Thank you, <strong>{submittedData.fullName}</strong>. Your enquiry (Reference{' '}
                      <strong>{submittedData.id}</strong>) has been registered in our confidential
                      client portal.
                    </p>
                    <div className="success-summary-card">
                      <div className="summary-item">
                        <span>Project Type:</span>
                        <strong>{submittedData.projectType}</strong>
                      </div>
                      <div className="summary-item">
                        <span>Location:</span>
                        <strong>{submittedData.location}</strong>
                      </div>
                      <div className="summary-item">
                        <span>Budget Allocation:</span>
                        <strong>{submittedData.estimatedBudget}</strong>
                      </div>
                    </div>
                    <p className="success-note">
                      Our Milan or New York atelier will reach out within 24–48 business hours via{' '}
                      {submittedData.email}.
                    </p>
                    <button
                      onClick={() => setSubmittedData(null)}
                      className="btn btn-secondary"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  /* Form Fields */
                  <form onSubmit={handleSubmit} className="consultation-form" noValidate>
                    <div className="form-row-2col">
                      {/* Full Name */}
                      <div className="form-field-group">
                        <label htmlFor="fullName" className="field-label">
                          Full Name <span className="req">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="e.g. Aurelia Vance"
                          className={`field-input ${errors.fullName ? 'has-error' : ''}`}
                        />
                        {errors.fullName && (
                          <span className="field-error-text">
                            <AlertCircle size={12} /> {errors.fullName}
                          </span>
                        )}
                      </div>

                      {/* Email Address */}
                      <div className="form-field-group">
                        <label htmlFor="email" className="field-label">
                          Email Address <span className="req">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. client@domain.com"
                          className={`field-input ${errors.email ? 'has-error' : ''}`}
                        />
                        {errors.email && (
                          <span className="field-error-text">
                            <AlertCircle size={12} /> {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="form-row-2col">
                      {/* Phone Number */}
                      <div className="form-field-group">
                        <label htmlFor="phone" className="field-label">
                          Telephone / Mobile <span className="req">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +39 02 8945 6600"
                          className={`field-input ${errors.phone ? 'has-error' : ''}`}
                        />
                        {errors.phone && (
                          <span className="field-error-text">
                            <AlertCircle size={12} /> {errors.phone}
                          </span>
                        )}
                      </div>

                      {/* Project Location */}
                      <div className="form-field-group">
                        <label htmlFor="location" className="field-label">
                          Project Location / City <span className="req">*</span>
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="e.g. Lake Como, Italy or Manhattan, NY"
                          className={`field-input ${errors.location ? 'has-error' : ''}`}
                        />
                        {errors.location && (
                          <span className="field-error-text">
                            <AlertCircle size={12} /> {errors.location}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="form-row-2col">
                      {/* Project Type */}
                      <div className="form-field-group">
                        <label htmlFor="projectType" className="field-label">
                          Project Typology
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="field-input field-select"
                        >
                          <option value="Private Villa / Residence">Private Villa / Residence</option>
                          <option value="Urban Penthouse / Loft">Urban Penthouse / Loft</option>
                          <option value="Historic Heritage Restoration">Historic Heritage Restoration</option>
                          <option value="Boutique Hospitality & Hotel">Boutique Hospitality & Hotel</option>
                          <option value="Executive Office / Headquarters">Executive Office / Headquarters</option>
                          <option value="Kitchen & Living Architecture">Kitchen & Living Architecture</option>
                        </select>
                      </div>

                      {/* Estimated Budget */}
                      <div className="form-field-group">
                        <label htmlFor="estimatedBudget" className="field-label">
                          Estimated Budget Allocation
                        </label>
                        <select
                          id="estimatedBudget"
                          name="estimatedBudget"
                          value={formData.estimatedBudget}
                          onChange={handleInputChange}
                          className="field-input field-select"
                        >
                          <option value="€250,000 – €400,000">€250,000 – €400,000</option>
                          <option value="€400,000 – €750,000">€400,000 – €750,000</option>
                          <option value="€750,000 – €1,500,000">€750,000 – €1,500,000</option>
                          <option value="€1,500,000+ (Ultra-Luxury Scale)">€1,500,000+ (Ultra-Luxury Scale)</option>
                        </select>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="form-field-group">
                      <label htmlFor="description" className="field-label">
                        Project Scope & Aesthetic Aspirations <span className="req">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={5}
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Tell us about the property, your architectural goals, favorite materials (e.g. travertine, oak), and lifestyle vision..."
                        className={`field-input field-textarea ${
                          errors.description ? 'has-error' : ''
                        }`}
                      />
                      {errors.description && (
                        <span className="field-error-text">
                          <AlertCircle size={12} /> {errors.description}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-submit-consultation"
                    >
                      {isSubmitting ? (
                        <span>Encrypting & Registering Dossier...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Enquiry</span>
                          <Send size={15} />
                        </>
                      )}
                    </button>

                    <p className="form-privacy-disclaimer">
                      Your privacy is held under strict professional NDA. We do not distribute client
                      data to third-party contractors without explicit authorization.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Right Column: Contact Details & Atelier Directory */}
            <div className="contact-info-column">
              {/* Studio Overview Card */}
              <div className="direct-contact-card glass-panel">
                <span className="eyebrow">Direct Atelier Access</span>
                <h3 className="direct-title">Direct Studio Communications</h3>
                <p className="direct-lead">
                  For immediate press enquiries, international lecture series, or private gallery
                  sourcing appointments:
                </p>

                <div className="direct-contact-list">
                  <div className="direct-item">
                    <Mail size={18} className="direct-icon" />
                    <div>
                      <span className="direct-label">Private Client Inquiries</span>
                      <a href="mailto:concierge@aurel-studio.com" className="direct-val">
                        concierge@aurel-studio.com
                      </a>
                    </div>
                  </div>

                  <div className="direct-item">
                    <Phone size={18} className="direct-icon" />
                    <div>
                      <span className="direct-label">Milan Headquarters</span>
                      <a href="tel:+390289456600" className="direct-val">
                        +39 02 8945 6600
                      </a>
                    </div>
                  </div>

                  <div className="direct-item">
                    <Clock size={18} className="direct-icon" />
                    <div>
                      <span className="direct-label">Atelier Consultation Hours</span>
                      <span className="direct-val-text">
                        Monday – Friday: 09:00 – 19:00 CET<br />
                        Saturday: Private Appointments by Arrangement
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Four Global Ateliers List */}
              <div className="ateliers-directory-card">
                <h4 className="directory-heading">International Ateliers</h4>
                <div className="directory-items-stack">
                  {studioLocations.map((loc) => (
                    <div key={loc.city} className="dir-item">
                      <div className="dir-header">
                        <span className="dir-city">{loc.city}</span>
                        <span className="dir-role">{loc.role}</span>
                      </div>
                      <p className="dir-address">
                        <MapPin size={13} className="text-gold" />
                        <span>{loc.address}</span>
                      </p>
                      <div className="dir-links">
                        <a href={`tel:${loc.phone}`}>{loc.phone}</a>
                        <span className="dot">•</span>
                        <a href={`mailto:${loc.email}`}>{loc.email}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="contact-faq-section section-padding-bottom">
        <div className="container container-narrow">
          <div className="faq-section-header text-center">
            <span className="eyebrow">Client Clarifications</span>
            <h2 className="heading-section">Frequently Addressed Questions</h2>
          </div>

          <div className="faq-accordion-list">
            {faqList.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`faq-accordion-item ${isOpen ? 'faq-item-open' : ''}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.question}</span>
                    <ChevronDown size={20} className="faq-chevron" />
                  </button>

                  {isOpen && (
                    <div className="faq-answer-panel animate-fade-in">
                      <p className="faq-a-text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
