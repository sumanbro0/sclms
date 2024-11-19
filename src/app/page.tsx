"use client";

import { Title } from "rizzui";
import ProjectDashboard from "../shared/project-dashboard";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { getRole } from "@/cognito/login";
import { routes } from "@/config/routes";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "packages/isomorphic-core/src/ui/file-upload/upload-zone";

// const LoadingSpinner = () => (
//   <div className="flex items-center justify-center h-screen">
//     <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"></div>
//   </div>
// );

export default function HomePage() {
  const { status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") {
      return; // Wait until the session status is determined
    }

    const role = getRole();

    if (status === "authenticated") {
      if (role === "admin" || role === "teacher") {
        router.push(routes.admin.dashboard);
      } else if (role === "parent") {
        router.push(routes.parent.summary);
      } else {
        router.push(routes.auth.signIn1); // Fallback if role is not found
      }
    } else {
      router.push(routes.auth.signIn1);
    }

    setIsLoading(false);
  }, [status, router]);

  if (isLoading || status === "loading") {
    return <LoadingSpinner />;
  }

  return <LoadingSpinner />;
}
