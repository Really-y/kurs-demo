"use client";

import { motion } from "framer-motion";
import { Clock, BarChart3, Banknote, ArrowRight, Star } from "lucide-react";

const courses = [
  {
    title: "Full-Stack Veb Proqramlaşdırma",
    description: "React, Node.js və müasir veb texnologiyalarını real layihələr üzərində mənimsəyin.",
    level: "Orta",
    duration: "16 Həftə",
    price: "₼490",
    rating: 4.9,
    students: 2340,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tag: "Ən Çox Satılan",
  },
  {
    title: "Data Elmləri və Analitika",
    description: "Python, maşın öyrənməsi və data vizuallaşdırmanı sıfırdan öyrənin.",
    level: "Başlanğıc",
    duration: "20 Həftə",
    price: "₼590",
    rating: 4.8,
    students: 1850,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tag: "Populyar",
  },
  {
    title: "Rəqəmsal Marketinq Ustalığı",
    description: "SEO, sosial media, məzmun strategiyası və ödənişli reklam üzrə ekspert olun.",
    level: "Bütün Səviyyələr",
    duration: "12 Həftə",
    price: "₼350",
    rating: 4.7,
    students: 3100,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tag: "Trend",
  },
  {
    title: "UI/UX Dizayn Əsasları",
    description: "Figma və dizayn sistemlərindən istifadə edərək gözəl, istifadəçi mərkəzli dizaynlar yaradın.",
    level: "Başlanğıc",
    duration: "14 Həftə",
    price: "₼430",
    rating: 4.9,
    students: 1560,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tag: "Yeni",
  },
  {
    title: "Biznes İngiliscəsi və Kommunikasiya",
    description: "İş yerində peşəkar ingiliscə, təqdimat və danışıqlar üçün praktik bacarıqlar.",
    level: "Orta",
    duration: "10 Həftə",
    price: "₼280",
    rating: 4.8,
    students: 4200,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tag: "Ən Çox Satılan",
  },
  {
    title: "Peşəkar Layihə İdarəetməsi",
    description: "Agile, Scrum və ənənəvi PM metodologiyaları ilə sertifikasiyaya hazırlaşın.",
    level: "İrəli",
    duration: "8 Həftə",
    price: "₼470",
    rating: 4.7,
    students: 980,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tag: "Populyar",
  },
];

const levelColors: Record<string, string> = {
  Başlanğıc: "bg-green-50 text-green-700 border-green-200",
  Orta: "bg-amber-50 text-amber-700 border-amber-200",
  İrəli: "bg-red-50 text-red-700 border-red-200",
  "Bütün Səviyyələr": "bg-blue-50 text-blue-700 border-blue-200",
};

export default function FeaturedCourses() {
  return (
    <section id="courses" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Seçilmiş Kurslar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ən Yaxşı Proqramlarımızı Kəşf Edin
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Sənaye tələblərinə uyğun, ekspertlər tərəfindən hazırlanmış kurslarla
            karyeranızı irəli aparın.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm text-slate-700 rounded-full shadow-sm">
                    {course.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`px-2.5 py-1 text-xs font-medium rounded-md border ${levelColors[course.level]}`}
                  >
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-semibold text-slate-700">
                      {course.rating}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-5">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4 text-slate-400" />
                    <span>{course.students.toLocaleString('en-US')} tələbə</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Banknote className="w-5 h-5 text-blue-600" />
                    <span className="text-xl font-bold text-slate-900">
                      {course.price}
                    </span>
                  </div>
                  <a
                    href="#enroll"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    İndi Yazıl
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#categories"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            Bütün Kateqoriyalara Bax
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
