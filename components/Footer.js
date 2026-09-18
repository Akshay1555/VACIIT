import Link from 'next/link';
import { site, whatsappLink, callLink, navLinks } from '../lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-violet-100 bg-violet-900 text-cream-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-semibold">VACIIT</p>
          <p className="mt-1 text-sm text-violet-100">{site.tagline}</p>
          <p className="mt-4 text-sm text-violet-100">
            {site.founder} — {site.founderTitle}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-400">
            Explore
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-violet-100 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="text-violet-100 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-violet-100 hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-400">
            Centres
          </p>
          <ul className="mt-3 space-y-1 text-sm text-violet-100">
            {site.areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-gold-400 underline underline-offset-2"
          >
            View on Google Maps
          </a>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-400">
            Get in touch
          </p>
          <p className="mt-3 text-sm text-violet-100">
            {site.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <a href={callLink()} className="mt-3 block text-sm text-violet-100 hover:text-white">
            {site.phonePrimary} / {site.phoneSecondary}
          </a>
          <a
            href={`mailto:${site.email1}`}
            className="mt-1 block text-sm text-violet-100 hover:text-white"
          >
            {site.email1}
          </a>
          <a
            href={whatsappLink('footer')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-violet-200">
        © {new Date().getFullYear()} VACIIT — Vidyotama Ashram Classes. All rights reserved.
      </div>
    </footer>
  );
}
