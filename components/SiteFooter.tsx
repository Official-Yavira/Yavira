import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-night/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-electric">YAVIRA</h3>
          <p className="mt-4 text-sm text-white/60">
            Pro player di The Finals. Community, coaching e tornei con vibe cyberpunk.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase text-white/70">Links rapidi</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>
              <Link href="/community" className="hover:text-electric">Community Space</Link>
            </li>
            <li>
              <Link href="/leaderboard" className="hover:text-electric">Leaderboard</Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-electric">Shop & Coaching</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase text-white/70">Social</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/60">
            <li>Twitch: twitch.tv/yavira</li>
            <li>YouTube: youtube.com/@yavira</li>
            <li>Discord: discord.gg/yavira</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
