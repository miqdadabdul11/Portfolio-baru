"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Get In Touch
          </span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-6">Yuk, Ngobrol! 👋</h3>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Lagi open buat kolaborasi, ngobrol soal project, atau sekadar say hi aja juga gapapa! Bakal gua bales kok, gak akan ghosting 😄
          </p>

          <div className="space-y-4 mb-8">
            <a href="mailto:contact@example.com" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                <FaEnvelope className="text-xl" />
              </div>
              <span>Email Me</span>
            </a>
            <a href="https://linkedin.com/in/muhammadmiqdad-05970a3b1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors">
              <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
                <FaLinkedin className="text-xl" />
              </div>
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                placeholder="Hello there..."
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg shadow-blue-600/20"
            >
              <span>Send Message</span>
              <FaPaperPlane className="text-sm" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
