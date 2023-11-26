enum Role {
  ADMIN = "admin",
  USER = "user",
}

export type TUser = {
  id: number;
  name: string;
  role: Role;
  password: string;
};

const admin: TUser = {
  id: 1,
  name: "admin",
  role: Role.ADMIN,
  password: "admin",
};

const user: TUser = {
  id: 2,
  name: "user",
  role: Role.USER,
  password: "user",
};

export const users: TUser[] = [admin, user];
