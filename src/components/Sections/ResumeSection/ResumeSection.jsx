import Section from "../../../UI/Section";
import SHeadIntro from "../../../UI/SHeadIntro";
import AnimatedHeading from "../../../UI/AnimatedHeading";
import useAnimateTextList from "../../../Hooks/useAnimateTextList";
import "./ResumeSection.css";

const headingList = ["resume"];
const resumeIntro =
  "…lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elementum, eros at sagittis facilisis, ante est rutrum ligula, at interdum eros sapien vel magna.";

const ResumeSection = () => {
  const heading = useAnimateTextList(headingList);

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
