"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { backendProjects, frontendProjects } from "@/Data/github";

const ProjectsPage = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center px-6 py-20 text-slate-300"
      style={{ backgroundImage: "url('/projectbg.webp')" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center backdrop-blur-sm bg-black/40 p-6 rounded-2xl">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-bold mb-4 text-[#8b7cfa]">
              Project Showcase
            </h1>
            <p className="text-slate-300 mb-10">
              A curated list of my Frontend and Backend (GoLang) projects from GitHub.
              Built with clean architecture, API integration, and modern UI principles.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {[...frontendProjects, ...backendProjects].map((repo, index) => (
              <motion.div
                key={repo.name}
                className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl p-6 rounded-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{
                  scale: 1.03,
                  rotate: [0, 1, -1, 1, -1, 0],
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-xl font-semibold text-[#8b7cfa]">{repo.name}</h2>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      repo.language === "GoLang"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {repo.language === "GoLang" ? "Backend" : "Frontend"}
                  </span>
                </div>
                <p className="text-sm text-slate-300 mb-3">{repo.description}</p>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-full text-white bg-[#8b7cfa] hover:bg-[#5f55ac] transition text-sm font-medium"
                >
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >
          <Image
            src="https://cdn.pixabay.com/photo/2022/04/18/07/33/laptop-7138557_1280.png"
            alt="Developer working"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;
