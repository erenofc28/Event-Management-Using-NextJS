"use client";

import "swiper/css";
import ImageSlider from "./imageSlider"

import Contact from "./contact"
import Testimonial from "./testimonial"
import "swiper/css";
import Footer from "./footer"
import Gallery from "./gallery"
import Hero from "./hero"
import Introduction from "./IntroductionSection"
import Services from "./services"
import Portfolio from "./portfolio"
import AboutUs from "./aboutUs"
export default function Index() {

  return (
    <>
<Hero content={"For effortlessly memorable events"}
      bgImg={"https://api.builder.io/api/v1/image/assets/TEMP/44a009a0e7d8ab39912045de46819eaada9a5694?width=3840"}
/>


<Introduction/>


<Services/>

<Portfolio/>

<Testimonial/>


<AboutUs/>


      <Contact/>

      <Gallery/>
      <Footer/>
   
    </>


    
  );
}