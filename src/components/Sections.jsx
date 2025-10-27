import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Languages, Network, Scan, Star } from 'lucide-react';

function SectionTitle({ eyebrow, title, subtitle, id }) {
  return (
    <div id={id} className="mx-auto max-w-3xl text-center mb-10">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-white/50 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-2xl sm:text-4xl font-bold text-slate-900">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}

export default function Sections() {
  return (
    <>
      {/* Features */}
      <section id="features" className="py-16 sm:py-24 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08),transparent_60%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Why Lekha AI"
            title="Built for Indian legal workflows"
            subtitle="Precision, speed, and language coverage your practice deserves"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Cpu className="h-6 w-6 text-purple-500" />,
                title: 'Choose Your AI',
                desc: 'GPT-4, Claude, Gemini, or run locally',
              },
              {
                icon: <Languages className="h-6 w-6 text-blue-500" />,
                title: '18+ Languages',
                desc: 'Hindi, Telugu, Tamil, English support',
              },
              {
                icon: <Network className="h-6 w-6 text-purple-500" />,
                title: 'Knowledge Graph',
                desc: 'AI connects documents automatically',
              },
              {
                icon: <Scan className="h-6 w-6 text-blue-500" />,
                title: 'OCR Scanner',
                desc: 'Scan with mobile, process in 18+ languages',
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-white/60 bg-white/60 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 rounded-xl bg-white shadow flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-1 text-slate-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Simple Pricing"
            title="Start free, scale when you need"
            subtitle="Transparent plans in ₹ for Indian teams"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Free',
                price: '₹0',
                period: '/month',
                features: ['25 documents', '5 AI queries'],
                cta: 'Start Free',
                highlight: false,
                onClick: () => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                },
              },
              {
                name: 'Pro',
                badge: 'Most Popular',
                price: '₹499',
                period: '/month',
                features: ['500 documents', '100 queries'],
                cta: 'Subscribe Pro',
                highlight: true,
                onClick: () => initiateRazorpayCheckout(49900),
              },
              {
                name: 'Enterprise',
                price: '₹2,499',
                period: '/month',
                features: ['Unlimited everything'],
                cta: 'Talk to Sales',
                highlight: false,
                onClick: () => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                },
              },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`${p.highlight ? 'ring-2 ring-purple-500' : ''} relative rounded-2xl border border-white/60 bg-white/60 backdrop-blur p-6 shadow-sm`}
              >
                {p.badge && (
                  <div className="absolute -top-3 right-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-3 py-1 text-xs font-medium text-white shadow">
                    {p.badge}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-3xl font-extrabold text-slate-900">{p.price}</span>
                  <span className="text-slate-500">{p.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-slate-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={p.onClick}
                  className={`mt-6 w-full rounded-full px-4 py-2 font-medium shadow ${p.highlight ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' : 'border border-slate-300 text-slate-800 hover:bg-white/70'}`}
                >
                  {p.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Loved by practitioners"
            title="What lawyers are saying"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-white/60 bg-white/60 backdrop-blur p-6 shadow-sm"
              >
                <div className="flex items-center gap-1 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={16} fill="#f59e0b" className="text-yellow-500" />
                  ))}
                </div>
                <p className="mt-3 text-slate-800 italic">“Found 15 case connections I'd completely missed!”</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
                  <div>
                    <div className="font-medium text-slate-900">Advocate Sharma</div>
                    <div className="text-sm text-slate-600">Delhi High Court</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-10 bg-white/60 backdrop-blur border-t border-b border-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            ['50K+', 'Documents Created'],
            ['2M', 'Hours Saved'],
            ['12K+', 'Active Users'],
            ['4.9/5', 'Rating'],
          ].map(([value, label], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl bg-white p-6 shadow-sm"
            >
              <div className="text-2xl font-extrabold text-slate-900">{value}</div>
              <div className="text-slate-600">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

// Razorpay helper
function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (document.getElementById('razorpay-script')) return resolve(true);
    const script = document.createElement('script');
    script.id = 'razorpay-script';
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

async function initiateRazorpayCheckout(amountPaise) {
  const ok = await loadRazorpayScript();
  if (!ok) {
    alert('Unable to load Razorpay. Please check your connection.');
    return;
  }
  const options = {
    key: 'rzp_test_1234567890',
    amount: amountPaise,
    currency: 'INR',
    name: 'Lekha AI',
    description: 'Pro Plan Subscription',
    image: '',
    handler: function () {
      alert('Payment successful! Welcome to Pro.');
    },
    prefill: {
      name: '',
      email: '',
    },
    theme: { color: '#7c3aed' },
  };
  // @ts-ignore
  const rzp = new window.Razorpay(options);
  rzp.open();
}
