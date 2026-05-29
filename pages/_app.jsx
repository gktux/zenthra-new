import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import Layout from "../components/Layout";
import Transition from "../components/Transition";
import { navData } from "../components/Nav";

import "../styles/globals.css";

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isScrolling = useRef(false);

  useEffect(() => {
    let touchStartY = 0;
    let touchStartX = 0;

    const handleWheel = (e) => {
      if (isScrolling.current) return;

      const target = e.target;
      const scrollable = target ? target.closest(".overflow-y-auto") : null;
      
      if (scrollable) {
        const { scrollTop, scrollHeight, clientHeight } = scrollable;
        const isScrollable = scrollHeight > clientHeight;
        
        if (isScrollable) {
          // If scrolling down, block page change unless we are at the very bottom
          if (e.deltaY > 0 && scrollTop + clientHeight < scrollHeight - 5) {
            return;
          }
          // If scrolling up, block page change unless we are at the very top
          if (e.deltaY < 0 && scrollTop > 5) {
            return;
          }
        }
      }

      const currentIndex = navData.findIndex(
        (item) => item.path === router.pathname
      );
      if (currentIndex === -1) return;

      let nextIndex;
      if (e.deltaY > 0) {
        // scroll down → next page
        nextIndex = currentIndex + 1;
      } else {
        // scroll up → prev page
        nextIndex = currentIndex - 1;
      }

      if (nextIndex >= 0 && nextIndex < navData.length) {
        isScrolling.current = true;
        router.push(navData[nextIndex].path);
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      if (isScrolling.current) return;

      const target = e.target;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.closest("form"))
      ) {
        return;
      }

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;

      const deltaY = touchStartY - touchEndY;
      const deltaX = touchStartX - touchEndX;

      // Ensure it is a primarily vertical swipe and exceeds 70px threshold
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 70) {
        
        // Smart scroll check for vertical swipes
        const scrollable = target ? target.closest(".overflow-y-auto") : null;
        if (scrollable) {
          const { scrollTop, scrollHeight, clientHeight } = scrollable;
          const isScrollable = scrollHeight > clientHeight;
          
          if (isScrollable) {
            // swiped up -> scrolling down: block unless at the very bottom
            if (deltaY > 0 && scrollTop + clientHeight < scrollHeight - 5) {
              return;
            }
            // swiped down -> scrolling up: block unless at the very top
            if (deltaY < 0 && scrollTop > 5) {
              return;
            }
          }
        }

        const currentIndex = navData.findIndex(
          (item) => item.path === router.pathname
        );
        if (currentIndex === -1) return;

        let nextIndex;
        if (deltaY > 0) {
          // swiped up -> scroll down -> next page
          nextIndex = currentIndex + 1;
        } else {
          // swiped down -> scroll up -> prev page
          nextIndex = currentIndex - 1;
        }

        if (nextIndex >= 0 && nextIndex < navData.length) {
          isScrolling.current = true;
          router.push(navData[nextIndex].path);
          setTimeout(() => {
            isScrolling.current = false;
          }, 1000);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [router]);

  return (
    <Layout>
      <Transition />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          className="h-full"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
