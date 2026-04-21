import useAnimateText from "../../../Hooks/useAnimateText";
import { wrapText } from "./wrapText";
import { slugify } from "./slugify";

const ProjectDoc = ({ name, tag1, tag2, role, summary }) => {
  const animatedName = useAnimateText(name);
  const summaryLines = wrapText(summary, 50);
  const filename = slugify(name);

  const rows = [];
  rows.push(<span className="doc-delim">{"/**"}</span>);
  rows.push(
    <>
      <span className="doc-star">{" * "}</span>
      <span className="doc-key">@name</span>
      <span className="doc-name">{animatedName}<span className="doc-cursor">|</span></span>
    </>
  );
  rows.push(
    <>
      <span className="doc-star">{" * "}</span>
      <span className="doc-key">@stack</span>
      <span className="doc-value">{tag1} · {tag2}</span>
    </>
  );
  rows.push(
    <>
      <span className="doc-star">{" * "}</span>
      <span className="doc-key">@role</span>
      <span className="doc-value">{role}</span>
    </>
  );
  summaryLines.forEach((line, i) => {
    rows.push(
      <>
        <span className="doc-star">{" * "}</span>
        <span className="doc-key">{i === 0 ? "@summary" : ""}</span>
        <span className="doc-value">{line}</span>
      </>
    );
  });
  rows.push(<span className="doc-delim">{" */"}</span>);

  return (
    <div className="project-doc-card">
      <div className="project-doc-tab">// ~/projects/{filename}</div>
      <div className="project-doc-gutter">
        <div className="project-doc-linenums">
          {rows.map((_, i) => (
            <div key={i} className="doc-linenum">{i + 1}</div>
          ))}
        </div>
        <div className="project-doc-body">
          {rows.map((row, i) => (
            <div key={i} className="doc-line">{row}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDoc;
