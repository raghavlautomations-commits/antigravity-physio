import React from 'react';
import { motion } from 'motion/react';
import { Phone, ArrowRight, Star, ShieldCheck, Clock } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/physiotherapist-treating/1920/1080"
          alt="Physiotherapist treating a patient"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground mb-6"
          >
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              5.0 Rated Clinic in Gurugram
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Advanced Physiotherapy <br />
            <span className="text-primary">Clinical Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed"
          >
            Lifeline Health Care is a premier physiotherapy clinic in Gurugram. 
            We provide expert clinical care and specialized treatments to help you 
            recover faster and live pain-free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all group"
            >
              <Phone className="w-5 h-5" />
              Book Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg transition-all"
            >
              Our Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-white font-bold">Certified</span>
              </div>
              <span className="text-xs text-slate-400">Expert Therapists</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary">
                <Clock className="w-5 h-5" />
                <span className="text-white font-bold">24/7 Care</span>
              </div>
              <span className="text-xs text-slate-400">Always Available</span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary">
                <Star className="w-5 h-5 fill-primary" />
                <span className="text-white font-bold">5.0 Rating</span>
              </div>
              <span className="text-xs text-slate-400">26+ Reviews</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/10 blur-[120px] rounded-full -mr-20 -mb-20 z-0"></div>
    </section>
  );
};
