import Section from "../../../UI/Section";
import SectionHead from "../../../UI/SectionHead";
import ExperienceRow from "../../../UI/ExperienceRow";
import "./ExperienceSection.css";

const experiences = [
  {
    startDate: "Apr 2024",
    endDate: "Present",
    companyName: "techtics.ai",
    position: "JUNIOR DATA SCIENTIST",
    description:
      "...lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut dui tortor. Maecenas cursus velit sit amet orci tincidunt hendrerit. Etiam tincidunt nisl at nibh ullamcorper;",
  },
  {
    startDate: "Jan 2024",
    endDate: "Apr 2024",
    companyName: "i2cinc",
    position: "SOFTWARE ENGINEER",
    description:
      "...lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut dui tortor. Maecenas cursus velit sit amet orci tincidunt hendrerit. Etiam tincidunt nisl at nibh ullamcorper;",
  },
  {
    startDate: "Aug 2023",
    endDate: "Dec 2023",
    companyName: "i2cinc",
    position: "ASSOCIATE SOFTWARE ENGINEER",
    description:
      "...lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut dui tortor. Maecenas cursus velit sit amet orci tincidunt hendrerit. Etiam tincidunt nisl at nibh ullamcorper;",
  },
  {
    startDate: "Feb 2023",
    endDate: "Jun 2023",
    companyName: "pucit",
    position: "TEACHER ASSISTANT OF DATA SCIENCE",
    description:
      "...lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut dui tortor. Maecenas cursus velit sit amet orci tincidunt hendrerit. Etiam tincidunt nisl at nibh ullamcorper;",
  },
  {
    startDate: "Mar 2022",
    endDate: "Sep 2022",
    companyName: "pucit",
    position: "TEACHER ASSISTANT OF WEV DEVELOPMENT",
    description:
      "...lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut dui tortor. Maecenas cursus velit sit amet orci tincidunt hendrerit. Etiam tincidunt nisl at nibh ullamcorper;",
  },
];

const ExperienceSection = () => {
  return (
    <Section styleClass="section-none">
      <SectionHead
        symbol="+"
        title="experience"
        intro="...lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
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
