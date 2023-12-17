"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next Portfolio Website",
    description: "The Next.js personal portfolio is a sleek and responsive web app, highlighting skills and projects. With dynamic content management, it ensures easy updates for showcasing experiences. Featuring a clean design, it includes sections for projects, skills, and contact information, providing a professional online presence.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Spotify Clone Website",
    description: "The Spotify Clone project, developed with Next.js, mirrors Spotify's music streaming features. It leverages the Spotify API for user authentication and real-time playlist, track, and artist information. The application focuses on a responsive design, allowing users to control playback seamlessly. This project serves as a concise yet comprehensive exploration of Next.js and Spotify API integration.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Wellness E-commerce Application",
    description: "Health Hub is a wellness-focused e-commerce platform built with Next.js and react. Tailored for health enthusiasts, it combines a seamless shopping experience with overall well-being. With a user-friendly interface, personalized recommendations, Health Hub stands out as a holistic destination for wellness product enthusiasts.",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/kajal-03/Health_Hub",
    previewUrl: "https://docs.google.com/document/d/1HLb5i8_bxPtcLdgvr0eLCK86QPXlVJEf9lgpkQDYT_Q/edit?usp=sharing",
  },
  {
    id: 4,
    title: "Data collection Application",
    description: "Authentication and CRUD operations",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Personal Blog",
    description: "A personal blog website project, styled with HTML and CSS, showcasing creative content and offering a visually appealing and user-friendly experience.",
    image: "/images/projects/5.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "CSA Bangalore Chapter Websites",
    description: "The CSA Bangalore Chapter website project is a cybersecurity initiative encompassing new technologies. Developed to foster awareness and collaboration, it provides resources, events, and insights. With a user-friendly interface, it's a hub for cybersecurity enthusiasts and professionals, offering valuable content and community engagement.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://csabangalorechapter.com/",
    previewUrl: "https://csabangalorechapter.com/",
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
