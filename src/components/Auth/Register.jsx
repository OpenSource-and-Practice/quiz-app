import { Link } from "react-router-dom";
import "./Auth.css";

function Register(props) {
  return (
    <div className="container">
      <form action="submit">
        <h2>Register</h2>
        <div className="form-inputs">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" />
        </div>
        <div className="form-inputs">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" />
        </div>
        <div className="form-inputs">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-inputs">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="form-inputs">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" />
        </div>
        <div className="btn-div">
          <button className="register btn" type="submit">
            Register
          </button>
        </div>
      </form>
      <h3>
        Already have an account? <Link to={"/login"}>Sign In</Link>
      </h3>
    </div>
  );
}

export default Register;
