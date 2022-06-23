import React from "react";
import { Link } from "react-router-dom";
import "../css/test.css";

//class = > className
export default function Header() {
  let styled = {
    width: "100px",
    height: "200px",
    backgroundColor: "black",
  };
  return (
    <header>
      <nav>
        {/* Link 태그는 A태그로 바뀌어 적용됨  상단에 import Link from 필수 -- 2번 줄 참조 */}
        <Link to="/">Go home</Link>
        <Link to="/1">Section 1</Link>
        <Link to="/2">Section 2</Link>
      </nav>
      <div id="adwadw" style={styled}>
        dadwdadacziojcaw
      </div>
    </header>
  );
}
