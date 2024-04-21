import Section from "../../../UI/Section/Section";
import SectionHead from "../../../UI/Section/SectionHead";
import Button from "../../../UI/Button";
import "./AboutMeSection.css";

const introduction = {
  intro:
    "...Passionate data scientist, Python aficionado, unlocking insights to shape the future. Ready to innovate?",
  "short-desc":
    "...Aspiring data scientist adept in [Python, Java, ML, AI]; var codeSage = 'Pro_dev' + 'eager_collab' + 'lifelong_learner';",
  "detailed-desc":
    "...As an aspiring data scientist, I possess advanced skills in Python, SQL, and TensorFlow, specializing in machine learning and deep learning techniques. My experience includes implementing neural networks and convolutional neural networks for image recognition tasks. I am driven by a passion for extracting meaningful insights from complex datasets and am eager to contribute to projects at the forefront of AI innovation;",
};

const AboutMeSection = () => {
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
