"use client";

import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-blue-500 font-semibold tracking-wider uppercase mb-4 text-sm sm:text-base">
            Electrical Engineering Student
          </h2>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-white">
            Building Smart Systems,<br className="hidden sm:block" /> Bridging IoT & Web
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Mahasiswa Teknik Elektro di Universitas Pendidikan Indonesia dengan minat pada telekomunikasi, teknologi digital, dan pengembangan sistem berbasis web.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 w-full sm:w-auto"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full bg-transparent border border-blue-500/50 hover:border-blue-400 text-blue-100 hover:text-white hover:bg-blue-900/20 font-medium transition-all w-full sm:w-auto"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="https://linkedin.com/in/muhammadmiqdad-05970a3b1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin className="w-8 h-8" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
