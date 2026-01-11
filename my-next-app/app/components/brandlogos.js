export default function BrandLogos() {
  const brands = [
    {
      name: "Test",
      logo: (
        <div className="w-[50px] h-[50px] bg-black flex items-center justify-center">
          <span className="text-white">TEST</span>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10 xl:gap-14">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[85px] lg:h-[85px] flex items-center justify-center flex-shrink-0"
              title={brand.name}
            >
              {brand.logo}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
