import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const ySpline = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacityGradient = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <section id="home" ref={ref} className="relative h-[100svh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-930 to-slate-950">
      {/* Interactive 3D scene */}
      <motion.div style={{ y: ySpline }} className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Soft gradient glow overlays (non-interfering) */}
      <motion.div
        style={{ opacity: opacityGradient }}
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div
          style={{ y: yText }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Open for new projects
          </span>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Crafting playful, modern and interactive web experiences
          </h1>
          <p className="mt-4 text-white/70">
            I blend cutting-edge 3D, motion, and delightful micro-interactions to ship products users love. Scroll to explore.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/30 hover:bg-sky-400"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
