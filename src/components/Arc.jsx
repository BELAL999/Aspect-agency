export default function GlowingArcs({ pathData }) {
    return (
        <div className="absolute top-[60%] w-full h-24 md:h-40 lg:h-48 overflow-hidden">
            <svg 
                viewBox="0 0 800 200" 
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
                        <stop offset="35%" stopColor="#f97316" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.8" />
                        <stop offset="65%" stopColor="#f97316" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge> 
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                <path 
                    d={pathData}
                    fill="none"
                    stroke="url(#arcGradient)"
                    strokeWidth="4"
                    filter="url(#glow)"
                    className="animate-pulse pahtGlow"
                    style={{
                        animationDuration: '2.5s',
                        animationDelay: '0.8s',
                        animationTimingFunction: 'ease-in-out',
                        animationIterationCount: 'infinite'
                    }}
                />
            </svg>
        </div>
    );
}