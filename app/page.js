import HeroAnimation from "@/components/HeroAnimation";
import Myself from "@/components/Myself";
import ExperienceTimeline from "@/components/ExperienceTimeLine";
import Projects from "@/components/Projects";
import LifeUpdateAndContact from "@/components/LifeUpdateAndContact";
import Footer from "@/components/Footer";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (c, s, q, u, a, r, e) {
                  c.hj=c.hj||function(){(c.hj.q=c.hj.q||[]).push(arguments)};
                  c._hjSettings = { hjid: a };
                  r = s.getElementsByTagName('head')[0];
                  e = s.createElement('script');
                  e.async = true;
                  e.src = q + c._hjSettings.hjid + u;
                  r.appendChild(e);
              })(window, document, 'https://static.hj.contentsquare.net/c/csq-', '.js', 5364960);
            `,
          }}
        />
      </Head>
      <HeroAnimation />
      <Myself />
      <ExperienceTimeline />
      <Projects />
      <LifeUpdateAndContact />
      <Footer />
    </>
  );
}
