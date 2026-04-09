import SequenceContainer from "@/components/SequenceContainer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <SequenceContainer>
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
      </SequenceContainer>
      
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      
      <Footer />
    </main>
  );
}
