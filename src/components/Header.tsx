import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.header}>
      <Link href="/">
        <Image
          src="/phoebeAni.png"
          alt="Logo"
          className={styles.logo}
          width={500}
          height={500}
          priority
        />
      </Link>
      <div className={styles.menu}>
        <Link className="anchor" href="/#aboutAnchor">
          <p className={styles.menuText}>about</p>
        </Link>
        <Link className="anchor" href="/#worksAnchor">
          <p className={styles.menuText}>works</p>
        </Link>
        <Link className="anchor" href="/#contactAnchor">
          <p className={styles.menuText}>contact</p>
        </Link>
        <a
          className="anchor"
          href="resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={styles.menuText}>resume</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
