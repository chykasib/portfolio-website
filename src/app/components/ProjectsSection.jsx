"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "HelloTalk-Team Project",
    description:
      "Learning panel for users to level up by finishing levels p A community forum for learners to post about queries and learnings p p Admin Dashboard with multiple features for admins to manage the app",
    image: "/images/projects/team.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/the-code-wizards/hello_talk_client/",
    previewUrl: "https://hello-talk-client.vercel.app/",
  },
  {
    id: 2,
    title: "Keystone Cse Courses",
    description:
      "Single educational learning website.Users can log in via Google, GitHub, or the email password system.If the user login then the user downloads the course outline.",
    image: "/images/projects/keystone.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chykasib/learning-client-side-repo",
    previewUrl: "https://learning-cse.web.app/",
  },
  {
    id: 3,
    title: "T-phone-reseller-shop",
    description:
      "A Seller login by email and password The user can add and delete any product if the admin verifies the seller Full Website controlled by admin Admin can delete any user or seller.",
    image: "/images/projects/resale.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/chykasib/cloud-kitchen-client-repo",
    previewUrl: "https://t-phone-reseller-shop.web.app/",
  },
  {
    id: 4,
    title: "Service Review Website",
    description:
      "Users can log in by GitHub, google, or email-password system.If the user logs in, the user can add a review, see his/her review,and delete the review.",
    image: "/images/projects/service.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/chykasib/cloud-kitchen-client-repo",
    previewUrl: "https://rock-cloud-kitchen.web.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
