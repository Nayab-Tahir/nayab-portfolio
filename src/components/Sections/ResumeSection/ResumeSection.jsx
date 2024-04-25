import Section from "../../../UI/Section/Section";
import SHeadIntro from "../../../UI/Section/SHeadIntro";
import AnimatedHeading from "../../../UI/AnimatedHeading";
import useAnimateText from "../../../Hooks/useAnimateText";
import "./ResumeSection.css";

const resumeIntro =
  "…Dive into my professional journey, condensed into a single document, where skills shine and experiences narrate stories of expertise.";

const ResumeSection = () => {
  const heading = useAnimateText("resume");

  return (
    <Section>
      <div className="heading">
        <AnimatedHeading content={heading} color="#2fcbef" size="7vw" />
        <div className="head-container">
          <SHeadIntro intro={resumeIntro} />
        </div>
      </div>
    </Section>
  );
};

export default ResumeSection;
