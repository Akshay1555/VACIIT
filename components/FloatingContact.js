'use client';

import { whatsappLink, callLink } from '../lib/site';

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={callLink()}
        aria-label="Call VACIIT"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-700 text-white shadow-lg shadow-violet-900/30 transition hover:bg-violet-600"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>
      <a
        href={whatsappLink('floating button')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message VACIIT on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-900/30 transition hover:bg-green-700"
      >
        <svg viewBox="0 0 32 32" fill="currentColor" className="h-5 w-5">
          <path d="M16.02 3C9.4 3 4 8.36 4 14.98c0 2.36.65 4.56 1.78 6.45L3 29l7.77-2.63a12.9 12.9 0 0 0 5.25 1.11h.01c6.62 0 12-5.36 12-11.98C28.03 8.36 22.64 3 16.02 3zm0 21.8c-1.8 0-3.5-.48-4.98-1.32l-.36-.21-4.6 1.56 1.55-4.48-.24-.37a9.72 9.72 0 0 1-1.5-5.2c0-5.4 4.4-9.79 9.83-9.79 5.42 0 9.82 4.4 9.82 9.79 0 5.4-4.4 10.02-9.52 10.02zm5.4-7.34c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.85 1.2 3.05c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.24-.68.24-1.27.17-1.4-.07-.12-.27-.2-.57-.35z" />
        </svg>
      </a>
    </div>
  );
}
