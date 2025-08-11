import React, { useMemo } from 'react';

import { type UseUsersType, useUsers } from '@/hooks/useUsers';

const UsersCtx = React.createContext<null | UseUsersType>(null);

const UsersProvider = ({ children, username }: { children: React.ReactNode; username: string }) => {
  const { loading, error, users, handleCheck } = useUsers({ username });

  const value = useMemo(
    () => ({
      users,
      handleCheck,
      loading,
      error
    }),
    [users, handleCheck, loading, error]
  );

  return <UsersCtx.Provider value={value}>{children}</UsersCtx.Provider>;
};

export { UsersCtx, UsersProvider };
