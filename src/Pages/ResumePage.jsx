import ResumeModule from "../components/Modules/ResumeModule";
import ExperienceModule from "../components/Modules/ExperienceModule";
import ContactModule from "../components/Modules/ContactModule";
import SkillsModule from "../components/Modules/SkillsModule";
import "./Pages.css";

const ResumePage = () => {
    return (
      <div className="content-page">
        <ResumeModule />
        <ExperienceModule />
        <SkillsModule />
        <ContactModule />
      </div>
    );
  };
  
  export default ResumePage;