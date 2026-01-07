export default function testimonial(){
    return (<>
      <section className="px-4 py-12 md:py-20 lg:py-28">
        <div className="max-w-[1280px] mx-auto">
          {/* Testimonial Label */}
          <div className="mb-8 md:mb-12">
            <h3 className="font-butler text-sm md:text-lg lg:text-xl tracking-[1.2px] text-[#2835AB]">
              TESTIMONIAL
            </h3>
          </div>

          {/* Testimonial Heading */}
          <div className="mb-12 md:mb-16">
            <h2 className="font-playfair text-2xl md:text-4xl lg:text-[48px] tracking-[2.4px] leading-[140%]">
              Our celebration felt truly special.
            </h2>
          </div>

          {/* Video Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Testimonial Card 1 */}
            <div className="relative aspect-[495/576] overflow-hidden rounded-lg group cursor-pointer">
              <img 
                src="images/testimonial1.png" 
                alt="Pawan & Nithya testimonial" 
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-gray-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M66.5 39.2825L42.75 25.555C41.3065 24.7216 39.6692 24.2827 38.0024 24.2822C36.3357 24.2818 34.6981 24.7199 33.2542 25.5526C31.8103 26.3852 30.6109 27.5831 29.7764 29.0259C28.9419 30.4687 28.5017 32.1057 28.5 33.7725V61.2275C28.5017 62.8934 28.9415 64.5296 29.7752 65.972C30.6089 67.4143 31.8073 68.612 33.25 69.445C34.6942 70.2788 36.3324 70.7177 38 70.7177C39.6676 70.7177 41.3058 70.2788 42.75 69.445L66.5 55.7175C67.9396 54.8824 69.1346 53.6837 69.9653 52.2416C70.796 50.7994 71.2332 49.1643 71.2332 47.5C71.2332 45.8357 70.796 44.2006 69.9653 42.7584C69.1346 41.3162 67.9396 40.1176 66.5 39.2825ZM61.75 47.5L38 61.2275V33.7725L61.75 47.5ZM47.5 0C38.1054 0 28.9218 2.78583 21.1104 8.00519C13.2991 13.2246 7.21091 20.643 3.61574 29.3225C0.020581 38.002 -0.920077 47.5527 0.91272 56.7668C2.74552 65.9809 7.26945 74.4446 13.9124 81.0875C20.5554 87.7305 29.0191 92.2545 38.2332 94.0873C47.4473 95.9201 56.998 94.9794 65.6775 91.3843C74.357 87.7891 81.7754 81.7009 86.9948 73.8896C92.2142 66.0782 95 56.8946 95 47.5C95 41.2622 93.7714 35.0855 91.3843 29.3225C88.9972 23.5596 85.4984 18.3232 81.0876 13.9124C76.6768 9.50164 71.4404 6.00282 65.6775 3.61572C59.9145 1.22862 53.7378 0 47.5 0ZM47.5 85.5C39.9843 85.5 32.6374 83.2713 26.3883 79.0958C20.1393 74.9203 15.2687 68.9855 12.3926 62.042C9.51647 55.0984 8.76394 47.4578 10.2302 40.0866C11.6964 32.7153 15.3156 25.9443 20.63 20.6299C25.9444 15.3155 32.7153 11.6964 40.0866 10.2302C47.4579 8.76392 55.0984 9.51645 62.042 12.3926C68.9856 15.2687 74.9203 20.1393 79.0958 26.3883C83.2713 32.6374 85.5 39.9843 85.5 47.5C85.5 57.5782 81.4964 67.2437 74.3701 74.37C67.2437 81.4964 57.5782 85.5 47.5 85.5Z" fill="currentColor"/>
                </svg>
              </div>

              {/* Client Info */}
              <div className="absolute bottom-6 left-6 z-10">
                <h4 className="font-satoshi text-lg md:text-2xl lg:text-[28px] font-medium tracking-[1.4px] leading-[140%] text-white mb-1">
                  PAWAN & NITHYA
                </h4>
                <p className="font-satoshi text-base md:text-xl lg:text-2xl font-light tracking-[1.2px] leading-[140%] text-white">
                  Wedding planner
                </p>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="relative aspect-[495/576] overflow-hidden rounded-lg group cursor-pointer">
              <img 
                 src="images/testimonial2.png" 
                alt="Pawan & Nithya testimonial" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-gray-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M66.5 39.2825L42.75 25.555C41.3065 24.7216 39.6692 24.2827 38.0024 24.2822C36.3357 24.2818 34.6981 24.7199 33.2542 25.5526C31.8103 26.3852 30.6109 27.5831 29.7764 29.0259C28.9419 30.4687 28.5017 32.1057 28.5 33.7725V61.2275C28.5017 62.8934 28.9415 64.5296 29.7752 65.972C30.6089 67.4143 31.8073 68.612 33.25 69.445C34.6942 70.2788 36.3324 70.7177 38 70.7177C39.6676 70.7177 41.3058 70.2788 42.75 69.445L66.5 55.7175C67.9396 54.8824 69.1346 53.6837 69.9653 52.2416C70.796 50.7994 71.2332 49.1643 71.2332 47.5C71.2332 45.8357 70.796 44.2006 69.9653 42.7584C69.1346 41.3162 67.9396 40.1176 66.5 39.2825ZM61.75 47.5L38 61.2275V33.7725L61.75 47.5ZM47.5 0C38.1054 0 28.9218 2.78583 21.1104 8.00519C13.2991 13.2246 7.21091 20.643 3.61574 29.3225C0.020581 38.002 -0.920077 47.5527 0.91272 56.7668C2.74552 65.9809 7.26945 74.4446 13.9124 81.0875C20.5554 87.7305 29.0191 92.2545 38.2332 94.0873C47.4473 95.9201 56.998 94.9794 65.6775 91.3843C74.357 87.7891 81.7754 81.7009 86.9948 73.8896C92.2142 66.0782 95 56.8946 95 47.5C95 41.2622 93.7714 35.0855 91.3843 29.3225C88.9972 23.5596 85.4984 18.3232 81.0876 13.9124C76.6768 9.50164 71.4404 6.00282 65.6775 3.61572C59.9145 1.22862 53.7378 0 47.5 0ZM47.5 85.5C39.9843 85.5 32.6374 83.2713 26.3883 79.0958C20.1393 74.9203 15.2687 68.9855 12.3926 62.042C9.51647 55.0984 8.76394 47.4578 10.2302 40.0866C11.6964 32.7153 15.3156 25.9443 20.63 20.6299C25.9444 15.3155 32.7153 11.6964 40.0866 10.2302C47.4579 8.76392 55.0984 9.51645 62.042 12.3926C68.9856 15.2687 74.9203 20.1393 79.0958 26.3883C83.2713 32.6374 85.5 39.9843 85.5 47.5C85.5 57.5782 81.4964 67.2437 74.3701 74.37C67.2437 81.4964 57.5782 85.5 47.5 85.5Z" fill="currentColor"/>
                </svg>
              </div>

              <div className="absolute bottom-6 left-6 z-10">
                <h4 className="font-satoshi text-lg md:text-2xl lg:text-[28px] font-medium tracking-[1.4px] leading-[140%] text-white mb-1">
                  PAWAN & NITHYA
                </h4>
                <p className="font-satoshi text-base md:text-xl lg:text-2xl font-light tracking-[1.2px] leading-[140%] text-white">
                  Wedding planner
                </p>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="relative aspect-[495/576] overflow-hidden rounded-lg group cursor-pointer">
              <img 
                 src="images/testimonial3.png" 
                alt="Pawan & Nithya testimonial" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-gray-400 group-hover:text-white transition-colors duration-300" viewBox="0 0 95 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M66.5 39.2825L42.75 25.555C41.3065 24.7216 39.6692 24.2827 38.0024 24.2822C36.3357 24.2818 34.6981 24.7199 33.2542 25.5526C31.8103 26.3852 30.6109 27.5831 29.7764 29.0259C28.9419 30.4687 28.5017 32.1057 28.5 33.7725V61.2275C28.5017 62.8934 28.9415 64.5296 29.7752 65.972C30.6089 67.4143 31.8073 68.612 33.25 69.445C34.6942 70.2788 36.3324 70.7177 38 70.7177C39.6676 70.7177 41.3058 70.2788 42.75 69.445L66.5 55.7175C67.9396 54.8824 69.1346 53.6837 69.9653 52.2416C70.796 50.7994 71.2332 49.1643 71.2332 47.5C71.2332 45.8357 70.796 44.2006 69.9653 42.7584C69.1346 41.3162 67.9396 40.1176 66.5 39.2825ZM61.75 47.5L38 61.2275V33.7725L61.75 47.5ZM47.5 0C38.1054 0 28.9218 2.78583 21.1104 8.00519C13.2991 13.2246 7.21091 20.643 3.61574 29.3225C0.020581 38.002 -0.920077 47.5527 0.91272 56.7668C2.74552 65.9809 7.26945 74.4446 13.9124 81.0875C20.5554 87.7305 29.0191 92.2545 38.2332 94.0873C47.4473 95.9201 56.998 94.9794 65.6775 91.3843C74.357 87.7891 81.7754 81.7009 86.9948 73.8896C92.2142 66.0782 95 56.8946 95 47.5C95 41.2622 93.7714 35.0855 91.3843 29.3225C88.9972 23.5596 85.4984 18.3232 81.0876 13.9124C76.6768 9.50164 71.4404 6.00282 65.6775 3.61572C59.9145 1.22862 53.7378 0 47.5 0ZM47.5 85.5C39.9843 85.5 32.6374 83.2713 26.3883 79.0958C20.1393 74.9203 15.2687 68.9855 12.3926 62.042C9.51647 55.0984 8.76394 47.4578 10.2302 40.0866C11.6964 32.7153 15.3156 25.9443 20.63 20.6299C25.9444 15.3155 32.7153 11.6964 40.0866 10.2302C47.4579 8.76392 55.0984 9.51645 62.042 12.3926C68.9856 15.2687 74.9203 20.1393 79.0958 26.3883C83.2713 32.6374 85.5 39.9843 85.5 47.5C85.5 57.5782 81.4964 67.2437 74.3701 74.37C67.2437 81.4964 57.5782 85.5 47.5 85.5Z" fill="currentColor"/>
                </svg>
              </div>

              <div className="absolute bottom-6 left-6 z-10">
                <h4 className="font-satoshi text-lg md:text-2xl lg:text-[28px] font-medium tracking-[1.4px] leading-[140%] text-white mb-1">
                  PAWAN & NITHYA
                </h4>
                <p className="font-satoshi text-base md:text-xl lg:text-2xl font-light tracking-[1.2px] leading-[140%] text-white">
                  Wedding planner
                </p>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-black mb-12 md:mb-16"></div>
        </div>
      </section>
    </>)
}