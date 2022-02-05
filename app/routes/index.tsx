import BackgroundSection from "~/components/about/BackgroundSection";
import ExperienceSection from "~/components/about/ExperienceSection";
import IntroSection from "~/components/about/IntroSection";

import styles from "../styles/landing.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

import experiences from "../data/experience.json";

export default function Landing() {
  return (
    <>
      <IntroSection />
      <BackgroundSection />
      <ExperienceSection experiences={experiences} />
    </>
  );
}
