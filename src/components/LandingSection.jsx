import "./LandingSection.css";
import { Link } from "react-router-dom";
import bgImg from "../assets/bg.png";

const LandingSection = (props) => {
  return (
    <div className="bg">
      <section className="wel-text">
        <div className="text-section">
          <h1>Easy and intuitive Online testing</h1>
          <p>
            The quiz is an online testing platform that allows users around the
            world test his or herself on any subject of her choice
          </p>
        </div>
        <Link to={"./register"}>
          <button className="btn-getstarted">Get Started</button>
        </Link>
      </section>
      <section className="wel-bg">
        <img src={bgImg} alt="backgroundImage" />
      </section>
    </div>
  );
};

export default LandingSection;
