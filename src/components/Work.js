import "./workcard.css";

import React from "react";

import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="workcontainer">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {WorkCardData.map((elem, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={elem.imgsrc}
              title={elem.title}
              text={elem.text}
              view={elem.view}
              source={elem.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
