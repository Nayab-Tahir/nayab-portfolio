import AnimatedHeading from "./AnimatedHeading";
import useAnimateText from "../Hooks/useAnimateText";

const ExperienceRow = (props) => {
  const comp_name = useAnimateText('_'+props.companyName);

  return (
    <div className="exp-row">
      <div className="exp-col-1">
        <div className="exp-date">
          &#123; {props.startDate} <br /> {props.endDate} &#125;
        </div>
        <div className="exp-company-name">
          <div>
            <AnimatedHeading
              content={comp_name}
              color="#9a99ff"
              size="3vw"
              bracesStyleO="< "
              bracesStyleC=" >"
            />
          </div>
        </div>
      </div>
      <div className="exp-col-2">
        <div className="exp-title">// {props.position}</div>
        <div className="exp-description">{props.description}</div>
      </div>
    </div>
  );
};

export default ExperienceRow;
