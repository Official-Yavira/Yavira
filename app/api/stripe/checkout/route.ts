import { NextResponse } from 'next/server';
import { stripe } from '../../../../lib/stripe';

export async function POST() {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: 'Stripe non configurato. Aggiungi STRIPE_SECRET_KEY.' },
      { status: 400 }
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: { name: 'Coaching 1:1' },
          unit_amount: 12000
        },
        quantity: 1
      }
    ],
    success_url: `${siteUrl}/shop?success=true`,
    cancel_url: `${siteUrl}/shop?canceled=true`
  });

  return NextResponse.json({ url: session.url });
}

export async function GET() {
  return NextResponse.json({ message: 'Usa POST per creare una sessione Stripe.' }, { status: 405 });
}
