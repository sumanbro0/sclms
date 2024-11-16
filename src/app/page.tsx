"use client";

import { Title } from "rizzui";
import ProjectDashboard from "../shared/project-dashboard";
import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data } = useSession();
  console.log(data);
  redirect("/auth/sign-in-1");
  return <>Hello world</>;
}
