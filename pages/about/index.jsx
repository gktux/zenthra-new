import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaHtml5,
  FaReact,
  FaServer,
  FaVideo,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiNextdotjs,
} from "react-icons/si";

import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "yetenekler",
    info: [
      {
        title: "Web Sitesi",
        icons: [FaHtml5, FaReact, SiNextdotjs, FaWordpress],
      },
      {
        title: "IT & Altyapı",
        icons: [FaServer],
      },
      {
        title: "Kamera Kurulum",
        icons: [FaVideo],
      },
    ],
  },
  {
    title: "ödüller",
    info: [
      {
        title: "Yılın Dijital Hizmet Sağlayıcısı",
        stage: "2026",
      },
      {
        title: "En İyi Kurumsal Web Projesi",
        stage: "2023",
      },
    ],
  },
  {
    title: "deneyim",
    info: [
      {
        title: "Web & IT Hizmetleri - Kurumsal Müşteriler",
        stage: "2018 - Günümüz",
      },
      {
        title: "Güvenlik Kamerası Kurulumu",
        stage: "2016 - Günümüz",
      },
      {
        title: "Teknik Destek & Altyapı Yönetimi",
        stage: "2014 - Günümüz",
      },
    ],
  },
  {
    title: "referanslar",
    info: [
      {
        title: "ISO 27001 - Bilgi Güvenliği Yönetim Sistemi",
        stage: "2023",
      },
      {
        title: "Google Cloud Partner Sertifikası",
        stage: "2022",
      },
      {
        title: "AWS Certified Solutions Architect",
        stage: "2021",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-primary/30 pt-24 pb-28 md:py-32 md:pb-40 text-center xl:text-left overflow-y-auto">
      <Circles />

      <div className="container mx-auto flex flex-col items-center xl:flex-row gap-y-12 xl:gap-x-6 px-4">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Tutkulu <span className="text-accent">ekibimiz</span> ile
            mükemmel çözümler üretiyoruz.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Zenthra Bilişim olarak web sitesi, IT destek ve kamera kurulum
            hizmetlerinde kurumsal firmalar ile KOBİ&apos;lere uçtan uca çözüm sunuyoruz.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 w-full"
          >
            <div className="grid grid-cols-2 md:flex md:flex-1 gap-6 xl:gap-x-6 w-full">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 pr-4">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />+
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mx-auto xl:mx-0">
                  Yıllık Deneyim.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 md:after:w-[1px] md:after:h-full md:after:bg-white/10 md:after:absolute md:after:top-0 md:after:right-0 md:pr-4">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} />+
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mx-auto xl:mx-0">
                  Mutlu Müşteri.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 pr-4">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} />+
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mx-auto xl:mx-0">
                  Tamamlanan Proje.
                </div>
              </div>

              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] mx-auto xl:mx-0">
                  Kazanılan Ödül.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-auto xl:h-[480px] mb-8 xl:mb-0"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 hover:text-accent transition-all duration-300`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
