import Hero from "../components/hero";
import Footer from "../components/footer";
import FloatingWP from "../components/FloatingWhatsappIcon";
import ContactForm from "../components/contactForm";
import Image from "next/image";

export default function aboutUsPage() {
  const imgs = [
    "/images/aboutUsPortrait.png",
    "/images/aboutUsPortrait.png",
    "/images/aboutUsPortrait.png",
    "/images/aboutUsPortrait.png",
    "/images/aboutUsPortrait.png",
  ];

  return (
    <>
      <Hero
        bgImg="images/aboutUsPageBg.png"
        content="About"
        contactUsBtn={false}
      />

      {/* Vision Statement Section */}
      <section
        className="w-full px-4 
                   min-h-[100svh] flex items-center
                   py-16 md:py-24"
      >
        <div className="max-w-[1643px] mx-auto">
          <h2
            className="font-playfair 
                 text-3xl sm:text-3xl md:text-5xl lg:text-[55px]
                 leading-[1.35] tracking-[0.02em]
                 text-center"
          >
            <span className="text-[#6B6B6B]">We are </span>
            <span className="text-[#541A2E]">
              visionaries, planners, creative designers,{" "}
            </span>
            <span className="text-[#6B6B6B]">and </span>
            <span className="text-[#541A2E]">detail-driven coordinators, </span>
            <span className="text-[#6B6B6B]">
              crafting experiences that feel effortless and unforgettable.
            </span>
          </h2>
        </div>
      </section>

      {/* About Our Founding Section */}
      <section
        className="w-full px-4
                   min-h-[100svh] flex items-center
                   py-10 md:py-14"
      >
        <div className="max-w-[1200px] mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-[480px_1fr] 
                    gap-10 items-center justify-center mx-auto"
          >
            {/* Founder Image */}
            <div className="w-full max-w-[480px] mx-auto lg:mx-0">
              <img
                src="images/founder.png"
                alt="Founder portrait"
                className="w-full h-auto object-cover rounded-sm aspect-[4/5]"
              />
            </div>

            {/* Founder Content */}
            <div className="pl-0 mx-auto lg:mx-0 text-center lg:text-left">
              <p
                className="font-butler text-brand-gray
              text-lg sm:text-base md:text-lg
              tracking-[0.05em]"
              >
                About Our Founder
              </p>

              <h3 className="leading-[1.25] tracking-[0.04em] font-playfair">
                <span
                  className="text-[#541A2E] font-light
                   text-2xl sm:text-xl md:text-2xl lg:text-5xl"
                >
                  Shri Ram
                </span>
                <span
                  className="font-satoshi font-light text-brand-gray
                   text-2xl sm:text-xl md:text-2xl lg:text-5xl"
                >
                  {" "}
                  that Begins with a Vision and Ends in Magic
                </span>
              </h3>

              <p
                className="font-satoshi font-light text-brand-gray
              text-lg sm:text-base md:text-lg
              leading-[1.7] max-w-[560px] mt-6"
              >
                Our bespoke décor service is designed to transform your
                celebration into an unforgettable visual experience. Every
                element is thoughtfully curated, ensuring harmony in every
                detail and elevating each moment into a timeless memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Founding Partner Section */}
      <section
        className="w-full px-4
                   min-h-[100svh] flex items-center
                   py-10 md:py-14 mb-10"
      >
        <div className="max-w-[1200px] mx-auto">
          <div
            className="grid grid-cols-1 lg:grid-cols-[480px_1fr] 
                    gap-10 items-center justify-center mx-auto"
          >
            {/* Founder Image */}
            <div className="w-full max-w-[480px] mx-auto lg:mx-0">
              <img
                src="images/founder.png"
                alt="Founder portrait"
                className="w-full h-auto object-cover rounded-sm aspect-[4/5]"
              />
            </div>

            {/* Founder Content */}
            <div className="pl-0 mx-auto lg:mx-0 text-center lg:text-left">
              <p className="font-butler text-brand-gray text-base md:text-lg tracking-[0.05em]">
                About Our Founder Partner
              </p>

              <h3 className="leading-[1.25] tracking-[0.04em] font-playfair">
                <span className=" text-[#541A2E] font-light text-brand-gray text-xl md:text-2xl lg:text-5xl">
                  Shri Ram
                </span>
                <span className="font-satoshi font-light text-brand-gray text-xl md:text-2xl lg:text-5xl">
                  {" "}
                  that Begins with a Vision and Ends in Magic
                </span>
              </h3>

              <p className="font-satoshi font-light text-brand-gray text-base md:text-lg leading-[1.6] max-w-[560px] mt-5">
                Our bespoke décor service is designed to transform your
                celebration into an unforgettable visual experience. Every
                element is thoughtfully curated, ensuring harmony in every
                detail and elevating each moment into a timeless memory.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full bg-brand-burgundy px-4
             min-h-[100svh] md:min-h-0
             flex items-center
             py-16 md:py-15"
      >
        <div className="max-w-[1590px] mx-auto">
          <h2
            className="font-playfair text-[#F5EA8A]
                 text-3xl sm:text-3xl md:text-5xl lg:text-[50px]
                 leading-[1.4] tracking-[0.05em]
                 text-center"
          >
            We offer honest guidance, bespoke ideas, and flawlessly deliver
            unforgettable celebrations.
          </h2>
        </div>
      </section>

      {/* About Section */}
      {/* About Section */}
      <section className="w-full px-4 py-12 md:py-16 relative bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center my-10">
            {/* About Kalakar Content */}

            <div
              className="space-y-5 lg:space-y-6 text-center lg:text-right
 lg:order-1 max-w-[600px] ml-auto"
            >
              <p
                className="font-satoshi font-light text-brand-gray
              text-lg sm:text-base md:text-lg
              leading-[1.7] tracking-[0.04em]"
              >
                About Kalakar
              </p>

              <h3
                className="text-3xl sm:text-2xl md:text-4xl lg:text-[40px]
               leading-[1.25] tracking-[0.04em] font-playfair"
              >
                <span
                  className="text-[#541A2E] font-light text-brand-gray 
                 text-3xl sm:text-3xl md:text-2xl lg:text-4xl"
                >
                  Shri Ram
                </span>

                <span className="font-satoshi font-light text-brand-gray">
                  {" "}
                  that Begins with a Vision and Ends in Magic
                </span>
              </h3>

              <p
                className="font-satoshi font-light text-brand-gray 
                      text-base md:text-lg 
                      leading-[1.6] tracking-[0.04em]"
              >
                Our bespoke décor service is designed to transform your
                celebration into an unforgettable visual experience. Every
                element is thoughtfully curated, from colors and textures to
                lighting and layout, ensuring harmony in every detail.
              </p>
            </div>

            {/* Kalakar Image */}
            <div className="w-full max-w-[520px] mx-auto lg:mx-0 lg:order-2">
              <img
                src="images/kalakar.png"
                alt="About Kalakar"
                className="w-full h-auto object-cover rounded-sm aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Crew Members Section - Burgundy Bar */}
      <section className="w-full bg-brand-burgundy py-5">
        <div className="max-w-[1920px] mx-auto text-center">
          <h2 className="font-playfair  text-[#F5EA8A] text-4xl md:text-5xl lg:text-[56px] leading-[1.4] tracking-[0.05em]">
            Our Crew Members
          </h2>
        </div>
      </section>

      <div
        className="w-full overflow-hidden
                min-h-[100svh] flex items-center py-10"
      >
        <div className="flex w-max infinite-slider">
          {[...imgs, ...imgs].map((src, index) => (
            <div key={index} className="flex-shrink-0 w-[260px] mx-6">
              <Image
                src={src}
                alt={`Portrait ${index}`}
                width={260}
                height={360}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <ContactForm ContactBgColor="bg-[#EEEAEB]" />
      <Footer />
      <FloatingWP />
    </>
  );
}
