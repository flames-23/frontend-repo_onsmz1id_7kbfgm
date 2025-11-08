import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { HeartPulse, Leaf, Sparkles, Recycle } from 'lucide-react';

function TiltCard({ title, subtitle, icon: Icon, gradient }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - rect.left - rect.width / 2;
    const dy = e.clientY - rect.top - rect.height / 2;
    x.set(dx);
    y.set(dy);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="group relative h-48 rounded-2xl p-[1px] transition-transform duration-300"
    >
      <div className="absolute inset-0 rounded-2xl" style={{ background: gradient }} />
      <div className="relative z-10 flex h-full flex-col justify-between rounded-2xl bg-[#0b0f19]/80 p-5 backdrop-blur ring-1 ring-white/10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <Icon className="h-5 w-5 text-cyan-300" />
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm text-cyan-100/80">{subtitle}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const items = [
    {
      title: 'Smart Detection',
      subtitle: 'Real-time vision identifies items, quantities, and freshness.',
      icon: Sparkles,
      gradient: 'linear-gradient(135deg, rgba(56,189,248,0.25), rgba(147,51,234,0.25))',
    },
    {
      title: 'AI-Generated Recipes',
      subtitle: 'Personalized dishes from what you already have on hand.',
      icon: HeartPulse,
      gradient: 'linear-gradient(135deg, rgba(59,130,246,0.25), rgba(56,189,248,0.25))',
    },
    {
      title: 'Healthy Choices',
      subtitle: 'Nutrition-aware suggestions with balanced macros.',
      icon: Leaf,
      gradient: 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(56,189,248,0.25))',
    },
    {
      title: 'Zero Waste Cooking',
      subtitle: 'Use what’s expiring soon to reduce food waste.',
      icon: Recycle,
      gradient: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(56,189,248,0.25))',
    },
  ];

  return (
    <section className="relative w-full bg-[#0b0f19] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-center font-['Manrope'] text-3xl font-bold sm:text-5xl">Features</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-cyan-100/80">
          Intuitive controls, vivid visuals, and intelligence woven into every interaction.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <TiltCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
