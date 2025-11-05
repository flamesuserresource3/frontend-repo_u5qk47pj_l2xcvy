import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon Dashboard',
    description: 'A futuristic analytics dashboard with real-time 3D data viz.',
    tags: ['React', 'Three.js', 'Framer Motion'],
  },
  {
    title: 'E-commerce XR',
    description: 'Immersive storefront blending 3D product views and AR try-ons.',
    tags: ['Vite', '3D', 'UX'],
  },
  {
    title: 'Portfolio 3D',
    description: 'Playable, interactive portfolio experience with Spline scenes.',
    tags: ['Spline', 'Motion', 'Design'],
  },
];

function Card({ title, description, tags, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: i * 0.05, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl backdrop-blur-sm"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-500/10 blur-2xl transition-transform duration-500 group-hover:scale-150" />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3">
        <a href="#" className="text-sm font-medium text-sky-400 hover:text-sky-300">Live Demo</a>
        <span className="text-white/20">•</span>
        <a href="#" className="text-sm font-medium text-white/70 hover:text-white">Case Study</a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-white sm:text-4xl"
        >
          Featured Projects
        </motion.h2>
        <p className="mt-3 text-white/70">
          A selection of playful, modern builds infused with motion and interactivity.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <Card key={p.title} i={idx} {...p} />
        ))}
      </div>

      {/* Parallax accent line */}
      <motion.div
        initial={{ width: '0%' }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="pointer-events-none mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
    </section>
  );
}
