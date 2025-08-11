export type ApiError = {
  message: string;
  code?: string;
};

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  checked: boolean;
};
