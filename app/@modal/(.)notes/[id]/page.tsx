import NotePreview from "@/app/@modal/(.)notes/[id]/NotePreview.client";
import type { NoteDetailsPageProps } from "@/types/params";
import { fetchNoteById } from "@/lib/api/serverApi";
import { HydrationBoundary, dehydrate, QueryClient } from "@tanstack/react-query";
import { Metadata } from "next";

export async function generateMetadata({ params }: NoteDetailsPageProps): Promise<Metadata> {
    const { id } = await params;
    const note = await fetchNoteById(id);
    return {
        title: `Preview: ${note.title}`,
        description: note.content.slice(0, 30) || "Preview of your note in NoteHub.",
    };
}


export default async function NotePreviewPage({ params }: NoteDetailsPageProps) {
    const { id } = await params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ["note", id],
        queryFn: () => fetchNoteById(id),
    });
   
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotePreview />
        </HydrationBoundary>
    )
}



