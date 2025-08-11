import { useState } from 'react';

import { SearchIcon } from './SearchIcon';
import type { SearchFormProps } from './types';

const Search = ({ userName, setUserName }: SearchFormProps) => {
  const [text, setText] = useState(userName);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!text) return;

    setUserName(text);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-5/10 flex flex-grow items-center gap-x-2 py-2 px-4 border-2 border-gray-200 rounded-xl">
      <label htmlFor="search">
        <SearchIcon />
      </label>
      <input
        className="flex-grow focus:outline-0"
        id="search"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default Search;
