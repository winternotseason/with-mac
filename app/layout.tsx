import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toy IN Mac OS",
  description: "토이프로젝트들을 MAC OS UI에 담았습니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
