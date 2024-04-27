import Section from "../../../UI/Section/Section";
import SectionHead from "../../../UI/Section/SectionHead";
import SkillRow from "../../../UI/Skills/SkillRow";
import "./SkillsSection.css";

const skills = [
  [
    {
      symbol: ".py",
      title: "python",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo;",
    },
    {
      symbol: ".ml",
      title: "machine learning",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo;",
    },
  ],
  [
    {
      symbol: ".dl",
      title: "deep learning",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo;",
    },
    {
      symbol: ".jv",
      title: "java",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo;",
    },
  ],
  [
    {
      symbol: ".tf",
      title: "tensorflow",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo;",
    },
    {
      symbol: ".pt",
      title: "pytorch",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo;",
    },
  ]
];

const skillsIntro = "...Step into a treasury of skills, each facet reflecting versatility, precision, and adaptability, tailored to meet diverse challenges and fuel success.";

const SkillsSection = () => {
  return (
    <Section styleClass="section-none">
      <SectionHead
        symbol="~"
        title="skills"
        intro={skillsIntro}
        withPaddingBottom={true}
      />
      {skills.map((skillpair, index) => (
        <SkillRow key={index} skill1={skillpair[0]} skill2={skillpair[1]} />
      ))}
    </Section>
  );
};

export default SkillsSection;
