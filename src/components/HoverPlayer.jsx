import { useState , useRef } from "react"
const HoverPlayer = ({src}) => {

    const videoRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const handleMuseEnter = () => {
        setIsHovering(true)
        if (videoRef.current) {
        videoRef.current.play();
    }

    }
    const handleMuseLeave = () => {
        setIsHovering(false)
        if (videoRef.current) {
            videoRef.current.pause();
        }
    }
    return (
        <div
            className="video-container"
            onMouseEnter={handleMuseEnter}
            onMouseLeave={handleMuseLeave}
        >
            <video         
            ref={videoRef}
            src={src}
            loop
            muted
            style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isHovering ? 1 : 0.5, // Make it slightly visible when paused
            transition: 'opacity 0.3s ease-in-out',
        }}
            >

            </video>
        </div>
    )
}

export default HoverPlayer
