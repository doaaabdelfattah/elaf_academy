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
  title: "elaf academy",
  description: "",
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
