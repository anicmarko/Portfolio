import { twMerge } from "tailwind-merge";

interface HeroOrbitProps {
  children: React.ReactNode;
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
  orbitDuration?: string;
}

export const HeroOrbit: React.FC<HeroOrbitProps> = ({
    children,
    size,
    rotation,
    shouldOrbit,
    shouldSpin,
    spinDuration = "6s",
    orbitDuration = "20s",
}) => {
    return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
        <div className={twMerge(shouldOrbit && "animate-spin")} style={{
            animationDuration: orbitDuration
        }}>
            <div 
                className="flex items-start justify-start "
                style={{
                    transform: `rotate(${rotation}deg)`, 
                    width: `${size}px`, 
                    height: `${size}px` 
                }}>
                <div className={twMerge(shouldSpin && "animate-spin")} style={{
                    animationDuration: spinDuration
                }}>
                    <div 
                        className="inline-flex"
                        style={{
                            transform: `rotate(${-rotation}deg)`,
                        }}
                        >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}