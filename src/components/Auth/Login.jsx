import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function Login(props)
{
  const [loginMatch, setLoginMatch] = useState(true)
  return (
    <div className="container">
      <form action="submit">
        <h2>Sign In</h2>

        <div className="form-inputs">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="form-inputs">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        {loginMatch || (
          <p className="pwsd-match-text">Incorrect Email or password</p>
        )}
        <section className="remember-password">
          <input type="checkbox" />
          <p>Remember Password</p>
        </section>

        <div className="btn-div">
          <button className="login btn" type="submit">
            Sign In
          </button>
        </div>
      </form>
      <h3>
        Don't have an account? <Link to={"/register"}>Register</Link>
      </h3>
    </div>
  );
}

export default Login;
