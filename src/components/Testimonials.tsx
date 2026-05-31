"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Nigar Rzayeva",
    role: "Veb Developer",
    company: "Sahibkartech",
    content:
      "Full-Stack kursu karyeramı tamamilə dəyişdi. Məzun olduqdan 3 ay sonra top texnologiya şirkətində işə başladım. Tədris proqramındakı layihələr müsahibələrdə məhz soruşulanlar idi.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Orxan Kərimli",
    role: "Marketinq Meneceri",
    company: "Kapital Bank",
    content:
      "Rəqəmsal Marketinq kursunu komandamı inkişaf etdirmək üçün aldım. Öyrəndiyim strategiyalar dərhal tətbiq oluna bilirdi və ilk rübdə müştəri sayımızı 40% artırdıq.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    name: "Sevinc Qasımova",
    role: "Data Analitiki",
    company: "PAŞA Holding",
    content:
      "Müəllimlər həqiqətən uğurunuza önəm verir. Heç bir kod bilgim yox idi, amma strukturlaşdırılmış yanaşma və dəstək qrup sayəsində texnologiya sahəsinə keçid etmək mümkün oldu.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Tələbə Rəyləri
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tələbələrimiz Nə Deyir
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Future Academy məzunlarının karyeralarını dəyişdirən real hekayələri.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-blue-100 mb-4" />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
