
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Portfolio App",
  description: "Developed by Victor Abuka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
