import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

const robo = Roboto({
  subsets: ["latin"],
  weight: ["400"], 

});

export const metadata: Metadata = {
  title: "Food panda",
  description: "food and grocery store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robo.className} >
        {children}
        <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>

      </body>
    </html>
  );
}
