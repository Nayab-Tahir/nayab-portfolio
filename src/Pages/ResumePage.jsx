import ResumeModule from "../components/Modules/ResumeModule";
import ExperienceModule from "../components/Modules/ExperienceModule";
import ContactModule from "../components/Modules/ContactModule";
import "./HomePage.css";

const ResumePage = () => {
    return (
      <div className="content-page">
        <ResumeModule />
        <ExperienceModule />
        <ContactModule />
      </div>
    );
  };
  
  export default ResumePage;