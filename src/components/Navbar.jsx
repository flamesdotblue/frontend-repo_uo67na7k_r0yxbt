import React from 'react';
import { Menu, X } from 'lucide-react';

const GradientText = ({ children }) => (
  <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
    {children}
  </span>
);

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Docs', href: '#docs' },
    { label: 'Gallery', href: '#gallery' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/30">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg" />
            <span className="text-xl font-bold tracking-tight">
              <GradientText>Lekha AI</GradientText>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a href="#login" className="text-slate-700 hover:text-slate-900">Login</a>
            <a
              href="#pricing"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-white shadow-md hover:shadow-lg transition-shadow"
            >
              Start Free
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-white/60"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-slate-700 hover:bg-white/60"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a href="#login" className="text-slate-700 hover:text-slate-900">Login</a>
              <a
                href="#pricing"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-white shadow-md"
                onClick={() => setOpen(false)}
              >
                Start Free
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
