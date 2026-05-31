"use client";

import { motion } from "framer-motion";
import { Award, Users, BookOpen, Shield, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Sertifikatlı Ekspert Müəllimlər",
    description:
      "İllərin təcrübəsinə malik sənaye peşəkarlarından öyrənin. Bütün müəllimlərimiz beynəlxalq sertifikatlara sahibdir.",
  },
  {
    icon: Users,
    title: "Kiçik Qrup Dərsləri",
    description:
      "Qruplarımız maksimum 15 nəfərlə məhdudlaşır ki, hər tələbə fərdi diqqət alsın və daha sürətli irəliləsin.",
  },
  {
    icon: BookOpen,
    title: "Təcrübəyə Əsaslanan Tədris",
    description:
      "Hər kurs praktiki layihələr, real iş situasiyaları və işəgötürənlərin dəyər verdiyi portfel tapşırıqlarını əhatə edir.",
  },
  {
    icon: Shield,
    title: "İş Yerləşdirmə Dəstəyi",
    description:
      "Karyera xidmətlərimiz CV hazırlığı, müsahibə təlimi və 200+ şirkətlə birbaşa əlaqəni əhatə edir.",
  },
  {
    icon: Headphones,
    title: "Ömürlük Giriş və Dəstək",
    description:
      "Kurs materiallarına istənilən vaxt yenidən baxın. Müəllimlərdən və məzun icmasından daimi dəstək alın.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Niyə Future Academy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Real Nəticələr Üçün Yaradılıb
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Akademik ciddiliyi praktiki təlimlə birləşdirərək sizi müasir iş
            dünyasının tələblərinə hazırlayırıq.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-600 transition-colors duration-300">
                <benefit.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
