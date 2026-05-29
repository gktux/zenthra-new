import { useState } from "react";
import { socialData } from "./Socials";

const ProjectsBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mx-auto xl:mx-0 relative">
      {/* Main circle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-[185px] h-[185px] flex flex-col justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group z-10 cursor-pointer transition-transform duration-300 hover:scale-105"
      >
        <span className="text-white text-sm font-semibold tracking-[2px] uppercase text-center leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          Zenthra<br />Bilişim
        </span>
        <span className="text-white/60 text-[9px] mt-1 text-center leading-tight max-w-[120px] drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          Sosyal medya hesaplarımıza ulaşmak için tıklayın
        </span>
      </button>

      {/* Social media popup */}
      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 flex items-center gap-3 bg-black/70 backdrop-blur-md border border-white/15 rounded-full px-5 py-3 z-50 shadow-2xl animate-fadeInUp">
          {socialData.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noreferrer noopener"
              title={social.name}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-lg hover:bg-accent hover:border-accent hover:text-white hover:scale-110 transition-all duration-300"
            >
              <social.Icon />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsBtn;
