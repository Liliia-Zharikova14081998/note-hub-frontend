import { api } from "./api";
import type { Note, CreateNoteData } from "../../types/note";
import type { PaginatedNotes } from "../../types/pagination";
import type { User } from "../../types/user";


export interface RegisterRequest {
  email: string
  password: string
}

export interface LoginRequest {
  email: string
  password: string
}

type CheckSessionRequest = {
  success: boolean;
}

export type UpdateMeRequest = {
  username?: string;
}

export async function fetchNotes(page: number = 1, tag: string = "", search: string = "", perPage: number = 12): Promise<PaginatedNotes> {
    const params: Record<string, string | number> = { page, perPage };
    if (tag) params.tag = tag;
    if (search) params.search = search;
    const response = await api.get<PaginatedNotes>("/notes", { params });
    return response.data;
}

export async function fetchNoteById(id: string): Promise<Note>{
  const response = await api.get<Note>(`/notes/${id}`);
  return response.data;
};

export async function createNote(data: CreateNoteData): Promise<Note> {
    const response = await api.post<Note>("/notes", data);
    return response.data;
}

export async function deleteNote(id: string): Promise<Note> {
    const response = await api.delete<Note>(`/notes/${id}`);
    return response.data;
}

export async function register(body: RegisterRequest): Promise<User> {
  const { data } = await api.post<User>(`/auth/register`, body);
  return data;
};

export async function login(body: LoginRequest): Promise<User> {
  const { data } = await api.post<User>(`/auth/login`, body);
  return data;
};

export async function logout() {
  await api.post(`/auth/logout`);
}

export async function checkSession() {
  const { data } = await api.get<CheckSessionRequest>(`/auth/session`);
  return data.success;
}

export async function getMe() {
  const { data } = await api.get<User>(`/users/me`);
  return data;
}

export async function updateMe(payload: UpdateMeRequest) {
  const { data } = await api.patch<User>(`/users/me`, payload);
  return data;
}