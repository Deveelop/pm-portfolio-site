'use client'
import HeroPage from "@/app/home/page";
import Projects from "@/app/projects/page";
import ContactPage from "@/app/contact/page";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { AppProvider } from "@/context/AppContext";
import { AppProps } from "next/app";
export default function Home() {
  return (
    <AppProvider>
      <HeroPage/>
      <Projects/>
      <ContactPage/>
    </AppProvider>
  );
}
