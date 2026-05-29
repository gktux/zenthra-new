import Link from "next/link";

import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiWhatsappLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/zenthrasoftware",
    Icon: RiInstagramLine,
  },
  {
    name: "Facebook",
    link: "https://facebook.com", // Assuming you still want this, otherwise let me know
    Icon: RiFacebookLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/zenthra-bi%CC%87li%CC%87%C5%9Fi%CC%87m/",
    Icon: RiLinkedinLine,
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/905315800753",
    Icon: RiWhatsappLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-accent transition-all duration-300"
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
