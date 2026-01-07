import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
export default function Portfolio(){
    const images = [
      "images/imgSlide1.png",
      "images/imgSlide2.png",
      "images/imgSlide3.png",
      "images/imgSlide4.png",
      "images/imgSlide5.png",
    
    ];
    return(<>
    
    
    <section className="bg-[#f2f1fb] py-20 px-6 md:px-12">
      {/* Top Header Section */}
<div className="max-w-[1440px] mx-auto px-6 md:px-16 pt-20 mb-16 relative">
  {/* Top Right Label */}
<div
  className="
    absolute
    left-1/2 -translate-x-1/2   /* CENTER on mobile */
    top-20 mt-[-90px]

    md:left-auto md:translate-x-0
    md:right-16                 /* RIGHT on desktop */
  "
>
  <span className="uppercase tracking-[0.4em] text-[10px] md:text-xs font-medium text-[#2A2A3E]/60">
    Portfolio
  </span>
</div>


{/* Staggered Heading */}
<div className="flex flex-col space-y-3 md:space-y-1 text-center md:text-left">

  {/* Line 1 */}
  <h2 className="
    text-2xl sm:text-3xl md:text-5xl
    font-playfair font-light text-[#2A2A3E]
    leading-[1.15] tracking-tight
  ">
    A collection of meaningful celebrations,
  </h2>

  {/* Line 2 */}
  <h2 className="
    text-2xl sm:text-3xl md:text-5xl
    font-playfair font-light text-[#2A2A3E]
    leading-[1.15] tracking-tight
    md:pl-[45%]
  ">
    designed with intention
  </h2>

  {/* Line 3 */}
  <h2 className="
    text-2xl sm:text-3xl md:text-5xl
    font-playfair font-light text-[#2A2A3E]
    leading-[1.15] tracking-tight
    md:pl-[18%]
  ">
    and brought to life with heart
  </h2>

</div>

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
    </>)
}