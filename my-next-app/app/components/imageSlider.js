import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";

const images = [
  "https://api.builder.io/api/v1/image/assets/TEMP/fca02e07ffb2b27d534cd40643db1a937d8ffd20?width=776",
  "https://api.builder.io/api/v1/image/assets/TEMP/6451d0b205356c43f3c59c393f972b22cd13bffd?width=776",
  "https://api.builder.io/api/v1/image/assets/TEMP/148e56a4834b75a7e62311b8c647e40d1a213b0b?width=960",
  "https://api.builder.io/api/v1/image/assets/TEMP/81f9cb9774cd69b99ff27546d9ed204b7beaf131?width=776",
  "https://api.builder.io/api/v1/image/assets/TEMP/d2f59ebc58893de21443fb1cc6e04eaeb7d125fd?width=776",
];

export default function PortfolioSection() {
  return (
    <section className="bg-[#f2f1fb] py-20 px-6 md:px-12">
      {/* Top Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start mb-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] leading-tight italic">
            A collection of meaningful celebrations,
          </h2>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] leading-tight italic ml-0 md:ml-32">
            designed with intention
          </h2>
          <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] leading-tight italic">
            and brought to life with heart
          </h2>
        </div>
        <span className="uppercase tracking-[0.2em] text-xs font-medium text-gray-500 mt-4 md:mt-2">
          Portfolio
        </span>
      </div>

      {/* Slider Section */}
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[FreeMode]}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          watchSlidesProgress={true}
          grabCursor={true}
          speed={800}
          onProgress={(swiper) => {
            swiper.slides.forEach((slide) => {
              const absProgress = Math.abs(slide.progress);
              
              // Only center is 1.0, sides drop to 0.7 quickly
              const scale = 1 - (absProgress * 0.3);
              const finalScale = Math.max(0.7, scale);

              const inner = slide.querySelector('.slide-inner');
              if (inner) {
                inner.style.transform = `scale(${finalScale})`;
                inner.style.transition = "transform 400ms cubic-bezier(0.4, 0, 0.2, 1)";
              }
              
              // Ensure center image is layered on top
              slide.style.zIndex = absProgress < 0.3 ? "10" : "1";
            });
          }}
        >
          {images.map((src, i) => (
            <SwiperSlide
              key={i}
              className="!w-[280px] md:!w-[400px] lg:!w-[480px]"
            >
              <div className="slide-inner origin-center">
                <img
                  src={src}
                  alt=""
                  className="w-full h-[380px] md:h-[550px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Footer Link */}
      <div className="mt-16 text-center">
        <a 
          href="#portfolio" 
          className="uppercase tracking-[0.2em] text-xs font-semibold text-gray-800 border-b border-gray-400 pb-1 hover:text-black transition-colors"
        >
          View All
        </a>
      </div>
    </section>
  );
}