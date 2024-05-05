interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
}

interface CreateUserParams {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface UpdateUserParams {
  firstName: string;
  lastName: string;
}
