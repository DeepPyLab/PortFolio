import React, { useState, useContext, useEffect } from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const styleContext = useContext(StyleContext);

  // Always default to dark mode, no matter what is in localStorage
  const [isChecked, setChecked] = useState(true); // Dark mode is always the default

  // Apply theme based on toggle switch state
  useEffect(() => {
    if (isChecked) {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
      styleContext.changeTheme("dark");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
      styleContext.changeTheme("light");
    }
  }, [isChecked, styleContext]);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={!isChecked} // Inverse logic: checked when it's light theme
        onChange={() => setChecked(!isChecked)} // Toggle the theme
      />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji("🌜") : emoji("☀️")}</span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
