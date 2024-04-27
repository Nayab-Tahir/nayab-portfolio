import Section from "../../../UI/Section/Section";
import SectionHead from "../../../UI/Section/SectionHead";
import DataRow from "../../../UI/DataRow";
import { experienceData } from "../../../Data/data";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  return (
    <Section styleClass="section-none">
      <SectionHead
        symbol="+"
        title="experience"
        intro={experienceData.experienceIntro}
        withPaddingBottom={true}
      />
      {experienceData.experiences.map((experience, index) => (
        <DataRow
          key={index}
          sideheading1={experience.startDate}
          sideheading2={experience.endDate}
          mainheading={experience.companyName}
          subheading={experience.position}
          description={experience.description}
        />
      ))}
    </Section>
  );
};

export default ExperienceSection;
