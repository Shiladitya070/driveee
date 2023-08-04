import "./globals.css";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Driveee",
  description: "low level google drive clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="container mx-auto">
          <NavBar />
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
