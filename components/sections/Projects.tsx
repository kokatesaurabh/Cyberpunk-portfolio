"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "MAK-75-Framework",
    description: "Advanced keylogger framework with real-time monitoring across multiple platforms",
    github: "https://github.com/kokatesaurabh/MAK-75-Framework",
    tags: ["Python", "C++", "Cybersecurity"]
  },
  {
    title: "Cyber-Jarvis",
    description: "AI-based system providing real-time support for hackers",
    github: "https://github.com/kokatesaurabh/Cyber-Jarvis",
    tags: ["AI", "Python", "Machine Learning"]
  },
  {
    title: "VulnHawk",
    description: "Advanced vulnerability scanner and exploitation tool",
    github: "https://github.com/kokatesaurabh/VulnHawk-The-Ultimate-Static-Analysis-Framework.git",
    tags: ["Security", "Python", "Automation"]
  }
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-gray-800 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://github.com/kokatesaurabh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors"
            >
              <span>View More Projects</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}