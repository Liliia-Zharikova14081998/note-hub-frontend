import { create } from "zustand";
import type { CreateNoteData } from "../../types/note";
import { persist } from "zustand/middleware";

type NoteDraftStore = {
    draft: CreateNoteData;
    setDraft: (note: CreateNoteData) => void;
    clearDraft: () => void;
}

const initialDraft: CreateNoteData = {
    title: "",
    content: "",
    tag: "",
}

export const useNoteDraftStore = create<NoteDraftStore>()(persist((set) => ({
    draft: initialDraft,
    setDraft: (note: CreateNoteData) => set(() => ({ draft: note })),
    clearDraft: () => set(() => ({ draft: initialDraft })),
}),
{
    name: "note-draft-storage",
    partialize: (state) => ({ draft: state.draft }),
},
),
);
