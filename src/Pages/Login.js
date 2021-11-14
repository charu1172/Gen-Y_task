import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../assets/styles/login.css";
import grey from "../assets/styles/grey.PNG";
import yellowbg from "../assets/styles/yellowbg.svg";
import { useAuth } from "../context/context.js";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";

const Login = () => {
  const email = useRef();
  const pwd = useRef();
  const [check, setcheck] = useState("");
  const { login } = useAuth();
  const history = useHistory();

  async function handlesubmit(e) {
    e.preventDefault();

    try {
      setcheck("");
      await login(email.current.value, pwd.current.value);
      history.push("/");
    } catch {
      setcheck("Failed to login");
    }
  }

  return (
    <>
      <div className="auth_maincont">
        <div className="auth_cont">
          <div className="auth_cont1" style={{ backgroundImage: `url(${grey})` }}>
            <h1 className="geny">Gen-Y</h1>
            <h1 className="signin_header">Sign in</h1>
            <div className="auth_icons_maincont">
              <FaFacebookF className="icon fb"></FaFacebookF>
              <FaGoogle className="icon google"></FaGoogle>
              <FaTwitter className="icon twitter"></FaTwitter>
            </div>
            <form onSubmit={handlesubmit} className="auth_form">
              {check && <div>{check}</div>}

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
              <br></br>

              <Link to="/home">
                {" "}
                <button type="submit" className="btn_grey" id="#login_btn">
                  LOGIN
                </button>
              </Link>
            </form>
          </div>

          <div
            className="auth_cont2"
            style={{ backgroundImage: `url(${yellowbg})` }}
          >
            <h1>Hello, Friend!</h1>
            <p>You just let in.</p>
            <p>We'll make sure you stay in there!</p>
            <Link to="/signup">
              <button className="btn_yellow">SIGN UP</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
