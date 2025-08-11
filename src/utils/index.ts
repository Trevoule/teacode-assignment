import type { User } from '@/types';

export function sortByLastName(users: User[]) {
  return [...users].sort((a, b) => a.last_name.localeCompare(b.last_name));
}
