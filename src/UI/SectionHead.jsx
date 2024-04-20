import SHeadIntro from "./SHeadIntro";

const SectionHead = (props) => {
  return (
    <>
      <div className="head-symbol">
        <h5>&#123;{props.symbol}&#125;</h5>
      </div>
      <div className="head-div" >
        <div className={`head-container ${props.withPaddingBottom ? "" : "head-container-no-padding"}`}>
          <h2 className="head-title">&lt;{props.title}&gt;</h2>
          <SHeadIntro intro={props.intro} />
        </div>
      </div>
    </>
  );
};

export default SectionHead;
