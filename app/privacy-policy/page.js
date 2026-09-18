import PageHero from '../../components/PageHero';
import { site } from '../../lib/site';

export const metadata = {
  title: 'Privacy Policy | VACIIT'
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />

      <section className="mx-auto max-w-prose px-5 py-14 text-ink/80">
        <p>
          This Privacy Policy explains how VACIIT (Vidyotama Ashram Classes) collects, uses
          and protects information shared by visitors to this website and by students and
          parents enquiring about our programs.
        </p>

        <h2 className="mt-8 font-display text-xl font-semibold text-violet-900">
          Information we collect
        </h2>
        <p className="mt-2">
          When you fill in an admission enquiry or contact us on WhatsApp, phone or email,
          we collect the details you provide — such as name, phone number, class/year and
          the program you're interested in — to respond to your enquiry.
        </p>

        <h2 className="mt-8 font-display text-xl font-semibold text-violet-900">
          How we use this information
        </h2>
        <p className="mt-2">
          We use the information you share only to respond to your enquiry, provide
          information about our courses, and keep you updated about admissions, batches and
          test schedules. We do not sell or rent your information to third parties.
        </p>

        <h2 className="mt-8 font-display text-xl font-semibold text-violet-900">
          WhatsApp and phone communication
        </h2>
        <p className="mt-2">
          Enquiries made through the WhatsApp or call buttons on this site are handled
          directly by our team on the numbers listed on our{' '}
          <a href="/contact" className="text-magenta-600 underline">
            Contact page
          </a>
          .
        </p>

        <h2 className="mt-8 font-display text-xl font-semibold text-violet-900">
          Contact us
        </h2>
        <p className="mt-2">
          If you have any questions about this policy, write to us at{' '}
          <a href={`mailto:${site.email1}`} className="text-magenta-600 underline">
            {site.email1}
          </a>
          .
        </p>

        <p className="mt-8 text-sm text-ink/50">
          This policy may be updated from time to time. Please check back periodically for
          changes.
        </p>
      </section>
    </>
  );
}
