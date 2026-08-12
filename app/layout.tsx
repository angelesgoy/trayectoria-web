import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sitios web para profesionales y comercios",
  description: "Una maqueta de sitio web para presentar servicios de diseño web.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={geist.variable}>{children}</body></html>;
}
