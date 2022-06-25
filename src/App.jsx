import { useState } from "react";
import "./css/reset.css";
import { Route, Link, Routes } from "react-router-dom";
import Header from "./component/Header";
import Section from "./component/Section";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/1" element={<Section1 />} />
        <Route path="/2" element={<Section2 cate="Hello!!" />} />
      </Routes>
    </div>
  );
}

export default App;
