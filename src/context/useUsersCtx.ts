import { useContext } from 'react';

import { UsersDataCtx, UsersActionCtx } from './usersCtx';

export const useUsersDataCtx = () => {
  const context = useContext(UsersDataCtx);

  if (!context) throw new Error('Context is not available');

  return context;
};

export const useUsersActionsCtx = () => {
  const context = useContext(UsersActionCtx);

  if (!context) throw new Error('Context is not available');

  return context;
};
