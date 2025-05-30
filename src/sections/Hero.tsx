import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section id="home" className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        <div className="absolute inset-0 -z-30 opacity-5" style={{
          backgroundImage: `url(${grainImage.src})`,
        }}></div>
        <div className="size-[620px] hero-ring"/>
        <div className="size-[820px] hero-ring"/>
        <div className="size-[1020px] hero-ring"/>
        <div className="size-[1220px] hero-ring"/>
        <HeroOrbit 
          rotation={-14} 
          size={430}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
          >
          <SparkleIcon className="size-8 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit 
          rotation={79} 
          size={440}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"  
          >
          <SparkleIcon className="size-5 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit 
          rotation={-41} 
          size={520}
          shouldOrbit
          orbitDuration="34s"   
          >
          <div className="size-2 bg-emerald-300/20 rounded-full"/>
        </HeroOrbit>
        <HeroOrbit 
          rotation={178} 
          size={530}
          shouldOrbit
          orbitDuration="36s" 
          shouldSpin
          spinDuration="3s"
          >
          <SparkleIcon className="size-10 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit 
          rotation={20} 
          size={550}
          shouldOrbit
          orbitDuration="38s"   
          shouldSpin
          >
          <StarIcon className="size-12 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit 
          rotation={98} 
          size={590}
          shouldOrbit
          orbitDuration="40s"   
          shouldSpin
          >
          <StarIcon className="size-18 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit 
          rotation={-5}
          size={650}
          shouldOrbit
          orbitDuration="42s" 
          >
          <div className="size-2 bg-emerald-300/20 rounded-full"/>
        </HeroOrbit>
        <HeroOrbit 
          rotation={144} 
          size={710}
          shouldOrbit
          orbitDuration="44s" 
          shouldSpin
          spinDuration="3s"
          >
          <SparkleIcon className="size-14 text-emerald-300/20"/>
        </HeroOrbit>
        <HeroOrbit 
          rotation={-72} 
          size={800}
          shouldOrbit
          orbitDuration="46s" 
          shouldSpin
          >
          <StarIcon className="size-28 text-emerald-300"/>
        </HeroOrbit>
        <HeroOrbit 
          rotation={85} 
          size={900}
          shouldOrbit
          orbitDuration="48s"
          >
          <div className="size-3 bg-emerald-300/20 rounded-full"/>
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image 
            src={memojiImage} 
            alt="Person peeking from behind laptop"
            className="size-[100px]" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 rounded-full absolute inset-0 animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Avalaible for new projects</div>
          </div>
          </div>
          <div className="max-w-lg mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Building Exceptional User Experiences
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg"> 
              I specialize in transforming ideas into functional, high-quality web applications.
            </p>
          </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <Link href="#projects">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          </Link>
          <Link href="#contact">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
              <span>👋</span>
              <span className="font-semibold ">Let&#39;s connect</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
