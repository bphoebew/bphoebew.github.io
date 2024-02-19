import React from "react";
import styles from "../styles/projectpage.module.css";
import ProjectSlideshow from "./ProjectSlideshow";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import "@fortawesome/fontawesome-free/css/all.min.css";

interface projectDetail {
  title?: string;
  subtitle?: string;
  descriptions: string[];
}

interface projectLink {
  image: string;
  link: string;
}

interface PageProps {
  projectImages: string[];
  projectName: string;
  projectInfo: string;
  projectDetails: Array<projectDetail>;
  projectLinks?: Array<projectLink>;
}

const ProjectPage: React.FC<PageProps> = ({
  projectImages,
  projectName,
  projectInfo,
  projectDetails,
  projectLinks,
}) => {
  return (
    <div className={styles.frontInfo}>
      <div className={styles.leftProj}>
        <h1 className={styles.headText}>{projectName}</h1>
        <p className={styles.headPText}>{projectInfo}</p>
        {projectDetails.map((project) => (
          <div key={project.title}>
            <h1 className={styles.projPurposeHText}>{project.title}</h1>
            <b className={styles.headBText}>{project.subtitle}</b>
            {project.descriptions.map((projectText) => (
              <p key={projectText} className={styles.headPText}>
                {projectText}
              </p>
            ))}
          </div>
        ))}
        {projectLinks && (
          <div className={styles.contactBar}>
            {projectLinks.map((info, index) => (
              <button key={index} className={styles.projLinkBut}>
                <a href={info.link} target="_blank">
                  <img
                    className={styles.websiteProj}
                    src={info.image}
                    alt={`Project ${index}`}
                  />
                </a>
              </button>
            ))}
          </div>
        )}
      </div>
      <div className={styles.rightProj}>
        <ProjectSlideshow images={projectImages} />
        {/* <img
          className={styles.projectPic}
          id="pseudoPic"
          src="/pseudoHead.png"
        />
        <div className={styles.projectRect}></div>
        <div className={styles.buttonBar}>
          <button className={styles.arrowPic}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className={styles.arrowPic}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectPage;
