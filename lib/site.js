// Single place to edit contact details, address and shared copy.
// Update these values if the phone numbers, email or address ever change.

export const site = {
  name: 'VACIIT',
  fullName: ' VAC IIT JEE NEET ',
  tagline: 'Your First Step Into IIT & Medical',
  founder: 'Vinayak Prasad',
  founderTitle: 'Founder & Academic Mentor',
  phonePrimary: '7903370914',
  phoneSecondary: '9892590914',
  whatsappNumber: '917903370914', // country code + number, no +/spaces
  email1: 'admin@vaciit.com',
  email2: 'info@vaciit.com',
  addressLines: [
    'Kusum Niwas, Plot No. 14-C,',
    'Sector 35-D,',
    'Kharghar, Navi Mumbai, Maharashtra – 410210'
  ],
  areas: ['Kharghar', 'Belapur', 'Kamothe'],
  mapsEmbedSrc:
    'https://maps.google.com/maps?q=Kusum%20Niwas%2C%20Sector%2035-D%2C%20Kharghar%2C%20Navi%20Mumbai&t=&z=15&ie=UTF8&iwloc=&output=embed',
  mapsLink:
    'https://www.google.com/maps/search/?api=1&query=Kusum+Niwas+Sector+35-D+Kharghar+Navi+Mumbai'
};

// Builds a wa.me deep link that opens WhatsApp with a pre-filled enquiry
// message. Pass a page name so every enquiry tells the team where it came from.
export function whatsappLink(context = 'the website') {
  const message = `Hi VACIIT, I would like to enquire about your courses. (via ${context})`;
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function callLink(number = site.phonePrimary) {
  return `tel:+91${number}`;
}

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/results', label: 'Results' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/admission', label: 'Admission' },
  { href: '/contact', label: 'Contact' }
];
