'use client';

import { useState } from 'react';

const products = [
  { id: 'hoodie', name: 'Hoodie Neon', price: '€79' },
  { id: 'tee', name: 'T-Shirt Cyber', price: '€39' },
  { id: 'mousepad', name: 'Mousepad Arena', price: '€29' }
];

const courses = [
  { id: 'aim', name: 'Aim Mastery', price: '€49' },
  { id: 'macro', name: 'Macro Strategy', price: '€69' }
];
const slots = ['Lun 18:00', 'Mer 20:00', 'Ven 16:30', 'Sab 12:00'];

export default function ShopPage() {
  const [loading, setLoading] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(slots[0]);

  const handleCheckout = async () => {
    setLoading(true);
    const response = await fetch('/api/stripe/checkout', { method: 'POST' });
    const data = await response.json();
    setLoading(false);
    if (data.url) {
      window.location.href = data.url;
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      <section className="py-12" id="coaching">
        <h1 className="text-3xl font-semibold">Shop & Coaching</h1>
        <p className="mt-3 text-white/70">
          Corsi digitali, coaching 1:1 con booking sincronizzato e merchandising ufficiale.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="glass rounded-3xl p-6">
            <h2 className="text-xl font-semibold">Coaching 1:1</h2>
            <p className="mt-2 text-sm text-white/60">
              Slot disponibili, calendario sincronizzato e pagamento Stripe con email automatica.
            </p>
            <div className="mt-6 space-y-3">
              <p className="text-xs uppercase tracking-widest text-white/50">Slot disponibili</p>
              <div className="flex flex-wrap gap-2">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`rounded-full border px-3 py-2 text-xs ${
                      selectedSlot === slot
                        ? 'border-electric text-electric'
                        : 'border-white/20 text-white/60'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 p-4">
                <div className="flex items-center justify-between">
                  <span>Sessione 60 min</span>
                  <span className="text-electric">€120</span>
                </div>
                <p className="mt-2 text-sm text-white/60">
                  Analisi VOD, strategie competitive e piano di miglioramento.
                </p>
              </div>
              <button
                onClick={handleCheckout}
                className="inline-flex rounded-full bg-electric px-5 py-3 text-xs uppercase tracking-widest text-night shadow-electric disabled:opacity-60"
                disabled={loading}
              >
                {loading ? 'Redirect...' : 'Prenota ora'}
              </button>
              <p className="text-xs text-white/50">
                Slot selezionato: <span className="text-electric">{selectedSlot}</span>
              </p>
            </div>
          </div>
          <div className="glass rounded-3xl p-6">
            <h2 className="text-xl font-semibold">Corsi digitali</h2>
            <div className="mt-6 space-y-4">
              {courses.map((course) => (
                <div key={course.id} className="rounded-2xl border border-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <span>{course.name}</span>
                    <span className="text-electric">{course.price}</span>
                  </div>
                  <p className="mt-2 text-xs text-white/50">
                    Moduli video, workbook strategici e feedback settimanale.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12" id="merch">
        <h2 className="text-2xl font-semibold">Merchandising</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="glass rounded-2xl p-5">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="mt-2 text-electric">{product.price}</p>
              <button className="mt-4 rounded-full border border-electric/60 px-4 py-2 text-xs uppercase tracking-widest text-electric">
                Aggiungi al carrello
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="glass rounded-3xl p-6">
          <h2 className="text-xl font-semibold">Calendario & Booking</h2>
          <p className="mt-2 text-sm text-white/60">
            Integrazione Calendly o booking custom per gestione appuntamenti e reminder automatici.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-4 text-sm text-white/70">
              <p className="text-xs uppercase tracking-widest text-white/50">Prenotazioni</p>
              <ul className="mt-3 space-y-2">
                <li>✔️ Conferma automatica email</li>
                <li>✔️ Sync Google Calendar</li>
                <li>✔️ Reminder 24h prima</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 p-4 text-sm text-white/70">
              <p className="text-xs uppercase tracking-widest text-white/50">Dashboard Coach</p>
              <ul className="mt-3 space-y-2">
                <li>⚡ Gestione slot e disponibilità</li>
                <li>⚡ Note post-sessione</li>
                <li>⚡ Storico coaching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
