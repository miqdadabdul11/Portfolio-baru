import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      
      <footer className="py-8 text-center border-t border-slate-800 mt-20">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Muhammad Miqdad Abdul Aziz. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
