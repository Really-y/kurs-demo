"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
            Əlaqə
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Bizimlə Əlaqə Saxlayın
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Kurslar, qrafiklər və ya qeydiyyatla bağlı suallarınız var?
            Düzgün seçim etməyinizə kömək etmək üçün buradayıq.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {[
              {
                icon: Phone,
                title: "Telefon",
                value: "+994 (50) 123-45-67",
                subtext: "B.e.–Şənbə, 9:00–18:00",
                href: "tel:+994501234567",
              },
              {
                icon: Mail,
                title: "Email",
                value: "hello@futureacademy.az",
                subtext: "24 saat ərzində cavab veririk",
                href: "mailto:hello@futureacademy.az",
              },
              {
                icon: MapPin,
                title: "Ünvan",
                value: "28 May 77",
                subtext: "Bakı, Azərbaycan",
                href: "#",
              },
              {
                icon: Clock,
                title: "İş Saatları",
                value: "Bazar ertəsi – Şənbə",
                subtext: "09:00 – 18:00 (Bakı vaxtı)",
                href: "#",
              },
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all group"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:bg-blue-600 transition-colors">
                  <item.icon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-700 mt-0.5">{item.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.subtext}</p>
                </div>
              </motion.a>
            ))}

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/994501234567"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-5 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-all group"
            >
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-green-800">
                  WhatsApp ilə yazın
                </p>
                <p className="text-xs text-green-600">
                  Ən sürətli cavab üçün
                </p>
              </div>
              <Send className="w-4 h-4 text-green-500 ml-auto group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="h-full min-h-[400px] bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.3868123881642!2d49.8488107!3d40.3777785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d079efb5163%3A0xc20aa51a5f0b5e1!2s28%20May%20St%2C%20Baku!5e0!3m2!1sen!2saz!4v1717000000000!5m2!1sen!2saz"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
