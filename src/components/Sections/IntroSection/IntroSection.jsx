import Section from "../../../UI/Section/Section";
import AnimatedHeading from "../../../UI/AnimatedHeading";
import useAnimateTextList from "../../../Hooks/useAnimateTextList";
import "./IntroSection.css";
import { myCareerList } from "../../../Data/data";

const IntroSection = () => {
  const career = useAnimateTextList(myCareerList);

  return (
    <Section>
      <div className="greetings">
        <h6>// hi, i'm nayab tahir, a...</h6>
      </div>
      <div className="career">
        <AnimatedHeading content={career} />
      </div>
      <div className="arrow">
        <h5>==&gt;</h5>
      </div>
    </Section>
  );
};

export default IntroSection;
