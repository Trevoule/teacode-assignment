import { useUsersCtx, UsersProvider } from '@/context';
import UserList from './UserList';

const ContactsWithContext = () => {
  const { loading, error, users } = useUsersCtx();

  return (
    <div className="w-8/10 my-4 flex flex-col items-center justify-center">
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {users && <UserList users={users} />}
    </div>
  );
};

const Contacts = ({ username }: { username: string }) => {
  return (
    <UsersProvider username={username}>
      <ContactsWithContext />
    </UsersProvider>
  );
};

export default Contacts;
