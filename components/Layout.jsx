import { Sora } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";
import BackgroundVideo from "./BackgroundVideo";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  const router = useRouter();

  // Dynamic SEO title based on active page route
  const getPageTitle = () => {
    switch (router.pathname) {
      case "/":
        return "Zenthra Bilişim | Profesyonel Web & IT Çözümleri";
      case "/about":
        return "Hakkımızda | Zenthra Bilişim";
      case "/services":
        return "Hizmetlerimiz | Zenthra Bilişim";
      case "/work":
        return "Projelerimiz | Zenthra Bilişim";
      case "/testimonials":
        return "Referanslarımız | Zenthra Bilişim";
      case "/contact":
        return "İletişim | Zenthra Bilişim";
      default:
        return "Zenthra Bilişim";
    }
  };

  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <BackgroundVideo />
      {/* metadata */}
      <Head>
        <title>{getPageTitle()}</title>
        <meta
          name="description"
          content="Zenthra Bilişim - Web sitesi, IT altyapı ve destek, kamera ile reklam prodüksiyonu. İşletmeniz için dijital ve görsel çözümler."
        />
        <meta
          name="keywords"
          content="web sitesi, IT hizmeti, kamera reklam, tanıtım filmi, teknik destek, zenthra bilişim, dijital ajans, nooess"
        />
        <link rel="icon" href="/logozenthra.png" />
        <meta name="author" content="Zenthra Bilişim" />
        <meta name="developer" content="NooEss" />
        <meta name="creator" content="NooEss" />
        <meta name="designer" content="NooEss" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />


      {/* main content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </main>
  );
};

export default Layout;
