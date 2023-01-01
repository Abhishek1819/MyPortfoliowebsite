import React from "react";
import BlogSection from "./BlogSection";
import ProjectSection from "./ProjectSection";
import RecommendationSection from "./RecommendationSection";
import SkillsSection from "./SkillsSection";
import Title from "./Title";
import About from "./About";

function HomePage() {
  return (
    <div>
      <Title />
      <RecommendationSection />
      <SkillsSection />
      <ProjectSection />
      <About />
      <BlogSection />
    </div>
  );
}

export default HomePage;
