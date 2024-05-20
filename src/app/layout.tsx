"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "@/context/UserContext";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <body className={inter.className}>{children}</body>
        </QueryClientProvider>
      </UserProvider>
    </html>
  );
}
