import Section from "../../../UI/Section/Section";
import SHeadIntro from "../../../UI/Section/SHeadIntro";
import AnimatedHeading from "../../../UI/AnimatedHeading";
import useAnimateText from "../../../Hooks/useAnimateText";
import DataRow from "../../../UI/DataRow";
import { servicesData } from "../../../Data/data";
import "./ServicesSection.css";

const ServicesIntroSection = () => {
  const heading = useAnimateText("services");

  return (
    <Section>
      <div>
        <AnimatedHeading content={heading} color="#2fcbef" size="7vw" />
        <div className="head-container">
          <SHeadIntro intro={servicesData.servicesIntro} />
        </div>
      </div>
      {servicesData.services.map((service, index) => (
        <DataRow
          key={index}
          sideheading1="No"
          sideheading2={"\u00A0\u00A0\u00A0"+index}
          mainheading={service.name}
          description={service.description}
        />
      ))}
    </Section>
  );
};

export default ServicesIntroSection;
