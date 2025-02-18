import AboutExperience from "@/components/AboutPage/AboutExperience";
import AboutIntro from "@/components/AboutPage/AboutIntro";
import AboutIntroSecond from "@/components/AboutPage/AboutIntroSecond";
import SkillsSection from "@/components/AboutPage/SkillsSection";
import React from "react";
import Technology from "@/components/AboutPage/Technology";
import ReviewSection from "@/components/AboutPage/ReviewSection";

function AboutPage() {
  return (
    <div className="max-w-[1200px] mx-auto ">
      <AboutIntro />
      <AboutIntroSecond />
      <SkillsSection />
      <AboutExperience />
      <Technology/>
      <ReviewSection />
    </div>
  );
}

export default AboutPage;
