'use client';

import { useState } from 'react';
import PageHero from '../../components/PageHero';
import { site } from '../../lib/site';

const programs = [
  'Foundation (Class 5–10)',
  'IIT-JEE Main + Advanced',
  'NEET UG — One-Year Program',
  'NEET UG — Two-Year Program',
  'Crash Course',
  'Test Series',
  'Board Preparation',
  'Olympiad / NTSE'
];

export default function AdmissionPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    studentClass: '',
    program: programs[0],
    message: ''
  });

  function update(field) {
    return (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const lines = [
      'New admission enquiry from the website:',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Class/Year: ${form.studentClass}`,
      `Program: ${form.program}`,
      form.message ? `Message: ${form.message}` : null
    ].filter(Boolean);

    const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
      lines.join('\n')
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <>
      <PageHero
        eyebrow="Admission"
        title="Admissions Open 2026–27"
        description="Fill in a few details and it opens straight into WhatsApp so our team can reply to you personally."
      />

      <section className="mx-auto max-w-2xl px-5 py-14">
        <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-violet-100 p-8">
          <div>
            <label className="text-sm font-medium text-ink/80" htmlFor="name">
              Student name
            </label>
            <input
              id="name"
              required
              value={form.name}
              onChange={update('name')}
              className="mt-1 w-full rounded-md border border-violet-200 px-3 py-2 outline-none focus:border-magenta-500"
              placeholder="Full name"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-ink/80" htmlFor="phone">
              Phone number
            </label>
            <input
              id="phone"
              required
              type="tel"
              value={form.phone}
              onChange={update('phone')}
              className="mt-1 w-full rounded-md border border-violet-200 px-3 py-2 outline-none focus:border-magenta-500"
              placeholder="10-digit mobile number"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-ink/80" htmlFor="studentClass">
              Current class / year
            </label>
            <input
              id="studentClass"
              value={form.studentClass}
              onChange={update('studentClass')}
              className="mt-1 w-full rounded-md border border-violet-200 px-3 py-2 outline-none focus:border-magenta-500"
              placeholder="e.g. Class 11, or Dropper"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-ink/80" htmlFor="program">
              Program interested in
            </label>
            <select
              id="program"
              value={form.program}
              onChange={update('program')}
              className="mt-1 w-full rounded-md border border-violet-200 bg-white px-3 py-2 outline-none focus:border-magenta-500"
            >
              {programs.map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-ink/80" htmlFor="message">
              Anything else you'd like us to know (optional)
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={update('message')}
              rows={3}
              className="mt-1 w-full rounded-md border border-violet-200 px-3 py-2 outline-none focus:border-magenta-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-green-600 px-6 py-3 text-sm font-medium text-white hover:bg-green-700"
          >
            Send enquiry on WhatsApp
          </button>
          <p className="text-center text-xs text-ink/50">
            Or call us directly at {site.phonePrimary} / {site.phoneSecondary}
          </p>
        </form>
      </section>
    </>
  );
}
