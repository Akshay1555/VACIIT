# VACIIT Website

A Next.js (App Router) website for VACIIT — Vidyotama Ashram Classes, an IIT-JEE
and NEET coaching institute in Kharghar, Navi Mumbai.

## What's included

- **Home** — hero, stats, program overview, why-choose-us
- **About** — institute story and founder profile
- **Courses** — all programs (Foundation, JEE, NEET, Crash Courses, Test Series, etc.)
- **Faculty** — founder/mentor profile
- **Gallery** — classroom and student photos
- **Results** — placeholder section, ready for topper data
- **Admission** — enquiry form that opens WhatsApp pre-filled with the student's details
- **Contact** — Google Maps embed, address, phone, email, WhatsApp
- **Privacy Policy** and **Terms & Conditions**

Every page has a WhatsApp and Call icon in the header and a floating
WhatsApp/Call button in the bottom-right corner, so an enquiry is always one
tap away. All "Enquire" buttons open `wa.me` with a pre-filled message tagged
with the page it came from, so you know where each lead originated.

**Not included yet (mentioned in the brief but need more input to build):**
Blog, Scholarship Test page, and a dedicated Career Counselling page — these
were folded into About/Admission for now. Send over the content and they can
be added as their own pages. Facebook/Instagram/YouTube/LinkedIn links are
also left as placeholders in `lib/site.js` until you share the handles.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Editing contact details

All phone numbers, WhatsApp number, email addresses and the office address
are in **`lib/site.js`** — edit them there and they update across every page,
the floating buttons, and the footer.

## Editing the map

`lib/site.js` also has `mapsEmbedSrc` (used for the embedded map on the
Contact page) and `mapsLink` (used for "Get directions" links). Replace these
with an exact Google Maps share link once you've pinned the precise location
in Google Maps, for the most accurate marker.

## Images

All images live in `public/images/`:
- `logo.jpg` — VAC logo
- `founder-formal.jpg` — founder, formal headshot
- `founder-institute.jpg` — founder, institute photo
- `poster.jpg` — admissions poster
- `classroom-group.jpg`, `student-reading.jpg`, `student-notes.jpg` — classroom photos

Swap any of these files (keeping the same name) to update images across the
site, or add new ones and reference them in the relevant page/component.

## Deploying

This is a standard Next.js app — it deploys directly to Vercel, or any host
that supports Next.js (`npm run build && npm start`).
