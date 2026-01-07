export default function Gallery() {
  const galleryImages = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/8ea1c34d8568a8d19f46aa7baae6bcc47c703632?width=738",
      alt: "Event photo 1"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/649458069383ed25758a7834c3ee3d75060e6e3f?width=736",
      alt: "Event photo 2"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/d50f1b5efbad75a03a4eeee20e90f9ab0a36408d?width=736",
      alt: "Event photo 3"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/79079977b3d7eecf6e8afc9bca71978f26f086d1?width=736",
      alt: "Event photo 4"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/756f10e2acd65bf1dd651a9b9652f6d0d9bb8969?width=738",
      alt: "Event photo 5"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/07040229a06a5be00d44488ab48d9ffd11efed11?width=738",
      alt: "Event photo 6"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/0b9a98bd44b2a73ddb467cc6c34678bc7a691e22?width=736",
      alt: "Event photo 7"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/909b47c968a6d9e6ee9c70223476d6f467852001?width=736",
      alt: "Event photo 8"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/33d7b3d4b6f94c66fe63b6c53c57eb53b6951646?width=736",
      alt: "Event photo 9"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/529c43e2a59ff1edb69d2ade175225915dca29a5?width=738",
      alt: "Event photo 10"
    }
  ];

  return (
    <div className="w-full py-8 md:py-12 lg:py-16 bg-white">
      <div className="w-full px-0">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-[369/483] overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}