export interface ProtoUser {
  userName: string;
  passWord: string;
  image?: string;
}

export interface User extends ProtoUser {
  id: string;
  token: string;
}
