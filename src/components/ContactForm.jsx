import React from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [status, setStatus] = React.useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      setStatus('loading');
      // Simulate submit; integrate your endpoint here if available
      await new Promise((res) => setTimeout(res, 800));
      setStatus('success');
      form.reset();
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="py-20 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.08),transparent_60%)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white/50 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
            Get in touch
          </div>
          <h2 className="mt-4 text-2xl sm:text-4xl font-bold text-slate-900">Book a demo or ask a question</h2>
          <p className="mt-2 text-slate-600">We typically respond within a few hours.</p>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl rounded-2xl border border-white/60 bg-white/60 backdrop-blur p-6 shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea name="message" rows={5} required className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 text-white shadow-lg hover:shadow-xl disabled:opacity-70"
          >
            {status === 'loading' ? 'Sending…' : 'Submit'}
          </button>

          {status === 'success' && (
            <p className="mt-3 text-green-600">Thanks! We received your message.</p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-red-600">Something went wrong. Please try again.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
