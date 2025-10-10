import { Metadata } from "next";
import CreateNote from "./CreateNote";

export const metadata: Metadata = {
  title: "Create Note — NoteHub",
  description: "Start writing a new note or save a draft in NoteHub.",
  openGraph: {
    title: "Create Note — NoteHub",
    description: "Start writing a new note or save a draft in NoteHub.",
    url: `https://08-zustand-topaz-eight.vercel.app/notes/action/create`,
    siteName: 'NoteHub',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: "NoteHub Create Note Page",
      },
    ],
  },
};

export default function CreateNotePage() {
  return <CreateNote />;
}