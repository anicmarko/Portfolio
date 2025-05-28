
interface HeroOrbitProps {
  children: React.ReactNode;
  size?: number;
  rotation?: number;
}

export const HeroOrbit: React.FC<HeroOrbitProps> = ({
    children,
    size = 800,
    rotation = 0
}) => {
    return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div 
            className="flex items-start justify-start"
            style={{
                transform: `rotate(${rotation}deg)`, 
                width: `${size}px`, 
                height: `${size}px` 
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
    );
}