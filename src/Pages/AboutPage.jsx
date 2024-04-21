import AboutModule from "../components/Modules/AboutModule";
import ContactModule from "../components/Modules/ContactModule";
import SkillsModule from "../components/Modules/SkillsModule";
import "./Pages.css";

const AboutPage = () => {
    return (
      <div className="content-page">
        <AboutModule />
        <SkillsModule softskills={true} />
        <ContactModule />
      </div>
    );
  };
  
  export default AboutPage;