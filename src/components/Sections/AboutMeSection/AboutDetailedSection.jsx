import Section from "../../../UI/Section/Section";
import AnimatedHeading from "../../../UI/AnimatedHeading";
import useAnimateTextList from "../../../Hooks/useAnimateTextList";
import "./AboutMeSection.css";

const headingList = ["about_me"];
const desc = {
  "short-desc":
    "...I have 9 months of experience transitioning from Fintech Java development to Junior Data Scientist, I hold a BS in Software Engineering, specializing in machine learning and deep learning with a profound passion;",
  "detailed-desc":
    "…With a background in BS Software Engineering, my proficiency spans Python, Java, C/C++, and frameworks such as TensorFlow, Keras, scikit-learn, matplotlib, seaborn, as I eagerly embrace the diverse realms of data science. My experience includes working on a MERN stack project during my final year. I have also completed Coursera Specializations in machine learning and deep learning, further solidifying my expertise in these areas.",
};

const AboutDetailedSection = () => {
  const heading = useAnimateTextList(headingList);

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
