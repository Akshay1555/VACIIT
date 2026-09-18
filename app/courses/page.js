import PageHero from '../../components/PageHero';
import EnquiryCTA from '../../components/EnquiryCTA';
import { whatsappLink } from '../../lib/site';

export const metadata = {
  title: 'Courses | VACIIT'
};

const courses = [
  {
    name: 'Foundation Program',
    audience: 'Class 5–10',
    detail: 'Builds concept clarity in Maths and Science early, so Boards and future competitive exams feel familiar rather than sudden.'
  },
  {
    name: 'IIT-JEE Main + Advanced',
    audience: 'Class 11–12 / Repeaters',
    detail: 'Layered problem sets across Physics, Chemistry and Maths, with weekly tests mapped to the JEE pattern.'
  },
  {
    name: 'NEET UG — One-Year Program',
    audience: 'Class 12 / Droppers',
    detail: 'An intensive single-year track for students who need focused, high-frequency revision before NEET.'
  },
  {
    name: 'NEET UG — Two-Year Program',
    audience: 'Class 11–12',
    detail: 'Covers the full NEET syllabus alongside Board preparation, paced across both years.'
  },
  {
    name: 'Crash Courses',
    audience: 'Pre-exam revision',
    detail: 'Short, high-intensity revision blocks for JEE and NEET in the final weeks before the exam.'
  },
  {
    name: 'Board Preparation Programs',
    audience: 'Class 10 & 12',
    detail: 'Board-focused practice, answer-writing technique and previous-year paper analysis.'
  },
  {
    name: 'Olympiad & NTSE Preparation',
    audience: 'Class 6–10',
    detail: 'Problem sets designed for students aiming at Olympiads and NTSE alongside their regular syllabus.'
  },
  {
    name: 'Test Series',
    audience: 'All programs',
    detail: 'Study Series and Achiever Series tests, with performance tracking and analysis after every test.'
  }
];

const otherServices = [
  'Home Tuition Programs',
  'Career Guidance & Mentorship',
  'Doubt Solving Sessions',
  'Online & Offline Classes'
];

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="A program for every stage — Foundation to final revision"
        description="From Class 5 Foundation batches to NEET and JEE droppers, every VACIIT program is built around regular testing and personal mentoring."
      />

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <div key={course.name} className="rounded-xl border border-violet-100 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-magenta-600">
                {course.audience}
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-violet-900">
                {course.name}
              </p>
              <p className="mt-2 text-sm text-ink/70">{course.detail}</p>
              <a
                href={whatsappLink(`courses page — ${course.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-green-700 hover:underline"
              >
                Ask about this program on WhatsApp →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-violet-50">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="font-display text-2xl font-semibold text-violet-900">
            Also available
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {otherServices.map((service) => (
              <span
                key={service}
                className="rounded-full border border-violet-200 bg-white px-4 py-2 text-sm text-ink/80"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      <EnquiryCTA context="courses page" />
    </>
  );
}
