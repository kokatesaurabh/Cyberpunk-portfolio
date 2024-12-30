"use client";

import { Github, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/kokatesaurabh",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/saurabh-kokate-b839b921a",
      label: "LinkedIn"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://x.com/SaurabhKokate20",
      label: "Twitter"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/0day.xploit_101",
      label: "Instagram" 
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      href: "https://www.facebook.com/share/A8tKsYm5D3DDvP1V",
      label: "Facebook"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Saurabh Kokate
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
            Cybersecurity Enthusiast & Red Team Expert
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Specializing in advanced red teaming, zero-day exploit development, and AI-driven security solutions.
          </p>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}