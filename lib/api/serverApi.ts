import { api } from "./api";
import type { Note } from "../../types/note";
import type { PaginatedNotes } from "../../types/pagination";
import { cookies } from "next/headers";
import type { User } from "@/types/user";


export async function fetchNotes(page: number = 1, tag: string = "", search: string = "", perPage: number = 12): Promise<PaginatedNotes> {
  const cookieStore = await cookies();  
  const params: Record<string, string | number> = { page, perPage };
    if (tag) params.tag = tag;
    if (search) params.search = search;
  const response = await api.get<PaginatedNotes>("/notes", {
    params,
    headers: {
        Cookie: cookieStore.toString(),
      }
     });
    return response.data;
}

export async function fetchNoteById(id: string): Promise<Note>{
  const cookieStore = await cookies();
  const response = await api.get<Note>(`/notes/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    }
  });
  return response.data;
};

export async function getMe() {
  const cookieStore = await cookies();
  const { data } = await api.get<User>(`/users/me`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
}

export async function checkSession() {
  const cookieStore = await cookies();
  const response = await api.get(`/auth/session`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return response;
}