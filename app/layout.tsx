import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins', });
export const metadata: Metadata = {
  title: "Sthiba Events",
  description: "A plartfom for Sthiba Events, event management.",
  icons: {
    icon: '' 
  }
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
       <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>

  );
}
