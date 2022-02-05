type ExperienceSectionProps = {
  experiences: Experience[];
};

type Experience = {
  organization: string;
  url: string;
  time: string;
  position: string;
};

export default ({ experiences }: ExperienceSectionProps) => (
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
