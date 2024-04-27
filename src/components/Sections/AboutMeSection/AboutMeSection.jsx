import Section from "../../../UI/Section/Section";
import SectionHead from "../../../UI/Section/SectionHead";
import Button from "../../../UI/Button";
import { aboutMeIntro } from "../../../Data/data";
import "./AboutMeSection.css";

const AboutMeSection = () => {
  const introduction = aboutMeIntro;

  return (
    <Section styleClass="section-none">
      <SectionHead
        symbol="/"
        title="about_me"
        intro={introduction["intro"]}
        withPaddingBottom={true}
      />
      <div className="about-me-desc-container">
        <div>
          <div className="about-me-short-desc">
            <h5>{introduction["short-desc"]}</h5>
          </div>
        </div>
        <div>
          <div className="about-me-detailed-desc">
            <p>{introduction["detailed-desc"]}</p>
          </div>
        </div>
      </div>
      <Button path="/nayab-portfolio/about" text="read_more" fontSize="22px" />
    </Section>
  );
};

export default AboutMeSection;
