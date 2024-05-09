export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
};

export type CreateUserParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
};
