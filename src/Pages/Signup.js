import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/context.js";
import "../assets/styles/login.css";
import grey from "../assets/styles/grey.PNG";
import yellowbg from "../assets/styles/yellowbg.svg";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

const Signup = () => {
  const email = useRef();
  const pwd = useRef();
  const pwdconf = useRef();
  const [check, setcheck] = useState("");
  const { signup } = useAuth();

  async function handlesubmit(e) {
    e.preventDefault();

    if (pwd.current.value !== pwdconf.current.value) {
      return setcheck("Passwords do not match");
    }

    try {
      setcheck("");
      await signup(email.current.value, pwd.current.value);
      //   history.push("/");
    } catch {
      setcheck("Failed to signup");
    }
  }

  return (
    <>
      <div className="auth_maincont">
        <div className="auth_cont">
          <div
            className="auth_cont2"
            style={{ backgroundImage: `url(${yellowbg})` }}
          >
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login</p>
            <p> with your personal info</p>
            <Link to="/login">
              <button className="btn_yellow">LOGIN</button>
            </Link>
          </div>

          <div className="auth_cont1" style={{ backgroundImage: `url(${grey})` }}>
            <h1 className="createacc_header">Create Account</h1>
            <div className="auth_icons_maincont">
              <FaFacebookF className="icon fb"></FaFacebookF>
              <FaGoogle className="icon google"></FaGoogle>
              <FaTwitter className="icon twitter"></FaTwitter>
            </div>
            <form onSubmit={handlesubmit} className="auth_form">
              {check && <div className="check">{check}</div>}

              <input
                type="email"
                ref={email}
                className="auth_input"
                placeholder="Email"
              ></input>
              <input
                type="password"
                ref={pwd}
                className="auth_input"
                placeholder="Password"
              ></input>
              <input
                type="password"
                ref={pwdconf}
                className="auth_input"
                placeholder="Confirm Password"
              ></input>

             <div className="btnscont">
             <Link to="/login" ><button type="submit" className="btn_grey">
                SIGNUP
              </button>
            </Link>
              <button type="submit" className="btn_reset">
                RESET
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
