import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Brain, UtensilsCrossed } from 'lucide-react';

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.15 * i, duration: 0.6 } }),
};

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-[#0a0d16] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[70%] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-purple-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center font-['Manrope'] text-3xl font-bold sm:text-5xl"
        >
          How It Works
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cyan-100/80">
          A seamless 3-step journey from ingredients to inspiration.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[{
            Icon: Camera,
            title: 'Scan Fridge Contents',
            desc: 'Use your camera or connect your smart fridge. A subtle sweep reveals what you have.',
          }, {
            Icon: Brain,
            title: 'AI Analyzing',
            desc: 'A holographic brain models flavors, nutrition, and pairings in real-time.',
          }, {
            Icon: UtensilsCrossed,
            title: 'Recipes Generated',
            desc: 'Watch dishes materialize as vivid 3D visuals tailored to your pantry.',
          }].map((step, i) => (
            <motion.div
              key={step.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={stepVariants}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/5 to-white/0 p-[1px]"
            >
              <div className="relative h-full rounded-2xl bg-[#0b0f19]/80 p-6 backdrop-blur">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                <div className="relative z-10">
                  <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-3 ring-1 ring-white/10">
                    <step.Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-cyan-100/80">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
