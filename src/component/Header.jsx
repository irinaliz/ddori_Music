import React from "react";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import "../css/style.css";


//class = > className
export default function Header() {
  // let styled = {
  //   width: "100px",
  //   height: "200px",
  //   backgroundColor: "black",
  // };
  return (
    <div id="wrap">
      <header>
        <h1 className="logo">
          <Link to="/">DDORI Music</Link>
        </h1>
        <div className="right_items">
          <div className="user">
            <Link to="/">Login</Link>
          </div>
          <div className="toggle-btn">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </header>
    </div> //wrap
  );
}
