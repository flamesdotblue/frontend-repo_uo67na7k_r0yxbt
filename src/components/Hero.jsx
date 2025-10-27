import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white/50 px-3 py-1 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
              <span className="text-xs font-medium text-slate-700">Made for Indian Lawyers</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              India's Most Advanced AI Legal Document Platform
            </h1>
            <p className="text-lg text-slate-600">
              Generate, scan, and analyze legal documents with AI that understands IPC, supports 18+ Indian languages, and gives you choice of world's best AI models
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 text-white shadow-lg hover:shadow-xl transition-shadow"
              >
                Start Free Trial
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-slate-800 hover:bg-white/70 backdrop-blur"
              >
                Book Demo
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
              <div className="rounded-full bg-white/70 border border-white/50 px-3 py-1">12,000+ lawyers</div>
              <div className="rounded-full bg-white/70 border border-white/50 px-3 py-1">4.8/5 rating</div>
              <div className="rounded-full bg-white/70 border border-white/50 px-3 py-1">847 upgraded this week</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative h-[420px] sm:h-[520px] rounded-2xl overflow-hidden border border-white/50 bg-white/40 backdrop-blur"
        >
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/40" />
        </motion.div>
      </div>
    </section>
  );
}
