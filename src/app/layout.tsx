import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "../components/ReactQueryProvider";
import { PlanProvider } from "../contexts/PlanContext";
import { TaskProvider } from "../contexts/TaskContext";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pamela UI Prototype",
  description: "Side-car demo for Pamela Integrator Agent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} bg-neutral-900 text-neutral-100 antialiased`}>
        <ReactQueryProvider>
          <PlanProvider>
            <TaskProvider>
              {children}
            </TaskProvider>
          </PlanProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
