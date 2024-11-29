'use client'
import HeroPage from "@/app/home/page";
import Projects from "@/app/projects/page";
import ContactPage from "@/app/contact/page";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Nav/>
      <HeroPage/>
      <Projects/>
      <ContactPage/>
    
    </>
  );
}
