const barWidths = [60, 80, 70, 90, 75];

const ProjectsMinimap = ({ count, activeIndex }) => {
  return (
    <aside className="projects-minimap" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`minimap-block ${i === activeIndex ? "active" : ""}`}
        >
          {barWidths.map((w, j) => (
            <div key={j} className="minimap-bar" style={{ width: `${w}%` }} />
          ))}
        </div>
      ))}
    </aside>
  );
};

export default ProjectsMinimap;
