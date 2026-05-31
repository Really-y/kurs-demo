"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Send, User, Phone, BookOpen, Calendar } from "lucide-react";

const courseOptions = [
  "Full-Stack Veb Proqramlaşdırma",
  "Data Elmləri və Analitika",
  "Rəqəmsal Marketinq Ustalığı",
  "UI/UX Dizayn Əsasları",
  "Biznes İngiliscəsi və Kommunikasiya",
  "Peşəkar Layihə İdarəetməsi",
  "Digər",
];

const scheduleOptions = [
  "Səhər qrupu (Həftəiçi)",
  "Axşam qrupu (Həftəiçi)",
  "Həftəsonu İntensiv",
  "Çevik / Öz sürətinizlə",
];

export default function EnrollmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    course: "",
    schedule: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enroll" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Başlayaq
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Öyrənməyə Hazırsınız?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Formu doldurun, qəbul komandamız 24 saat ərzində sizinlə əlaqə
              saxlayaraq hədəflərinizi müzakirə edəcək, doğru kursu tövsiyə
              edəcək və qeydiyyat prosesində sizə rəhbərlik edəcək.
            </p>

            <div className="space-y-4">
              {[
                "Məsləhətçi ilə pulsuz konsultasiya",
                "Sizə uyğun kurs tövsiyələri",
                "Çevik ödəniş planları mövcuddur",
                "Müraciətdən sonra 1 həftə ərzində başlama",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Müraciət Qəbul Edildi!
                  </h3>
                  <p className="text-slate-600">
                    24 saat ərzində sizinlə əlaqə saxlayacağıq. Future
                    Academy-ni seçdiyiniz üçün təşəkkür edirik.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Ad və Soyad
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        required
                        type="text"
                        placeholder="Elçin Məmmədov"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Telefon Nömrəsi
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        required
                        type="tel"
                        placeholder="+994 (50) 000-00-00"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Kursu Seçin
                    </label>
                    <div className="relative">
                      <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <select
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                        value={formData.course}
                        onChange={(e) =>
                          setFormData({ ...formData, course: e.target.value })
                        }
                      >
                        <option value="">Kurs seçin...</option>
                        {courseOptions.map((course) => (
                          <option key={course} value={course}>
                            {course}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Arzu Olunan Cədvəl
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <select
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                        value={formData.schedule}
                        onChange={(e) =>
                          setFormData({ ...formData, schedule: e.target.value })
                        }
                      >
                        <option value="">Cədvəl seçin...</option>
                        {scheduleOptions.map((schedule) => (
                          <option key={schedule} value={schedule}>
                            {schedule}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 text-base font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200"
                  >
                    <Send className="w-5 h-5" />
                    Müraciəti Göndər
                  </button>

                  <p className="text-xs text-center text-slate-400">
                    Göndərməklə, məxfilik siyasəti və xidmət şərtlərimizlə
                    razılaşmış olursunuz.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
