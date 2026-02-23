import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock } from 'lucide-react';

export const Contact = () => {
  const phoneNumber = "+91 98765 43210";
  const address = "123, Wellness Square, Sector 45, Gurugram, Haryana 122003";

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Get In Touch</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-8">
              Ready to Start Your <br />
              <span className="text-primary">Recovery Journey?</span>
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-1">Phone Number</div>
                  <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="text-lg text-slate-600 hover:text-primary transition-colors">
                    {phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-1">Clinic Address</div>
                  <p className="text-slate-600 leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 mb-1">Working Hours</div>
                  <p className="text-slate-600">Open 24 Hours (7 Days a Week)</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-primary text-white shadow-xl shadow-primary/20">
              <h4 className="text-xl font-bold mb-2">Areas Served</h4>
              <p className="opacity-90">
                We provide home care physiotherapy services throughout Gurugram and surrounding areas.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 overflow-hidden min-h-[600px]"
            >
              <div
                className="calendly-inline-widget w-full h-[600px]"
                data-url="https://calendly.com/lifeline-healthcare/physiotherapy-consultation"
              >
                <iframe
                  src="https://calendly.com/lifeline-healthcare/physiotherapy-consultation?hide_landing_page_details=1&hide_gdpr_banner=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Schedule Appointment"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
