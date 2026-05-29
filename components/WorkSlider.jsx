import Image from "next/image";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

import WorkProjectModal from "./WorkProjectModal";

export const zenthraWmsProject = {
  id: "zenthra-wms",
  title: "Zenthra WMS Depo Programı",
  category: "Kurumsal Depo Yönetimi",
  cover: "/zenthra-wms-dashboard.jpg",
  description:
    "Zenthra WMS, işletmeler için geliştirilmiş kurumsal depo yönetim sistemidir. Stok giriş-çıkış, raf ve depo tanımlama, tedarikçi yönetimi, kritik stok uyarıları ve detaylı raporlama modülleri ile depo operasyonlarını tek panelden yönetmenizi sağlar.",
  features: [
    "Panel özet ve anlık KPI takibi",
    "Ürün, kategori ve raf tanımlama",
    "Stok giriş, çıkış ve depo transferi",
    "Tedarikçi ve sipariş yönetimi",
    "SKT / miyad takip paneli",
    "Haftalık hareket ve kategori raporları",
  ],
  gallery: [
    { src: "/zenthra-wms-dashboard.jpg", caption: "Panel Özet (Dashboard)" },
    { src: "/zenthra-wms-login.jpg", caption: "Giriş Ekranı" },
    { src: "/zenthra-wms-urun.jpg", caption: "Ürün Tanımlama" },
    { src: "/zenthra-wms-tedarikci.jpg", caption: "Tedarikçi Yönetimi" },
  ],
};

const EMPTY_SLOTS = 3;

const WorkSlider = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[300px] sm:h-[480px]">
        {/* Zenthra WMS */}
        <button
          type="button"
          onClick={() => setActiveProject(zenthraWmsProject)}
          className="relative rounded-lg overflow-hidden group text-left col-span-1 row-span-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <div className="relative w-full h-[140px] sm:h-[230px]">
            <Image
              src={zenthraWmsProject.cover}
              alt={zenthraWmsProject.title}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500"
              aria-hidden
            />
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-accent mb-1">
                {zenthraWmsProject.category}
              </p>
              <p className="font-semibold text-sm sm:text-base leading-tight mb-2">
                {zenthraWmsProject.title}
              </p>
              <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs tracking-wider text-white/80 group-hover:text-accent transition-colors">
                Detayları gör
                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </button>

        {/* Boş proje alanları */}
        {Array.from({ length: EMPTY_SLOTS }).map((_, i) => (
          <div
            key={i}
            className="rounded-lg border border-dashed border-white/15 bg-white/[0.03] flex flex-col items-center justify-center h-[140px] sm:h-[230px] px-4"
          >
            <span className="text-white/25 text-3xl mb-2">+</span>
            <span className="text-white/30 text-xs sm:text-sm text-center">
              Proje yakında
            </span>
          </div>
        ))}
      </div>

      {activeProject && (
        <WorkProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
};

export default WorkSlider;
