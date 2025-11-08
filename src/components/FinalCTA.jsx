import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function FinalCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070a12] py-28 text-white">
      {/* 3D Scene behind everything in this section */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/oS8fZ2WbqgL8wq0H/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Top/bottom fades, non-interactive */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#070a12]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070a12]" />
      </div>

      {/* Foreground content */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-['Manrope'] text-3xl font-bold sm:text-5xl"
        >
          Experience the Future of Cooking
        </motion.h3>
        <p className="mx-auto mt-3 max-w-2xl text-cyan-100/85">
          Your fridge just got smarter. From ingredients to inspiration — instantly.
        </p>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          className="relative mt-8 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(56,189,248,0.35)]"
        >
          Get Early Access
        </motion.button>
      </div>
    </section>
  );
}
