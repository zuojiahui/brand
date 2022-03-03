import React from "react";
import "./style.css";
export default function Index() {
  return (
    <div>
      <ul className="pagination modal-5">
        <li>
          <span className="prev fa fa-arrow-left">prev</span>
        </li>
        <li>
          <span>1</span>
        </li>
        <li>
          <span>2</span>
        </li>
        <li>
          <span>3</span>
        </li>
        <li>
          <span>4</span>
        </li>
        <li>
          <span className="active">5</span>
        </li>
        <li>
          <span>6</span>
        </li>
        <li>
          <span>7</span>
        </li>
        <li>
          <span>•••</span>
        </li>
        <li>
          <span>20</span>
        </li>
        <li>
          <span className="next fa fa-arrow-right">next</span>
        </li>
      </ul>
    </div>
  );
}
