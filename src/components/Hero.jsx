import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onGenerate }) {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#06080f] to-[#090b12] text-white">
      {/* 3D Spline Scene behind content (isolated layer; never negative z-index) */}
      <div className="absolute inset-0 z-0 will-change-transform [contain:paint]">
        <Spline
          scene="https://prod.spline.design/3Jm3gqT1ZKXxwJ1w/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          aria-hidden
          role="presentation"
        />
      </div>

      {/* Glow gradients layered above scene but not interactive */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* Content always on top */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-['Manrope'] text-4xl font-extrabold leading-tight text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.25)] sm:text-6xl"
          style={{ textShadow: '0 10px 50px rgba(99,102,241,0.25)' }}
        >
          Turn What’s in Your Fridge Into What’s on Your Plate
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-lg text-cyan-100/90"
        >
          AI Fridge Gene — Your smart culinary companion.
        </motion.p>

        <motion.button
          onClick={onGenerate}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="group relative mt-10 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_50px_rgba(56,189,248,0.55)]"
          style={{ filter: 'drop-shadow(0 10px 30px rgba(56,189,248,0.35))' }}
        >
          <span className="relative z-10">Generate My Recipes</span>
          <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
        </motion.button>
      </div>
    </section>
  );
}
