import { slugify } from "./slugify";

const ProjectsSidebar = ({ projects, activeIndex, onSelect }) => {
  return (
    <aside className="projects-sidebar">
      <div className="sidebar-header">EXPLORER</div>
      <div className="sidebar-folder">
        <span className="folder-caret">▾</span>
        <span className="folder-label">projects</span>
        <span className="folder-count">({projects.length})</span>
      </div>
      <div className="sidebar-files">
        {projects.map((p, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={i}
              className={`sidebar-file ${isActive ? "active" : ""}`}
              onClick={() => onSelect(i)}
              aria-current={isActive ? "true" : undefined}
            >
              <span className="sidebar-icon">{isActive ? "●" : "▸"}</span>
              <span className="sidebar-name">{slugify(p.name)}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
};

export default ProjectsSidebar;
