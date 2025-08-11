import type { User } from '@/types';

import UserItem from './UserItem';

type UserListProps = { users: User[]; handleCheck: (id: number) => void };

const UserList = ({ users, handleCheck }: UserListProps) => {
  if (users?.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <ul className="w-full flex flex-col gap-2">
      {users.map((user) => (
        <li key={user.id}>
          <UserItem user={user} handleCheck={handleCheck} />
        </li>
      ))}
    </ul>
  );
};

export default UserList;
