import React from "react";
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";

function AuthPage() {
  return (
    <div className="authpage-wrapper">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default AuthPage;
