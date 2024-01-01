"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>TypeScript</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>MongoDB</li>
        <li>Redux</li>
        <li>Prisma</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>International Islamic University Chittagong</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Programming-Hero</li>
        <li>DataCamp</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-5xl font-bold text-teal-400 mb-4 mt-6">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            Hi, I’m Kasib Mohammad Chowdhury. I’m a passionate and dedicated web
            developer working in this industry for more than 1 years and studied
            at programming hero.com. Looking to join an organization where I can
            utilize my skills in web development. I am a fast-building developer
            who works well in a team. I have worked with data structures and I
            am really interested in algorithms and high-level technologies. I
            have very good visual thinking skills also a very organized
            developer. I have worked with real clients in real-time directly
            speaking to them and getting the work done as per requirement.
            Overall my development skills and my personality are very stable. I
            can code very efficiently and I like to bring creativity to my work.
            I want to be an expert programmer with various kinds of skills and
            hope to join one of the leading tech companies.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
