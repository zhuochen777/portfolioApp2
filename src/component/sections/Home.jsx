import React from "react";
import "../../style/style.scss";
import portrait from "../../images/portrait.png";

export default function Home() {
  return (
    <div className="home-wrapper" id="home">
      <div className="home">
        <div className="intro-wrapper">
          <div className="intro">
            <div className="intro-top">
              <div className="hello">👋</div>
              <div className="intro-detail">
                <div className="detail-top">Hello, I am</div>
                <div className="detail-bottom">Zhuo</div>
              </div>
            </div>
            <ul className="intro-bottom">
              <li className="dev-name">Web Developer</li>
              <li className="dev-name">Front-End Developer</li>
              <li className="dev-name">React Developer</li>
              <li className="dev-name">Full-Stack Developer</li>
              <li className="dev-name">Back-End Developer</li>
            </ul>
          </div>
        </div>
        <div className="portrait">
          <div>
            <img
              src={portrait}
              alt="zhuo-img"
              className="portrait-img"
            />
          </div>
          <img
            src="https://erisportfolio.netlify.app/static/media/circle.2c5eeaff4fd997ef8350.jpg"
            alt="zhuo-img-bg"
            className="portrait-bg"
          />
        </div>
        <div className="languages">
          <div className="lang-circle">
            <img
              src="https://allinone-academy.com/images/course/SQL_Academy.png"
              alt="lang-img"
            />
          </div>
          <div className="lang-circle">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
              alt="lang-img"
            />
          </div>
          <div className="lang-circle">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
              alt="lang-img"
            />
          </div>
          <div className="lang-circle">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png"
              alt="lang-img"
            />
          </div>
          <div className="lang-circle">
            <img
              src="https://www.computerhope.com/jargon/j/javascript.png"
              alt="lang-img"
            />
          </div>
          <div className="lang-circle">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
              alt="lang-img"
            />
          </div>
          <div className="lang-circle">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/800px-Python_logo_01.svg.png"
              alt="lang-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
