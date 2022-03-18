import React from "react";
import "./style.css";
export default function Index(props) {
  const { type = "" } = props;
  const buttonType = () => {
    if (type === "primary") return "blue";
    if (type === "success") return "green";
    if (type === "warning") return "sun";
    if (type === "danger") return "salmon";
    if (type === "dark") return "dark";
    return "regular";
  };
  return (
    <button className={`button center ${buttonType()}`}>
      <span>Let's start</span>
    </button>
  );
}
