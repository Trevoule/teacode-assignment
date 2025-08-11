import { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';

import { SearchIcon } from './SearchIcon';
import type { Input } from './types';

const SearchInput = ({
  value,
  onChange,
  placeholder = 'Search users...',
  id = 'search'
}: Input) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const debouncedSearch = useMemo(
    () => debounce((dValue: string) => onChange(dValue), 500),
    [onChange]
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleUserSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    debouncedSearch(value);
  };

  return (
    <div className="w-5/10 flex flex-grow items-center gap-x-2 py-2 px-4 border-2 border-gray-200 rounded-xl">
      <label htmlFor={id}>
        <SearchIcon />
      </label>
      <input
        className="flex-grow focus:outline-0"
        id={id}
        type="text"
        value={inputValue}
        onChange={handleUserSearch}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchInput;
