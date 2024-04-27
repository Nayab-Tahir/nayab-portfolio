import AnimatedHeading from "./AnimatedHeading";
import useAnimateText from "../Hooks/useAnimateText";

const DataRow = (props) => {
  const main_heading = useAnimateText(props.mainheading);

  return (
    <div className="data-row">
      <div className="data-col-1">
        <div className="data-sideheading">
          &#123; {props.sideheading1} <br /> {props.sideheading2} &#125;
        </div>
        <div className="data-mainheading">
          <div>
            <AnimatedHeading
              content={main_heading}
              color="#9a99ff"
              size="3vw"
              bracesStyleO="< "
              bracesStyleC=" >"
            />
          </div>
        </div>
      </div>
      <div className="data-col-2">
        {props.subheading && <div className="data-col2-title">// {props.subheading}</div>}
        <div className="data-description">{props.description}</div>
      </div>
    </div>
  );
};

export default DataRow;
