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
    title: "Role:",
    descriptions: [
      "As a senior designer at Hexlabs, I focus on creating interactive and inviting experience for the 1000+ participants that come to our events. From this organization, some projects that I have worked on include UX/UI design, graphic design, UX research, and more. I also focus on mentoring younger designers and giving feedback.",
      "Some of my favorite projects that I have done include creating a t-shirt design for Catalyst, an event focused on introducing high school students to STEM, and hackgt badges, in which were worn at our biggest scale event with 1000 people. If you are interested in other works I have, I created a Figma file with an archive of my work at Hexlabs!",
    ],
  },
];

const projectLink: projectLink[] = [
  {
    image: "/websitePic.jpeg",
    link: "https://hexlabs.org/",
  },
  {
    image: "/figma.png",
    link: "https://www.figma.com/file/0x0glh0uLpWCYyuPTd9xbT/an-archive-of-phoebe's-hackgt-work-!?type=design&node-id=3%3A11&mode=design&t=CC96L3XXG2XgWyCJ-1",
  },
];

export default function Pseudo() {
  return (
    <>
      <Head>
        <title>hexlabs | bphoebew</title>
      </Head>
      <Header />
      <ProjectPage
        projectImages={[
          "/hexlabs.jpeg",
          "/hackgtBadge.png",
          "/hackgtx.png",
          "/hackgtx_sweatshirt.png",
        ]}
        projectName="Hexlabs"
        projectInfo="A non-profit student organization that coordinates large-scale events from hackathons to learn events for the community of Atlanta"
        projectDetails={data}
        projectLinks={projectLink}
      />
    </>
  );
}
