import React, { useState } from "react";
import styles from "../styles/projectpage.module.css";

interface ProjectSlideshowProps {
  images: string[];
}

const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <img className={styles.projectPic} src={images[currentIndex]} />
      <div className={styles.projectRect}></div>
      {images.length !== 1 && (
        <div className={styles.buttonBar}>
          <button className={styles.arrowPic} onClick={handlePrevClick}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className={styles.arrowPic} onClick={handleNextClick}>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectSlideshow;
