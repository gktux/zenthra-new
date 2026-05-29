import { useState } from "react";
import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import ServiceDetailModal from "../../components/ServiceDetailModal";
import { fadeIn } from "../../variants";

export const serviceData = [];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-primary/30 pt-28 pb-32 md:py-36 md:flex md:items-center overflow-y-auto">
      <Circles />
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Hizmetlerimiz
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Zenthra Bilişim olarak web, IT ve kamera kurulum alanlarında uçtan uca
              profesyonel çözümler sunuyoruz. İhtiyacınıza uygun paketi birlikte planlayalım.
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
            <ServiceSlider onSelectService={setSelectedService} />
          </motion.div>
        </div>
      </div>
      <Bulb />

      {/* service detail modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
};

export default Services;
