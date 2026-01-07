export default function aboutUs(){
    return (
        <>
        
      {/* Know About Us CTA Section */}
      <section className="relative">
        <div className="relative aspect-[1640/699] overflow-hidden">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/5f8aee67962146258bc95944b51903414e6fe27b?width=3280" 
            alt="Know about us" 
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* CTA Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="font-butler text-3xl md:text-5xl lg:text-[60px] font-extrabold tracking-[3px] leading-[140%] text-white text-center px-4">
              KNOW ABOUT US
            </h2>
          </div>
        </div>
      </section>
        </>
    )
}