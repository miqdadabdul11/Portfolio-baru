"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaDownload, FaCode } from "react-icons/fa";

import Image from "next/image";

const organizations = [
  "Sekretaris, Divisi Humas Publikasi & Informasi (2024-2025)",
  "Sekretaris Hubungan Eksternal (2024-2025)",
  "Ketua Bidang Kewirausahaan, memimpin 15 anggota (2025-2026)",
  "Steering Committee, Electro Store (2025-2026)",
  "Manajer Publikasi dan Dokumentasi (2025-2026)",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            About Me
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
          className="flex flex-col items-center md:items-start"
        >
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden mb-8 border-4 border-slate-800 shadow-2xl shadow-blue-900/20 group bg-slate-800/50">
            <Image 
              src="/profile.png" 
              alt="Muhammad Miqdad Abdul Aziz" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <h3 className="text-2xl font-bold mb-4">Hi, I'm Muhammad Miqdad Abdul Aziz</h3>
          <p className="text-slate-300 mb-8 text-center md:text-left leading-relaxed">
            I am a dedicated Electrical Engineering student with a passion for telecommunications, digital technology, and web-based system development. I thrive on solving complex problems and turning innovative ideas into functional realities.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700"
            >
              <FaDownload /> Resume
            </a>
            <a
              href="#portfolio"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 font-medium transition-colors border border-blue-500/30"
            >
              <FaCode /> Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:border-blue-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <FaGraduationCap className="text-xl" />
              </div>
              <h4 className="text-xl font-semibold">Education</h4>
            </div>
            <div className="pl-4 border-l-2 border-slate-700 space-y-1">
              <h5 className="font-medium text-lg text-slate-100">Universitas Pendidikan Indonesia</h5>
              <p className="text-blue-400">Sarjana Teknik Elektro</p>
              <p className="text-slate-400 text-sm">2023 - Sekarang • IPK: 3.44</p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:border-blue-500/50 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <FaBriefcase className="text-xl" />
              </div>
              <h4 className="text-xl font-semibold">Organization Experience</h4>
            </div>
            <ul className="space-y-4">
              {organizations.map((org, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                  <span className="text-sm md:text-base">{org}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
