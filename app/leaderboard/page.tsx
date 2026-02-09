'use client';

import { motion } from 'framer-motion';
import { generateBracket } from '../../lib/bracket';

const players = [
  { position: 1, name: 'Yavira', score: 2140, kd: 3.2 },
  { position: 2, name: 'NovaFox', score: 2088, kd: 2.9 },
  { position: 3, name: 'PulseX', score: 2024, kd: 2.7 },
  { position: 4, name: 'Spectra', score: 1990, kd: 2.5 },
  { position: 5, name: 'Zenith', score: 1955, kd: 2.4 }
];

export default function LeaderboardPage() {
  const bracket = generateBracket(['Yavira', 'NovaFox', 'PulseX', 'Spectra', 'Zenith', 'Astra']);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      <section className="py-12">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold"
        >
          Leaderboard
        </motion.h1>
        <p className="mt-3 text-white/70">
          Classifiche community con filtri stagionali, modalità competitive e ranking ELO.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-widest">
          <button className="rounded-full border border-electric/50 px-4 py-2 text-electric">
            Season 5
          </button>
          <button className="rounded-full border border-white/20 px-4 py-2 text-white/60">
            Ranked Cashout
          </button>
          <button className="rounded-full border border-white/20 px-4 py-2 text-white/60">
            Tournament Mode
          </button>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg font-semibold">Podio</h3>
            <div className="mt-6 space-y-4">
              {players.slice(0, 3).map((player) => (
                <div
                  key={player.position}
                  className="flex items-center justify-between rounded-2xl border border-neon/40 px-4 py-3"
                >
                  <span className="text-electric">#{player.position}</span>
                  <span className="font-semibold">{player.name}</span>
                  <span className="text-white/60">{player.score} ELO</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg font-semibold">Top 10</h3>
            <div className="mt-4 space-y-3">
              {players.map((player) => (
                <div
                  key={player.position}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm ${
                    player.position <= 3 ? 'bg-white/10' : 'bg-white/5'
                  }`}
                >
                  <span className="w-10 text-electric">#{player.position}</span>
                  <span className="flex-1 font-semibold">{player.name}</span>
                  <span className="w-24 text-white/60">{player.score} ELO</span>
                  <span className="w-16 text-white/60">K/D {player.kd}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg font-semibold">Bracket torneo community</h3>
            <p className="mt-2 text-sm text-white/60">
              Generazione automatica del bracket con riempimento BYE e avanzamento round.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {bracket.map((match) => (
                <div key={match.id} className="rounded-2xl border border-white/10 p-4 text-sm">
                  <p className="text-xs uppercase tracking-widest text-white/50">Round {match.round}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span>{match.playerA}</span>
                    <span className="text-electric">vs</span>
                    <span>{match.playerB}</span>
                  </div>
                  <p className="mt-2 text-xs text-white/50">
                    Winner: {match.winner ?? 'TBD'}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-6">
            <h3 className="text-lg font-semibold">Rank Insight</h3>
            <p className="mt-2 text-sm text-white/60">
              Filtri per stagione, modalità e trend ELO con grafici in tempo reale.
            </p>
            <div className="mt-6 space-y-4">
              {['Peak ELO: 2240', 'Win Streak: 7', 'Top 3 finishes: 12'].map((item) => (
                <div key={item} className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/70">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
