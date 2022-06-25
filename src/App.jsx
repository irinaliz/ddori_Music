import { useState } from "react";
import "./css/reset.css";
import { Route, Link, Routes } from "react-router-dom";
import Header from "./component/Header";
import Section from "./component/Section";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";

function App() {
  return (
    <div>
      <Header />   {/* 헤더 */}
      <Section />  {/* 검색 */}
      <Section1 /> {/* 이번주 베스트 곡 */}
      <Section2 /> {/* 최근들은 곡 */}
      <Section3 /> {/* 플레이어 */}

      {/* 추후 확인 후 작업할 예정 */}
      {/* <Routes>
        
      </Routes> */}
    </div>
  );
}

export default App;
