import React, { useEffect, useState } from "react";
import "../../style/style.scss";
import { sectionIds } from "./sectionIds";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [selectedSection, setSelectedSection] = useState("home");

  //function to smoothly scroll to a section by its id
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      //adjust margin top value as needed
      const scrollToY = window.scrollY + element.getBoundingClientRect().top;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  //function to get the selected section while scrolling
  const getSelectedSection = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          //find current selected section
          setSelectedSection(sectionIds[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      getSelectedSection();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="top-nav">
        <a href="#" className="home-logo">
          <div className="home-name">Zhuo Zone</div>
        </a>
        <ul className="top-nav-list">
          {/* when clicked, first link to /,then execute scrollToSection */}
          {sectionIds.map((sectionId, i) => (
            <li
              key={i}
              onClick={() => {
                scrollToSection(sectionId);
              }}
            >
              <Link to="/">
                <div className="item-wrapper">
                  <div className="dot"></div>
                  <span
                    className={
                      selectedSection === sectionId
                        ? "item-name selected"
                        : "item-name"
                    }
                  >
                    {sectionId}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="side-nav">
        <div className="left-nav">
          <a href="https://www.linkedin.com/in/zhuochen777" target="_blank">
            <div className="socialMedia-link">
              <img
                src="https://cdn.dribbble.com/users/1525393/screenshots/6420056/comp_4.gif"
                alt="linkedin-img"
                className="socialMedia-img"
              />
            </div>
          </a>
          <a href="https://github.com/zhuochen777" target="_blank">
            <div className="socialMedia-link">
              <img
                src="https://cdn.dribbble.com/userupload/2608299/file/original-00f24643a2c18bc04251f7a2019d4743.gif"
                alt="github-img"
                className="socialMedia-img"
              />
            </div>
          </a>
        </div>
        <div className="right-nav">
          <ul className="right-nav-list">
            {sectionIds.map((sectionId, i) => (
              <li key={i} onClick={() => {
                scrollToSection(sectionId);
              }}>
                <Link to="/">
                  <div
                    className={
                      selectedSection === sectionId
                        ? "right-nav-dot selected"
                        : "right-nav-dot"
                    }
                  ></div>
                </Link>
              </li>
            ))}
          </ul>
          {/* <li>
            <a href="/home">
              <div className="right-nav-dot selected"></div>
            </a>
          </li>
          <li>
            <a href="/about">
              <div className="right-nav-dot"></div>
            </a>
          </li>
          <li>
            <a href="/work">
              <div className="right-nav-dot"></div>
            </a>
          </li>
          <li>
            <a href="/skills">
              <div className="right-nav-dot"></div>
            </a>
          </li>
          <li>
            <a href="/contact">
              <div className="right-nav-dot"></div>
            </a>
          </li> */}
        </div>
      </div>
    </div>
  );
}
