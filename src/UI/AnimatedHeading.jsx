const AnimatedHeading = (props) => {
  const customColor = props.color || "";
  const customSize = props.size || "";
  const bracesStyleO = props.bracesStyleO || "{\" ";
  const bracesStyleC = props.bracesStyleC || " \"}";

  return (
    <>
      <span className="heading-braces" style={{fontSize: customSize}}>{bracesStyleO}</span>
      <span className="heading-content" style={{color: customColor, fontSize: customSize}}>
        {props.content}
        <span className="heading-cursor" style={{color: customColor, fontSize: customSize}}>|</span>
      </span>
      <span className="heading-braces" style={{fontSize: customSize}}>{bracesStyleC}</span>
    </>
  );
};

export default AnimatedHeading;
