import Section from "../../../UI/Section/Section";
import SHeadIntro from "../../../UI/Section/SHeadIntro";
import AnimatedHeading from "../../../UI/AnimatedHeading";
import useAnimateText from "../../../Hooks/useAnimateText";
import ExperienceRow from "../../../UI/ExperienceRow";
import "./ServicesSection.css";

const servicesIntro =
  "…Transforming raw data into actionable insights through cutting-edge techniques and personalized strategies tailored to your unique business needs";
  const services = [
    {
      startDate: "No",
      endDate: '\u00A0\u00A0\u00A01',
      companyName: "data analysis",
      description:
        "…Our service extracts valuable insights from raw data through advanced techniques and tools, aiding in informed decision-making. We employ statistical methods and data visualization to uncover hidden patterns and trends, providing actionable recommendations for growth;",
    },
    {
      startDate: "No",
      endDate: '\u00A0\u00A0\u00A02',
      companyName: "predictive modeling",
      description:
        "…Utilizing cutting-edge predictive modeling techniques, we forecast future trends and behaviors based on historical data, empowering businesses to make proactive decisions. Our models are robust and scalable, allowing for accurate predictions in dynamic environments;",
    },
    {
      startDate: "No",
      endDate: '\u00A0\u00A0\u00A03',
      companyName: "data preprocessing",
      description:
        "…We ensure data quality and prepare datasets for analysis efficiently by employing techniques like outlier detection, normalization, and feature engineering. This enhances accuracy and reliability, leading to more robust insights;",
    },
    {
      startDate: "No",
      endDate: '\u00A0\u00A0\u00A04',
      companyName: "deep learning",
      description:
        "…Harnessing artificial neural networks, we enable machines to learn patterns and perform human-like tasks, from image and speech recognition to natural language processing, with tailored, state-of-the-art solutions;",
    },
  ];


const ServicesIntroSection = () => {
  const heading = useAnimateText("services");

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
          description={experience.description}
        />
      ))}
    </Section>
  );
};

export default ServicesIntroSection;
