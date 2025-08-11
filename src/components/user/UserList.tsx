import type { User } from '@/types';

import UserItem from './UserItem';

const UserList = ({ users }: { users: User[] }) => {
  if (users?.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <ul className="w-full flex flex-col gap-2">
      {users.map((user) => (
        <li key={user.id}>
          <UserItem user={user} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
