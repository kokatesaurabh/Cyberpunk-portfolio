"use client";

import { motion } from "framer-motion";
import { Shield, Target, Brain } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white relative">
      <div className="container mx-auto px-4">
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden z-0">
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

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-gradient"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg mb-8 text-gray-400"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm passionate about advanced red teaming, zero-day exploit
            development, and AI. My focus lies in crafting custom exploitation
            frameworks and innovative cybersecurity solutions. Currently, I'm
            diving deep into AI, creating systems from scratch to assist hackers
            without relying on existing tools or APIs.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[ 
              {
                icon: <Shield className="w-12 h-12 mx-auto text-gradient" />,
                title: "Security Expert",
                description: "Specialized in advanced penetration testing and red teaming.",
              },
              {
                icon: <Target className="w-12 h-12 mx-auto text-gradient" />,
                title: "Exploit Developer",
                description: "Creating zero-day exploits and custom security tools.",
              },
              {
                icon: <Brain className="w-12 h-12 mx-auto text-gradient" />,
                title: "AI Innovator",
                description: "Building AI systems for advanced security applications.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-2 text-gradient">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
