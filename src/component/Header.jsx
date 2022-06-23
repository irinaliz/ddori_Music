import React from "react";
import { Link } from "react-router-dom";
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
        <h1 className="logo">ddori Music</h1>
        <div className="box">
          <input type="search" id="search" placeholder="찾고 싶은 노래를 검색하세요"/>
          <button>검색</button>
        </div>
        <div className="user">
          <Link to="/">Login</Link>
        </div>
      </header>
    </div> //wrap
  );
}
