"use client";

import { Amplify } from "aws-amplify";

Amplify.configure(
  {
    Auth: {
      Cognito: {
        identityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID!,
        allowGuestAccess: false, // set to true if you want to allow unauthenticated access
      },
    },
  },
  {
    ssr: true,
  }
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
