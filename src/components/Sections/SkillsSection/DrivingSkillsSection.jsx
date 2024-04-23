import Section from "../../../UI/Section/Section";
import HeadSymbol from "../../../UI/HeadSymbol";
import SkillRow from "../../../UI/Skills/SkillRow";
import "./SkillsSection.css";
import SHeadTitle from "../../../UI/Section/SHeadTitle";

const skills = [
  [
    {
      symbol: "tw",
      title: "team work",
      description:
        "I value collaboration and believe in power of collective effort, where diverse skills come together to achieve common goals;",
    },
    {
      symbol: "in",
      title: "innovation",
      description:
        "I'm driven by passion for pushing boundaries and exploring new ideas, constantly seeking innovative solutions to complex problems;",
    },
  ],
  [
    {
      symbol: "ex",
      title: "excellence",
      description:
        "My commitment to excellence fuels my pursuit of continuous improvement, striving to deliver high-quality outcomes in my work;",
    },
    {
      symbol: "hw",
      title: "hard work",
      description:
        "I embrace challenges with dedication, recognizing that perseverance is key to overcoming obstacles and achieving success;",
    },
  ],
];

const DrivingSkillsSection = () => {
  return (
    <Section styleClass="section-none">
      <HeadSymbol symbol="::" />
      <SHeadTitle title="what drives my work" />
      {skills.map((skillpair) => (
        <SkillRow skill1={skillpair[0]} skill2={skillpair[1]} />
      ))}
    </Section>
  );
};

export default DrivingSkillsSection;
