import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import ProfileImage from "@/assets/images/profile.jpg";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-900">
      <SectionHeader 
        eyebrow="About me"
        title="A Glimpse Into My World"
      />
      <div className="container mx-auto px-4 max-w-3xl pt-12">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-16">
          <div className="flex-shrink-0 overflow-hidden">
            <img
              src={ProfileImage.src}
              alt="Profile"
              className="object-cover rounded-full border-4 border-white/20 shadow-xl w-72 h-72"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg text-gray-300 leading-relaxed py-8">
              I’m a <span className="font-semibold text-emerald-300">Computer Science student</span> passionate about building accessible, modern web apps with React, Next.js, and .NET. I love solving problems and turning ideas into digital experiences.
            </p>
            <Link
              href="/cv.pdf"
              download
              className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 font-semibold rounded-lg shadow"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};