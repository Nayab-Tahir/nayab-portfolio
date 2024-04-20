import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-items-list">
        <li>
          <NavLink end to="/nayab-portfolio/">
            _home
          </NavLink>
        </li>
        <li>
          <NavLink to="/nayab-portfolio/about">
            _about
          </NavLink>
        </li>
        <li>
          <NavLink to="/nayab-portfolio/portfolio">
            _portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/nayab-portfolio/services">
            _services
          </NavLink>
        </li>
        <li>
          <NavLink to="/nayab-portfolio/resume">
            _resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/nayab-portfolio/contact">
            _contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
