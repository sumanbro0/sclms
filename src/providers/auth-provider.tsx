"use client";

import { getRole, userRoleAtom } from "@/cognito/login";
import { routes } from "@/config/routes";
import { useAtom } from "jotai";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

// Define public routes that don't require authentication
const publicRoutes = [
  routes.auth.signIn1,
  routes.auth.signUp1,
  routes.auth.forgotPassword1,
];

export function RestrictedAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [userRole, setRole] = useAtom(userRoleAtom);
  useEffect(() => {
    const role = getRole();
    console.log(role);
    // Don't do anything while authentication is still loading
    if (status === "loading") return;

    // Check if current route is public
    const isPublicRoute = publicRoutes.includes(pathname);

    // If user is not authenticated and trying to access protected route
    if (!session && !isPublicRoute) {
      router.push(routes.auth.signIn1); // or your custom login route
      return;
    }

    // If user is authenticated and trying to access public route (like login)
    if (session && isPublicRoute) {
      console.log(userRole);
      if (role === "admin" || role === "teacher") {
        router.push(routes.admin.dashboard); // or your custom dashboard route
      } else {
        router.push(routes.parent.summary); // or your custom dashboard route
      }
      return;
    }
  }, [session, status, pathname, router, userRole]);

  // Show loading state while checking authentication
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
      </div>
    );
  }

  return <>{children}</>;
}
