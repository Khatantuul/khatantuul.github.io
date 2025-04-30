import React, { useState } from 'react';

export default function ExperienceCard({children, timePeriod, jobTitle, workPlace, skills}) {
  const [isHovered, setIsHovered] = useState(false);
  
//   const skills = [
//     "JavaScript", "TypeScript", "HTML & SCSS", "React", 
//  , "Node.js", "FastAPI", "ElasticSearch"
//   ];
  
  return (
    <div 
      className="experience-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="time-period">{timePeriod}</div>
      
      <div className="title-container">
        <h3 className="job-title">{workPlace}</h3>
        {/* <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          className={`arrow-icon ${isHovered ? 'arrow-hovered' : ''}`}
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg> */}
      </div>
      
      <div className="previous-roles">
        <div className="role">{jobTitle}</div>
        {/* <div className="role">Engineer</div> */}
      </div>
      
      <p className="job-description">
      {children}
      </p>
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}