import { useCallback, useEffect, useMemo, useState } from 'react';

import type { ApiError, User } from '@/types';
import { sortByLastName } from '@/utils';

const API_URL = 'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json';

const useUsers = ({ username }: { username: string }) => {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ApiError | null>(null);

  const fetchUsers = useCallback(async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const response: Response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: User[] = await response.json();

      const dataWithChecked = data.map((item) => ({
        ...item,
        checked: false
      }));

      setData(dataWithChecked);
    } catch (error) {
      setError({
        message: error instanceof Error ? error.message : 'Failed to fetch user'
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const users: User[] | undefined = useMemo(() => {
    if (loading || error) return undefined;

    let result = data;

    if (username) {
      result = data.filter((user) => {
        const searchUserName = `${user.first_name} ${user.last_name}`;
        return searchUserName.toLowerCase().includes(username.toLowerCase());
      });
    }

    return sortByLastName(result);
  }, [loading, error, data, username]);

  const handleCheck = useCallback((id: number) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  }, []);

  const checkedUsers = useMemo(
    () => data.filter((user) => user.checked).map((user) => user.id),
    [data]
  );

  useEffect(() => {
    console.log(checkedUsers);
  }, [checkedUsers]);

  return { loading, error, users, handleCheck };
};

export default useUsers;
