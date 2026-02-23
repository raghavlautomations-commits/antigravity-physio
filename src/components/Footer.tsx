import React from 'react';
import { Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const phoneNumber = "+91 98765 43210";
  const address = "123, Wellness Square, Sector 45, Gurugram, Haryana 122003";

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tight">
                Lifeline Health Care
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-primary">
                Physiotherapy Clinic
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Providing expert, compassionate clinical physiotherapy services.
              Our state-of-the-art clinic in Gurugram is dedicated to your
              complete recovery and wellness.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><a href="/#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><Link to="/#services" className="hover:text-primary transition-colors">Post-Surgery Rehab</Link></li>
              <li><Link to="/#services" className="hover:text-primary transition-colors">Sports Injury</Link></li>
              <li><Link to="/#services" className="hover:text-primary transition-colors">Geriatric Care</Link></li>
              <li><Link to="/#services" className="hover:text-primary transition-colors">Neurological Rehab</Link></li>
              <li><Link to="/#services" className="hover:text-primary transition-colors">Pain Management</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">{phoneNumber}</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary flex-shrink-0" />
                <span>Open 24 Hours</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Lifeline Health Care. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
