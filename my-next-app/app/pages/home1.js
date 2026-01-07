"use client";

import Index from "../components/Index"
export default function Home() {

  return (
    <>
    <Index/>
          {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 hover:scale-110 transition-transform duration-300"
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d909c78109f35d7ca2e9fe0aedd58fa72bd240bf?width=192"
          alt="Contact us on WhatsApp"
          className="w-16 h-16 lg:w-20 lg:h-20"
        />
      </a>
    </>
  )

}