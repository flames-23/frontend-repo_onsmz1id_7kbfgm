import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { name: 'Ava', quote: 'Turned a nearly empty fridge into a full dinner. Unreal.', role: 'Home Cook' },
  { name: 'Noah', quote: 'The AI nailed my macros and taste. I’m impressed.', role: 'Fitness Enthusiast' },
  { name: 'Mia', quote: 'Feels like cooking in the future—beautiful and effortless.', role: 'Designer' },
];

export default function Testimonials() {
  return (
    <section className="relative w-full bg-[#0a0f18] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[60%] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-center font-['Manrope'] text-3xl font-bold sm:text-5xl">Loved by Early Testers</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cyan-100/80">
          Real people, real kitchens, next‑gen results.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, rotateY: -25, y: 20 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="rounded-2xl bg-[#0b1220]/70 p-6 ring-1 ring-white/10 backdrop-blur"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-cyan-100/70">{t.role}</p>
                </div>
              </div>
              <p className="text-cyan-50/90">“{t.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
