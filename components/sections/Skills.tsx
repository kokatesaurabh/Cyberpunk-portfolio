"use client";

import { motion } from "framer-motion";

// Skills data (you can add more logos as needed)
const skills = [
  { name: "Python", logo: "/logo/python-original.svg" },
  { name: "C", logo: "/logo/c-original.svg" },
  { name: "JavaScript", logo: "/logo/javascript-original.svg" },
  { name: "Solidity", logo: "/logo/solidity-original.svg" },
  { name: "GO", logo: "/logo/go-original-wordmark.svg" },
  { name: "C++", logo: "/logo/cplusplus-original.svg" },
  { name: "Rust", logo: "/logo/Rust-original.svg" },
  { name: "PyTorch", logo: "/logo/pytorch-original.svg" },
  { name: "Selenium", logo: "/logo/selenium-original.svg" },
  { name: "Numpy", logo: "/logo/numpy-original-wordmark.svg" },
  { name: "Pandas", logo: "/logo/pandas-original.svg" },
  { name: "Scikit-learn", logo: "/logo/scikitlearn-original.svg" },
  { name: "OpenCV", logo: "/logo/opencv-original.svg" },
  { name: "Docker", logo: "/logo/docker-original-wordmark.svg" },
  { name: "Node.js", logo: "/logo/nodejs-original-wordmark.svg" },
  { name: "Git", logo: "/logo/git-original-wordmark.svg" },
  { name: "MySQL", logo: "/logo/mysql-original-wordmark.svg" },
  { name: "PostgreSQL", logo: "/logo/postgresql-original.svg" },
  { name: "Kali Linux", logo: "/logo/kalilinux-original-wordmark.svg" },
  { name: "Ubuntu", logo: "/logo/ubuntu-original.svg" },
  { name: "Tails", logo: "/logo/tails.svg" },
  { name: "Metasploit", logo: "/logo/metasploit-original.svg" },
  { name: "Wireshark", logo: "/logo/Wireshark_icon.svg.png" },
  { name: "Nmap", logo: "/logo/nmap-logo.svg" },
  { name: "Burp Suite", logo: "/logo/burp.svg" },
  { name: "Kafka", logo: "/logo/apachekafka-original-wordmark.svg" },
  { name: "Postman", logo: "/logo/postman-original-wordmark.svg" },
  { name: "Jupyter", logo: "/logo/jupyter-original-wordmark.svg" },
  { name: "Plotly", logo: "/logo/plotly-original.svg" },
  { name: "GitHub", logo: "/logo/github-original-wordmark.svg" },
  { name: "Slack", logo: "/logo/slack-original.svg" },
  { name: "Vim", logo: "/logo/vim-original.svg" },
  { name: "VSCode", logo: "/logo/vscode-original.svg" },
  { name: "Apache Spark", logo: "/logo/apachespark-original-wordmark.svg" },
];

// Function to create rows in the format of 9-7-5-3-1
function getSkillsInTriangle(skills) {
  return [
    skills.slice(0, 9),
    skills.slice(9, 16),
    skills.slice(16, 21),
    skills.slice(21, 24),
    skills.slice(24, 25),
  ];
}

// Main Skills Section
export default function Skills() {
  const rows = getSkillsInTriangle(skills);

  return (
    <section
      id="skills"
      className="relative py-16 bg-black text-white overflow-hidden flex justify-center items-center"
    >
      {/* Animated Background on the Right */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <motion.div
          className="absolute h-[80vh] w-[80vh] bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full blur-3xl opacity-30"
          animate={{
            x: [0, 120, -120, 0],
            y: [0, -120, 120, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute h-[60vh] w-[60vh] bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 rounded-full blur-3xl opacity-25"
          animate={{
            x: [-120, 120, 0],
            y: [100, -100, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 text-gradient"
        >
          Skills & Technologies
        </motion.h2>

        <div className="flex flex-col items-center space-y-4">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-4">
              {row.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.2,
                    boxShadow: "0 0 25px 5px rgba(255, 255, 255, 0.8)",
                    transform: "rotate(5deg)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative w-24 h-24 flex flex-col items-center justify-center rounded-lg bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 shadow-md hover:shadow-lg"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                  <span className="mt-2 text-sm font-medium text-white">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -20px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
