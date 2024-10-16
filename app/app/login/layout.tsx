import type { Metadata } from "next";
import "../globals.css";
import { nunito_font } from "@/Fonts";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito_font.className} antialiased bg-[#31473a] text-black`}
      >
        {children}
      </body>
    </html>
  );
}
