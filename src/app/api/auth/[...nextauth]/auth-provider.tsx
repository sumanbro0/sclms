"use client";

import { RestrictedAuthProvider } from "@/providers/auth-provider";
import { SessionProvider } from "next-auth/react";

export default function AuthProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}): React.ReactNode {
  return (
    <SessionProvider session={session}>
      <RestrictedAuthProvider>{children}</RestrictedAuthProvider>
    </SessionProvider>
  );
}
