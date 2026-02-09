'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/community', label: 'Community' },
  { href: '/leaderboard', label: 'Leaderboard' },
  { href: '/shop', label: 'Shop & Coaching' },
  { href: '/admin', label: 'Admin' }
];

export default function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-night/80 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-[0.2em] text-electric">
          YAVIRA
        </Link>
        <nav className="hidden gap-6 text-sm uppercase text-white/80 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-electric"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-full border border-electric/50 px-4 py-2 text-xs uppercase tracking-widest text-electric transition hover:border-electric hover:text-white"
          >
            Login
          </Link>
          <Link
            href="/shop#coaching"
            className="rounded-full bg-electric px-4 py-2 text-xs uppercase tracking-widest text-night shadow-electric transition hover:-translate-y-0.5"
          >
            Book
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
