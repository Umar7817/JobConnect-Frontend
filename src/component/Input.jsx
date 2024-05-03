import React from "react";

function Input({ handleChange, value, title, name }) {
  return (
    <label className="sidebar-label-container">
      <input type="Radio" value={value} name={name} onChange={handleChange} />
      <span className="checkmark"></span>{title}
    </label>
  );
}

export default Input;
