import Image from 'next/image';
import PageHero from '../../components/PageHero';
import EnquiryCTA from '../../components/EnquiryCTA';
import { site } from '../../lib/site';

export const metadata = {
  title: 'About Us | VACIIT'
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About VACIIT"
        title="Concept clarity, personal mentoring, and disciplined testing"
        description="VACIIT (Vidyotama Ashram Classes) is a coaching institute built around one idea: students learn best when concepts are clear, mentoring is personal, and progress is tracked."
      />

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-display text-2xl font-semibold text-violet-900">Our story</h2>
          <p className="mt-4 text-ink/80">
            VACIIT is a premier coaching institute dedicated to preparing students for
            IIT-JEE, NEET, Foundation courses, Olympiads, NTSE, CET and Board examinations.
            The institute was founded by {site.founder}, a NEET and State PMT qualified
            educator with over 8 years of teaching experience.
          </p>
          <p className="mt-4 text-ink/80">
            Our mission is to provide quality education and help every student achieve
            academic excellence and career success — through concept clarity, personalized
            mentoring, regular testing, and result-oriented preparation.
          </p>
        </div>
        <div className="relative aspect-[893/1280] w-full max-w-sm overflow-hidden rounded-2xl border-4 border-gold-400/60">
          <Image
            src="/images/founder-institute.jpg"
            alt={`${site.founder} at the VACIIT institute`}
            fill
            sizes="(min-width: 768px) 24rem, 80vw"
            className="object-cover object-top"
          />
        </div>
      </section>

      <section className="bg-violet-50">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="font-display text-2xl font-semibold text-violet-900">
            {site.founder}
          </h2>
          <p className="text-sm font-medium text-magenta-600">{site.founderTitle}</p>
          <p className="mt-4 max-w-2xl text-ink/80">
            {site.founder} is a NEET and State PMT qualified educator with over 8 years of
            teaching experience. Under his direct mentorship, VACIIT focuses on doubt
            solving, regular test analysis, and one-on-one guidance so every student's
            preparation stays on track for board exams as well as competitive entrances.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-display text-2xl font-semibold text-violet-900">
          What sets us apart
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Experienced faculty',
            'Small batch sizes',
            'Personalized attention',
            'Regular tests & analysis',
            'Smart classroom learning',
            'Comprehensive study material',
            'Performance tracking',
            'Parent-teacher meetings',
            'Career counselling'
          ].map((item) => (
            <div key={item} className="rounded-xl border border-violet-100 p-5 text-ink/80">
              {item}
            </div>
          ))}
        </div>
      </section>

      <EnquiryCTA context="about page" />
    </>
  );
}