import Explore from "@/components/Explore/Explore";
import HeroSection from "@/components/HeroSection/HeroSection";
import IntroSection from "@/components/IntroSection/IntroSection";
import Resume from "@/components/Resume/Resume";
import SecondIntro from "@/components/SecondIntro/SecondIntro";
import WorkSection from "@/components/Worksection/WorkSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <Explore />
      <WorkSection />
      <SecondIntro />
      <Resume />
    </>
  );
}
