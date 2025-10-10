"use client";

import css from "./NoteForm.module.css"
import { createNote } from "../../lib/api";
import type { CreateNoteData } from "../../types/note";
import Link from "next/link";
import { useNoteDraftStore } from "../../lib/store/noteStore";
import { useMutation } from '@tanstack/react-query';
import { useRouter } from "next/navigation";



export default function NoteForm() {
const router = useRouter();
 
const { draft, setDraft, clearDraft } = useNoteDraftStore();

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,) => {
    setDraft({ ...draft, [e.target.name]: e.target.value });
  };

  const createNoteMutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {
      clearDraft();
      router.back();   
    },
  });

  const handleSubmit = (formData: FormData) => {
    const values = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      tag: (formData.get("tag") as string) || undefined,
    } as CreateNoteData;
    createNoteMutation.mutate(values);
  } 

const handleCancel = () => router.back();  

  return (
    <form action={handleSubmit}
      className={css.form}
    >
        <div className={css.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
          className={css.input}
          defaultValue={draft.title}
          onChange={handleChange}
            required
          />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            className={css.textarea}
          rows={8}
          defaultValue={draft.content}
          onChange={handleChange}
            required>
            </textarea>
      </div>
      
        <div className={css.formGroup}>
          <label htmlFor="tag">Tag</label>
          <select
            id="tag"
            name="tag"
            className={css.select}
            defaultValue={draft.tag}
            onChange={handleChange}
            required
          >
            <option value="">Select a tag</option>
            <option value="Todo">Todo</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Meeting">Meeting</option>
            <option value="Shoping">Shoping</option>
          </select>
      </div>

        <div className={css.actions}>
          <Link href="/notes/filter/All" onClick={handleCancel} className={css.cancelButton}>
            Cancel
          </Link>
          <button
            type="submit"
            className={css.submitButton}
            disabled={createNoteMutation.isPending}
          >
            {createNoteMutation.isPending ? 'Creating...' : 'Create Note'}
          </button>
      </div>
      {createNoteMutation.isError && (
        <p className={css.error}>Error creating note. Please try again.</p>
      )}
    </form>
  );
}