import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/TheQuiz.png";

const Navbar = (props) => {
  return (
    <nav>
      <img src={logo} alt="logo" />

      <div className="nav-items">
        <Link to={"/"} className="nav-element">
          HOME
        </Link>
        <Link to={"#"} className="nav-element">
          ABOUT
        </Link>
        <Link to={"/login"} className="nav-element">
          LOGIN
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
