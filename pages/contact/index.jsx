import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { fadeIn } from "../../variants";
import { useState, useRef } from "react";
import dynamic from "next/dynamic";

const ReCAPTCHA = dynamic(() => import("react-google-recaptcha"), { ssr: false });

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!recaptchaToken) {
      alert("Lütfen reCAPTCHA doğrulamasını tamamlayın.");
      return;
    }
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);
    formData.append("g-recaptcha-response", recaptchaToken);

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Mesajınız alındı. En kısa sürede size dönüş yapacağız.");
          myForm.reset();
          if (recaptchaRef.current) {
            recaptchaRef.current.reset();
          }
          setRecaptchaToken(null);
        } else {
          console.log(res);
          alert("Bir hata oluştu, lütfen tekrar deneyin.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Bir hata oluştu, lütfen tekrar deneyin.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="h-full w-full overflow-y-auto bg-primary/30">
      <div className="container mx-auto pt-24 pb-28 md:py-32 md:pb-36 flex items-center justify-center min-h-screen px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 w-full max-w-6xl">
          {/* info cards & details */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col justify-center text-left"
          >
            <h2 className="h2 mb-4">
              Bizimle <span className="text-accent">iletişime geçin.</span>
            </h2>
            <p className="max-w-[500px] mb-8 text-white/70">
              Zenthra Bilişim olarak teknoloji ihtiyaçlarınıza profesyonel ve uçtan uca çözümler sunuyoruz. Projeleriniz, sorularınız veya destek talepleriniz için formu doldurabilir veya doğrudan bizimle iletişime geçebilirsiniz.
            </p>

            {/* contact details */}
            <div className="flex flex-col gap-y-6 mb-8">
              {/* Phone */}
              <a href="tel:+905315800753" className="flex items-center gap-x-4 group cursor-pointer w-fit">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className="text-sm text-white/50">Telefon</div>
                  <div className="text-white font-medium group-hover:text-accent transition-all duration-300">+90 (531) 580 07 53</div>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@zenthrabilisim.com" className="flex items-center gap-x-4 group cursor-pointer w-fit">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-sm text-white/50">E-posta</div>
                  <div className="text-white font-medium group-hover:text-accent transition-all duration-300">info@zenthrabilisim.com</div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-x-4 group w-fit">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="text-sm text-white/50">Ofis</div>
                  <div className="text-white font-medium">Atakent Mh., Atakum / Samsun</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-x-4 group w-fit">
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xl">
                  <FaClock />
                </div>
                <div>
                  <div className="text-sm text-white/50">Çalışma Saatleri</div>
                  <div className="text-white font-medium">Hafta İçi: 08:30 - 18:30</div>
                </div>
              </div>
            </div>

            {/* active response indicator (commented out as requested) */}
            {/* <div className="inline-flex items-center gap-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-full text-sm max-w-max">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Ortalama Yanıt Süresi: <strong className="font-semibold">30 dakika</strong>
            </div> */}
          </motion.div>

          {/* form card */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col justify-center"
          >
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              autoCapitalize="off"
              name="contact"
              data-netlify-recaptcha="true"
              className="flex flex-col gap-y-4"
            >
              {/* Hidden Netlify field */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-y-1">
                  <label htmlFor="name" className="text-xs text-white/60 font-medium pl-1">Ad Soyad</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Adınızı soyadınızı girin"
                    className="input"
                    disabled={isLoading}
                    aria-disabled={isLoading}
                    required
                    aria-required
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <label htmlFor="email" className="text-xs text-white/60 font-medium pl-1">E-posta</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="E-posta adresinizi girin"
                    className="input"
                    disabled={isLoading}
                    aria-disabled={isLoading}
                    required
                    aria-required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-y-1">
                <label htmlFor="subject" className="text-xs text-white/60 font-medium pl-1">Konu</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Konu başlığını girin"
                  className="input"
                  disabled={isLoading}
                  aria-disabled={isLoading}
                  required
                  aria-required
                />
              </div>

              <div className="flex flex-col gap-y-1">
                <label htmlFor="message" className="text-xs text-white/60 font-medium pl-1">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Mesajınızı buraya yazın..."
                  className="textarea"
                  disabled={isLoading}
                  aria-disabled={isLoading}
                  required
                  aria-required
                />
              </div>

              {/* reCAPTCHA */}
              <div className="flex justify-center md:justify-start my-2 max-w-full overflow-hidden origin-left scale-[0.82] sm:scale-100">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LcdkAEtAAAAADuUPI3qJT9Bi20ZTP98_sdxFUfz"
                  onChange={handleRecaptchaChange}
                  theme="dark"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[180px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group bg-accent/10 hover:bg-accent text-white font-medium"
                disabled={isLoading}
                aria-disabled={isLoading}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 flex items-center gap-x-2">
                  Mesajı Gönder
                </span>

                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  aria-hidden
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
