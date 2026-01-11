import Hero from "../components/hero";
import Footer from "../components/footer";
import FloatingWhatsapp from "../components/FloatingWhatsappIcon";
export default function contactUs() {
  return (
    <>
      <Hero
        content="Contact Us"
        bgImg="images/experience_bg.png"
        contactUsBtn={false}
      />

      <section
        className="bg-white px-6
             min-h-[100svh] flex items-center
             py-16 sm:py-20 lg:py-24"
      >
        <div className="max-w-[976px] mx-auto text-center">
          <p
            className="font-playfair
                 text-3xl sm:text-3xl md:text-3xl lg:text-[40px]
                 leading-[1.35] tracking-[0.04em]"
          >
            <span className="text-[#4E4E4E]">
              We look forward to understanding your{" "}
            </span>
            <span className="text-[#541A2E]">
              event plans and discussing how Kalakar can seamlessly curate and
              deliver
            </span>
            <span className="text-[#4E4E4E]"> an exceptional experience.</span>
          </p>
        </div>
      </section>

      <div className="px-4 sm:px-8 lg:px-30 pb-16 sm:pb-20 lg:pb-25">
        {/* Contact Form Section */}
        <section className="bg-[#EEE9EB] py-10 sm:py-14 lg:py-20 px-4 sm:px-8 lg:px-20">
          <div className="max-w-[1249px] mx-auto">
            {/* Section Heading */}
            <h2
              className="font-playfair text-2xl sm:text-3xl lg:text-[40px] 
                     font-normal leading-[130%] tracking-[0.8px] 
                     text-[#541A2E] text-center 
                     mb-8 sm:mb-12 lg:mb-16"
            >
              Get in touch
            </h2>

            {/* Form */}
            <form className="space-y-6 sm:space-y-8 lg:space-y-12">
              {/* NAME */}
              <input
                type="text"
                placeholder="NAME"
                className="w-full px-4 py-4 sm:py-5 bg-transparent border border-[#541A2E] rounded
                     font-satoshi text-[16px] sm:text-[17px] font-light
                     text-[#541A2E] placeholder:text-[#541A2E]
                     focus:outline-none focus:ring-1 focus:ring-[#541A2E]"
              />

              {/* EMAIL & CONTACT */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full px-4 py-4 sm:py-5 bg-transparent border border-[#541A2E] rounded
                       font-satoshi text-[16px] sm:text-[17px] font-light
                       text-[#541A2E] placeholder:text-[#541A2E]
                       focus:outline-none focus:ring-1 focus:ring-[#541A2E]"
                />
                <input
                  type="tel"
                  placeholder="CONTACT NO"
                  className="w-full px-4 py-4 sm:py-5 bg-transparent border border-[#541A2E] rounded
                       font-satoshi text-[16px] sm:text-[17px] font-light
                       text-[#541A2E] placeholder:text-[#541A2E]
                       focus:outline-none focus:ring-1 focus:ring-[#541A2E]"
                />
              </div>

              {/* EVENT TYPE & DATE */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                <input
                  type="text"
                  placeholder="EVENT TYPE"
                  className="w-full px-4 py-4 sm:py-5 bg-transparent border border-[#541A2E] rounded
                       font-satoshi text-[16px] sm:text-[17px] font-light
                       text-[#541A2E] placeholder:text-[#541A2E]
                       focus:outline-none focus:ring-1 focus:ring-[#541A2E]"
                />
                <input
                  type="date"
                  className="w-full px-4 py-4 sm:py-5 bg-transparent border border-[#541A2E] rounded
                       font-satoshi text-[16px] sm:text-[17px] font-light
                       text-[#541A2E]
                       focus:outline-none focus:ring-1 focus:ring-[#541A2E]"
                />
              </div>

              {/* SOURCE & DESCRIPTION */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="HOW DID YOU FIND US ?"
                    className="w-full px-4 py-4 sm:py-5 bg-transparent border border-[#541A2E] rounded
                         font-satoshi text-[16px] sm:text-[17px] font-light
                         text-[#541A2E] placeholder:text-[#541A2E]
                         focus:outline-none focus:ring-1 focus:ring-[#541A2E]"
                  />

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="w-full px-4 py-5 sm:py-6 lg:py-8
                         bg-[#541A2E] border border-[#F5EA8A] rounded
                         font-satoshi text-[18px] sm:text-[20px] font-medium text-white
                         hover:bg-[#6B2238] transition-colors duration-300"
                  >
                    SUBMIT
                  </button>
                </div>

                <textarea
                  placeholder="DESCRIPTION ABOUT THE EVENT (opt)"
                  rows={6}
                  className="w-full px-4 py-4 sm:py-5 bg-transparent border border-[#541A2E] rounded
                       font-satoshi text-[16px] sm:text-[17px] font-light
                       text-[#541A2E] placeholder:text-[#541A2E]
                       focus:outline-none focus:ring-1 focus:ring-[#541A2E] resize-none"
                />
              </div>
            </form>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full mt-8 sm:mt-10">
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Chennai,India&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>

      <Footer />

      <FloatingWhatsapp />
    </>
  );
}
