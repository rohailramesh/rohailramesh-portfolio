import HeroAnimation from "@/components/HeroAnimation";
import Myself from "@/components/Myself";
import ExperienceTimeline from "@/components/ExperienceTimeLine";
import Projects from "@/components/Projects";
import LifeUpdateAndContact from "@/components/LifeUpdateAndContact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <HeroAnimation />
      <Myself />
      <ExperienceTimeline />
      <Projects />
      <LifeUpdateAndContact />
      <Footer />
    </>
  );
}
