'use client';

import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <div className="glass rounded-3xl p-8">
        <h1 className="text-2xl font-semibold">Login / Registrazione</h1>
        <p className="mt-3 text-sm text-white/60">
          Autenticazione gestita con Supabase Auth (email + provider social).
        </p>
        <div className="mt-6 space-y-4">
          <input
            className="w-full rounded-2xl border border-white/10 bg-night/80 px-4 py-3 text-sm"
            placeholder="Email"
          />
          <input
            className="w-full rounded-2xl border border-white/10 bg-night/80 px-4 py-3 text-sm"
            placeholder="Password"
            type="password"
          />
          <button className="w-full rounded-full bg-electric px-4 py-3 text-xs uppercase tracking-widest text-night">
            Entra
          </button>
        </div>
        <div className="mt-6 grid gap-3 text-xs text-white/60">
          <button className="rounded-full border border-white/20 px-4 py-2 uppercase tracking-widest">
            Continua con Discord
          </button>
          <button className="rounded-full border border-white/20 px-4 py-2 uppercase tracking-widest">
            Continua con Google
          </button>
        </div>
        <div className="mt-6 text-xs text-white/50">
          Non hai un account?{' '}
          <Link href="/community" className="text-electric">
            Unisciti ora
          </Link>
        </div>
      </div>
    </div>
  );
}
