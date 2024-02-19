import Link from "next/link";
import Header from "@/components/Header";
import ProjectPage from "@/components/ProjectPage";
import Head from "next/head";

interface projectDetail {
  title?: string;
  subtitle?: string;
  descriptions: string[];
}

const data: projectDetail[] = [
  {
    title: "Areas of Craft:",
    subtitle: "Embroidery",
    descriptions: [
      "500,000 online predators are active daily and 20% of teenagers have received unwanted sexual solicitation on the web. 1 in 25 children have been lured to meet predators offline, where they are kidnapped or used for sexual services.",
    ],
  },
  {
    subtitle: "Laser Cutter / Woodworking",
    descriptions: [
      "The invention studio provides laser cutting as well as a wood room. Here I've worked with a wood lathe where I've built wood pens and I've also created wood name tags with the laser cutter",
    ],
  },
  {
    subtitle: "Pottery and Ceramics",
    descriptions: [
      "At Paper and Clay, I threw pots on a pottery wheel and then painted them.",
    ],
  },
];

export default function Crafts() {
  return (
    <>
      <Head>
        <title>crafts | bphoebew</title>
      </Head>
      <Header />
      <ProjectPage
        projectImages={[
          "/bear_embroidery.jpeg",
          "/bear_wood.jpeg",
          "/ceramics.jpeg",
          "/miffy_waterjet.jpg",
          "/wood_cut.jpeg",
        ]}
        projectName="Crafts!"
        projectInfo="During my time at Georgia Tech, I utilized spaces such as the Mechnical Engineering's Makerspace Invention Studio and Georgia Tech's Paper and Clay to create personal material projects"
        projectDetails={data}
      />
    </>
  );
}
