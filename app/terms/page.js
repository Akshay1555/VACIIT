import PageHero from '../../components/PageHero';
import { site } from '../../lib/site';

export const metadata = {
  title: 'Terms & Conditions | VACIIT'
};

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />

      <section className="mx-auto max-w-prose px-5 py-14 text-ink/80">
        <p>
          These Terms & Conditions govern your use of the VACIIT (Vidyotama Ashram Classes)
          website and enquiry forms. By using this site, you agree to the terms below.
        </p>

        <h2 className="mt-8 font-display text-xl font-semibold text-violet-900">
          Admissions
        </h2>
        <p className="mt-2">
          Submitting an enquiry through this website, WhatsApp or phone does not guarantee
          admission or a seat in any batch. Admission is confirmed only after our team
          contacts you and the applicable process, fees and documentation are completed.
        </p>

        <h2 className="mt-8 font-display text-xl font-semibold text-violet-900">
          Course content
        </h2>
        <p className="mt-2">
          Course names, schedules and fees described on this website are indicative and may
          be updated from time to time. Please confirm current details with our team before
          enrolling.
        </p>

        <h2 className="mt-8 font-display text-xl font-semibold text-violet-900">
          Website content
        </h2>
        <p className="mt-2">
          All content on this website — including text, images and the VACIIT logo — belongs
          to VACIIT (Vidyotama Ashram Classes) and may not be reproduced without permission.
        </p>

        <h2 className="mt-8 font-display text-xl font-semibold text-violet-900">
          Contact
        </h2>
        <p className="mt-2">
          For any questions about these terms, write to us at{' '}
          <a href={`mailto:${site.email1}`} className="text-magenta-600 underline">
            {site.email1}
          </a>
          .
        </p>
      </section>
    </>
  );
}
