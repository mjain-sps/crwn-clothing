import React from "react";
import Input from "../Components/Input";
import CustomButton from "../Components/CustomButton";
import { auth } from "../Firebase/firebase.utils";
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password1: "",
      password2: "",
      email: "",
    };
    console.log(this.state);
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  //Function to Signup The User
  handleSignup = async (event) => {
    const { name, password1: password, password2, email } = this.state;
    if (password !== password2) {
      alert("Passwords do not macth. Please try again later");
    }
    event.preventDefault();
    const data = await auth.createUserWithEmailAndPassword(email, password);
    console.log(data);
  };
  render() {
    return (
      <>
        <div className="signup-wrapper">
          <h3>I do not have an account</h3>
          <span>Signup with email and Password</span>
          <form onSubmit={this.handleSignup}>
            <Input
              name="name"
              type="text"
              label="NAME"
              value={this.state.name}
              handleChange={this.handleChange}
            />

            <Input
              name="email"
              type="email"
              label="EMAIL"
              value={this.state.email}
              handleChange={this.handleChange}
            />

            <Input
              name="password1"
              value={this.state.password1}
              type="password"
              label="PASSWORD"
              handleChange={this.handleChange}
            />

            <Input
              name="password2"
              value={this.state.password2}
              type="password"
              label="PASSWORD AGAIN"
              handleChange={this.handleChange}
            />
          </form>

          <CustomButton
            type="submit"
            matter="SIGN-UP"
            onClick={this.handleSignup}
          />
        </div>
      </>
    );
  }
}

export default SignUp;
