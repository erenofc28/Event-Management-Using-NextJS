import Navbar from "../components/navbar"
import ContactForm from "../components/contactForm"
import Footer from "../components/footer"
import Hero from "../components/hero"
import PlanningApproach from "../components/planningApproach"
import FloatingWP from "../components/FloatingWhatsappIcon"
// import { useState } from "react";
export default function Services() {
  return (

    <>

    <Hero content={"  Experience Our Services"}
      bgImg={"images/experience_bg.png"}
      contactUsBtn = {false}
/>


<Navbar/>


  

    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Header Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-6">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-normal leading-[130%] tracking-[0.02em] text-[#2835AB] mb-6 sm:mb-8">
            Where Happiness Begins & <br className="hidden md:block" /> Love Is Celebrated
          </h2>
          <p className="font-satoshi text-base sm:text-lg lg:text-2xl font-normal leading-[140%] tracking-[0.05em] max-w-4xl mx-auto">
            <span className="text-black">At Kalakar Events, we craft weddings filled with </span>
            <span className="text-[#2835AB] font-medium">love, joy, and unforgettable moments</span>
            <span className="text-black">. Every detail is thoughtfully designed to reflect your story and celebrate your happiness. Explore our services and book us immediately to begin a beautiful journey made just for you.</span>
          </p>
        </div>
      </section>

      {/* Services Container */}
      <div className="flex flex-col gap-20 lg:gap-32 pb-24">
        
        {/* service 1 */}
<section className="px-4 lg:px-12">
  {/* RED BACKGROUND (positioning context) */}
  <div className="bg-[#edeeff] pt
  -12 lg:py-20 relative">

    {/* GRID CONTENT */}
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">

      {/* TEXT CONTENT */}
      <div
        className="
          relative z-10
          px-4 text-center

          lg:col-span-12
          lg:text-left
          lg:pl-[calc(39vw+2.5rem)]
          lg:pr-[20vw]
          lg:py-12
        "
      >
        <p className="font-butler text-xs tracking-[0.3em] text-black/60 mb-4 uppercase mt-5">
          SERVICE
        </p>

        <h3 className="font-satoshi text-3xl lg:text-[48px] font-light leading-[1.1] mb-6">
          <span className="font-regale text-[#2835AB] block mb-1">
            Decor
          </span>
          <span className="text-black">
            that Begins with a Vision and Ends in Magic
          </span>
        </h3>

        <p className="font-satoshi text-sm lg:text-base leading-[1.7] text-black/70 mb-8 max-w-[680px] mx-auto lg:mx-0">
          Our bespoke décor service is designed to transform your celebration into an unforgettable visual experience.
        </p>

        <a
          href="#"
          className="font-satoshi text-lg italic underline underline-offset-8 inline-block"
        >
          Explore more
        </a>
      </div>
    </div>

{/* LEFT IMAGE */}
<div
  className="
    relative mb-6

    lg:absolute
    lg:left-12
    lg:top-0
    lg:z-20
  "
>
  <img
    src="images/service1Left.png"
    alt="Elegant wedding decor"
    className="
      w-full
      h-[260px]
      object-cover
      rounded-lg
      mt-5
      lg:w-[37vw]
      lg:h-[670px]
    
      lg:mt-10
      lg:rounded-none
    "
  />
</div>


{/* RIGHT IMAGE */}
<div
  className="
    relative 

    lg:absolute
    lg:top-0
    lg:right-0
    lg:z-30
  "
>
  <img
    src="images/service1Right.png"
    className="
      w-full
      h-[300px]
      object-cover
      rounded-lg
      mx-auto
      mb-[0px]
      lg:w-[20vw]
      lg:h-[500px]
      lg:rounded-none
    "
  />
</div>

  </div>
</section>



{/* section 2 */}
        <section className="px-4 lg:px-12">
  {/* BACKGROUND BOX */}
  <div className="bg-[#edeeff] py-12 lg:py-20 relative">

    {/* GRID (used only for text flow) */}
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">

{/* TEXT CONTENT — MIRRORED & BOUNDED */}
<div
  className="
    relative z-10
    px-4 text-center

    lg:col-span-12
    lg:text-right
    lg:py-12

    /* SAFE BOUNDARIES BETWEEN IMAGES */
    lg:max-w-[780px]
    lg:pl-[320px]
  
  "
>
  <p className="font-butler text-xs tracking-[0.3em] text-black/60 mb-4 uppercase">
    SERVICE
  </p>

  <h3 className="font-satoshi text-3xl lg:text-[48px] font-light leading-[1.1] mb-6">
    <span className="font-regale text-[#2835AB] block mb-1">
      Photography
    </span>
    <span className="text-black">
      That Last Forever
    </span>
  </h3>

  <p className="font-satoshi text-sm lg:text-base leading-[1.7] text-black/70 mb-8">
    Our photography service is crafted to capture emotions as they naturally unfold, preserving every smile, glance, and heartfelt moment. With an eye for detail and storytelling, we document your celebration in a way that feels authentic and timeless.
  </p>

  <a
    href="#"
    className="font-satoshi text-lg italic underline underline-offset-8 inline-block"
  >
    Explore more
  </a>
</div>

    </div>

    {/* SMALL LEFT IMAGE — DESKTOP */}
    <div className="hidden lg:block absolute top-0 left-0 z-30">
      <img
    src="images/service1Right.png"
        alt=""
        className="w-[20vw] h-[500px] object-cover "
      />
    </div>

    {/* LARGE RIGHT IMAGE — DESKTOP */}
    <div className="hidden lg:block absolute top-0 right-12 z-20">
      <img
          src="images/service1Left.png"
        alt="Beautiful wedding photography"
        className="w-[37vw] h-[650px] object-cover mt-10 "
      />
    </div>

    {/* MOBILE IMAGES (STACKED, SIMPLE) */}
    <div className="lg:hidden space-y-6 px-4 mt-8">
      <img
           src="images/service1Right.png"
        className="w-full h-[220px] object-cover rounded-lg"
      />
      <img
    src="images/service1Left.png"
        alt="Beautiful wedding photography"
        className="w-full h-[300px] object-cover rounded-lg"
      />
    </div>

  </div>
</section>

{/* section 3 */}
<section className="px-4 lg:px-12">
  {/* RED BACKGROUND (positioning context) */}
  <div className="bg-[#edeeff] pt
  -12 lg:py-20 relative">

    {/* GRID CONTENT */}
    <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">

      {/* TEXT CONTENT */}
      <div
        className="
          relative z-10
          px-4 text-center

          lg:col-span-12
          lg:text-left
          lg:pl-[calc(39vw+2.5rem)]
          lg:pr-[20vw]
          lg:py-12
        "
      >
        <p className="font-butler text-xs tracking-[0.3em] text-black/60 mb-4 uppercase mt-5">
          SERVICE
        </p>

        <h3 className="font-satoshi text-3xl lg:text-[48px] font-light leading-[1.1] mb-6">
         <span className="font-regale font-normal text-[#2835AB] block mb-1">Management &</span>
                <span className="text-black">Hospitality That Elevates Every Experience</span>
        </h3>

        <p className="font-satoshi text-sm lg:text-base leading-[1.7] text-black/70 mb-8 max-w-[680px] mx-auto lg:mx-0">
            Our management and hospitality team ensures seamless coordination, thoughtful guest care, and smooth execution throughout your celebration, allowing you to relax and enjoy every moment with complete peace of mind.
        </p>

        <a
          href="#"
          className="font-satoshi text-lg italic underline underline-offset-8 inline-block"
        >
          Explore more
        </a>
      </div>
    </div>

{/* LEFT IMAGE */}
<div
  className="
    relative mb-6

    lg:absolute
    lg:left-12
    lg:top-0
    lg:z-20
  "
>
  <img
       src="images/service1Left.png"
    alt="Elegant wedding decor"
    className="
      w-full
      h-[260px]
      object-cover
      rounded-lg
      mt-5
      lg:w-[37vw]
      lg:h-[720px]
    
      lg:mt-10
      lg:rounded-none
    "
  />
</div>


{/* RIGHT IMAGE */}
<div
  className="
    relative 

    lg:absolute
    lg:top-0
    lg:right-0
    lg:z-30
  "
>
  <img
       src="images/service1Right.png"
    alt=""
    className="
      w-full
      h-[300px]
      object-cover
      rounded-lg
      mx-auto
      mb-[0px]
      lg:w-[20vw]
      lg:h-[500px]
      lg:rounded-none
    "
  />
</div>

  </div>
</section>
      </div>

      {/* Floating WhatsApp Button */}
<FloatingWP/>
    </div>

<PlanningApproach/>
<ContactForm ContactBgColor = {"bg-[#edeeff]"}/>

<Footer/>
    </>


















  )
}