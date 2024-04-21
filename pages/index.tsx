import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Hero from "@/Components/Hero";
import About from "@/Components/About";
import Experience from "@/Components/Experience";
import PortfolioSlider from "@/Components/Portfolio";
import Parallax_dsg from "@/Components/parallax/Parallax";
import React, { useState } from "react"
import Certificate from "@/Components/Certificate";
import Blog from "@/Components/Blog";
import Education from "@/Components/Education";

const HomePage = () => {
  const [nav, setNav]=useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav nav={nav} openNav={openNav} closeNav={closeNav} />

        {/* Hero Section */}
        <Hero />
        <section>
          {/* About Section */}
          <About />
        </section>
        <section>
          {/* Experience Section */}
          <Experience />
        </section>
        <section>
          {/* Experience Section */}
          <Education />
        </section>
        <section>
          {/* Experience Section */}
          <PortfolioSlider />
        </section>
        <section>
          {/* Experience Section */}
          <Blog />
        </section>
        <section>
          {/* Experience Section */}
          <Certificate />
        </section>
      </div>
    </div>
  );
};

export default HomePage;