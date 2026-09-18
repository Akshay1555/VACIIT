import Image from 'next/image';
import PageHero from '../../components/PageHero';
import EnquiryCTA from '../../components/EnquiryCTA';

export const metadata = {
  title: 'Gallery | VACIIT'
};

const photos = [
  { src: '/images/classroom-group.jpg', alt: 'VACIIT students group photo at the centre' },
  { src: '/images/student-reading.jpg', alt: 'Student studying in the VACIIT classroom' },
  { src: '/images/student-notes.jpg', alt: 'Student solving physics problems in class' },
  { src: '/images/founder-institute.jpg', alt: 'Founder at the VACIIT institute' },
  { src: '/images/poster.jpg', alt: 'VACIIT admissions poster' }
];

export default function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Life inside the VACIIT classroom" />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/5] overflow-hidden rounded-xl border border-violet-100"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/60">
          More photos of the reception area, seminars, toppers and events will be added as
          they become available.
        </p>
      </section>

      <EnquiryCTA context="gallery page" />
    </>
  );
}
