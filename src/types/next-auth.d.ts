import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession['user'];
    access_token?: string;
  }

  interface User extends DefaultUser {
    id: string;
    access_token?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user?: User;
    idToken?: string;
    access_token?: string;
  }
}