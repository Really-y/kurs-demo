"use client";

import { motion } from "framer-motion";
import { Link, Globe } from "lucide-react";

const instructors = [
  {
    name: "Dr. Aytən Məmmədova",
    role: "Baş Təlimçi, Data Elmləri",
    bio: "Keçmiş Google data alimi, ML və analitika sahəsində 12+ il təcrübə. MIT-dən PhD.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    students: 3400,
    courses: 8,
  },
  {
    name: "Kərim Həsənov",
    role: "Böyük Veb Proqramlaşdırma Təlimçisi",
    bio: "Startap və Fortune 500 şirkətləri üçün platformalar quran full-stack memar.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    students: 5100,
    courses: 12,
  },
  {
    name: "Ləman Quliyeva",
    role: "Dizayn və UX Direktoru",
    bio: "Mükafatlı UX dizayner. Əvvəllər Spotify və Airbnb-də dizayn komandalarına rəhbərlik edib.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    students: 2800,
    courses: 6,
  },
  {
    name: "Rəşad Əliyev",
    role: "Biznes və Marketinq Rəhbəri",
    bio: "Harvard MBA. 3 startapı satınalmaya qədər böyüdüb. Nəşr olunmuş müəllif.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    students: 4200,
    courses: 10,
  },
];

export default function Instructors() {
  return (
    <section id="instructors" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Komandamız
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ən Yaxşılardan Öyrənin
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Müəllimlərimiz aktiv peşəkarlardır və hər dərsə ən son sənaye
            biliklərini gətirirlər.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-5 mx-auto w-40 h-40">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-blue-200 transition-colors">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute bottom-1 right-1 flex gap-1">
                  <a
                    href="#"
                    className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-slate-400 hover:text-blue-600 hover:shadow-lg transition-all"
                  >
                    <Link className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-slate-400 hover:text-sky-500 hover:shadow-lg transition-all"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {instructor.name}
              </h3>
              <p className="text-sm font-medium text-blue-600 mb-2">
                {instructor.role}
              </p>
              <p className="text-sm text-slate-500 mb-4 px-2">
                {instructor.bio}
              </p>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-400">
                <span>{instructor.students.toLocaleString('en-US')} tələbə</span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span>{instructor.courses} kurs</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
