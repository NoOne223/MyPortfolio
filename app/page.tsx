import type { Metadata } from 'next'
import Header from "@/components/header/Header";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Infomation from "@/components/infomation/Infomation";
import Contact from "@/components/contact/Contact";
import Skill from "@/components/skill/Skill";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio',
}

export default function Home() {
  return (
   <>
    <Header />
    <main>
      <Infomation />
      <Skill />
      <Experience />
    </main>
    <Footer />
    <Contact />
   </>
  );
}
