import Image from "next/image";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WorkProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Floating accessible close button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="fixed top-4 right-4 md:top-8 md:right-8 z-[110] w-12 h-12 flex items-center justify-center rounded-full bg-black/40 border border-white/20 text-white hover:bg-accent hover:border-accent transition-all duration-300 shadow-lg cursor-pointer"
          aria-label="Kapat"
        >
          <HiX className="text-2xl" />
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-primary border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >

          <div className="p-6 sm:p-8">
            <p className="text-accent text-sm uppercase tracking-widest mb-2 pr-12">
              {project.category}
            </p>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 pr-12">
              {project.title}
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">{project.description}</p>

            {project.features?.length > 0 && (
              <ul className="grid sm:grid-cols-2 gap-2 mb-8 text-sm text-white/80">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <Swiper
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="w-full rounded-xl overflow-hidden"
              spaceBetween={12}
            >
              {project.gallery.map((image) => (
                <SwiperSlide key={image.src}>
                  <div className="relative w-full aspect-video bg-black/30 rounded-lg overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.caption}
                      fill
                      className="object-contain"
                      sizes="(max-width: 896px) 100vw, 896px"
                    />
                  </div>
                  <p className="text-center text-sm text-white/50 mt-2 pb-2">
                    {image.caption}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WorkProjectModal;
