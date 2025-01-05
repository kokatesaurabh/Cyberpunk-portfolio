"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            Contact Me
          </h2>
          <p className="text-gray-300 mb-12">I'd love to hear from you! Feel free to reach out via the form below or connect with me on social media.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:ring-2 focus:ring-purple-500 text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:ring-2 focus:ring-purple-500 text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:ring-2 focus:ring-purple-500 text-white"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>

            {status && <p className="mt-4 text-center text-sm text-gray-300">{status}</p>}
          </motion.form>

          {/* Social Media Links */}
          <div className="flex flex-col lg:flex-row w-full lg:w-1/2 gap-6 justify-center items-center">
            {[
              {
                name: "Instagram",
                href: "https://www.instagram.com/0day.xploit_101?igsh=MTgyNmdqZ3RoejI4NA==",
                icon: "fab fa-instagram",
                color: "from-purple-500 via-pink-500 to-red-500",
              },
              {
                name: "Twitter",
                href: "https://x.com/SaurabhKokate20?t=D-Y3vi2HekriAXHRTY3I3Q&s=08",
                icon: "fab fa-twitter",
                color: "from-blue-400 to-cyan-400",
              },
              {
                name: "Facebook",
                href: "https://www.facebook.com/share/A8tKsYm5D3DDvP1V/?mibextid=qi2Omg",
                icon: "fab fa-facebook",
                color: "from-blue-500 to-indigo-500",
              },
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/saurabh-kokate-b839b921a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                icon: "fab fa-linkedin",
                color: "from-cyan-500 to-blue-500",
              },
              {
                name: "GitHub",
                href: "https://github.com/kokatesaurabh",
                icon: "fab fa-github",
                color: "from-gray-400 to-gray-700",
              },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex justify-center items-center p-4 rounded-full text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${link.color} hover:scale-110 transform transition-all`}
                whileHover={{ scale: 1.2 }}
                style={{
                  boxShadow: `0 0 10px 0px ${link.color}`,
                }}
              >
                <i className={`${link.icon} text-3xl`} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
