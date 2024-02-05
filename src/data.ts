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
  name: "Sanechka",
  role: Role.ADMIN,
  password: "Sanechka",
};

const user: TUser = {
  id: 2,
  name: "Vanechka",
  role: Role.USER,
  password: "Vanechka",
};

export const users: TUser[] = [admin, user];
