import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";


const Card: React.FC<ComponentPropsWithoutRef<"div">> = ({
    children,
    className,
    ...other
}) => {
  return (
    <div 
        className={twMerge(className,"bg-gray-800 rounded-3xl after:content-[''] after:absolute after:inset-0 z-0 after:z-10 overflow-hidden after:oultine-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none")}
        {...other}
        >
        <div className="absolute inset-0 -z-10 opacity-5" style={{
        backgroundImage: `url(${grainImage.src})`
        }}/>
        {children}
    </div>
  )
}

export default Card;
