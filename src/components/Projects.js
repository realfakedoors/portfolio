import React, { useState } from "react";

import projectData from "../assets/project-data";

const Projects = () => {
  const [modal, setModal] = useState(null);

  function showModal(photo, projectName) {
    setModal(
      <div className="modal is-active" onClick={() => setModal(null)}>
        <div className="modal-background"></div>
        <div className="modal-content">
          <img src={photo} alt={`screenshot from ${projectName}`} />
        </div>
      </div>
    );
  }

  return (
    <div className={"projects"}>
      {projectData.map((project, i) => {
        return (
          <div className={"project media"} key={i}>
            <nav className="level">
              <div className="level-left">
                <h6 className={"level-item title-font project-name"}>
                  {project.projectName}
                </h6>
              </div>
              <div className="level-right">
                <div className="level-item">
                  {project.liveUrl && (
                    <a
                      className="button is-success uppercase"
                      href={project.liveUrl}
                      alt="Live Site"
                      target={"_blank"}
                      rel={"noopener noreferrer"}
                    >
                      Live
                    </a>
                  )}
                </div>
                <div className="level-item">
                  <a
                    className="button is-info uppercase github-source-button"
                    href={project.repoUrl}
                    alt="Github Repository"
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                  >
                    source
                  </a>
                </div>
              </div>
            </nav>
            <div className={"project-content"}>
              <div className={"photo-gallery"}>
                {project.screenshots.map((photo, i) => {
                  return (
                    <img
                      key={i}
                      className={"screenshot image is-128x128"}
                      src={photo}
                      alt={`screenshot of ${project.projectName}`}
                      onClick={() => showModal(photo, project.projectName)}
                    />
                  );
                })}
              </div>
              <div className={"thoughts"}>{project.thoughts}</div>
            </div>
          </div>
        );
      })}
      {modal}
    </div>
  );
};

export default Projects;
