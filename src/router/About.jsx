import { Form } from "react-router-dom";

export default function About() {

  return (
    <div id="page">
      <div>
        <h1>about. </h1>
        <p className="intro">I'm a full stack developer based in Boston, MA.</p>
        <p className="description">
          With 8 years of professional experience, I’ve worked across industries
          such as logistics, mining, and most recently, a fast-paced tech
          startup. In these roles, I’ve focused on building internal platforms
          and user-facing applications that drive efficiency, streamline
          operations, and enhance productivity.
        </p>
        {/* <div className="tech-stack">
          <h1>tech stack.</h1>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              // marginBottom: "3.2rem",
              lineHeight: "1.5",
              columnCount: 3,
            }}
          >
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>NextJS</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Java/Spring Boot</li>
            <li>Python/FastAPI</li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
