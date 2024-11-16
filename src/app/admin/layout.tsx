import type { Metadata, Viewport } from "next";
import { inter, lexendDeca } from "@/app/fonts";
import cn from "packages/isomorphic-core/src/utils/class-names";
import NextProgress from "packages/isomorphic-core/src/components/next-progress";
import BerylliumLayout from "@/layouts/beryllium/beryllium-layout";
import { ThemeProvider, JotaiProvider } from "@/shared/theme-provider";
import GlobalDrawer from "@/shared/drawer-views/container";
import GlobalModal from "@/shared/modal-views/container";

import "../globals.css";

export const metadata: Metadata = {
  title: "App Name",
  description: "Write your app description",
  keywords: ["keyword1", "keyword2", "keyword3"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name/Company",
  publisher: "Your Name/Company",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "App Name",
    description: "Write your app description",
    siteName: "App Name",
  },
};

// Separate viewport configuration
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <BerylliumLayout>{children}</BerylliumLayout>;
}
