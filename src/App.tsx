import { useState } from 'react';

import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [username, setUserName] = useState('');

  return (
    <>
      <Header />
      <main className="flex flex-col items-center mx-auto max-w-6-xl px-8 py-10 justify-center">
        <Search userName={username} setUserName={setUserName} />
      </main>
    </>
  );
}

export default App;
