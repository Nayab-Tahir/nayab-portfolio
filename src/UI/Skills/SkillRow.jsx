import Skill from "./Skill";

const SkillRow = (props) => {
  return (
    <div className="skill-row">
      <Skill
        symbol={props.skill1.symbol}
        title={props.skill1.title}
        description={props.skill1.description}
      />
      <hr />
      <Skill
        symbol={props.skill2.symbol}
        title={props.skill2.title}
        description={props.skill2.description}
      />
    </div>
  );
};

export default SkillRow;
