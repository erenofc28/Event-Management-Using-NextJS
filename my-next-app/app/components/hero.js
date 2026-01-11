import Navbar from "./navbar";
export default function hero({
  content = "",
  bgImg = "",
  contactUsBtn = true,
}) {
  return (
    <>
      <div className="relative min-h-screen w-full">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={bgImg}
            alt="Elegant wedding celebration"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Navigation Header */}
        <header className="relative z-10 px-6 sm:px-12 lg:px-24 xl:px-[100px] py-7 lg:py-3 flex items-center justify-between ">
          {/* Logo */}
          <img
            src="images/logo.png"
            alt="kalakar events logo"
            className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
          />

          {/* Navigation Buttons */}
          <Navbar />
        </header>

        {/* Hero Content */}
        <div className="relative flex items-center justify-center px-6 sm:px-12 lg:px-24 hero-content">
          <div className="w-full max-w-[1338px] flex flex-col items-center gap-6 sm:gap-8 lg:gap-[35px] text-center mt-12 sm:mt-20 lg:mt-32 xl:mt-40">
            {/* Main Heading */}
            <h1 className="font-playfair text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[120px] font-normal leading-[100%] tracking-[0.05em] sm:tracking-[0.06em]">
              {content}
            </h1>

            {/* Contact Button */}
            {contactUsBtn && (
              <button className="font-satoshi px-8 sm:px-10 lg:px-[40px] py-3 sm:py-4 lg:py-[16px] text-white text-lg sm:text-xl lg:text-2xl font-light leading-[100%] tracking-[0.05em] rounded-lg bg-white/30 backdrop-blur-[10px] hover:bg-white/40 transition-all duration-300">
                Contact us
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
