"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What courses does Seamedu offer?",
    answer:
      "Seamedu offers a wide range of Undergraduate (UG) and Postgraduate (PG) programs across Media, Technology, Management, Design and Hospitality.",
  },
  {
    question: "Where are Seamedu's campuses located?",
    answer:
      "Seamedu has campuses in Pune, Gurugram, and Kolkata with strong industry exposure.",
  },
  {
    question: "What is the minimum qualification to apply?",
    answer:
      "UG requires Class 12. PG requires a relevant bachelor's degree.",
  },
  {
    question: "How do I apply to Seamedu?",
    answer:
      "Fill out the application form on the website. A counsellor will guide you.",
  },
  {
    question: "What is the fee structure?",
    answer:
      "Fees vary by program. Contact admissions for detailed info.",
  },
  {
    question: "Who will teach me?",
    answer:
      "Experienced industry professionals with real-world expertise.",
  },
  {
    question: "What facilities are available?",
    answer:
      "Industry-grade labs, studios, and workspaces.",
  },
  {
    question: "What are career outcomes?",
    answer:
      "Strong placement support with top companies.",
  },
  {
    question: "What makes Seamedu different?",
    answer:
      "Industry-integrated curriculum with hands-on learning.",
  },
];

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const renderFAQ = (faq: FAQItem, actualIndex: number, delay: number = 0) => (
    <motion.div
      key={actualIndex}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`group rounded-3xl border bg-white overflow-hidden transition-all duration-300 shadow-sm ${
        openIndex === actualIndex
          ? "border-blue-100 shadow-lg"
          : "border-slate-100 hover:border-slate-200"
      }`}
    >
      <button
        onClick={() =>
          setOpenIndex(openIndex === actualIndex ? null : actualIndex)
        }
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <h4
          className={`text-[15px] sm:text-[16px] font-semibold leading-snug ${
            openIndex === actualIndex
              ? "text-slate-900"
              : "text-slate-600 group-hover:text-slate-900"
          }`}
        >
          {faq.question}
        </h4>

        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all ${
            openIndex === actualIndex
              ? "bg-blue-600 text-white rotate-45"
              : "border-slate-200 text-slate-400"
          }`}
        >
          <Plus size={16} />
        </div>
      </button>

      <AnimatePresence>
        {openIndex === actualIndex && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 text-sm text-slate-500 border-t pt-3">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-semibold text-slate-900">
            Got <span className="text-blue-600">Questions?</span>
          </h3>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Left Column */}
          <div className="flex flex-col gap-5">
            {faqs
              .filter((_, i) => i % 2 === 0)
              .map((faq, index) =>
                renderFAQ(faq, index * 2, index * 0.1)
              )}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5">
            {faqs
              .filter((_, i) => i % 2 !== 0)
              .map((faq, index) =>
                renderFAQ(faq, index * 2 + 1, index * 0.1)
              )}

            {/* CTA */}
            <div className="p-6 rounded-3xl bg-blue-50 border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h5 className="text-lg font-semibold text-slate-900">
                  Still have questions?
                </h5>
                <p className="text-xs uppercase text-slate-500 mt-1">
                  We’re here to help 24/7
                </p>
              </div>

              <button className="px-6 py-3 bg-blue-600 text-white rounded-full text-xs font-bold uppercase flex items-center gap-2 hover:bg-blue-700">
                Contact Support
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}