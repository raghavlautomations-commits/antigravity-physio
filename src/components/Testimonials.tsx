import React from 'react';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Post-Surgery Patient',
    content: 'Excellent service! The therapist was very professional and helped me recover from my knee surgery much faster than expected. Highly recommended for home care.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Sports Injury',
    content: 'Very convenient and effective. I was struggling with chronic back pain, and the personalized sessions at home made a huge difference. 5 stars!',
    rating: 5,
  },
  {
    name: 'Amit Singh',
    role: 'Geriatric Care for Parent',
    content: 'The care provided to my elderly father was exceptional. The therapist was patient, kind, and very knowledgeable. It saved us so many trips to the hospital.',
    rating: 5,
  },
];

export const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ align: 'start', skipSnaps: false });

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
            Trusted by 500+ Patients
          </h2>
          <p className="text-lg text-slate-600">
            We are proud of our 5.0 rating on Google. Here is what our patients have to say about our home care services.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="flex-[0_0_85%] min-w-0 pl-4">
                <div className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 h-full">
                  <Quote className="absolute top-6 right-8 w-10 h-10 text-slate-200" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-8 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.name}</div>
                      <div className="text-xs text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-slate-200" />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-slate-200" />
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-xs text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
