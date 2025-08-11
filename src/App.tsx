import { useState } from 'react';

import Search from './components/SearchInput';
import Header from './components/layout/Header';
import useUsers from './hooks/useUsers';
import UserList from './components/user/UserList';

function App() {
  const [username, setUserName] = useState('');
  const { users, handleCheck, loading, error } = useUsers({ username });

  return (
    <>
      <Header />
      <main className="flex flex-col items-center mx-auto max-w-6-xl px-8 py-10 justify-center">
        <Search value={username} onChange={setUserName} />
        <div className="w-8/10 my-4 flex flex-col items-center justify-center">
          {loading && <p>Loading...</p>}
          {error && <p>{error.message}</p>}
          {users && <UserList users={users} handleCheck={handleCheck} />}
        </div>
      </main>
    </>
  );
}

export default App;
