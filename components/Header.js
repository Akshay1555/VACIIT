'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { navLinks, whatsappLink, callLink, site } from '../lib/site';

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" {...props}>
      <path d="M16.02 3C9.4 3 4 8.36 4 14.98c0 2.36.65 4.56 1.78 6.45L3 29l7.77-2.63a12.9 12.9 0 0 0 5.25 1.11h.01c6.62 0 12-5.36 12-11.98C28.03 8.36 22.64 3 16.02 3zm0 21.8c-1.8 0-3.5-.48-4.98-1.32l-.36-.21-4.6 1.56 1.55-4.48-.24-.37a9.72 9.72 0 0 1-1.5-5.2c0-5.4 4.4-9.79 9.83-9.79 5.42 0 9.82 4.4 9.82 9.79 0 5.4-4.4 10.02-9.52 10.02zm5.4-7.34c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.85 1.2 3.05c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.24-.68.24-1.27.17-1.4-.07-.12-.27-.2-.57-.35z" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-violet-100 bg-cream-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.jpg"
            alt="VACIIT logo"
            width={44}
            height={44}
            className="rounded-full"
          />
          <span className="font-display text-lg font-semibold leading-tight text-violet-900">
            VACIIT
            <span className="block text-[11px] font-sans font-normal tracking-wide text-violet-400">
              IIT-JEE &amp; NEET
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-magenta-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={callLink()}
            className="hidden items-center gap-2 rounded-full border border-violet-700 px-3 py-1.5 text-sm font-medium text-violet-700 hover:bg-violet-50 sm:flex"
            aria-label={`Call ${site.name}`}
          >
            <PhoneIcon className="h-4 w-4" /> Call
          </a>
          <a
            href={whatsappLink('header')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-green-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-green-700"
            aria-label={`Message ${site.name} on WhatsApp`}
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-md border border-violet-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="block h-0.5 w-5 bg-ink" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-violet-100 bg-cream-50 px-5 py-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-2 py-2 text-sm font-medium text-ink/80 hover:bg-violet-50"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
