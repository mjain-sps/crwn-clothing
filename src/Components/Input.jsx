import React, { useState } from "react";
import "../CSS/input.css";
function Input({ name, label, type, value, handleChange }) {
  return (
    <>
      <div className="input-wrapper">
        <input
          name={name}
          type={type}
          className="input-box"
          onChange={handleChange}
        />
        <label
          htmlFor={name}
          className={value ? "shrink-label input-label" : "input-label"}
        >
          {label}
        </label>
      </div>
    </>
  );
}

export default Input;
