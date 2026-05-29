import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="min-h-screen bg-primary/30 pt-28 pb-32 md:py-36 md:flex md:items-center overflow-y-auto relative">
      {/* Background video */}
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/arkaplanhero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-primary/50" />
      </div>

      <Circles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              Projelerimiz <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Zenthra WMS depo programına tıklayarak detayları ve ekran
              görüntülerini inceleyebilirsiniz. Diğer proje alanları yakında eklenecek.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
