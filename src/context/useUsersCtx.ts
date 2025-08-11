import { useContext } from 'react';

import { UsersCtx } from './usersCtx';

export const useUsersCtx = () => {
  const context = useContext(UsersCtx);

  if (!context) throw new Error('Context is not available');

  return context;
};
