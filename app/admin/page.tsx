'use client';

const adminSections = [
  'Gestione utenti',
  'Moderazione post',
  'Leaderboard manager',
  'Prodotti & corsi',
  'Analytics & KPI'
];
const adminMetrics = [
  { label: 'Utenti attivi', value: '2.4k' },
  { label: 'Post segnalati', value: '12' },
  { label: 'Sessioni coaching', value: '38' },
  { label: 'Fatturato mese', value: '€9.8k' }
];

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      <section className="py-12">
        <h1 className="text-3xl font-semibold">Dashboard Admin</h1>
        <p className="mt-3 text-white/70">
          Accesso riservato agli admin per gestire community, leaderboard e shop.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {adminMetrics.map((metric) => (
            <div key={metric.label} className="glass rounded-2xl p-4">
              <p className="text-xs uppercase tracking-widest text-white/50">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold text-electric">{metric.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {adminSections.map((section) => (
            <div key={section} className="glass rounded-2xl p-6">
              <h3 className="text-lg font-semibold">{section}</h3>
              <p className="mt-2 text-sm text-white/60">
                Modifica contenuti, controlla statistiche e automatizza i flussi.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
