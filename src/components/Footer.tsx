"use client";

import { GraduationCap } from "lucide-react";

const footerLinks = {
  Kurslar: [
    "Veb Proqramlaşdırma",
    "Data Elmləri",
    "Rəqəmsal Marketinq",
    "UI/UX Dizayn",
    "Biznes İngiliscəsi",
  ],
  Şirkət: [
    "Haqqımızda",
    "Karyera",
    "Bloq",
    "Mətbuat",
    "Partnyorlar",
  ],
  Dəstək: [
    "Kömək Mərkəzi",
    "Əlaqə",
    "Məxfilik Siyasəti",
    "İstifadə Şərtləri",
    "Əlçatanlıq",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Future<span className="text-blue-500">Academy</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-6">
              Praktiki, sənaye uyğun təhsillə dünyanın hər yerində tələbələri
              gücləndiririk. 12.000+ tələbə ilə gələcəyi qurun.
            </p>
            <div className="flex items-center gap-4">
              {["Twitter", "LinkedIn", "Instagram", "YouTube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Future Academy. Bütün hüquqlar qorunur.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-white transition-colors"
            >
              Məxfilik
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-white transition-colors"
            >
              Şərtlər
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-white transition-colors"
            >
              Kukilər
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
