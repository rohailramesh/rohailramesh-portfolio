import HeroAnimation from "@/components/HeroAnimation";
import Myself from "@/components/Myself";
import ExperienceTimeline from "@/components/ExperienceTimeLine";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <>
      <HeroAnimation />
      <Myself />
      <ExperienceTimeline />
      <Projects />
      {/* <Contact /> */}
    </>
  );
}
