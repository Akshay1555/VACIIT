export default function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-violet-100 bg-violet-900 text-cream-50">
      <div className="mx-auto max-w-6xl px-5 py-16">
        {eyebrow && (
          <p className="text-sm font-medium text-gold-400">{eyebrow}</p>
        )}
        <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-violet-100">{description}</p>
        )}
      </div>
    </section>
  );
}
