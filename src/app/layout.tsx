import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: "https://cdn.discordapp.com/attachments/1166821043743236218/1194009838196359228/nettasec-icon.png?ex=65ef64d1&is=65dcefd1&hm=2d5bb4b2ba1bdfa55657b19906dbc317c835680b21a89cbbb7fd107d1bcfe8e4&",
  title: "NettaSec Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}{" "}
        <footer className="fixed bottom-0 w-full bg-transparent text-neutral-500 p-4 text-center">
          <p>
            ©2024 <span className="text-[#a44246] font-bold">NettaSec Solutions</span>
          </p>
        </footer>
        <Toaster />

      </body>
    </html>
  );
}
