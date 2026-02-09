'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Win Rate', value: '72%' },
  { label: 'Rank', value: 'Top 20 EU' },
  { label: 'Earnings', value: '€58k' },
  { label: 'Tornei vinti', value: '18' }
];

const sponsors = ['Razer', 'Red Bull', 'HyperX', 'Logitech'];
const highlights = [
  {
    title: 'Clutch 1v3',
    description: 'Finale tournament cashout, triple frag con dash reset.',
    time: '02:13'
  },
  {
    title: 'Macro call',
    description: 'Rotazioni e split push nel round decisivo.',
    time: '01:02'
  },
  {
    title: 'Aim lab',
    description: 'Warmup routine e tracking routine pre-match.',
    time: '00:48'
  }
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="grid items-center gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-electric/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-electric"
          >
            Pro Player • The Finals
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold leading-tight text-white md:text-6xl"
          >
            YAVIRA
            <span className="block text-electric">Neon Apex of The Finals</span>
          </motion.h1>
          <p className="text-lg text-white/70">
            Community competitiva, coaching premium, tornei con ranking ELO e contenuti esclusivi.
            Vivi l&apos;esperienza esports con un design cyberpunk e servizi end-to-end.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/community"
              className="rounded-full bg-electric px-6 py-3 text-sm uppercase tracking-widest text-night shadow-electric transition hover:-translate-y-0.5"
            >
              Join the Community
            </Link>
            <Link
              href="/shop#coaching"
              className="rounded-full border border-neon/60 px-6 py-3 text-sm uppercase tracking-widest text-white transition hover:border-electric hover:text-electric"
            >
              Book a Coaching Session
            </Link>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl border border-white/10 bg-glow p-6 shadow-glow"
        >
          <Image
            src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop"
            alt="Pro player render"
            fill
            className="rounded-2xl object-cover"
          />
        </motion.div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">{stat.label}</p>
            <p className="text-2xl font-semibold text-electric">{stat.value}</p>
          </div>
        ))}
      </section>

      <section className="py-16">
        <h2 className="text-2xl font-semibold">Sponsor</h2>
        <p className="mt-2 text-sm text-white/60">
          Brand partner per setup, nutrition e performance esports.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 text-center text-sm text-white/60 md:grid-cols-4">
          {sponsors.map((sponsor) => (
            <div key={sponsor} className="neon-border rounded-2xl bg-white/5 py-6">
              {sponsor}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 pb-10 md:grid-cols-2">
        <div className="glass rounded-3xl p-6">
          <h3 className="text-xl font-semibold">Highlights</h3>
          <p className="mt-2 text-sm text-white/60">
            Watch scrims, clutch plays e live stream del circuito competitivo.
          </p>
          <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-white/10">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <div className="glass rounded-3xl p-6">
          <h3 className="text-xl font-semibold">Live Stream</h3>
          <p className="mt-2 text-sm text-white/60">
            Segui le sessioni live con analisi strategica e coaching in tempo reale.
          </p>
          <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-white/10">
            <iframe
              className="h-full w-full"
              src={`https://player.twitch.tv/?channel=yavira&parent=${process.env.NEXT_PUBLIC_TWITCH_PARENT ?? 'localhost'}`}
              title="Live Stream"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className="grid gap-6 pb-20 lg:grid-cols-[1fr_0.9fr]">
        <div className="glass rounded-3xl p-6">
          <h3 className="text-xl font-semibold">Highlight Reel</h3>
          <p className="mt-2 text-sm text-white/60">
            Clip curati per mostrare decision making, aim e controllo mappa.
          </p>
          <div className="mt-6 space-y-4">
            {highlights.map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-xs text-white/50">{item.description}</p>
                </div>
                <span className="text-xs text-electric">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="glass rounded-3xl p-6">
          <h3 className="text-xl font-semibold">Calendario Live</h3>
          <p className="mt-2 text-sm text-white/60">
            Prossime live e sessioni di coaching con prenotazione veloce.
          </p>
          <div className="mt-6 space-y-4">
            {['Mer 21:00 — Scrim Team EU', 'Ven 18:00 — VOD Review', 'Sab 15:00 — Coaching VIP'].map(
              (event) => (
                <div key={event} className="rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/70">
                  {event}
                </div>
              )
            )}
          </div>
          <Link
            href="/shop#coaching"
            className="mt-6 inline-flex rounded-full border border-electric/50 px-4 py-2 text-xs uppercase tracking-widest text-electric"
          >
            Prenota ora
          </Link>
        </div>
      </section>
    </div>
  );
}
