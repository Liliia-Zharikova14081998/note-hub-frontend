import { fetchNotes } from '../../../../lib/api';
import { HydrationBoundary, dehydrate, QueryClient } from '@tanstack/react-query';  
import NotesClient from './Notes.client';
import type { NotesFilterPageProps } from '../../../../types/params';
import { Metadata } from 'next';

export async function generateMetadata({ params }: NotesFilterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = slug?.[0] ?? "All";
  return {
    title: `Notes - ${tag}`,
    description: `A collection of notes tagged with ${tag}.`,
    openGraph: {
      title: `Notes - ${tag}`,
      description: `A collection of notes tagged with ${tag}.`,
      url: `https://notehub.com`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: "NoteHub application preview",
        },
      ],
    },
  };
}

export default async function NotesPage({ params }: NotesFilterPageProps) {
  const { slug } = await params;
  const queryClient = new QueryClient();
  const tag = slug?.[0] ?? "";
  const normalizedTag = tag === "All" ? "" : tag;
 
  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, normalizedTag, ""],
    queryFn: () => fetchNotes(1, normalizedTag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient initialTag={normalizedTag}/>
    </HydrationBoundary>
  )
}