import React from "react";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import Link from "next/link";

import "@fortawesome/fontawesome-free/css/all.min.css";

interface CardProps {
  projectImage: string;
  projectName: string;
  projectTools: string[];
  projectInfo: string;
  projectWebLink?: string;
  projectPage: string;
}

const ProjectCard = ({
  projectImage,
  projectName,
  projectTools,
  projectInfo,
  projectWebLink,
  projectPage,
}: any) => {
  return (
    <div className={styles.card}>
      <Image
        src={projectImage}
        alt="Logo"
        className={styles.imageproject}
        width={500}
        height={500}
        priority
      />
      <p className={styles.projText}>{projectName}</p>
      <div className={styles.projTools}>
        {projectTools.map((tool, index) => (
          <p key={index} className={styles.projTool}>
            {tool}
          </p>
        ))}
      </div>
      <p className={styles.projInfo}>{projectInfo}</p>
      <div className={styles.projBar}>
        {projectWebLink && (
          <a
            className={styles.webProjLink}
            href={projectWebLink}
            target="_blank"
          >
            <i className="fa-solid fa-globe"></i>
          </a>
        )}
        <Link
          className={
            projectWebLink
              ? styles.viewMoreLink
              : styles.viewMoreLinkNoProjectLink
          }
          href={projectPage}
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
