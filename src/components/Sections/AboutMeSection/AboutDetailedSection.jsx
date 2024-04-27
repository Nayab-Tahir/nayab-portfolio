import Section from "../../../UI/Section/Section";
import AnimatedHeading from "../../../UI/AnimatedHeading";
import useAnimateText from "../../../Hooks/useAnimateText";
import { aboutMeIntro } from "../../../Data/data";
import "./AboutMeSection.css";

const AboutDetailedSection = () => {
  const heading = useAnimateText("about_me");

  const desc = aboutMeIntro["more-details"];

  return (
    <Section>
      <AnimatedHeading content={heading} color="#2fcbef" />
      <div className="desc-container">
        <div className="short-desc">{desc["short-desc"]}</div>
        <div className="detailed-desc">{desc["detailed-desc"]}</div>
      </div>
    </Section>
  );
};

export default AboutDetailedSection;
