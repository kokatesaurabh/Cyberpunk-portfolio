"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python3", "C", "JavaScript", "Solidity", "GO", "C++", "Shell Script", "Rust"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["PyTorch", "Selenium", "NumPy", "Pandas", "Scikit-learn", "OpenCV"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "Metasploit", "Wireshark", "Burp Suite", "Nmap"]
  },
  {
    title: "Operating Systems",
    skills: ["Ubuntu", "Kali Linux", "Parrot OS", "BlackArch", "Tails OS", "Windows"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}