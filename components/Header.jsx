import Image from "next/image";
import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-8 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4 lg:py-8 gap-x-4">
          {/* logo */}
          <Link href="/">
            <div className="relative w-[140px] sm:w-[220px] h-[30px] sm:h-[48px]">
              <Image
                src="/logo.svg"
                alt="Zenthra Bilişim"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
