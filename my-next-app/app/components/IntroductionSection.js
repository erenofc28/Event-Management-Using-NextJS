export default function IntroductionSection() {
  return (
    <>
      <section className="w-full min-h-[100svh] bg-white grid grid-rows-[auto_1fr]">
        {/* Text Content */}
        <div className="px-6 py-10 sm:py-14 lg:py-20 flex items-center">
          <div className="max-w-[1168px] mx-auto w-full">
            <h2
              className="font-playfair
                     text-3xl sm:text-4xl md:text-5xl lg:text-[66px]
                     font-normal leading-[140%] tracking-[0.05em]
                     text-center mb-6 sm:mb-8 lg:mb-10"
            >
              <span className="text-black">
                Where moments become memories, and{" "}
              </span>
              <span className="text-[#2835AB]">
                celebrations feel like home
              </span>
            </h2>

            <div className="max-w-[972px] mx-auto text-center">
              <p
                className="font-satoshi
                      text-base sm:text-lg lg:text-xl
                      font-light leading-[140%] tracking-[0.05em]"
              >
                <span className="text-black">
                  we believe every love story deserves a magical beginning. As a
                  fullservice wedding event contracting company, we specialize
                  in crafting
                </span>{" "}
                <span className="text-[#2835AB] font-medium">
                  unforgettable experiences
                </span>{" "}
                <span className="text-black">
                  that reflect your unique journey together. From intimate
                  gatherings to grand celebrations, we bring creativity,
                  elegance, and flawless coordination to make your dream wedding
                  come true
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="w-full overflow-hidden">
          <img
            src="images/introSectionImg.png"
            alt="Wedding celebration moment"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
