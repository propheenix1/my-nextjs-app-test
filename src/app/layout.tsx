import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import SessionProvider from "./SessionProvider";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <SessionProvider>
    <html>
      <body>
        <Header />
        <div className="container mx-auto px-0 sm:px-0 lg:px-24">
        {children}
        </div>
      </body>
    </html>
    </SessionProvider>
  );
}
