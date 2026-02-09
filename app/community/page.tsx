'use client';

import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    user: 'NovaFox',
    rank: 'Diamond',
    content: 'Best loadout per cashout ranked? Ho trovato questa combo devastante.',
    likes: 128,
    comments: 24
  },
  {
    id: 2,
    user: 'PulseX',
    rank: 'Platinum',
    content: 'Cerco team per scrim EU stasera, inviami DM!',
    likes: 88,
    comments: 12
  }
];

const badges = ['Top Fan', 'Supporter', 'MVP'];
const leaderboardPreview = [
  { name: 'Yavira', elo: 2140 },
  { name: 'NovaFox', elo: 2088 },
  { name: 'PulseX', elo: 2024 }
];

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      <section className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-semibold"
          >
            Community Space
          </motion.h1>
          <p className="mt-4 text-white/70">
            Forum + social wall con aggiornamenti real-time, badge, moderazione admin e profili
            personalizzati. Effettua login per creare post, commentare e caricare immagini.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-center gap-3 text-sm text-white/70">
              <span className="h-8 w-8 rounded-full bg-electric/30" />
              <span>Condividi un aggiornamento</span>
            </div>
            <textarea
              className="mt-4 w-full rounded-2xl border border-white/10 bg-night/80 px-4 py-3 text-sm text-white/80"
              rows={3}
              placeholder="Scrivi un post, aggiungi immagini o clip..."
            />
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
              <span>📸 Media • 🏷️ Tag • 🔥 Highlight</span>
              <button className="rounded-full bg-electric px-4 py-2 text-xs uppercase tracking-widest text-night">
                Pubblica
              </button>
            </div>
          </div>
          <div className="mt-6 grid gap-4">
            {posts.map((post) => (
              <div key={post.id} className="glass rounded-2xl p-6">
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>{post.user}</span>
                  <span className="rounded-full border border-neon/40 px-3 py-1 text-xs text-neon">
                    {post.rank}
                  </span>
                </div>
                <p className="mt-4 text-white">{post.content}</p>
                <div className="mt-4 flex gap-6 text-xs uppercase tracking-widest text-white/50">
                  <span>❤️ {post.likes}</span>
                  <span>💬 {post.comments}</span>
                  <span>📸 Media</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold">Profilo utente</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Foto, bio e rank sincronizzati con Supabase.</li>
              <li>Statistiche ELO dinamiche + storico match.</li>
              <li>Referral link per invitare nuovi player.</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold">Badge System</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-electric/50 px-4 py-2 text-xs uppercase tracking-widest text-electric"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold">Top Community ELO</h3>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              {leaderboardPreview.map((player, index) => (
                <div key={player.name} className="flex items-center justify-between">
                  <span className="text-electric">#{index + 1}</span>
                  <span className="font-semibold">{player.name}</span>
                  <span>{player.elo} ELO</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold">Moderazione Admin</h3>
            <p className="mt-3 text-sm text-white/60">
              Pannello admin per gestire post, utenti, segnalazioni e contenuti multimediali.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
