import React from "react";
import "../CSS/custom-button.css";
function CustomButton({
  type,
  matter,
  googleSignIn,
  onClick,
  invert,
  disabled,
}) {
  return (
    <>
      <button
        className={
          googleSignIn
            ? "google-sign-in custom-button"
            : invert
            ? "invert custom-button"
            : "custom-button"
        }
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {matter}
      </button>
    </>
  );
}

export default CustomButton;
