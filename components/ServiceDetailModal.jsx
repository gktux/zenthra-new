import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

const ServiceDetailModal = ({ service, onClose }) => {
  useEffect(() => {
    if (!service) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [service, onClose]);

  if (!service) return null;

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
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-primary border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >

          <div className="p-6 sm:p-8">
            {/* Category */}
            <p className="text-accent text-sm uppercase tracking-widest mb-2 font-medium pr-12">
              {service.category}
            </p>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 pr-12">
              {service.title}
            </h3>

            {/* Divider */}
            <div className="h-[2px] w-20 bg-accent mb-6 rounded-full" />

            {/* Description */}
            <p className="text-white/70 leading-relaxed mb-6 text-sm sm:text-base">
              {service.detailedDescription || service.description}
            </p>

            {/* Features Title */}
            <h4 className="text-white font-semibold text-lg mb-4">
              Neler Sunuyoruz?
            </h4>

            {/* Features List */}
            {service.features?.length > 0 && (
              <ul className="grid sm:grid-cols-2 gap-3 mb-8 text-sm text-white/80">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white/[0.02] border border-white/5 p-3 rounded-lg hover:bg-white/[0.05] transition-all">
                    <span className="text-accent font-bold mt-[2px]">•</span>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Details Grid */}
            {service.details?.length > 0 && (
              <div className="border-t border-white/10 pt-6">
                <h4 className="text-white font-semibold text-lg mb-4">
                  Hizmet Detayları
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  {service.details.map((detail, i) => (
                    <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-4 flex flex-col justify-between">
                      <span className="text-white/40 text-[11px] uppercase tracking-wider font-semibold mb-1">
                        {detail.title}
                      </span>
                      <span className="text-white/90 text-sm font-medium">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceDetailModal;
