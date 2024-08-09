import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Location Tracker App",
    image: "https://via.placeholder.com/150", // Replace with actual project image URL
    description:
      "I have hands-on experience developing backend services for Android applications using Express.js, MongoDB, and Socket.io.",
    technologies: ["Express", "Socket.io", "MongoDB"],
    livePreview: "https://example.com", // Replace with actual live preview link
  },
  {
    title: "Jaycar",
    image: "https://via.placeholder.com/150", // Replace with actual project image URL
    description:
      "JayCar is an innovative Australian e-commerce project designed to provide a seamless online shopping experience for digital electronics enthusiasts.",
    technologies: ["React (TypeScript)", "Storybook", "Algolia"],
    livePreview: "https://example.com", // Replace with actual live preview link
  },
  {
    title: "Become Your Creator",
    image: "https://via.placeholder.com/150", // Replace with actual project image URL
    description:
      "This is an e-commerce web portal aimed at becoming the leading fashion brand in Sri Lanka. It includes features like search, filters, multi-currency support, and more.",
    technologies: ["React", "MongoDB", "Material-UI"],
    livePreview: "https://example.com", // Replace with actual live preview link
  },
  {
    title: "DigiDoe",
    image: "https://via.placeholder.com/150", // Replace with actual project image URL
    description:
      "Digidoe is a Banking as a Service (BaaS) project developed using ReactJS, styled components, and Material-UI (Mui). It showcases my proficiency in front-end technologies and financial service systems.",
    technologies: ["React", "Mui", "Styled-Components"],
    livePreview: "https://example.com", // Replace with actual live preview link
  },
  {
    title: "NivaInc",
    image: "https://via.placeholder.com/150", // Replace with actual project image URL
    description:
      "NivaInc is an innovative Next.js and Tailwind CSS project specializing in ceramic tiles and export business. It aims to elevate Morbi City's tile industry online.",
    technologies: ["Next.js", "Tailwind CSS"],
    livePreview: "https://example.com", // Replace with actual live preview link
  },
  {
    title: "The DetailDoctors",
    image: "https://via.placeholder.com/150", // Replace with actual project image URL
    description:
      "The DetailDoctors is a web-based platform using HTML, CSS, and JavaScript, focused on car washing and interior design services for car owners in Torrento.",
    technologies: ["HTML", "CSS", "JavaScript"],
    livePreview: "https://example.com", // Replace with actual live preview link
  },
  {
    title: "Innovative Care",
    image: "https://via.placeholder.com/150", // Replace with actual project image URL
    description:
      "Innovative Care is a Static Site built with core HTML, CSS, and JavaScript, serving families with disabled children, aiming to provide enhanced care and support.",
    technologies: ["HTML", "CSS", "JavaScript"],
    livePreview: "https://example.com", // Replace with actual live preview link
  },
];

const ProjectsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <button className="slick-arrow slick-next">Next</button>,
    prevArrow: <button className="slick-arrow slick-prev">Prev</button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-900 text-white py-16 relative" id="projects">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="relative">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="p-4" style={{ height: "100%" }}>
                <motion.div
                  className="p-6 border-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full"
                  style={{
                    border: "2px solid",
                    borderImage: "linear-gradient(90deg, #b3138c, #00b0ff) 1",
                    background: "rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%", // Ensure each card takes full height
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                    style={{ maxHeight: "150px" }} // Adjust image height if necessary
                  />
                  <div>
                    <h3
                      className="text-2xl font-semibold mb-2"
                      style={{
                        background: "linear-gradient(90deg, #b3138c, #00b0ff)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p className="mb-4 text-lightblue-200">
                      {project.description}
                    </p>
                    <ul className="mb-4 flex flex-wrap gap-x-2 gap-y-3">
                      {project.technologies.map((tech, idx) => (
                        <li
                          key={idx}
                          className="inline-block shadow-lg shadow-slate-900 text-lightblue-200 px-5 py-1 rounded-full mr-2"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
