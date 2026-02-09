# Yavira – Pro Player The Finals

Sito web completo in stile esports/cyberpunk con community, leaderboard, shop e dashboard admin.

## ✅ Stack
- **Frontend**: Next.js + React
- **Styling**: TailwindCSS
- **Backend**: API Routes (Node.js)
- **Database**: Supabase (Postgres)
- **Auth**: Supabase Auth
- **Pagamenti**: Stripe
- **Animazioni**: Framer Motion

## Struttura progetto
```
app/
  api/
    community/posts/route.ts
    leaderboard/route.ts
    stripe/checkout/route.ts
  admin/page.tsx
  community/page.tsx
  leaderboard/page.tsx
  login/page.tsx
  shop/page.tsx
  layout.tsx
  page.tsx
components/
  SiteFooter.tsx
  SiteHeader.tsx
lib/
  bracket.ts
  elo.ts
  stripe.ts
  supabase.ts
styles/
  globals.css
/docs/schema.sql
```

## Setup locale
```bash
npm install
npm run dev
```

## Variabili ambiente
Crea un file `.env.local` (puoi partire da `.env.example`):
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_TWITCH_PARENT=localhost
STRIPE_SECRET_KEY=your_stripe_secret
```

> **Nota**: per l'embed Twitch su localhost bisogna aggiungere `parent=localhost` (già presente).
> In produzione imposta `parent=tuodominio.it` nell'iframe.

## Schema database (Supabase)
Usa lo schema in `docs/schema.sql` per creare le tabelle.

## API Routes
- `GET /api/leaderboard` – classifica demo
- `GET/POST /api/community/posts` – feed + creazione post
- `POST /api/stripe/checkout` – crea sessione Stripe

## Ranking ELO + Tornei
- **ELO**: `lib/elo.ts` calcola i punteggi aggiornati.
- **Brackets**: `lib/bracket.ts` genera lo schema automatico dei tornei.

## Deploy su Vercel
1. Push del repo su GitHub.
2. Connetti a Vercel.
3. Aggiungi le variabili `.env`.
4. Deploy.
