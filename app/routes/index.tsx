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

export default function Index() {
  return (
    <>
      <IntroSection />
      <BackgroundSection />
      <ExperienceSection experiences={experiences} />
    </>
  );
}

const IntroSection = () => (
  <div className="section-intro">
    <h1 className="intro__hello">Hello world,</h1>
    <h3 className="intro__introduction">
      I'm <span className="intro__name">Alpri Else</span>, an entrepreneurial
      software engineer passionate about creating empowering software that
      people love using.
    </h3>
    <p className="intro__get-in-touch">
      Get in touch with me:{" "}
      <a href="mailto:alprielse@gmail.com" className="intro__email">
        alprielse@gmail.com
      </a>
    </p>
  </div>
);

const BackgroundSection = () => (
  <div className="background-section">
    <h1>Hi, I'm Alpri!</h1>
    <div className="background__row">
      <div className="background__col background__content">
        <p>
          I'm a new-grad software engineer who believes that seamless software
          is what empowers humanity to achieve more. I am passionate about
          creating software that people love using by grounding my work in the
          problems people face.
        </p>
        <p>
          I was a B.S. Computer Science student at the
          <a target="_blank" href="https://cs.illinois.edu/">
            University of Illinois at Urbana-Champaign (UIUC)
          </a>
          . While there I was involved with the
          <a target="_blank" href="http://psauiuc.org/">
            Philippine Student Association (PSA)
          </a>{" "}
          and
          <a target="_blank" href="https://www.reflectionsprojections.org/">
            Reflections Projections
          </a>{" "}
          in web infrastructure and mentoring roles. I'm also currently pursuing
          a certificate in Innovation and Entrepreneurship at
          <a target="_blank" href="https://www.extension.harvard.edu/">
            Harvard Extension School
          </a>
          .
        </p>
        <p>
          I'm an incoming backend Software Engineer at
          <a target="_blank" href="https://www.hubspot.com/">
            HubSpot
          </a>
          , a Cambridge, MA based mission-driven CRM/CMS/MarTech/etc SaaS
          company, solving for problems CMS developers face. While I'm not
          currently looking for new opportunities, I'm always open to connecting
          via
          <a target="_blank" href="https://www.linkedin.com/in/alprielse/">
            linkedin/alprielse
          </a>{" "}
          and
          <a href="mailto:alprielse@gmail.com">alprielse@gmail.com</a>!
        </p>
      </div>
      <div className="background__col background__image">
        <div className="background__headshot-wrapper">
          <img src="/images/headshot.png" />
        </div>
      </div>
    </div>
  </div>
);

type ExperienceSectionProps = {
  experiences: Experience[];
};

type Experience = {
  organization: string;
  url: string;
  time: string;
  position: string;
};

const ExperienceSection = ({ experiences }: ExperienceSectionProps) => (
  <div className="experience-section">
    <h1>Experience</h1>
    <div className="experience__wrapper">
      {experiences.map((experience) => (
        <div className="experience" key="">
          <div className="experience__header">
            <a className="experience__organization" href={experience.url}>
              {experience.organization}
            </a>
            <span className="experience__time">{experience.time}</span>
          </div>
          <span className="experience__position">{experience.position}</span>
        </div>
      ))}
    </div>
  </div>
);
