import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktops/laptops with mouse/trackpad)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsVisible(true);

    const moveCursor = (e) => {
      // Snaps instantly to the hardware pointer coordinates with exactly 0ms lag
      cursorX.set(e.clientX - 12); // Center the 24px cursor
      cursorY.set(e.clientY - 12);

      // Event delegation: Check if the cursor is hovering over clickable elements
      const target = e.target;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("[role='button']") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest("select"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      animate={{
        scale: isHovered ? 1.45 : 1,
        borderColor: isHovered ? "rgba(241, 48, 36, 0.85)" : "rgba(255, 255, 255, 0.4)",
        backgroundColor: isHovered ? "rgba(241, 48, 36, 0.18)" : "rgba(0, 0, 0, 0.92)",
      }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="fixed top-0 left-0 w-6 h-6 border rounded-full flex items-center justify-center pointer-events-none z-[9999] shadow-lg shadow-black/85 select-none backdrop-blur-[1px]"
    >
      <motion.span 
        animate={{
          scale: isHovered ? 1.15 : 1,
        }}
        className="text-[9px] font-black font-sora tracking-widest text-white mt-[-0.5px] pl-[1px] select-none pointer-events-none"
      >
        Z
      </motion.span>
    </motion.div>
  );
};

export default CustomCursor;
