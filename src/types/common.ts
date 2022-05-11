export type BaseModel = {
  id: number;
  createdAt: string;
  updatedAt: string;
}

export type UserType = BaseModel & {
  username: number;
  email: string;
  password: string;
}
