'use client';

import { Input } from '@/components/ui/input';
import { parseAsString, useQueryState } from 'nuqs';
import { useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';

const KEYS = ['ctrl+k', 'meta+k'];

type Props = {
  count: number;
};

const ListSearch = ({ count }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useQueryState('q', parseAsString.withDefault(''));

  useHotkeys(KEYS, () => inputRef.current?.focus());

  return (
    <div className="relative">
      <Input
        ref={inputRef}
        placeholder={`Search ${count} icons...`}
        value={search ?? ''}
        onChange={(e) => setSearch(e.target.value)}
      />
      <kbd className="pointer-events-none absolute right-2 top-1/2 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 -translate-y-1/2">
        <span className="text-xs">⌘</span>K
      </kbd>
    </div>
  );
};

export { ListSearch };
