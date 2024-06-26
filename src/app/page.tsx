import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col flex-grow items-center w-full gap-20 mt-20 max-w-screen-lg">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
