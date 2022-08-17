import { useState } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

function Register(props) {
  //State that controls input fields
  const [input, setInput] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  //State for Validation of input fields
  const [errorInput, setErrorInput] = useState({
    lastname: false,
    firstname: false,
    email: false,
    password: false,
    confirmpassword: false,
  });

  //state for Password does not match modal
  const [paswdMatchErr, setPaswdMatchErr] = useState(false);

  //Validate Inputs Function
  const validateInputs = (inputObj) => {
    const { lastname, firstname, email, password, confirmpassword } = inputObj;
    if (!lastname.trim().length) {
      setErrorInput((values) => ({ ...values, lastname: true }));
      return;
    } else if (!firstname.trim()) {
      setErrorInput((values) => ({ ...values, firstname: true }));
      return;
    } else if (!email.trim()) {
      setErrorInput((values) => ({ ...values, email: true }));
      return;
    } else if (!password.trim()) {
      setErrorInput((values) => ({ ...values, password: true }));
      return;
    } else if (!confirmpassword.trim()) {
      setErrorInput((values) => ({ ...values, confirmpassword: true }));
      return;
    } else if (password.trim() !== confirmpassword.trim()) {
      setErrorInput((values) => ({
        ...values,
        confirmpassword: true,
        password: true,
      }));
      return;
    }
    return inputObj;
  };

  //Function to send get Request
  const sendHttpRequest = (url, method, data) => {
    return fetch(url, {
      method: method,
      //converts body to json
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          //This line helps return the Error data so we can get access to the error message
          return response.json().then((errData) => {
            console.log(errData);
            throw new Error("Something went Wrong - Server Side!");
          });
        }
      })
      .catch((error) => {
        console.log(error);
        error = new Error("Something went wrong");
      });
  };

  //Function the handle Register Form Submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputs = validateInputs(input);
    if (inputs) {
      //Set Errors back to false if Fields are submitted correctly
      setErrorInput({
        lastname: false,
        firstname: false,
        email: false,
        password: false,
        confirmpassword: false,
      });

      //Sending post request on success
      sendHttpRequest(
        "https://jsonplaceholder.typicode.com/posts",
        "POST",
        input
      );

      console.log(JSON.stringify(inputs));
    } else {
      //Exits return function if input is undefined
      return;
    }

    //Return inputs Fields to empty string after submission
    setInput({
      lastname: "",
      firstname: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  return (
    <div className="container">
      {/*errorInput && <h2>Invalid credentials</h2>*/}
      <form action="submit" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-inputs">
          <label htmlFor="lastname">Last Name</label>
          <input
            className={errorInput.lastname ? "error-input" : ""}
            type="text"
            id="lastname"
            value={input.lastname}
            onChange={(e) =>
              setInput((input) => ({ ...input, lastname: e.target.value }))
            }
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="firstname">First Name</label>
          <input
            className={errorInput.firstname ? "error-input" : ""}
            type="text"
            id="firstname"
            value={input.firstname}
            onChange={(e) =>
              setInput((input) => ({ ...input, firstname: e.target.value }))
            }
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="email">Email</label>
          <input
            className={errorInput.email ? "error-input" : ""}
            type="email"
            id="email"
            value={input.email}
            onChange={(e) =>
              setInput((input) => ({ ...input, email: e.target.value }))
            }
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="password">Password</label>
          <input
            className={errorInput.password ? "error-input" : ""}
            type="password"
            id="password"
            value={input.password}
            onChange={(e) =>
              setInput((input) => ({ ...input, password: e.target.value }))
            }
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            className={errorInput.confirmpassword ? "error-input" : ""}
            type="password"
            id="confirm-password"
            value={input.confirmpassword}
            onChange={(e) => {
              setInput((input) => ({
                ...input,
                confirmpassword: e.target.value,
              }));
              if (e.target.value !== input.password) {
                setErrorInput((values) => ({
                  ...values,
                  confirmpassword: true,
                }));
                setPaswdMatchErr(true);
              } else {
                setErrorInput((values) => ({
                  ...values,
                  confirmpassword: false,
                }));
                setPaswdMatchErr(false);
              }
            }}
          />
          {paswdMatchErr && (
            <p className="pwsd-match-text">Password doesn't match</p>
          )}
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
