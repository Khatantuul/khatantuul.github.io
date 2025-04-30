import ExperienceCard from "./Card";

export default function Projects() {
  return (
    <div id="page">
      <div>
        <h1>experience. </h1>
        <ExperienceCard
          timePeriod={"2024 - Present"}
          jobTitle={"Full Stack developer"}
          workPlace={"Know Corp"}
          skills={["React", "Redux", "TypeScript","Python", "Node.js","FastAPI", "ElasticSearch"]}
        >
          Built a web application that leverages AI and custom machine learning
          models to generate mnemonic stories and vivid imagery, featuring an
          intuitive, interactive feed-style layout users can explore concepts
          and related mnemonic visuals through both horizontal and vertical
          navigation.
        </ExperienceCard>
        <ExperienceCard
          timePeriod={"May 2023 - Sep 2023"}
          jobTitle={"Full Stack Developer"}
          workPlace={"care.com"}
          skills={["TypeScript", "React", "Redux", "MUI", "CSS"]}
        >
          Developed and maintained a tabbed dashboard interface for an online marketplace for managing family care.
Collaborated with cross-functional teams to implement features that improved the caregiver hiring
experience, including status tracking.
        </ExperienceCard>
        <ExperienceCard
          timePeriod={"2018 - 2022"}
          jobTitle={"Application Developer"}
          workPlace={"Rio Tinto Mongolia"}
          skills={[
            "JavaScript",
            "React",
            "ExpressJS",
            "PostgreSQL",
            "ServiceNow",
            "MaterialUI",
            "Microsoft Graph API",
            "Microsoft Power Plattform",
          ]}
        >
          Built and maintained a secure ticket management system for processing
          project budget and accounting service tickets from Rio Tinto global
          operations. Collaborated with cross-functional teams to ensure compliance with internal audit and security requirements. 
Self-initiated the development of low-code automation using Microsoft Power Platform to complement the
core application, enabling parallel processing of supplementary requests.
        </ExperienceCard>
        <ExperienceCard
          timePeriod={"2016 - 2018"}
          jobTitle={"Front End Developer"}
          workPlace={"Monlogistics Worldwide"}
          skills={["JavaScript", "HMTL", "CSS", "jQuery", "Bootstrap", "AJAX"]}
        >
          Worked on building a web-based Global Shipment Tracking System to
          improve customer transparency and internal operations. Designed modular UI components for tracking milestones, estimated delivery timelines, and exception alerts
        </ExperienceCard>
        {/* <div>
          <p className="intro">AI-Powered Learning App </p>
          <p>
            The web application leverages AI and custom machine learning models
            to generate mnemonic stories and vivid imagery, enhancing memory
            retention for a wide range of learners. Featuring an intuitive,
            interactive feed-style layout, users can explore concepts and
            related mnemonic visuals through both horizontal and vertical
            navigation.
          </p>
          <ul
            style={{
     
              lineHeight: 1.6,
            }}
          >
            <li>
              Designed and developed a responsive Single Page Application (SPA)
              using React.js, Redux, and TypeScript, including a home feed with
              content cards, user dashboards, and progress tracking with smooth
              client-side routing.
            </li>
            <li>
              Integrated OpenAI APIs and custom machine learning models to
              deliver context-aware mnemonic content through dynamic flashcard
              interfaces built with reusable React Hooks.
            </li>
            <li>
              Implemented infinite scroll and intelligent search experiences for
              seamless content discovery, reducing load interruptions and
              enhancing user engagement.
            </li>
            <li>
              Built secure, token-based authentication flows using JWT and
              managed session state with Redux Thunk middleware, ensuring robust
              user access control and session persistence.
            </li>
            <li>
              Maintained 90%+ test coverage with unit and integration tests
              using Jest, while also contributing to a seamless user experience
              with graceful error handling, fallback UIs, and Agile sprint
              collaboration.
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
