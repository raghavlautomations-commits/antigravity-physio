import React from 'react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import {
  Activity,
  Heart,
  UserRound,
  Zap,
  Stethoscope,
  Accessibility
} from 'lucide-react';

const services = [
  {
    title: 'Post-Surgery Rehab',
    description: 'Specialized recovery programs after orthopedic, cardiac, or neurological surgeries.',
    icon: Stethoscope,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Sports Injury',
    description: 'Expert treatment for sprains, strains, and performance-related injuries to get you back in the game.',
    icon: Zap,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Geriatric Care',
    description: 'Improving mobility, balance, and independence for senior citizens in their own homes.',
    icon: UserRound,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Neurological Rehab',
    description: 'Dedicated care for stroke recovery, Parkinson\'s, and other neurological conditions.',
    icon: Activity,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Pain Management',
    description: 'Effective relief for chronic back pain, neck pain, and joint issues through manual therapy.',
    icon: Heart,
    color: 'bg-rose-50 text-rose-600',
  },
  {
    title: 'Pediatric Physio',
    description: 'Gentle and effective physiotherapy for children with developmental or physical challenges.',
    icon: Accessibility,
    color: 'bg-amber-50 text-amber-600',
  },
];

export const Services = () => {
  const [emblaRef] = useEmblaCarousel({ align: 'start', skipSnaps: false });

  return (
    <section id="services" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <p className="text-4xl font-extrabold text-slate-900 mb-6">
            Specialized Clinical Services
          </p>
          <p className="text-lg text-slate-600">
            Our clinic offers a wide range of specialized physiotherapy treatments
            using advanced equipment and evidence-based clinical practices.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {services.map((service, index) => (
              <div key={service.title} className="flex-[0_0_85%] min-w-0 pl-4">
                <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50 h-full">
                  <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-slate-200" />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
