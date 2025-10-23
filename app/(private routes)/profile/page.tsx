import ProfilePage from "./ProfilePage";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Profile Page - NoteHub",
    description: "View and edit your user profile in NoteHub.",
    openGraph: {
      title: "Profile Page - NoteHub",
      description: "View and edit your user profile in NoteHub.",
      url: `https://08-zustand-topaz-eight.vercel.app/profile`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: "NoteHub Profile Page",
        },
      ],
    },
  };

export default ProfilePage;  