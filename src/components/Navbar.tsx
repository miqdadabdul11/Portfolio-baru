"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
    >
      <nav
        className={`flex items-center gap-1 sm:gap-4 px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/70 backdrop-blur-md shadow-lg shadow-blue-900/20 border border-slate-700/50"
            : "bg-slate-900/40 backdrop-blur-sm"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setActive(link.name)}
            className="relative px-3 sm:px-4 py-2 text-sm font-medium transition-colors"
          >
            <span
              className={`relative z-10 ${
                active === link.name ? "text-white" : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
            </span>
            {active === link.name && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-blue-600 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
