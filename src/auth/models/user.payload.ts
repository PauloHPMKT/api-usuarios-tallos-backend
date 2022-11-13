export interface UserPayload {
  sub: string;
  name: string;
  email: string;
  //roles: string;
  iat?: number; // é acessável do payload
  exp?: number;
}
