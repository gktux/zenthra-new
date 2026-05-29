import {
  RxDesktop,
  RxGear,
  RxVideo,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxDesktop,
    title: "Web Sitesi Hizmeti",
    category: "Yazılım ve Tasarım",
    description:
      "Kurumsal ve e-ticaret web siteleri, modern UI/UX tasarımı, SEO uyumluluğu, yüksek performanslı web uygulamaları ve kesintisiz teknik destek süreçleri.",
    detailedDescription:
      "Zenthra Bilişim olarak, markanızı dijital dünyada en üst sıraya taşıyacak, modern, hızlı ve güvenli web siteleri geliştiriyoruz. Kurumsal web sitelerinden e-ticaret çözümlerine kadar geniş bir yelpazede profesyonel hizmet sunmaktayız. Tamamen mobil uyumlu ve SEO dostu kod yapısıyla arama motorlarında görünürlüğünüzü artırıyoruz.",
    features: [
      "Özel UI/UX Arayüz Tasarımı",
      "Mobil (Responsive) Uyumlu Kodlama",
      "Arama Motoru Optimizasyonu (SEO)",
      "Yönetim Paneli Entegrasyonu (CMS)",
      "E-Ticaret ve Ödeme Sistemleri Altyapısı",
      "Yüksek Performans & Hızlı Yüklenme",
      "Güvenli SSL Sertifikası ve Veri Koruması",
      "Düzenli Bakım ve Teknik Destek Hizmeti"
    ],
    details: [
      { title: "Teknolojiler", value: "React, Next.js, Tailwind, Node.js" },
      { title: "Teslim Süresi", value: "2 - 4 Hafta Arası" },
      { title: "Teklif", value: "Bize Ulaşın" }
    ]
  },
  {
    Icon: RxGear,
    title: "IT Altyapı & Destek",
    category: "Bilişim Teknolojileri",
    description:
      "Ağ ve network kurulumu, sunucu sanallaştırma, otomatik bulut yedekleme, 7/24 kurumsal teknik destek, siber güvenlik çözümleri ve firewall yönetimi.",
    detailedDescription:
      "İşletmenizin kesintisiz ve güvenli bir şekilde çalışmasını sağlamak için kurumsal ağ kurulumları, sunucu yönetimleri ve 7/24 IT destek hizmetleri sunuyoruz. Verilerinizi güvence altına alıyor, donanım ve yazılım süreçlerinizi uçtan uca yönetiyoruz. Olası arıza ve siber saldırılara karşı sistemlerinizi proaktif olarak izliyoruz.",
    features: [
      "Kurumsal Ağ (Network) Kurulumu & Yapılandırması",
      "Sunucu Kurulumu, Yönetimi ve Sanallaştırma",
      "Otomatik Bulut & Fiziksel Yedekleme Sistemleri",
      "7/24 Kesintisiz Uzaktan ve Yerinde Teknik Destek",
      "Firewall ve Siber Güvenlik Duvarı Yönetimi",
      "KVKK Veri Güvenliği Uyumluluk Analizi",
      "Donanım Tedariği ve Periyodik Sistem Bakımı",
      "E-Posta ve Kurumsal Bulut Çözümleri Entegrasyonu"
    ],
    details: [
      { title: "Hizmet Türü", value: "Aylık Bakım / Proje Bazlı" },
      { title: "Destek Süresi", value: "7/24 Proaktif İzleme" },
      { title: "Partnerler", value: "Fortinet, Cisco, Synology" }
    ]
  },
  {
    Icon: RxVideo,
    title: "Kamera & Güvenlik",
    category: "Güvenlik Sistemleri",
    description:
      "Fabrika, depo ve ofisler için yüksek çözünürlüklü IP/Analog profesyonel kamera sistemleri kurulumu, uzaktan izleme mobil entegrasyonu ve bakım.",
    detailedDescription:
      "Fabrika, depo, ofis ve tüm ticari alanlarınız için yüksek çözünürlüklü IP ve Analog HD profesyonel güvenlik kamerası çözümleri sunuyoruz. Yapay zeka destekli analiz yazılımları ile güvenliğinizi en üst düzeye taşıyoruz. Mobil entegrasyon sayesinde işletmenizi dünyanın her yerinden anlık olarak yüksek kalitede izleyebilirsiniz.",
    features: [
      "Yüksek Çözünürlüklü IP ve Analog HD Kamera Kurulumu",
      "7/24 Uzaktan İzleme ve Mobil Uygulama Entegrasyonu",
      "Yapay Zeka (AI) Destekli Plaka Okuma ve Yüz Tanıma",
      "Gelişmiş NVR/DVR Kayıt Cihazları ve Depolama",
      "Harekete Duyarlı Anlık Bildirim Alarm Sistemleri",
      "Kablo Altyapısı Çekimi ve Profesyonel İşçilik",
      "Gece Görüşlü (ColorVu / DarkFighter) Teknolojiler",
      "Periyodik Kamera Temizliği ve Sistem Bakım Desteği"
    ],
    details: [
      { title: "Kullanım Alanları", value: "Fabrika, Depo, Ofis, Site" },
      { title: "Teknoloji", value: "IP PoE, Termal, AI Analiz" },
      { title: "Bakım Anlaşması", value: "Yıllık Periyodik Bakım" }
    ]
  },
];

const ServiceSlider = ({ onSelectService }) => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[340px] sm:h-[380px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i} className="h-full">
          <div
            onClick={() => onSelectService && onSelectService(item)}
            className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-6 flex flex-col justify-between group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 border border-white/5 hover:border-accent/30 shadow-lg"
          >
            {/* top info */}
            <div>
              {/* icon */}
              <div className="text-4xl text-accent mb-4">
                <item.Icon aria-hidden />
              </div>

              {/* title & description */}
              <div className="mb-2">
                <div className="mb-1 text-lg font-semibold">{item.title}</div>
                <p className="max-w-[350px] leading-normal text-xs sm:text-sm text-white/60 font-light">{item.description}</p>
              </div>
            </div>

            {/* arrow */}
            <div className="text-2xl text-white/50 group-hover:text-accent transition-colors self-end mt-2">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
