import React from "react";
import Logo from "../img/Logo.png";

export default function About() {
  return (
    <div class="wrapper">
      <div class="title">
        <h1>About NOWMUSIC</h1>
      </div>
      <div class="article">
        <p>
          <img class="selfie" alt="NowMusic" src={Logo}></img>
        </p>

        <p>
          <strong>NOWMUSIC</strong>은 SW캡스톤디자인 프로젝트를 위해 제작된
          웹페이지이다. 사용자의 그날그날 기분에 맞춰 음악 추천을 해 주는
          사이트이다.
        </p>
      </div>
    </div>
  );
}
