import Section from "../../../UI/Section/Section";
import HeadSymbol from "../../../UI/HeadSymbol";
import SkillRow from "../../../UI/Skills/SkillRow";
import SHeadTitle from "../../../UI/Section/SHeadTitle";
import { skillsData } from "../../../Data/data";
import "./SkillsSection.css";

const DrivingSkillsSection = () => {
  return (
    <Section styleClass="section-none">
      <HeadSymbol symbol="::" />
      <SHeadTitle title="what drives my work" />
      {skillsData.drivingSkills.map((skillpair, index) => (
        <SkillRow key={index} skill1={skillpair[0]} skill2={skillpair[1]} />
      ))}
    </Section>
  );
};

export default DrivingSkillsSection;
