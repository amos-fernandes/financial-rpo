import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinancePro | E-books de Finanças + AgentIA",
  description: "Transforme sua vida financeira com e-books premium e automação de marketing via IA.",
  metadataBase: new URL('https://financial-rpo.vercel.app'),
  openGraph: {
    title: "FinancePro",
    description: "Conhecimento que gera riqueza.",
    images: ['/og-image.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased`}>
        {children}
      </body>
    </html>
  );
}
