import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "@/Provider/AuthProvider";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
    <html lang="en" data-theme='light'>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
     <div className="container mx-auto ">
      <Navbar></Navbar>
     <div className="min-h-[calc(100vh-455px)] mt-40 sm:mt-36 md:mt-32 lg:mt-28">
     {children}
     </div>
     </div>
     <Footer></Footer>
    </body>
  </html>
  </AuthProvider>
  );
}
