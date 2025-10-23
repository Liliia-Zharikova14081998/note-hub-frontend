"use client"

import css from './NotesPage.module.css';

import { useState } from 'react';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { fetchNotes } from '../../../../../lib/api/clientApi';
import { useDebounce } from 'use-debounce';
import type { PaginatedNotes } from '../../../../../types/pagination';
import NoteList from '../../../../../components/NoteList/NoteList';
import SearchBox from '../../../../../components/SearchBox/SearchBox';
import Pagination from '../../../../../components/Pagination/Pagination';
import Link from 'next/link';

interface NotesClientProps {
    initialTag: string;
}

export default function NotesClient({ initialTag }: NotesClientProps) {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [debouncedSearch] = useDebounce(search, 500);

      const { data, isLoading, isError } = useQuery<PaginatedNotes>({
    queryKey: ['notes', page, initialTag, debouncedSearch],
    queryFn: () => fetchNotes(page, initialTag, debouncedSearch),
    placeholderData: keepPreviousData,
      });
    
    const handleSearch = (value: string) => {
  setSearch(value);
  setPage(1);
    }

      return (
    <div className={css.app}>
	<header className={css.toolbar}>
        <SearchBox value={search} onSearch={handleSearch} />
        {data && data.totalPages > 1 && (
          <Pagination
            currentPage={page}
            totalPages={data?.totalPages}
            onPageChange={setPage} />
        )}
        <Link href="/notes/action/create" className={css.button}>Create note +</Link>
        </header>
        <NoteList
          notes={data?.notes || []}
          isLoading={isLoading}
          isError={isError} />
</div> 
  );  
}
    
