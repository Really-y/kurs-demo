"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Qeydiyyatdan keçmək üçün əvvəlki təcrübə lazımdırmı?",
    answer:
      "Heç də yox. Kurslarımızın çoxu tamamilə yeni başlayanlar üçün nəzərdə tutulub. Hər kursun səhifəsində tövsiyə olunan səviyyə qeyd olunur. Başlanğıc proqramlarımız əsaslardan başlayır və rahat tempdə irəliləyir.",
  },
  {
    question: "Dərs qrafiki necədir?",
    answer:
      "Səhər qrupu, axşam qrupu və həftəsonu intensiv variantlarımız var. Əksər kurslar həftədə 2-3 seans olaraq keçirilir. Bəzi proqramlarda öz sürətinizlə öyrənmə variantını da seçə bilərsiniz.",
  },
  {
    question: "Hissə-hissə ödəmə imkanı varmı?",
    answer:
      "Bəli. 3, 6 və 12 ay müddətinə faizsiz hissə-hissə ödəmə planları təklif edirik. Həmçinin erkən qeydiyyat endirimləri və təqaüd imkanlarımız var. Sizin üçün ən uyğun variantı müzakirə etmək üçün qəbul komandamızla əlaqə saxlayın.",
  },
  {
    question: "Kursu bitirdikdən sonra sertifikat verilirmi?",
    answer:
      "Əlbəttə. Bütün məzunlar sənaye tərəfindən tanınan sertifikat alırlar. Bəzi proqramlarda PMP, Google Analytics və AWS kimi xarici sertifikatlara da hazırlıq təşkil edirik.",
  },
  {
    question: "Nə cür iş dəstəyi göstərirsiniz?",
    answer:
      "Karyera xidmətlərimizə CV hazırlığı, müsahibə təlimləri, LinkedIn optimallaşdırması və 200+ əməkdaşlıq şirkətlərinə birbaşa tövsiyələr daxildir. Aylıq karyera sərgiləri və məzun şəbəkəsi tədbirləri də təşkil edirik.",
  },
  {
    question: "Dərslər online yoxsa əyani keçirilir?",
    answer:
      "Əksər kurslar hər iki formatda təklif olunur. Canlı online dərslərimiz əyani təcrübəni təkrarlayan interaktiv vasitələrdən istifadə edir. Əksər proqramlarda əvvəlcədən bildirişlə formatlar arasında keçid edə bilərsiniz.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tez-tez Soruşulanlar
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Qeydiyyatdan əvvəl bilmək istədiyiniz hər şey. Cavab tapa
            bilmədiniz? Bizimlə birbaşa əlaqə saxlayın.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="font-semibold text-slate-900">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0 text-slate-600 leading-relaxed pl-13">
                      <div className="pl-8">{faq.answer}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
