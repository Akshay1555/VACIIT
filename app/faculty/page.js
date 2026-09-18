import Image from 'next/image';
import PageHero from '../../components/PageHero';
import EnquiryCTA from '../../components/EnquiryCTA';
import { site } from '../../lib/site';

export const metadata = {
  title: 'Faculty | VACIIT'
};

export default function FacultyPage() {
  return (
    <>
      <PageHero
        eyebrow="Faculty"
        title="Learn directly from an experienced, exam-qualified mentor"
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,18rem)_1fr] md:items-start">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-4 border-gold-400/60">
            <Image
              src="/images/founder-formal.jpg"
              alt={site.founder}
              fill
              sizes="(min-width: 768px) 18rem, 80vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-violet-900">
              {site.founder}
            </h2>
            <p className="text-sm font-medium text-magenta-600">{site.founderTitle}</p>
            <p className="mt-4 max-w-2xl text-ink/80">
              {site.founder} is a NEET and State PMT qualified educator with over 8 years of
              teaching experience. He leads VACIIT's teaching approach around three
              principles: clear concepts before speed, frequent low-stakes testing, and
              close tracking of every student's progress so gaps are caught early.
            </p>
            <ul className="mt-6 space-y-2 text-ink/80">
              <li>• NEET and State PMT qualified</li>
              <li>• 8+ years of teaching experience</li>
              <li>• Personally mentors doubt-solving sessions and test analysis</li>
              <li>• Oversees parent-teacher meetings every term</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-violet-50">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="font-display text-2xl font-semibold text-violet-900">
            How our faculty works with students
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: 'Small batches',
                detail: 'Batch sizes are kept small so every student gets direct, personal attention.'
              },
              {
                title: 'Regular testing',
                detail: 'Weekly and monthly tests are followed by a one-to-one review of mistakes.'
              },
              {
                title: 'Parent updates',
                detail: 'Parent-teacher meetings keep families informed of progress every term.'
              }
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-violet-100 bg-white p-6">
                <p className="font-display text-lg font-semibold text-violet-900">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-ink/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryCTA context="faculty page" />
    </>
  );
}
