"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Sistem Monitoring Daya Listrik Berbasis IoT",
    year: "2025",
    description:
      "Mengembangkan sistem pemantauan daya listrik berbasis IoT untuk mengukur konsumsi energi pada beberapa node secara bersamaan menggunakan ESP8266, sensor arus CT, dan sensor tegangan.",
    tech: ["ESP8266", "Arduino IDE", "Sensor CT", "Sensor Tegangan", "IoT"],
  },
  {
    title: "Dashboard Monitoring Energi Real-Time",
    year: "2025",
    description:
      "Dashboard monitoring berbasis web untuk data kelistrikan real-time menggunakan Node-RED, MQTT, dan HTTP.",
    tech: ["Node-RED", "MQTT", "IoT Dashboard"],
  },
  {
    title: "Sistem Manajemen Berbasis Web",
    year: "2026",
    description:
      "Sistem manajemen berbasis web dengan autentikasi, kontrol akses berbasis peran, dan dashboard dinamis.",
    tech: ["Laravel", "PHP", "HTML", "CSS", "JavaScript", "MySQL"],
  },
];

const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Laravel",
  "MySQL",
  "ESP8266",
  "Arduino IDE",
  "Node-RED",
  "MQTT",
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section id="portfolio" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Portfolio
          </span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-12"></div>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
            <h4 className="text-3xl font-bold text-blue-500 mb-1">3</h4>
            <p className="text-slate-400 text-sm">Projects</p>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
            <h4 className="text-3xl font-bold text-blue-500 mb-1">1</h4>
            <p className="text-slate-400 text-sm">Certificate</p>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
            <h4 className="text-3xl font-bold text-blue-500 mb-1">6</h4>
            <p className="text-slate-400 text-sm">Trainings</p>
          </div>
        </div>

        <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
          {["projects", "certificates", "tech stack"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full capitalize text-sm font-medium transition-all ${activeTab === tab
                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl hover:border-blue-500/50 transition-all hover:-translate-y-1 group flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-blue-500 text-sm font-medium mb-4">{project.year}</p>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 bg-blue-500/10 text-blue-300 rounded-md border border-blue-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "certificates" && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div className="bg-slate-800/40 border border-slate-700 p-4 rounded-2xl group hover:border-blue-500/50 transition-colors">
                <div className="relative aspect-[4/3] bg-slate-700 rounded-xl mb-4 overflow-hidden">
                  <Image
                    src="/cert-revou.png"
                    alt="RevoU Intro to Software Engineering Certificate"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-bold mb-2">Intro to Software Engineering (RevoU)</h3>
                <p className="text-slate-400 text-sm">Issued: 13 February 2026</p>
              </div>
            </motion.div>
          )}

          {activeTab === "tech stack" && (
            <motion.div
              key="tech stack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-slate-800/40 border border-slate-700 p-4 rounded-xl flex items-center justify-center text-center hover:bg-slate-700 transition-colors hover:border-blue-500/50"
                >
                  <span className="font-medium text-slate-200">{tech}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
