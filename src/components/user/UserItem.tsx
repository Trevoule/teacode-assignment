import type { User } from '@/types';

interface UserItemProps {
  user: User;
  handleCheck: (id: number) => void;
}

const UserItem = ({ user, handleCheck }: UserItemProps) => {
  const { id, first_name, last_name, avatar, email, checked } = user;

  const renderAvatar = () => {
    if (avatar) {
      return <img src={avatar} alt="" className="h-14 w-14 rounded-full" />;
    } else {
      return (
        <div className="text-lg text-center">
          {first_name.slice(0, 1)} {last_name.slice(0, 1)}
        </div>
      );
    }
  };

  return (
    <div className="h-20 flex-grow flex p-2 gap-x-5 items-center border-1 border-white bg-gray-200 rounded-md shadow-xs">
      <div className="h-15 w-15 bg-white  border-1 border-white rounded-full">{renderAvatar()}</div>
      <div className="flex flex-col gap-y-1">
        <p className="text-xl">
          {first_name} {last_name}
        </p>
        <p>{email}</p>
        <p></p>
      </div>
      <div>
        <input
          type="checkbox"
          id="checked"
          name="checked"
          checked={checked}
          onChange={() => handleCheck(id)}
        />
      </div>
    </div>
  );
};

export default UserItem;
