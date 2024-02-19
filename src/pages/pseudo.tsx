import Link from "next/link";
import Header from "@/components/Header";
import ProjectPage from "@/components/ProjectPage";
import Head from "next/head";

interface projectDetail {
  title: string;
  descriptions: string[];
}

interface projectLink {
  image: string;
  link: string;
}

const data: projectDetail[] = [
  {
    title: "Inspiration & Purpose:",
    descriptions: [
      "500,000 online predators are active daily and 20% of teenagers have received unwanted sexual solicitation on the web. 1 in 25 children have been lured to meet predators offline, where they are kidnapped or used for sexual services.",
      "The interactive game allows for users to learn and seek techniques that online predators use for their targets.",
    ],
  },
];

const projectLink: projectLink[] = [
  {
    image: "/websitePic.jpeg",
    link: "https://bphoebew.github.io/pseudo/",
  },
  {
    image: "/processImage.svg",
    link: "https://docs.google.com/presentation/d/1A5AwHTxKDnOswMHOeJK0Ra8c1GIEyZ8aV--oZil5vE8/edit?usp=sharing",
  },
];

export default function Pseudo() {
  return (
    <>
      <Head>
        <title>pseudo | bphoebew</title>
      </Head>
      <Header />
      <ProjectPage
        projectImages={[
          "/pseudoHead.png",
          "/pseudoPage2.png",
          "/pseudoPage3.png",
          "/pseudoPage4.png",
        ]}
        projectName="PSEUDO"
        projectInfo="A storytelling game in which users interact with fictional characters to find out which characters are catfishers"
        projectDetails={data}
        projectLinks={projectLink}
      />
    </>
  );
}
