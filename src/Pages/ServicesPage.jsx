import ServicesIntroModule from "../components/Modules/ServicesIntroModule";
import ExperienceModule from "../components/Modules/ExperienceModule";
import ContactModule from "../components/Modules/ContactModule";
import "./Pages.css";

const ServicesPage = () => {
    return (
      <div className="content-page">
        <ServicesIntroModule />
        <ContactModule />
      </div>
    );
  };
  
  export default ServicesPage;