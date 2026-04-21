import Section from "../../../UI/Section/Section";
import SectionHead from "../../../UI/Section/SectionHead";
import ProjectDoc from "./ProjectDoc";
import ProjectsSidebar from "./ProjectsSidebar";
import ProjectsMinimap from "./ProjectsMinimap";
import useActiveProject from "./useActiveProject";
import { projectsData } from "../../../Data/data";
import "./ProjectsSection.css";

const ProjectsSection = () => {
  const { activeIndex, setRef, scrollTo } = useActiveProject(
    projectsData.projects.length
  );

  return (
    <Section styleClass="section-none">
      <SectionHead
        symbol="&"
        title="projects"
        intro={projectsData.projectsIntro}
        withPaddingBottom={true}
      />
      <div className="projects-layout">
        <ProjectsSidebar
          projects={projectsData.projects}
          activeIndex={activeIndex}
          onSelect={scrollTo}
        />
        <div className="projects-main">
          {projectsData.projects.map((project, i) => (
            <div
              key={i}
              ref={setRef(i)}
              className={`project-slot ${i === activeIndex ? "active" : ""}`}
            >
              <ProjectDoc
                name={project.name}
                tag1={project.tag1}
                tag2={project.tag2}
                role={project.role}
                summary={project.description}
              />
            </div>
          ))}
        </div>
        <ProjectsMinimap
          count={projectsData.projects.length}
          activeIndex={activeIndex}
        />
      </div>
    </Section>
  );
};

export default ProjectsSection;
