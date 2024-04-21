import HeadSymbol from "../HeadSymbol";

const Skill = (props) => {
  return (
    <div className="skill-col">
      <HeadSymbol symbol={props.symbol} />
      <div className="title">{'_' + props.title}</div>
      <div className="description">{'...' + props.description}</div>
    </div>
  );
};

export default Skill;
