import { whatsappLink, callLink, site } from '../lib/site';

export default function EnquiryCTA({
  context = 'the website',
  heading = 'Admissions Open 2026–27',
  subheading = 'Book a free demo class today.'
}) {
  return (
    <section className="bg-cream-100">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-2xl font-semibold text-violet-900">{heading}</p>
          <p className="mt-1 text-ink/70">{subheading}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappLink(context)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700"
          >
            Enquire on WhatsApp
          </a>
          <a
            href={callLink()}
            className="rounded-full border border-violet-700 px-5 py-2.5 text-sm font-medium text-violet-700 hover:bg-violet-50"
          >
            Call {site.phonePrimary}
          </a>
        </div>
      </div>
    </section>
  );
}
