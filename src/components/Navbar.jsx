import { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, label }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white"
    >
      <motion.span
        whileHover={{ y: -2 }}
        className="inline-block"
      >
        {label}
      </motion.span>
      <motion.span
        layoutId={`underline-${label}`}
        className="absolute left-4 right-4 -bottom-1 h-px bg-gradient-to-r from-sky-400/0 via-sky-400/80 to-sky-400/0"
      />
    </a>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-sky-400" />
              <span className="font-semibold tracking-tight text-white">MyPortfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-2">
              <NavLink href="#projects" label="Projects" />
              <NavLink href="#contact" label="Contact" />
            </nav>

            <button
              aria-label="Open Menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col">
                <NavLink href="#projects" label="Projects" />
                <NavLink href="#contact" label="Contact" />
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
