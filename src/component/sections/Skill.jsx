import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import "../../style/style.scss";

export default function Skill() {
  return (
    <div className="skill-wrapper" id="skills">
      <div className="skill">
        <div className="header">Skills & Experiences</div>
        <div className="content">
          <div className="framework-tool-container">
            <div className="framework-tool">
              <div className="title">Framework</div>
              <div className="framework-tool-container">
                <div className="framework-tool-item">
                  <div className="display">
                    <img
                      src="https://blog.knoldus.com/wp-content/uploads/2021/10/django-logo-big-removebg-preview.png"
                      alt=""
                      className="display-img"
                    />
                  </div>
                  <div className="name">Django</div>
                </div>
                <div className="framework-tool-item">
                  <div className="display">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                      alt=""
                      className="display-img"
                    />
                  </div>
                  <div className="name">Node.js</div>
                </div>
                <div className="framework-tool-item">
                  <div className="display">
                    <img
                      src="	https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                      alt=""
                      className="display-img"
                    />
                  </div>
                  <div className="name">React</div>
                </div>
                <div className="framework-tool-item">
                  <div className="display">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
                      alt=""
                      className="display-img"
                    />
                  </div>
                  <div className="name">Bootstrap</div>
                </div>
                <div className="framework-tool-item">
                  <div className="display">
                    <img
                      src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
                      className="display-img"
                    />
                  </div>
                  <div className="name">Express.js</div>
                </div>
                <div className="framework-tool-item">
                  <div className="display">
                    <img
                      src="https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png"
                      alt=""
                      className="display-img"
                    />
                  </div>
                  <div className="name">Redux</div>
                </div>
                <div className="framework-tool-item">
                  <div className="display">
                    <img
                      src="https://ww2.freelogovectors.net/wp-content/uploads/2023/05/aws-logo-freelogovectors.net_.png"
                      alt=""
                      className="display-img"
                    />
                  </div>
                  <div className="name">AWS</div>
                </div>
                <div className="framework-tool-item">
                  <div className="display">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
                      alt=""
                      className="display-img"
                    />
                  </div>
                  <div className="name">Angular</div>
                </div>
              </div>
            </div>
            <div className="framework-tool">
              <div className="title">Tool</div>
              <div className="framework-tool-container">
                <div className="framework-tool-item">
                  <div className="display">
                    <img
                      src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                      alt=""
                      className="display-img"
                    />
                  </div>
                  <div className="name">Git</div>
                </div>
                <div className="framework-tool-item">
                  <div className="display">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/800px-Three.js_Icon.svg.png"
                      alt=""
                      className="display-img"
                    />
                  </div>
                  <div className="name">Three.js</div>
                </div>
                <div className="framework-tool-item">
                  <div className="display">
                    <img
                      src="https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-vertical.png"
                      alt=""
                      className="display-img"
                    />
                  </div>
                  <div className="name">Firebase</div>
                </div>
                <div className="framework-tool-item">
                  <div className="display">
                    <img
                      src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
                      alt=""
                      className="display-img"
                    />
                  </div>
                  <div className="name">MongoDB</div>
                </div>
                <div className="framework-tool-item">
                  <div className="display">
                    <img
                      src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png"
                      alt=""
                      className="display-img"
                    />
                  </div>
                  <div className="name">MySQL</div>
                </div>
                <div className="framework-tool-item">
                  <div className="display">
                    <img
                      src="https://1000logos.net/wp-content/uploads/2021/05/Atlassian-Logo-2010s1.png"
                      alt=""
                      className="display-img"
                    />
                  </div>
                  <div className="name">Jira</div>
                </div>
              </div>
            </div>
          </div>
          <div className="timeline-container">
            <div className="timeline">
              <Timeline>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    02/2024- current
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <div className="dot-circle">
                      <img
                        src="https://i.pinimg.com/originals/b9/6b/f8/b96bf8680383ae47339bfea25f7e806a.gif"
                        alt=""
                        className="dot-circle-img"
                      />
                    </div>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="company-name">Restate Homes Mortgage</div>
                    <div className="company-detail">
                      <div className="position">Full Stack Developer</div>
                      <div className="location">San Jose, CA</div>
                    </div>
                    <ul className="bullets">
                      <li className="bullet">
                        Integrated OpenAI API to automate the extraction of
                        pertinent information from client documents, enhancing
                        data processing efficiency and accuracy.
                      </li>
                      <li className="bullet">
                        Analyzing and computing essential data derived from
                        documents using OpenAI API, facilitating data-driven
                        decision-making processes
                      </li>
                      <li className="bullet">
                        Utilized programming skills in JavaScript and React
                        framework to create dynamic web pages with real-time
                        data visualization of extracted and computed data.
                      </li>
                    </ul>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    10/2023 - 12/2023
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <div className="dot-circle">
                      <img
                        src="https://i.pinimg.com/originals/b9/6b/f8/b96bf8680383ae47339bfea25f7e806a.gif"
                        alt=""
                        className="dot-circle-img"
                      />
                    </div>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="company-name">Innoworld Inc</div>
                    <div className="company-detail">
                      <div className="position">
                        FrontEnd Developer (Internship)
                      </div>
                      <div className="location">Redwood City, CA</div>
                    </div>
                    <ul className="bullets">
                      <li className="bullet">
                        Designed and developed a full-stack web application for
                        retail small business with features including user
                        management, product order and payment using MERN stack.
                        Designed and implemented RESTful APIs, mapping HTTP
                        methods for efficient and reusable routes, with CRUD
                        actions on MongoDB using Node.js.
                      </li>
                      <li className="bullet">
                        Constructed MongoDB databases for user and order related
                        data and created data models with Mongoose and data
                        validation to prevent errors. Implemented JWT-based user
                        authentication and secured validation for
                        client-submitted data, and addressed password encryption
                        for user registration under Node.js.
                      </li>
                      <li className="bullet">
                        Utilized JavaScript within the React framework to
                        implement dynamic client-side pages with reusable
                        components including (navigation, navlink, comment bar,
                        etc.).
                      </li>
                      <li className="bullet">
                        Utilized React Hooks to manage component state and
                        lifecycle in functional components; optimized rendering
                        performance with useCallback, reduce response time by 8%
                      </li>
                    </ul>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="text.secondary">
                    08/2020 - 08/2022
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <div className="dot-circle">
                      <img
                        src="https://i.pinimg.com/originals/b9/6b/f8/b96bf8680383ae47339bfea25f7e806a.gif"
                        alt=""
                        className="dot-circle-img"
                      />
                    </div>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="company-name">LoanFactory</div>
                    <div className="company-detail">
                      <div className="position">
                        Mortgage Originator (NMLS: 2081199)
                      </div>
                      <div className="location">San Jose, CA</div>
                    </div>
                    <ul className="bullets">
                      <li className="bullet">
                        Primary focus in structuring the mortgage to submit it
                        to the lender system and not limit to structure it but
                        also underwriting the loan.
                      </li>
                      <li className="bullet">
                        Assisted clients with completion of loan applications,
                        advising on pricing information required and regulated
                        by law and identifying programs best suited to the
                        clients
                      </li>
                      <li className="bullet">
                        Analyzed applicant financial and credit status,
                        evaluating assets and risk to determine loan
                        feasibility. Development and implementation of
                        regulation and procedure – Loan structure, processing,
                        underwriting and post-losing.
                      </li>
                    </ul>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
