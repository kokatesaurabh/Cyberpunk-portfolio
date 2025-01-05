"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Facebook, X } from "lucide-react";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);
  const toRotate = [
    "Cybersecurity Enthusiast",
    "App Developer",
    "Web Developer",
    "Blockchain Developer",
    "AI/ML Enthusiast",
    "Red Team Expert",
    "Malware Developer",
  ];
  const period = 2000;

  const socialLinks = [
    { icon: <Github />, href: "https://github.com/kokatesaurabh", color: "white", outline: true },
    { icon: <Linkedin />, href: "https://www.linkedin.com/in/saurabh-kokate-b839b921a", color: "#0e76a8" },
    { icon: <X />, href: "https://x.com/SaurabhKokate20", color: "white" },
    { icon: <Instagram />, href: "https://www.instagram.com/0day.xploit_101", color: "#C13584" },
    { icon: <Facebook />, href: "https://www.facebook.com/share/A8tKsYm5D3DDvP1V", color: "#1877F2" },
  ];

  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-between text-white bg-gradient-to-r from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute h-80 w-80 bg-purple-700 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-20 h-96 w-96 bg-blue-700 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute bottom-20 left-20 h-72 w-72 bg-pink-700 rounded-full blur-3xl opacity-25"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-left px-8 md:px-16 w-1/2">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Saurabh Kokate
          </span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-200 mb-4">
          <span className="inline-block animate-gradient-text">
            {text}
            <span className="text-pink-500 animate-blink">|</span>
          </span>
        </h2>
        <p className="text-lg text-gray-300 max-w-lg mb-8">
          Specializing in advanced red teaming, zero-day exploit development,
          AI-driven security solutions, and more.
        </p>
        <button
          onClick={() => console.log("Connect")}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          Let’s Connect
        </button>
        <div className="flex mt-6 space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative transition-transform hover:scale-125"
              style={{
                color: link.color,
              }}
              aria-label={link.label}
            >
              <div
                className={`absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  link.outline ? "border-4 border-white" : ""
                }`}
                style={{
                  backgroundColor: link.color,
                  boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.6)",
                  filter: "brightness(1.5)",
                }}
              ></div>
              <span
                className={`relative z-10 text-shadow-glow group-hover:text-${link.color === 'white' ? 'white' : 'transparent'} transition-all duration-300`}
                style={{
                  color: link.color,
                  textShadow: `0 0 15px ${link.color === 'white' ? 'white' : link.color}`,
                }}
              >
                {link.icon}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* GIF on the Right */}
      <div className="w-1/2 flex justify-center pr-8">
        <div align="right">
          <img 
            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" 
            alt="Hacker Anime GIF" 
            width="550"  // Slightly larger size
            style={{ maxWidth: "100%", height: "auto" }} // Makes GIF responsive
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
