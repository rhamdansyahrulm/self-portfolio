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
        <Nav openNav={openNav} />

        {/* Hero Section */}
        <Hero />
        <div>
          {/* About Section */}
          <About />
        </div>
        <div>
          {/* Experience Section */}
          <Experience />
        </div>
        <div>
          {/* Experience Section */}
          <Education />
        </div>
        <div>
          {/* Experience Section */}
          <PortfolioSlider />
        </div>
        <div>
          {/* Experience Section */}
          <Blog />
        </div>
        <div>
          {/* Experience Section */}
          <Certificate />
        </div>
      </div>
    </div>
  );
};

export default HomePage;