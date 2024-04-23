import Section from "../../../UI/Section/Section";
import SectionHead from "../../../UI/Section/SectionHead";
import SkillRow from "../../../UI/Skills/SkillRow";
import "./SkillsSection.css";

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

const SkillsSection = () => {
  return (
    <Section styleClass="section-none">
      <SectionHead
        symbol="~"
        title="skills"
        intro="...lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        withPaddingBottom={true}
      />
      {skills.map((skillpair, index) => (
        <SkillRow key={index} skill1={skillpair[0]} skill2={skillpair[1]} />
      ))}
    </Section>
  );
};

export default SkillsSection;
