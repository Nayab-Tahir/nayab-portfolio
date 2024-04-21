import Section from "../../../UI/Section/Section";
import AnimatedHeading from "../../../UI/AnimatedHeading";
import useAnimateTextList from "../../../Hooks/useAnimateTextList";
import "./AboutMeSection.css";

const headingList = ["about_me"];
const desc = {
  "short-desc":
    "...I have over 12 years of experience in web development, with a strong background in both front-end and back-end technologies. Nullam facilisis mollis mauris, vitae mollis leo viverra eu. In cursus commodo interdum;",
  "detailed-desc":
    "…lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis mollis mauris, vitae mollis leo viverra eu. In cursus commodo interdum. Duis vitae ex massa. Quisque luctus diam at mi mollis mollis. Proin nec ex non lectus molestie laoreet sollicitudin auctor urna. Suspendisse varius diam vel egestas finibus. Fusce vel aliquet lectus. Nulla dapibus, turpis nec sodales congue, lectus ipsum vehicula massa, nec pulvinar.",
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
