import Image from "next/image";
import styles from "../styles/pages.module.css";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>home | bphoebew</title>
      </Head>
      <Header />

      <div className={styles.frontInfo}>
        <div className={styles.left}>
          <h1 className={styles.headText}>hi, i'm phoebe!</h1>
          <div className="list">
            <p className={styles.subText}>currently:</p>
            <ul className={styles.ul}>
              <li className={styles.li}>
                a graduate from computational media @ georgia tech
              </li>
              <li className={styles.li}>watching "devil's plan" on netflix</li>
              <li className={styles.li}>wanting to embroider something cool</li>
              <li className={styles.li}>
                vibing to onerepublic's "secrets" & "good life"
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.coverPhoto}>
          <Image
            src="/coverphoto.jpeg"
            alt="Logo"
            className={styles.profile}
            width={500}
            height={500}
            priority
          />
          <div className={styles.profileRect}></div>
        </div>
      </div>

      <div className={styles.aboutInfo}>
        <h1 className={styles.headText} id="aboutAnchor">
          about me
        </h1>
        <div className={styles.flexRow}>
          <div className={styles.left}>
            <div className={styles.aboutTotal}>
              <img className={styles.aboutPic} src="/about.gif" />
              <div className={styles.aboutRect}></div>
            </div>
          </div>
          <div className={styles.textAboutInfo}>
            <p className={styles.subText}>
              21 year old girl who likes designing and coding things for social
              good, reading romantic novels, & watching kdramas
            </p>
            <p className={styles.subText}>
              come join me as explore the world of tech :)
            </p>
          </div>
        </div>
      </div>

      <div className={styles.projectInfo}>
        <div className={styles.flexCol}>
          <h1 className={styles.headText} id="worksAnchor">
            some things i've <br />
            worked on
          </h1>
          <section className="section">
            <div className={styles.cardsWrapper}>
              <ProjectCard
                projectImage="/pseudoHead.png"
                projectName="PSEUDO"
                projectTools={["JS", "HTML", "CSS"]}
                projectInfo="A storytelling game in which users interact with fictional
        characters to find out which characters are catfishers"
                projectWebLink="https://bphoebew.github.io/pseudo/"
                projectPage="./../pseudo"
              />
              <ProjectCard
                projectImage="/bear_embroidery.jpeg"
                projectName="GT Crafts"
                projectTools={["Sewing", "Wood", "Pottery"]}
                projectInfo="Personal projects that I have made throughout my time at Georgia Tech that involve sewing, embroidery, pottery, 3d printing, etc."
                projectPage="./../crafts"
              />
              <ProjectCard
                projectImage="/bits-of-good.jpeg"
                projectName="Bits of Good"
                projectTools={["React", "Next.JS"]}
                projectInfo={
                  <>
                    A non-profit student organization that develops web
                    applications for local non-profits in Atlanta.
                    <br />
                    <br />
                  </>
                }
                projectWebLink="https://bitsofgood.org/"
                projectPage="./../bog"
              />
              <ProjectCard
                projectImage="/hexlabs.jpeg"
                projectName="Hexlabs"
                projectTools={["UX/UI", "Figma"]}
                projectInfo={
                  <>
                    A non-profit student organization that coordinates
                    large-scale events from hackathons to learn events for the
                    community of Atlanta.
                    <br />
                  </>
                }
                projectWebLink="https://hexlabs.org/"
                projectPage="./../hexlabs"
              />
            </div>
          </section>
          <div className={styles.buttonTotal}>
            <p className="scrollMoreButton">Scroll Cards for More &nbsp;</p>
            <div className={styles.arrowButton}>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contactInfo}>
        <h1 className={styles.headText} id="contactAnchor">
          contact me
        </h1>
        <p className={styles.contactSub}>let’s connect and chat :)</p>
        <div className={styles.contactBar}>
          <button className={styles.socialBut}>
            <a href="https://github.com/bphoebew" target="_blank">
              <img className={styles.github} src="github.png" />
            </a>
          </button>
          <button className={styles.socialBut}>
            <a href="https://www.instagram.com/phoebeslab" target="_blank">
              <img className={styles.IG} src="instagram.png" />
            </a>
          </button>
          <button className={styles.socialBut}>
            <img className={styles.mail} src="mail.png" />
          </button>
          <button className={styles.socialBut}>
            <a
              href="https://www.linkedin.com/in/phoebe-wongphatarakul/"
              target="_blank"
            >
              <img className={styles.in} src="linkedin.png" />
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}
