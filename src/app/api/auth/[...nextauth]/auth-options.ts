import { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import CognitoProvider from "next-auth/providers/cognito";
import { env } from '@/env.mjs';
import isEqual from 'lodash/isEqual';
import { pagesOptions } from './pages-options';

export const authOptions: NextAuthOptions = {
  pages: {
    ...pagesOptions,
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        // Include access token in session
        access_token: token.access_token,
        user: {
          ...session.user,
          id: token.idToken as string,
        },
      };
    },
    async jwt({ token, user, account }) {
      if (account) {
        // Handle initial sign-in
        token.access_token = account.access_token;
        token.idToken = account.id_token;
      }
      if (user) {
        // Include user details in token
        token.user = user;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {},
      async authorize(credentials: any) {
        const user = {
          id: '1', // Added id field
          email: 'admin@admin.com',
          password: 'admin',
        };

        if (
          isEqual(user, {
            email: credentials?.email,
            password: credentials?.password,
          })
        ) {
          return user as any;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID || '',
      clientSecret: env.GOOGLE_CLIENT_SECRET || '',
      allowDangerousEmailAccountLinking: true,
    }),
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID!,
      clientSecret: process.env.COGNITO_CLIENT_SECRET!,
      issuer: process.env.COGNITO_ISSUER,
    })
  ],
};