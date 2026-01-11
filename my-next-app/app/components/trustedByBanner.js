import { motion } from "framer-motion";

/* ---------------- Verified Shield Icon ---------------- */
const VerifiedIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 29 29"
    fill="none"
    className="inline-block ml-2"
  >
    <path
      d="M13.4324 18.2364L19.4028 11.3899L18.1435 10.3182L13.3515 15.8134L10.3186 13.1686L9.16644 14.4898L13.4324 18.2364ZM15.1801 25.6284C12.5119 25.1518 10.253 23.7766 8.40327 21.5028C6.55354 19.2289 5.53135 16.6679 5.33667 13.8197L4.87946 7.1302L13.6432 3.14258L22.8681 5.9007L23.3253 12.5902C23.52 15.4384 22.8557 18.1147 21.3326 20.6191C19.8094 23.1235 17.7586 24.7932 15.1801 25.6284ZM15.061 23.8857C17.1672 23.0264 18.832 21.5619 20.0554 19.4921C21.2788 17.4224 21.8066 15.1602 21.6389 12.7055L21.2623 7.19647L13.7662 4.94144L6.64657 8.19543L7.02311 13.7044C7.19088 16.1592 8.02157 18.3285 9.51522 20.2125C11.0089 22.0966 12.8575 23.3209 15.061 23.8857Z"
      fill="black"
    />
  </svg>
);

/* ---------------- Brand Data ---------------- */
const brands = [
  {
    name: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    bg: "bg-black",
    invert: true,
  },
  {
    name: "Starbucks",
    logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg",
    bg: "bg-white",
    border: "border-neutral-100",
  },
  {
    name: "H&M",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
    bg: "bg-transparent",
    isFlat: true,
  },
  {
    name: "Zara",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
    bg: "bg-black",
    invert: true,
  },

  // 🔽 FIXED LINKS BELOW 🔽

  {
    name: "Rolex",
    logo: "https://images.seeklogo.com/logo-png/11/1/rolex-logo-png_seeklogo-119524.png",
    bg: "bg-white",
    border: "border-neutral-100",
  },
  {
    name: "Maybach",
    logo: "https://imgs.search.brave.com/ZlfhmTGcyZBXCX8O7w57C6Y7DEqqwykix2ZpZQXA3jg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/NTAyLzczOS9zbWFs/bC9tYXliYWNoLWJy/YW5kLWxvZ28tY2Fy/LXN5bWJvbC13aXRo/LW5hbWUtd2hpdGUt/ZGVzaWduLWdlcm1h/bi1hdXRvbW9iaWxl/LWlsbHVzdHJhdGlv/bi13aXRoLWJsYWNr/LWJhY2tncm91bmQt/ZnJlZS12ZWN0b3Iu/anBn",
    bg: "bg-black",
  },
  {
    name: "Cartier",
    logo: "https://imgs.search.brave.com/QrTt3m5VnelnbLcFiN5OXVihmGSiaSzC-KhXdiz80Dc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9jYXJ0/aWVyLWxvZ28tZW50/cmFuY2Utc3RvcmUt/dmllbm5hLWF1c3Ry/aWEtbWF5LWZyZW5j/aC1jb21wYW55LXNl/bGxpbmctamV3ZWxs/ZXJ5LXdhdGNoZXMt/MTQ0NTAwNjcyLmpw/Zw",
    bg: "bg-[#660000]",
  },
];

export default function TrustedByBanner() {
  return (
    <div className="w-full bg-white pt-24 pb-32 overflow-hidden relative">
      {/* 1. TOP TILTED MARQUEE */}
      <div
        className="absolute top-0 left-[-5%] w-[210%] bg-[#FBEBFF] py-3 border-y border-black/5 flex overflow-hidden"
        style={{ transform: "rotate(-2deg)", transformOrigin: "center" }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex items-center mx-10">
              <span className="font-medium text-[11px] tracking-[0.3em] text-black">
                TRUSTED BY
              </span>
              <VerifiedIcon />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. LOGO SECTION */}
      {/* import { motion } from "framer-motion"; */}

      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1], // premium easing
              }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              {/* FLAT LOGO (H&M) */}
              {brand.isFlat ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  draggable="false"
                  className="h-10 md:h-12 object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              ) : (
                /* CIRCULAR LOGOS */
                <div
                  className={`
              w-20 h-20 md:w-24 md:h-24
              rounded-full
              ${brand.bg}
              ${brand.border ?? ""}
              flex items-center justify-center
              p-4
              shadow-sm
              transition-transform duration-500
              ease-[cubic-bezier(0.16,1,0.3,1)]
              hover:scale-[1.08]
            `}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    draggable="false"
                    className={`
                max-w-[70%] max-h-[70%]
                object-contain
                ${brand.invert ? "invert" : ""}
              `}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
