import React, { useMemo } from 'react';

import { type UseUsersType, useUsers } from '@/hooks/useUsers';

const UsersDataCtx = React.createContext<null | Omit<UseUsersType, 'handleCheck'>>(null);
const UsersActionCtx = React.createContext<null | Pick<UseUsersType, 'handleCheck'>>(null);

const UsersProvider = ({ children, username }: { children: React.ReactNode; username: string }) => {
  const { loading, error, users, handleCheck } = useUsers({ username });

  const dataValue = useMemo(
    () => ({
      users,
      loading,
      error
    }),
    [users, loading, error]
  );

  const actionsValue = useMemo(
    () => ({
      handleCheck
    }),
    [handleCheck]
  );

  return (
    <UsersDataCtx.Provider value={dataValue}>
      <UsersActionCtx.Provider value={actionsValue}>{children}</UsersActionCtx.Provider>
    </UsersDataCtx.Provider>
  );
};

export { UsersActionCtx, UsersDataCtx, UsersProvider };
