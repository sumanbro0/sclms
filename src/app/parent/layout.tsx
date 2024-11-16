import type { Metadata } from "next";
import { inter, lexendDeca } from "@/app/fonts";
// import cn from "@core/utils/class-names";
// import NextProgress from "@core/components/next-progress";
import HydrogenLayout from "@/layouts/hydrogen/layout";
import { ThemeProvider, JotaiProvider } from "@/shared/theme-provider";
import GlobalDrawer from "@/shared/drawer-views/container";
import GlobalModal from "@/shared/modal-views/container";

import "../globals.css";
import cn from "packages/isomorphic-core/src/utils/class-names";
import NextProgress from "packages/isomorphic-core/src/components/next-progress";

export const metadata: Metadata = {
  title: "App Name",
  description: "Write your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <HydrogenLayout>{children}</HydrogenLayout>;
}
