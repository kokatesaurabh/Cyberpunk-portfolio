"use client";

import { motion } from "framer-motion";
import { Trophy, Calendar } from "lucide-react";

const competitions = [
  {
    name: "Smart India Hackathon (SIH'24)",
    result: "Finalist",
    team: "Team",
    date: "11-12 December 2024",
    venue: "IIT Jammu"
  },
  {
    name: "NCIIPC-AICTE PENTATHON",
    result: "Participated",
    team: "Solo",
    date: "15/03/2024",
    venue: "Online"
  }
];

export default function Competitions() {
  return (
    <section id="competitions" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 h-96 w-96 bg-gradient-to-r from-indigo-600 via-purple-400 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            Competitions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitions.map((competition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className="bg-black p-8 rounded-lg shadow-lg relative overflow-hidden animate-float"
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <motion.h3
                      className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {competition.name}
                    </motion.h3>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Trophy className="w-4 h-4" />
                      <motion.span
                        className="text-lg"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {competition.result}
                      </motion.span>
                      <span>•</span>
                      <span>{competition.team}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <motion.span
                      whileHover={{ color: "#ff8c00", scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {competition.date}
                    </motion.span>
                  </div>
                </div>
                
                {competition.venue && (
                  <motion.div
                    className="mt-4 text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                  >
                    Venue: {competition.venue}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
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
