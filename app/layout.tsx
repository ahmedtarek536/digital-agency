import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "./components/locale-provider";

export const metadata: Metadata = {
  title: "NEXORA — Turning Ideas Into Digital Growth",
  description:
    "An independent digital growth partner based in Cairo, Egypt. We bring strategy, creativity and technology together to build what’s next.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body><LocaleProvider>{children}</LocaleProvider></body>
    </html>
  );
}
