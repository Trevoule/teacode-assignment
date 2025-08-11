import { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';

import { SearchIcon } from './SearchIcon';
import type { SearchFormProps } from './types';

const Search = ({ userName, setUserName }: SearchFormProps) => {
  const [inputValue, setInputValue] = useState(userName);

  useEffect(() => {
    setInputValue(userName);
  }, [userName]);

  const debouncedSearch = useMemo(
    () => debounce((value: string) => setUserName(value), 500),
    [setUserName]
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
      <label htmlFor="search">
        <SearchIcon />
      </label>
      <input
        className="flex-grow focus:outline-0"
        id="search"
        type="text"
        value={inputValue}
        onChange={handleUserSearch}
        placeholder="Search users..."
      />
    </div>
  );
};

export default Search;
