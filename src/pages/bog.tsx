import Link from "next/link";
import Header from "@/components/Header";
import ProjectPage from "@/components/ProjectPage";
import Head from "next/head";

interface projectDetail {
  title?: string;
  subtitle?: string;
  descriptions: string[];
}

interface projectLink {
  image: string;
  link: string;
}

const data: projectDetail[] = [
  {
    title: "Role:",
    descriptions: [
      "At Bits of Good, I work as a developer who helps code up the web apps. Being with this organization since freshman year, I have worked with an organization called Helping Mamas that serves as a baby bank for women and new mothers in need.",
      "Technologies include: Next.js, React, Tailwind CSS",
    ],
  },
];

const projectLink: projectLink[] = [
  {
    image: "/websitePic.jpeg",
    link: "https://bitsofgood.org/",
  },
];

export default function bog() {
  return (
    <>
      <Head>
        <title>bits of good | bphoebew</title>
      </Head>
      <Header />
      <ProjectPage
        projectImages={["/bits-of-good.jpeg"]}
        projectName="Bits of Good"
        projectInfo="A student organization that develops web applications for local non-profits in Atlanta and promotes social good"
        projectDetails={data}
        projectLinks={projectLink}
      />
    </>
  );
}
