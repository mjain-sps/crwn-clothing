import React from "react";
import Input from "../Components/Input";
import "../CSS/AuthCSS/signin.scss";
class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="signin-wrapper">
        <h3>I already have an account</h3>
        <span>Sign in with your email and password</span>

        <Input
          name="email"
          label="EMAIL"
          handleChange={this.handleChange}
          value={this.state.email}
          type="email"
        />

        <Input
          name="password"
          label="PASSWORD"
          handleChange={this.handleChange}
          value={this.state.password}
          type="password"
        />
      </div>
    );
  }
}

export default SignIn;
