import React from "react";
import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import MyWork from "@/components/MyWork";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#121212] text-[#f5f5f7] select-none">
      {/* Full-width modern top Navbar */}
      <Navbar
        navItems={[
          { label: "Skills", href: "#skills" },
          { label: "Experience", href: "#experience" },
          { label: "Projects", href: "#projects" },
          { label: "My Work", href: "#my-work" },
          { label: "Education", href: "#education" },
          { label: "Contact", href: "#contact" },
        ]}
      />

      <main className="w-full">
        {/* Hero Scrollytelling Section */}
        <ScrollyCanvas />

        {/* Section 2: Skills & Expertise */}
        <Skills />

        {/* Section 3: Work Experience */}
        <Experience />

        {/* Section 4: Research & Projects */}
        <Projects />

        {/* Section 5: My Work Albums (Before Education) */}
        <MyWork />

        {/* Section 6: Education & Qualifications */}
        <Education />

        {/* Section 7: Contact & Form */}
        <Contact />
      </main>
    </div>
  );
}



