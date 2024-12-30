"use client";

import { Layout } from "@/components/ui/Layout";  // Correct import path for Layout
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Competitions from "@/components/sections/Competitions";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Competitions />
      <Contact />
    </Layout>
  );
}
