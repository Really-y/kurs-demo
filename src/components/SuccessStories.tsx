"use client";

import { motion } from "framer-motion";
import { TrendingUp, Briefcase, Award, Users } from "lucide-react";

const stats = [
  {
    label: "İşə Yerləşən Məzun",
    value: "8.500+",
    icon: Briefcase,
    description: "6 ay ərzində tam ştatlı vəzifələrdə",
  },
  {
    label: "Orta Maaş Artımı",
    value: "42%",
    icon: TrendingUp,
    description: "Karyera dəyişən məzunlar tərəfindən bildirilib",
  },
  {
    label: "Kursu Bitirmə",
    value: "94%",
    icon: Award,
    description: "Sektorda ən yüksək göstəricilərdən biri",
  },
  {
    label: "Əməkdaşlıq Şirkətləri",
    value: "200+",
    icon: Users,
    description: "Şirkətlər məzunlarımızı aktiv şəkildə işə götürür",
  },
];

const stories = [
  {
    name: "Murad Səlimov",
    before: "Pərakəndə Satıcı",
    after: "Proqram Mühəndisi",
    company: "ABB",
    increase: "+180%",
    quote:
      "Minimum əməkhaqqından altı rəqəmli maaşa bir ildən az müddətdə keçdim. Karyera dəstəyi texniki təlim qədər dəyərli idi.",
  },
  {
    name: "Aysel İsmayılova",
    before: "İnzibatçı",
    after: "Data Analitiki",
    company: "Azercell",
    increase: "+95%",
    quote:
      "Future Academy mənə lazım olan inamı və portfeli verdi. Mentorlar təkcə bacarıq öyrətmədi — analitik düşüncə tərzi aşıladılar.",
  },
  {
    name: "Vüsal Hüseynov",
    before: "Freelance Dizayner",
    after: "Böyük UX Dizayner",
    company: "Jeyran Holding",
    increase: "+120%",
    quote:
      "UX kursu prosesimi sistemləşdirməyə kömək etdi. Hələ də hər gün istifadə etdiyim framework-lər öyrəndim. Məzun şəbəkəsi inanılmaz dərəcədə dəstək oldu.",
  },
];

export default function SuccessStories() {
  return (
    <section id="results" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Uğur Hekayələri
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Real Nəticələr, Real Karyeralar
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Məzunlarımız dünyanın aparıcı şirkətlərində çalışır. Budur bizim
            yaratdığımız təsir.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 lg:p-8 text-center border border-slate-100 hover:border-blue-200 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-1">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-slate-700 mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-slate-500">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                  {story.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{story.name}</p>
                  <p className="text-xs text-slate-500">{story.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-4 text-sm">
                <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                  {story.before}
                </span>
                <span className="text-slate-300">→</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-md font-medium">
                  {story.after}
                </span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                &ldquo;{story.quote}&rdquo;
              </p>

              <div className="flex items-center gap-2 pt-4 border-t border-blue-100">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm font-bold text-green-600">
                  Maaş artımı {story.increase}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
