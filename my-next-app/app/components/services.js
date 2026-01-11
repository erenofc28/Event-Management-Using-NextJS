export default function services() {
  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Services Section */}
        <section className="w-full px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-[1920px] mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-20">
              <h2 className="font-butler text-[#2835AB] text-xl md:text-2xl tracking-[0.05em] mb-4 md:mb-6">
                EXPLORE
              </h2>
              <h1 className="font-playfair text-brand-black text-4xl md:text-5xl lg:text-[66px] leading-[1.4] tracking-[0.05em] px-4">
                Our Event Planning Services
              </h1>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-0 md:gap-8 lg:gap-12 xl:gap-16 max-w-[1700px] mx-auto px-4 lg:px-8 items-start">
              {/* Decor Card */}
              <div
                className="service-card
                flex flex-col justify-center md:justify-start
                min-h-[100svh] md:min-h-0
                gap-6 md:gap-9 lg:mt-20"
              >
                <div className="service-image-wrapper overflow-hidden rounded-sm">
                  <img
                    src="images/homePageService1.png"
                    alt="Elegant wedding decor with draped fabrics and floral arrangements"
                    className="w-full h-auto object-cover aspect-[446/586]"
                  />
                </div>
                <div className="service-content text-center space-y-4">
                  <h3 className="font-playfair text-[#2835AB] text-3xl md:text-4xl lg:text-[48px] leading-[1.4] tracking-[0.05em]">
                    Decor
                  </h3>
                  <p className="font-satoshi font-light text-brand-black text-lg md:text-xl leading-[1.4] tracking-[0.05em]">
                    Our bespoke décor service is designed to transform your
                    celebration into an unforgettable visual experience.
                    Thoughtfully curated and flawlessly executed, we craft
                    elegant settings that elevate every moment and bring your
                    vision to life.
                  </p>
                </div>
              </div>

              {/* Photography Card */}
              <div
                className="service-card
                flex flex-col justify-center md:justify-start
                min-h-[100svh] md:min-h-0
                gap-6 md:gap-9"
              >
                <div className="service-image-wrapper overflow-hidden rounded-sm">
                  <img
                    src="images/homePageService2.png"
                    alt="Beautiful wedding photography of a couple celebrating with friends"
                    className="w-full h-auto object-cover aspect-[586/950]"
                  />
                </div>
                <div className="service-content text-center space-y-4">
                  <h3 className="font-playfair text-[#2835AB] text-3xl md:text-4xl lg:text-[48px] leading-[1.4] tracking-[0.05em]">
                    Photography
                  </h3>
                  <p className="font-satoshi font-light text-brand-black text-lg md:text-xl leading-[1.4] tracking-[0.05em]">
                    Our wedding photography service captures your most cherished
                    moments with timeless elegance, beautifully crafted and
                    flawlessly documented to create memories you'll treasure
                    forever.
                  </p>
                </div>
              </div>

              {/* Management & Hospitality Card */}
              <div
                className="service-card
                flex flex-col justify-center md:justify-start
                min-h-[100svh] md:min-h-0
                gap-6 md:gap-9 lg:mt-20"
              >
                <div className="service-image-wrapper overflow-hidden rounded-sm">
                  <img
                    src="images/homePageService3.png"
                    alt="Vibrant wedding celebration with guests dancing and celebrating"
                    className="w-full h-auto object-cover aspect-[446/586]"
                  />
                </div>
                <div className="service-content text-center space-y-4">
                  <h3 className="font-playfair text-[#2835AB] text-3xl md:text-4xl lg:text-[48px] leading-[1.4] tracking-[0.05em]">
                    Management & Hospitality
                  </h3>
                  <p className="font-satoshi font-light text-brand-black text-lg md:text-xl leading-[1.4] tracking-[0.05em]">
                    We handle every detail with precision, providing refined
                    hospitality and smooth event management to create a
                    stress-free, memorable experience for you and your guests.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
