import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const panelVariants = {
  initial: { x: "100%" },
  animate: { x: "0%", transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
};

const textContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delay: 0.2, staggerChildren: 0.06, delayChildren: 0.15 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const letterVariant = {
  initial: { y: 40, opacity: 0, rotateX: -90 },
  animate: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { y: -30, opacity: 0, transition: { duration: 0.2 } },
};

const brandLetters = "ZENTHRA".split("");
const subLetters = "BİLİŞİM".split("");

const Transition = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const show = () => setVisible(true);
    const hide = () => {
      setTimeout(() => setVisible(false), 700);
    };

    router.events.on("routeChangeStart", show);
    router.events.on("routeChangeComplete", hide);
    router.events.on("routeChangeError", hide);

    return () => {
      router.events.off("routeChangeStart", show);
      router.events.off("routeChangeComplete", hide);
      router.events.off("routeChangeError", hide);
    };
  }, [router]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Sayfa yükleniyor"
          className="fixed inset-0 z-[200] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Renkli katmanlar */}
          <motion.div
            className="absolute inset-0 bg-[#2e2257]"
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.1 }}
          />
          <motion.div
            className="absolute inset-0 bg-[#3b2d71]"
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.05 }}
          />
          <motion.div
            className="absolute inset-0 bg-[#4b3792]"
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          />
          <motion.div
            className="absolute inset-0 bg-primary"
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ delay: 0.15 }}
          />

          {/* Zenthra yazısı */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <motion.div
              variants={textContainer}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center"
            >
              <div className="flex overflow-hidden">
                {brandLetters.map((char, i) => (
                  <motion.span
                    key={`z-${i}`}
                    variants={letterVariant}
                    className="inline-block text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-[0.15em] md:tracking-[0.25em]"
                    style={{ transformPerspective: 600 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              <div className="flex overflow-hidden mt-1 md:mt-2">
                {subLetters.map((char, i) => (
                  <motion.span
                    key={`b-${i}`}
                    variants={letterVariant}
                    className="inline-block text-2xl sm:text-3xl md:text-4xl font-light text-accent tracking-[0.2em] md:tracking-[0.35em]"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>

              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                exit={{ scaleX: 0, opacity: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="h-[3px] w-24 md:w-32 bg-accent mt-5 md:mt-6 origin-center rounded-full"
              />

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.55, duration: 0.3 }}
                className="text-white/40 text-[10px] sm:text-xs uppercase tracking-[0.4em] mt-4"
              >
                Yükleniyor
              </motion.p>
            </motion.div>
          </div>

          {/* Köşe parıltı */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-accent/20 blur-[100px]"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            aria-hidden
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Transition;
