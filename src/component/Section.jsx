import React from "react";
import "../css/search.css";
// import choonsic_Heart from "../img/HeartChoonsic.png";

export default function Section() {
  return (
    <section>
      {/* 검색창 */}
        <div className="search_box">
          <input type="search" id="search" placeholder="찾고 싶은 노래를 검색하세요"/>
          <button>검색</button>
        </div>
    </section>
  );
}
