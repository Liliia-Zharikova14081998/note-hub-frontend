import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});


export const metadata: Metadata = {
  title: "NoteHub — Organize your thoughts easily",
  description: "Create, manage, and filter your personal notes in NoteHub.",
  openGraph: {
    title: "NoteHub — Organize your thoughts easily",
    description: "Create, manage, and filter your personal notes in NoteHub.",
    url: `https://notehub.com`,
    siteName: 'NoteHub',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: "NoteHub application preview",
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
       <TanStackProvider>
        <Header />
          <main>
            {modal}
            {children}
          </main>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}

