import { useState } from 'react';

import SearchInput from './components/layout/SearchInput';
import Header from './components/layout/Header';
import Contacts from './components/user/Contacts';

function App() {
  const [username, setUserName] = useState('');

  return (
    <>
      <Header />
      <main className="flex flex-col items-center mx-auto max-w-6-xl px-8 py-10 justify-center">
        <SearchInput value={username} onChange={setUserName} />
        <Contacts username={username} />
      </main>
    </>
  );
}

export default App;
