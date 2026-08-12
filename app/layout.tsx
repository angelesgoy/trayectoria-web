import type { Metadata } from "next";
import { Chivo, Manuale } from "next/font/google";
import "./globals.css";

const chivo = Chivo({ variable: "--font-chivo", subsets: ["latin"] });
const manuale = Manuale({ variable: "--font-manuale", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trayectoria — Presencia digital para profesionales",
  description: "Hacemos visible lo que construiste.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className={`${chivo.variable} ${manuale.variable}`}>{children}</body></html>;
}
