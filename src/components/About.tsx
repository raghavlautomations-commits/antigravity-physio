import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Home, UserCheck, Award } from 'lucide-react';

export const About = () => {
  const benefits = [
    'Personalized 1-on-1 attention',
    'No travel time or hospital queues',
    'Comfortable, familiar environment',
    'Flexible scheduling (Open 24/7)',
    'Family involvement in recovery',
    'Reduced risk of hospital infections',
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-300"
            >
              <img
                src="https://picsum.photos/seed/care/800/1000"
                alt="Physiotherapist with patient"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 z-20 bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-slate-900">10+</div>
                  <div className="text-sm text-slate-500 font-medium">Years Experience</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative circles */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl z-0"></div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Why Choose Us</h2>
              <h3 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                The Best Physiotherapy Care <br />
                <span className="text-primary">In Gurugram</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                At Lifeline Health Care, we provide world-class clinical physiotherapy 
                services. Our clinic in Gurugram is equipped with modern facilities 
                to ensure you receive the highest standard of care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Patient"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-slate-900">500+ Happy Patients</span>
                  <p className="text-slate-500">Recovered successfully at our clinic</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
