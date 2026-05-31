"use client";

import { motion } from "framer-motion";
import {
  Code,
  BarChart3,
  Palette,
  Megaphone,
  Languages,
  Briefcase,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Texnologiya",
    description: "Veb proqramlaşdırma, cloud və kibertəhlükəsizlik.",
    icon: Code,
    courses: 18,
    color: "bg-blue-50 text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    title: "Data və Analitika",
    description: "Data elmləri, BI, maşın öyrənməsi və vizuallaşdırma.",
    icon: BarChart3,
    courses: 12,
    color: "bg-emerald-50 text-emerald-600",
    borderColor: "border-emerald-200",
  },
  {
    title: "Dizayn",
    description: "UI/UX, qrafik dizayn, motion qrafika və brendinq.",
    icon: Palette,
    courses: 10,
    color: "bg-purple-50 text-purple-600",
    borderColor: "border-purple-200",
  },
  {
    title: "Marketinq",
    description: "Rəqəmsal marketinq, SEO, sosial media və growth hacking.",
    icon: Megaphone,
    courses: 14,
    color: "bg-amber-50 text-amber-600",
    borderColor: "border-amber-200",
  },
  {
    title: "Dillər",
    description: "Biznes İngiliscəsi, İspan, Alman və daha çox.",
    icon: Languages,
    courses: 8,
    color: "bg-rose-50 text-rose-600",
    borderColor: "border-rose-200",
  },
  {
    title: "Biznes",
    description: "Liderlik, layihə idarəetməsi, maliyyə və strategiya.",
    icon: Briefcase,
    courses: 16,
    color: "bg-sky-50 text-sky-600",
    borderColor: "border-sky-200",
  },
];

export default function CourseCategories() {
  return (
    <section id="categories" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Kateqoriyalar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Mövzu Üzrə Baxın
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Hədəfiniz nə olursa olsun, sizə uyğun proqramımız var. Ən populyar
            öyrənmə yollarını kəşf edin.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={category.title}
              href="#courses"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group flex items-start gap-5 p-6 bg-white rounded-2xl border ${category.borderColor} hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 hover:-translate-y-0.5`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center ${category.color}`}
              >
                <category.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-sm text-slate-500 mb-2">
                  {category.description}
                </p>
                <span className="text-xs font-medium text-slate-400">
                  {category.courses} kurs
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
