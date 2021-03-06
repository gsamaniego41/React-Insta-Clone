import React from "react";
import PropTypes from "prop-types";
import "./Login.css";
import igTextLogo from "../../images/text-logo.png";
import authenticate from "../../Authentication/Authenticate";
import { Link } from "./LoginStyles";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginHandler = e => {
    console.log("loginHandler launched");
    e.preventDefault();
    const user = this.state.username;
    localStorage.setItem("user", user);
    // this.setState({ username:  })
    // window.location.reload();
  };

  render() {
    const footerLinks = [
      "about us",
      "support",
      "press",
      "api",
      "jobs",
      "privacy",
      "terms",
      "directory",
      "profiles",
      "hashtags",
      "language"
    ];

    return (
      <div className="login">
        <div className="login-card box">
          <img src={igTextLogo} alt="logo" />
          <form
            onSubmit={() => this.props.clicked(this.state.username)}
            netlify
          >
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={this.state.username}
              onChange={this.changeHandler}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.changeHandler}
              required
            />{" "}
            <br />
            <button type="submit">Log in</button>
          </form>

          <h4>OR</h4>

          <div className="login-fb">
            <i className="fab fa-facebook" /> Log in with Facebook
          </div>
          <Link>Forgot password?</Link>
        </div>

        <div className="cta-signup box">
          Don't have an account?{" "}
          <Link signup href="#">
            Sign up
          </Link>
        </div>

        <p>Get the app</p>
        <div className="cta-download">
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
            alt="app store"
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            alt="googleplay"
          />
          <img
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_microsoft_english-en.png/8a9204989bce.png"
            alt="microsoft"
          />
        </div>

        <div className="footer-nav">
          <div className="footer-links">
            {footerLinks.map(link => {
              return (
                <Link footer href="#" key={Math.random()}>
                  {link}
                </Link>
              );
            })}
          </div>
          <div>&copy; instagram</div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  clicked: PropTypes.func
};

export default Login;
