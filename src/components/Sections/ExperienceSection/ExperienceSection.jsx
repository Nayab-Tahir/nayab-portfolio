import Section from "../../../UI/Section/Section";
import SectionHead from "../../../UI/Section/SectionHead";
import ExperienceRow from "../../../UI/ExperienceRow";
import "./ExperienceSection.css";

const experiences = [
  {
    startDate: "Apr 2024",
    endDate: "Present",
    companyName: "techtics.ai",
    position: "JUNIOR DATA SCIENTIST",
    description:
      "…As a Junior Data Scientist at Techtics.ai, I leverage AI and ML for innovative solutions and insights, using advanced analysis to drive informed decisions and transformative data-driven strategies for growth;",
  },
  {
    startDate: "Jan 2024",
    endDate: "Apr 2024",
    companyName: "i2cinc",
    position: "SOFTWARE ENGINEER",
    description:
      "…As a Software Engineer at i2c, I enhanced the End-of-Day Scheduler service by implementing fixes and optimizing query performance, ensuring smoother operations and faster processing for overall system efficiency;",
  },
  {
    startDate: "Aug 2023",
    endDate: "Dec 2023",
    companyName: "i2cinc",
    position: "ASSOCIATE SOFTWARE ENGINEER",
    description:
      "…As an Associate Software Engineer at i2c, I enhanced the Push Scheduler and Campaign Scheduler services and analyzed client queries within the Alert Service;",
  },
  {
    startDate: "Feb 2023",
    endDate: "Jun 2023",
    companyName: "pucit",
    position: "TEACHER ASSISTANT OF DATA SCIENCE",
    description:
      "…At pucit, I served as a dedicated Data Science Teaching Assistant, providing comprehensive support to students through guidance, mentoring, and assignment facilitation;",
  },
  {
    startDate: "Mar 2022",
    endDate: "Sep 2022",
    companyName: "pucit",
    position: "TEACHER ASSISTANT OF WEV DEVELOPMENT",
    description:
      "…At pucit, I actively assisted web development students as a committed Teaching Assistant, facilitating lab sessions and providing guidance in the subject matter;",
  },
];

const experienceIntro =
  "…Embark on a journey through my professional chronicles, where each role tells a story of growth, challenges conquered, and expertise honed.";

const ExperienceSection = () => {
  return (
    <Section styleClass="section-none">
      <SectionHead
        symbol="+"
        title="experience"
        intro={experienceIntro}
        withPaddingBottom={true}
      />
      {experiences.map((experience, index) => (
        <ExperienceRow
          key={index}
          startDate={experience.startDate}
          endDate={experience.endDate}
          companyName={experience.companyName}
          position={experience.position}
          description={experience.description}
        />
      ))}
    </Section>
  );
};

export default ExperienceSection;
