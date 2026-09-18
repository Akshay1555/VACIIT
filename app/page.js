import Image from 'next/image';
import Link from 'next/link';
import EnquiryCTA from '../components/EnquiryCTA';
import { whatsappLink, callLink, site } from '../lib/site';

const stats = [
  { label: 'Years of teaching experience', value: '8+' },
  { label: 'Programs across school & competitive exams', value: '10+' },
  { label: 'Centres across Navi Mumbai', value: '3' }
];

const services = [
  {
    title: 'IIT-JEE Main & Advanced',
    detail: 'Structured problem-solving practice with weekly tests and error analysis.'
  },
  {
    title: 'NEET UG',
    detail: 'One-year and two-year tracks built around NCERT depth and speed.'
  },
  {
    title: 'Foundation, Class 5–10',
    detail: 'Concept-first learning that keeps school boards and future competitive exams in step.'
  },
  {
    title: 'Olympiad & NTSE',
    detail: 'Targeted problem sets for students aiming beyond the school syllabus.'
  }
];

const reasons = [
  'Small batch sizes with direct access to faculty',
  'Regular tests with detailed performance analysis',
  'Comprehensive, updated study material',
  'Parent-teacher meetings every term',
  'Scholarship opportunities for deserving students'
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-violet-100 bg-violet-900 text-cream-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <p className="text-sm font-medium text-gold-400">Kharghar · Belapur · Kamothe</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              {site.tagline}
            </h1>
            <p className="mt-5 max-w-md text-violet-100">
              VACIIT prepares students for IIT-JEE, NEET, Foundation, Olympiads, NTSE, CET
              and Board exams — through concept clarity, personal mentoring and disciplined
              testing, under the direct guidance of {site.founder}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={whatsappLink('home hero')}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white hover:bg-green-700"
              >
                Book a free demo class
              </a>
              <a
                href={callLink()}
                className="rounded-full border border-cream-50 px-6 py-3 text-sm font-medium text-cream-50 hover:bg-white/10"
              >
                Call {site.phonePrimary}
              </a>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border-4 border-gold-400/60 shadow-2xl">
            <Image
              src="/images/founder-formal.jpg"
              alt={`${site.founder}, Founder of VACIIT`}
              fill
              sizes="(min-width: 768px) 24rem, 80vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-violet-100 p-6">
              <p className="font-display text-3xl font-semibold text-violet-900">{stat.value}</p>
              <p className="mt-1 text-sm text-ink/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-3xl font-semibold text-violet-900">
            Programs we teach
          </h2>
          <Link href="/courses" className="text-sm font-medium text-magenta-600 hover:underline">
            View all courses →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-xl border border-violet-100 p-6">
              <p className="font-display text-lg font-semibold text-violet-900">
                {service.title}
              </p>
              <p className="mt-2 text-sm text-ink/70">{service.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-violet-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/classroom-group.jpg"
              alt="VACIIT students at the Kharghar centre"
              fill
              sizes="(min-width: 768px) 32rem, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-violet-900">
              Why families choose VACIIT
            </h2>
            <ul className="mt-6 space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex gap-3 text-ink/80">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <EnquiryCTA context="home page" />
    </>
  );
}
