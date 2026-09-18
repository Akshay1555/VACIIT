import PageHero from '../../components/PageHero';
import { site, whatsappLink, callLink } from '../../lib/site';

export const metadata = {
  title: 'Contact Us | VACIIT'
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come visit us, or reach out on WhatsApp"
        description="We're based in Kharghar and serve students across Kharghar, Belapur and Kamothe."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-violet-100">
          <iframe
            title="VACIIT location on Google Maps"
            src={site.mapsEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '380px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-violet-900">Head Office</h2>
          <p className="mt-3 text-ink/80">
            {site.addressLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <a
            href={site.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm text-magenta-600 underline underline-offset-2"
          >
            Get directions on Google Maps
          </a>

          <div className="mt-8 space-y-3">
            <a
              href={callLink(site.phonePrimary)}
              className="flex items-center gap-3 rounded-lg border border-violet-100 px-4 py-3 text-ink/80 hover:bg-violet-50"
            >
              📞 {site.phonePrimary}
            </a>
            <a
              href={callLink(site.phoneSecondary)}
              className="flex items-center gap-3 rounded-lg border border-violet-100 px-4 py-3 text-ink/80 hover:bg-violet-50"
            >
              📞 {site.phoneSecondary}
            </a>
            <a
              href={whatsappLink('contact page')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg bg-green-600 px-4 py-3 text-white hover:bg-green-700"
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href={`mailto:${site.email1}`}
              className="flex items-center gap-3 rounded-lg border border-violet-100 px-4 py-3 text-ink/80 hover:bg-violet-50"
            >
              ✉️ {site.email1}
            </a>
            <a
              href={`mailto:${site.email2}`}
              className="flex items-center gap-3 rounded-lg border border-violet-100 px-4 py-3 text-ink/80 hover:bg-violet-50"
            >
              ✉️ {site.email2}
            </a>
          </div>

          <div className="mt-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-magenta-600">
              Areas we serve
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {site.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-violet-200 px-3 py-1 text-sm text-ink/80"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
