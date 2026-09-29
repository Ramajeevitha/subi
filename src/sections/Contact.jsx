import React from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { athleteData } from '../data/athleteData';
import SectionHeader from '../components/SectionHeader';

/**
 * Contact Section
 * Professional contact card and representation inquiry categories
 */
export const Contact = () => {
  const { contact } = athleteData;

  return (
    <section id="contact" className="section-wrapper section-padding contact-section" aria-label="Official Representation and Contact">
      <div className="site-container">
        <SectionHeader
          number={contact.sectionNumber}
          title={contact.title}
          subtitle={contact.subtitle}
        />

        <div className="contact-grid">
          {/* Direct Details Card */}
          <div className="contact-info-card">
            {/* Email */}
            <div className="contact-item">
              <div className="contact-item-icon">
                <Mail size={20} />
              </div>
              <div className="contact-item-content">
                <span className="contact-label">Direct Management Email</span>
                <span className="contact-val">
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <div className="contact-item-icon">
                <Phone size={20} />
              </div>
              <div className="contact-item-content">
                <span className="contact-label">Management Office Phone</span>
                <span className="contact-val">
                  <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="contact-item">
              <div className="contact-item-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-item-content">
                <span className="contact-label">Training Base & Location</span>
                <span className="contact-val">{contact.location}</span>
              </div>
            </div>

            {/* Hours */}
            <div className="contact-item">
              <div className="contact-item-icon">
                <Clock size={20} />
              </div>
              <div className="contact-item-content">
                <span className="contact-label">Agency Working Hours</span>
                <span className="contact-val">{contact.businessHours}</span>
              </div>
            </div>
          </div>

          {/* Inquiry Scope Card */}
          <div className="contact-inquiry-box">
            <div>
              <h3 className="inquiry-title">Available For Collaboration</h3>
              <ul className="inquiry-list">
                {contact.categories.map((cat) => (
                  <li key={cat}>
                    <CheckCircle2 size={18} />
                    <span>{cat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`mailto:${contact.email}?subject=Partnership%20Inquiry%20-%20Alex%20Rivera`}
              className="btn btn-primary btn-lg btn-full"
            >
              <span>SEND OFFICIAL INQUIRY</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
