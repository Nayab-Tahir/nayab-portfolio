import Section from "../../../UI/Section/Section";
import SHeadIntro from "../../../UI/Section/SHeadIntro";
import AnimatedHeading from "../../../UI/AnimatedHeading";
import useAnimateTextList from "../../../Hooks/useAnimateTextList";
import ExperienceRow from "../../../UI/ExperienceRow";
import "./ServicesSection.css";

const headingList = ["services"];
const servicesIntro =
  "…lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elementum, eros at sagittis facilisis, ante est rutrum ligula, at interdum eros sapien vel magna.";
  const services = [
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


const ServicesIntroSection = () => {
  const heading = useAnimateTextList(headingList);

  return (
    <Section>
      <div >
        <AnimatedHeading content={heading} color="#2fcbef" size="7vw" />
        <div className="head-container">
          <SHeadIntro intro={servicesIntro} />
        </div>
      </div>
      {services.map((experience, index) => (
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

export default ServicesIntroSection;
