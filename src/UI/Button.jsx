import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div className="button" onClick={props.onClick}>
        <Link to={props.path} style={{fontSize: props.fontSize}} href="#">&#123;{props.text}&#125;</Link>
    </div>
  );
};

export default Button;