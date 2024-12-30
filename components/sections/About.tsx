"use client";

import { motion } from "framer-motion";
import { Shield, Target, Brain } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-8">
              I'm passionate about advanced red teaming, zero-day exploit development, and AI. My focus lies in crafting custom exploitation frameworks and innovative cybersecurity solutions. Currently, I'm diving deep into AI, creating systems from scratch to assist hackers without relying on existing tools or APIs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-gray-900 rounded-lg">
                <Shield className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Security Expert</h3>
                <p className="text-gray-400">Specialized in advanced penetration testing and red teaming</p>
              </div>
              
              <div className="text-center p-6 bg-gray-900 rounded-lg">
                <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Exploit Developer</h3>
                <p className="text-gray-400">Creating zero-day exploits and custom security tools</p>
              </div>
              
              <div className="text-center p-6 bg-gray-900 rounded-lg">
                <Brain className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">AI Innovator</h3>
                <p className="text-gray-400">Building AI systems for advanced security applications</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}