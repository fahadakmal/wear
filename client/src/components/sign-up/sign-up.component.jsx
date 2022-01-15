import "./sign-up.styles.scss";

import React, { useState } from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({signUpStart}) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleSubmit = event => {
    event.preventDefault();
    if (password !== confirmPassword) return;
    signUpStart({ displayName, email, password });
  }

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({...userCredentials, [name]: value })
  }

    return (
      <div className="sign-up">
        <h2 className="title">It do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            required
            onChange={handleChange}
            label="Display Name"
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
            label="Email"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
            label="Password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            onChange={handleChange}
            label="Confirm Password"
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
