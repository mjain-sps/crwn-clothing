import React from "react";
import Input from "../Components/Input";
import CustomButton from "../Components/CustomButton";
import "../CSS/AuthCSS/signin.scss";

//Import Firebase Functions
import { signInWithGoogle, auth } from "../Firebase/firebase.utils";
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
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.setState;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(`error ${error.message}`);
    }
  };
  render() {
    return (
      <div className="signin-wrapper">
        <h3>I already have an account</h3>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
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
          <div className="button-wrapper">
            <div>
              <CustomButton
                matter="SIGN-IN"
                type="submit"
                onClick={this.handleSubmit}
              />
            </div>
            <div>
              <CustomButton
                matter="Google SIGN-IN"
                type="submit"
                onClick={signInWithGoogle}
                googleSignIn="google-sign-in"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
