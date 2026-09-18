import PageHero from '../../components/PageHero';
import EnquiryCTA from '../../components/EnquiryCTA';

export const metadata = {
  title: 'Results | VACIIT'
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Our students' results"
        description="This page is ready to showcase topper names, scores and photos as each batch's results come in."
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="rounded-xl border border-dashed border-violet-200 bg-violet-50 p-10 text-center">
          <p className="font-display text-xl font-semibold text-violet-900">
            Results will appear here
          </p>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink/70">
            Share topper names, ranks, scores and photos, and this section will be updated
            with a results grid — batch-wise or year-wise, whichever you prefer.
          </p>
        </div>
      </section>

      <EnquiryCTA context="results page" />
    </>
  );
}
