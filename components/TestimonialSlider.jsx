import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  {
    name: "Zentek Makine",
    logo: "/zentek.png",
  },
  {
    name: "BMS",
    logo: "/bms.png",
  },
  {
    name: "Bilimformül",
    logo: "/bilimformul.png",
  },
  {
    name: "Doğuş Medikal",
    logo: "/loreca.png",
  },
  {
    name: "Fortinet",
    logo: "/fortii.png",
  },
  {
    name: "Microsoft",
    logo: "/mc.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: "easeOut",
    },
  }),
};

const TestimonialSlider = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
      {clients.map((client, i) => (
        <motion.div
          key={client.name}
          custom={i}
          variants={cardVariants}
          initial="hidden"
          animate="show"
          className="group relative h-[140px] sm:h-[200px] rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center gap-2 sm:gap-4 cursor-default hover:bg-white/[0.1] hover:border-accent/30 hover:shadow-[0_0_30px_rgba(241,48,36,0.08)] transition-all duration-500"
        >
          {/* Glow effect on hover */}
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            aria-hidden
          />

          {/* Logo */}
          <div className="relative w-[80px] h-[55px] sm:w-[150px] sm:h-[100px] flex items-center justify-center">
            <Image
              src={client.logo}
              alt={client.name}
              fill
              sizes="150px"
              className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-500"
            />
          </div>

          {/* Name */}
          <p className="text-sm sm:text-base text-white/50 group-hover:text-white/80 font-light tracking-wider transition-colors duration-500">
            {client.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default TestimonialSlider;
