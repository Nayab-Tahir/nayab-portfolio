import Module from "../../UI/Module";
import SkillsSection from "../Sections/SkillsSection/SkillsSection";
import DrivingSkillsSection from "../Sections/SkillsSection/DrivingSkillsSection";

const SkillsModule = (props) => {
  return (
    <Module styleClass="normal-module">
      {props.softskills ? <DrivingSkillsSection /> : <SkillsSection />}
    </Module>
  );
};

export default SkillsModule;
