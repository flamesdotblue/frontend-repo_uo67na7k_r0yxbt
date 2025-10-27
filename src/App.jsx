import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import ContactForm from './components/ContactForm';

function Footer() {
  return (
    <footer className="border-t border-white/60 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div>
          © {new Date().getFullYear()} Lekha AI • All rights reserved
        </div>
        <div className="flex items-center gap-3">
          <a href="#docs" className="hover:text-slate-900">Docs</a>
          <a href="#privacy" className="hover:text-slate-900">Privacy</a>
          <a href="#terms" className="hover:text-slate-900">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(168,85,247,0.08),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Sections />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
