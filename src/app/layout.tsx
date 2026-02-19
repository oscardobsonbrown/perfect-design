import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import { UmamiScript } from "@/components/umami-script";
import { Agentation } from "agentation";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Perfect Design",
  description: "A Next.js application with Neon DB, Umami analytics, and Better Auth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <UmamiScript />
      </head>
      <body
        className={`${publicSans.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "development" && (
          <Agentation endpoint="http://localhost:4747" />
        )}
      </body>
    </html>
  );
}
