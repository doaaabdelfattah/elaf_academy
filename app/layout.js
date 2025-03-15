import { Outfit, Ovo, Prata } from "next/font/google";
import './globals.css'
import { PrimeReactProvider } from 'primereact/api';
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

const prata = Prata({
  subsets: ["latin"],
  weight: ["400"]
}
)


export const metadata = {
  title: "Elaf Academy | Online Quran Classes",
  description:
    "FJoin Elaf Academy for expert-led online Quran recitation, memorization, and Islamic studies.",
  keywords:
    "Quran, Tajweed, Hifz, Islamic studies, learn Quran online",
  authors: [{ name: "Elaf Academy" }],
  icons: {
    icon: "/favicon.png",

  },
  openGraph: {
    title: "Elaf Academy | Online Quran & Islamic Studies",
    description:
      "Join Elaf Academy for expert-led Quran recitation, memorization, and Islamic studies, accessible online for students worldwide.",
    url: "https://elaf-academy.com",
    siteName: "Elaf Academy",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} ${prata.className} antialiased leading-8`}
      >
        <PrimeReactProvider>

          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
