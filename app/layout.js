import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

export const metadata = {
  title: 'VACIIT — IIT-JEE & NEET Coaching in Kharghar, Navi Mumbai',
  description:
    'VACIIT (Vidyotama Ashram Classes) offers IIT-JEE, NEET, Foundation, Olympiad and Board exam coaching in Kharghar, Belapur and Kamothe, Navi Mumbai. Book a free demo class today.',
  keywords: [
    'VACIIT',
    'IIT JEE coaching Kharghar',
    'NEET coaching Navi Mumbai',
    'Foundation classes Kharghar',
    'Vidyotama Ashram Classes'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
