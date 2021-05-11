import React from "react";
import "../CSS/custom-button.css";
function CustomButton({ type, matter, googleSignIn, onClick }) {
  return (
    <>
      <button
        className={
          googleSignIn ? "google-sign-in custom-button" : "custom-button"
        }
        type={type}
        onClick={onClick}
      >
        {matter}
      </button>
    </>
  );
}

export default CustomButton;
