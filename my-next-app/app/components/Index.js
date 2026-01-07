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
      bgImg={"images/homeScreenBg.png"}
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