import HeroAnimation from "@/components/HeroAnimation";
import Myself from "@/components/Myself";
import ExperienceTimeline from "@/components/ExperienceTimeLine";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import LifeUpdate from "@/components/LifeUpdate";
import LifeUpdateAndContact from "@/components/LifeUpdateAndContact";
export default function Home() {
  return (
    <>
      <HeroAnimation />
      <Myself />
      <ExperienceTimeline />
      <Projects />
      {/* <Contact /> */}
      {/* <LifeUpdate /> */}
      <LifeUpdateAndContact />
    </>
  );
}
