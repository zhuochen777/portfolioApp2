import React from "react";
import "../../style/style.scss";

export default function About() {

  return (
    <div className="about-wrapper" id="about">
      <div className="about">
        <div className="about-content">
          <div className="about-header">
            I Know That <span> Good Development</span>
            <br />
            Means <span> Good Developer</span>
          </div>
          <div className="about-components">
            <div className="about-item">
              <img
                src="https://cdn.dribbble.com/users/1976394/screenshots/12320091/media/9858af9bd271e68f3710fa10ff26af41.gif"
                alt=""
                className="about-img"
              />
              <div className="about-title">Web Developer</div>
              <div className="about-desc">
                My approach to web development is centered around understanding
                and meeting the user's needs. I prioritize creating intuitive,
                accessible, and responsive designs that ensure a seamless
                experience on any device.{" "}
              </div>
            </div>
            <div className="about-item">
              <img
                src="https://photocatch.netlify.app/static/media/02.acb7a293951ddb5435f2.gif"
                alt=""
                className="about-img"
              />
              <div className="about-title">Front-End Developer</div>
              <div className="about-desc">
                My expertise is centered around creating visually appealing and
                intuitive user interfaces, using HTML5, CSS3, JavaScript, and
                advanced frameworks such as React.js and Vue.js. I specialize in
                translating complex design concepts into seamless and responsive
                user experiences, ensuring compatibility across various browsers
                and devices.{" "}
              </div>
            </div>
            <div className="about-item">
              <img
                src="https://photocatch.netlify.app/static/media/03.a2433a2de55434566b5a.gif"
                alt=""
                className="about-img"
              />
              <div className="about-title">React Developer</div>
              <div className="about-desc">
                My expertise in React.js is complemented by a deep understanding
                of its core principles, such as state management, and the
                virtual DOM.
              </div>
            </div>
            <div className="about-item">
              <img
                src="https://cdn.dribbble.com/users/1976394/screenshots/5609158/media/3f7336aa595e4534a053364681c7cbab.gif"
                alt=""
                className="about-img"
              />
              <div className="about-title">Full-Stack Developer</div>
              <div className="about-desc">
                My expertise lies in designing and building complete web
                solutions that encompass both client-side and server-side
                functionalities.
              </div>
            </div>
            <div className="about-item">
              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f15ba758858037.5a0c4a3961189.gif"
                alt=""
                className="about-img"
              />
              <div className="about-title">Back-End Developer</div>
              <div className="about-desc">
                My expertise lies in creating the backbone of web applications,
                focusing on server logic, database interactions, API
                integration, and the implementation of security measures.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
