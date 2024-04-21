import SHeadIntro from "./SHeadIntro";
import HeadSymbol from "../HeadSymbol";
import SHeadTitle from "./SHeadTitle";

const SectionHead = (props) => {
  return (
    <>
      <HeadSymbol symbol={props.symbol} />
      <div className="head-div" >
        <div className={`head-container ${props.withPaddingBottom ? "" : "head-container-no-padding"}`}>
          <SHeadTitle title={props.title} />
          <SHeadIntro intro={props.intro} />
        </div>
      </div>
    </>
  );
};

export default SectionHead;
