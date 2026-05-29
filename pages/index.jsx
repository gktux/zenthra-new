import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="h-full relative overflow-y-auto xl:overflow-hidden bg-hero1 bg-cover bg-center bg-no-repeat">
      {/* Dark gradient overlay for text readability over hero photo */}
      <div className="w-full h-full bg-gradient-to-r from-black/85 via-black/50 to-black/20 absolute inset-0 z-0 pointer-events-none" />

      {/* content container */}
      <div className="relative z-10 w-full min-h-full flex items-center pt-20 pb-20 xl:py-0">
        <div className="text-center flex flex-col justify-center xl:text-left container mx-auto px-4 md:px-8 py-8 xl:py-0">
          
          {/* Brand Premium Badge (commented out as requested) */}
          {/* <motion.div
            variants={fadeIn("down", 0.15)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-3 flex justify-center xl:justify-start"
          >
            <span className="bg-accent/15 border border-accent/30 text-accent text-[10px] font-semibold uppercase tracking-[3px] px-3.5 py-1 rounded-full backdrop-blur-md drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
              Zenthra Bilişim Teknolojileri
            </span>
          </motion.div> */}

          <motion.h1
            variants={fadeIn("down", 0.25)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight leading-normal md:leading-normal xl:leading-[1.25] mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] text-white"
          >
            Fikirlerinizi <br />{" "}
            <span className="text-accent drop-shadow-[0_2px_8px_rgba(241,48,36,0.3)]">
              Dijital Gerçekliğe
            </span>{" "}
            Dönüştürüyoruz
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-white/80 text-xs md:text-sm xl:text-base max-w-sm md:max-w-md xl:max-w-[480px] mx-auto xl:mx-0 mb-6 xl:mb-8 font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
          >
            Web sitesi tasarımı, IT altyapı ve destek hizmetleri ile fabrika ve ofislere profesyonel kamera kurulumunda işletmenizin dijital ve güvenlik ihtiyaçlarını tek çatı altında karşılıyoruz.
          </motion.p>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative z-10">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.45)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex relative z-10"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* particles overlay */}
      <div className="w-full h-full absolute inset-0 pointer-events-none z-[5]">
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;
