"use client";

import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import ProfileImage from "@/assets/images/profile.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-900">
      <SectionHeader 
        eyebrow="About me"
        title="A Glimpse Into My World"
      />
      <div className="container mx-auto px-4 max-w-3xl pt-12">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-16">
         <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="relative inline-block">
              <motion.div
                className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-300 to-sky-400 blur-lg opacity-70 z-0"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Image
                src={ProfileImage.src}
                alt="Profile"
                className="object-cover relative rounded-full shadow-xl w-72 h-72 z-10"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{once: true, amount: 0.5 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed py-8">
              I’m a <span className="font-semibold text-emerald-300">Computer Science student</span> passionate about building accessible, modern web apps with React, Next.js, and .NET. I love solving problems and turning ideas into digital experiences.
            </p>
            <Link
              href="/Marko_Anic_CV.pdf"
              download
              className="inline-flex px-6 h-12 gap-2 items-center bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 font-semibold rounded-xl"
            >
              Download CV
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};