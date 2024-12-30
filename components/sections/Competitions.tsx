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
    name: "Pentathon (CTF)",
    result: "Participated",
    team: "Solo",
    date: "15/03/2024"
  }
];

export default function Competitions() {
  return (
    <section id="competitions" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Competitions</h2>
          
          <div className="space-y-8">
            {competitions.map((competition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black p-6 rounded-lg"
              >
                <div className="flex items-start justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{competition.name}</h3>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Trophy className="w-4 h-4" />
                      <span>{competition.result}</span>
                      <span>•</span>
                      <span>{competition.team}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{competition.date}</span>
                  </div>
                </div>
                
                {competition.venue && (
                  <div className="mt-4 text-gray-400">
                    Venue: {competition.venue}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}