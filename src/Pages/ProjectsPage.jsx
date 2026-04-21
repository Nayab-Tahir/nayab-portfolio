import ProjectsModule from "../components/Modules/ProjectsModule";
import ContactModule from "../components/Modules/ContactModule";
import "./Pages.css";

const ProjectsPage = () => {
  return (
    <div className="content-page">
      <ProjectsModule />
      <ContactModule />
    </div>
  );
};

export default ProjectsPage;
