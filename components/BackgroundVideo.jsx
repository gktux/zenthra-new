import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

const videoRoutes = {
  "/contact": "/arkaplan.mp4",
};

const BackgroundVideo = () => {
  const router = useRouter();
  const [videoSrc, setVideoSrc] = useState("");
  const [opacity, setOpacity] = useState(0);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef(null);

  // Set mounted on client to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isContact = router.pathname === "/contact";
  const defaultOpacity = 0.85;

  // Sync route changes with video source
  useEffect(() => {
    if (!mounted) return;
    if (!isContact) {
      setVideoSrc("");
      return;
    }
    const nextVideo = videoRoutes["/contact"];

    if (nextVideo !== videoSrc) {
      setOpacity(0);
      const timeout = setTimeout(() => {
        setVideoSrc(nextVideo);
        setOpacity(defaultOpacity);
      }, 400);
      return () => clearTimeout(timeout);
    } else {
      setOpacity(defaultOpacity);
    }
  }, [router.pathname, videoSrc, defaultOpacity, mounted, isContact]);

  // Autoplay/Play logic triggered when video element is rendered and source changes
  useEffect(() => {
    if (videoRef.current && videoSrc) {
      const playVideo = async () => {
        try {
          videoRef.current.load();
          await videoRef.current.play();
        } catch (err) {
          console.log("Autoplay was prevented or video failed to load, retrying...", err);
          setTimeout(() => {
            if (videoRef.current) {
              videoRef.current.play().catch(() => {});
            }
          }, 1000);
        }
      };
      playVideo();
    }
  }, [videoSrc]);

  if (!mounted || !isContact) {
    return null;
  }

  return (
    <div className="fixed inset-0 w-screen h-screen z-[1] overflow-hidden pointer-events-none bg-transparent transition-colors duration-1000">
      {/* Overlay to ensure high content readability for the contact page forms and listings */}
      <div className="absolute inset-0 z-[1] bg-primary/40 transition-colors duration-1000" />
      
      {videoSrc && (
        <video
          ref={videoRef}
          key={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            opacity: opacity,
            transform: "scaleX(-1) scale(1.03)",
            transformOrigin: "center center"
          }}
          className="absolute inset-0 w-screen h-screen min-w-full min-h-full object-cover transition-opacity duration-700 z-0 will-change-[opacity,transform] mix-blend-screen"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default BackgroundVideo;
