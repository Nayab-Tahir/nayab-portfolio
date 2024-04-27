import Section from "../../../UI/Section/Section";
import SectionHead from "../../../UI/Section/SectionHead";
import SkillRow from "../../../UI/Skills/SkillRow";
import { skillsData } from "../../../Data/data";
import "./SkillsSection.css";

const SkillsSection = () => {
  return (
    <Section styleClass="section-none">
      <SectionHead
        symbol="~"
        title="skills"
        intro={skillsData.skillsIntro}
        withPaddingBottom={true}
      />
      {skillsData.skills.map((skillpair, index) => (
        <SkillRow key={index} skill1={skillpair[0]} skill2={skillpair[1]} />
      ))}
    </Section>
  );
};

export default SkillsSection;
