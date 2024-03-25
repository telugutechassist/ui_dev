import React, { useState } from "react";
import "./Login.css";

function Login({ onSignupClick }) {
  const [formData, setFormData] = useState({
    emailOrMobile: "",
    password: "",
    rememberMe: false,
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const newValue = name === "rememberMe" ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
      // Clear form data after successful submission
      setFormData({ emailOrMobile: "", password: "", rememberMe: false });
    } else {
      // If there are errors, you can choose to handle them as needed.
      // In this example, we simply log them.
      console.log("Form has validation errors:", errors);
    }
  };

  const validate = (values) => {
    let errors = {};

    if (!values.emailOrMobile.trim()) {
      errors.emailOrMobile = "Email or Mobile is required";
    }

    if (!values.password.trim()) {
      errors.password = "Password is required";
    }

    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Email or Mobile</label>
            <input
              type="text"
              name="emailOrMobile"
              placeholder="Email or Mobile"
              value={formData.emailOrMobile}
              onChange={handleChange}
            />
            <p>{formErrors.emailOrMobile}</p>
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <p>{formErrors.password}</p>
          </div>

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>

          <div className="field remember-me">
            <div className="remember-checkbox">
              <label className="remember-label">Remember Me</label>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="fluid ui button blue">
            Login
          </button>

          <div className="signup-link">
            <p>
              <span className="blue-text">Don't have an account? </span>
              <a href="#" onClick={onSignupClick}>
                Signup
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
