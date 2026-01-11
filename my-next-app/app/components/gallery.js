export default function Gallery() {
  const galleryImages = [
    {
      src: "images/galleryImg1.png",
      alt: "Event photo 1",
    },
    {
      src: "images/galleryImg2.png",
      alt: "Event photo 2",
    },
    {
      src: "images/galleryImg3.png",
      alt: "Event photo 3",
    },
    {
      src: "images/galleryImg4.png",
      alt: "Event photo 4",
    },
    {
      src: "images/galleryImg5.png",
      alt: "Event photo 5",
    },
    {
      src: "images/galleryImg6.png",
      alt: "Event photo 6",
    },
    {
      src: "images/galleryImg7.png",
      alt: "Event photo 7",
    },
    {
      src: "images/galleryImg8.png",
      alt: "Event photo 8",
    },
    {
      src: "images/galleryImg9.png",
      alt: "Event photo 9",
    },
    {
      src: "images/galleryImg10.png",
      alt: "Event photo 10",
    },
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
