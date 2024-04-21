import Section from "../../../UI/Section/Section";
import HeadSymbol from "../../../UI/HeadSymbol";
import SkillRow from "../../../UI/Skills/SkillRow";
import "./SkillsSection.css";
import SHeadTitle from "../../../UI/Section/SHeadTitle";

const skills = [
  [
    {
      symbol: ".p",
      title: "python",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo;",
    },
    {
      symbol: ".j",
      title: "java",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo;",
    },
  ],
  [
    {
      symbol: ".c",
      title: "c/c++",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo;",
    },
    {
      symbol: ".t",
      title: "tensorflow",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo;",
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
