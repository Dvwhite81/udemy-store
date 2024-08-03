'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '@/components/ui/input';

export default function NavSearch() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get('search')?.toString() || ''
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }

    replace(`/products?${params.toString()}`);
  }, 300);

  const searched = searchParams.get('search');

  useEffect(() => {
    if (!searched) {
      setSearch('');
    }
  }, [searched]);

  return (
    <Input
      className="max-w-xs dark:bg-muted"
      type="search"
      value={search}
      onChange={({ target }) => {
        setSearch(target.value);
        handleSearch(target.value);
      }}
      placeholder="search products..."
    />
  );
}
