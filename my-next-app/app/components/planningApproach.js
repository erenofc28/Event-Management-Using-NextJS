export default function planningApproach(){
    return (<>
{/* Our Planning Approach Section */}
<section className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <h2 className="
      font-playfair 
      text-2xl sm:text-3xl lg:text-[60px]
      leading-[130%]
      tracking-[0.05em]
      mb-10 sm:mb-16
    ">
      Our Planning Approach
    </h2>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">

      {/* Step 01 */}
      <div className="flex flex-col gap-4">
        <div>
          <span className="font-butler text-3xl lg:text-[40px]">01</span>
          <div className="h-[1px] bg-black w-full mt-2"></div>
        </div>

        <p className="font-satoshi text-sm sm:text-base lg:text-2xl leading-[150%]">
          <span>
            Once we align on your vision, our team begins curating your event with thoughtful planning and creative direction.{" "}
          </span>
          <span className="font-playfair text-[#2835AB]">
            From design concepts to vendor coordination, we carefully select elements that reflect your style and values.
          </span>
          <span>
            {" "}You'll receive clear plans, mood boards, and timelines.
          </span>
        </p>
      </div>

      {/* Step 02 */}
      <div className="flex flex-col gap-4">
        <div>
          <span className="font-butler text-3xl lg:text-[40px]">02</span>
          <div className="h-[1px] bg-black w-full mt-2"></div>
        </div>

        <p className="font-satoshi text-sm sm:text-base lg:text-2xl leading-[150%]">
          <span>
            With a clear plan in place, we refine every detail and coordinate with trusted partners.{" "}
          </span>
          <span className="font-playfair text-[#2835AB]">
            Our focus remains on quality, consistency, and seamless execution.
          </span>
          <span>
            {" "}You stay informed while we handle the complexity.
          </span>
        </p>
      </div>

      {/* Step 03 */}
      <div className="flex flex-col gap-4">
        <div>
          <span className="font-butler text-3xl lg:text-[40px]">03</span>
          <div className="h-[1px] bg-black w-full mt-2"></div>
        </div>

        <p className="font-satoshi text-sm sm:text-base lg:text-2xl leading-[150%]">
          <span>
            As your celebration approaches, we take charge of every detail.{" "}
          </span>
          <span className="font-playfair text-[#2835AB]">
            With Kalakar Events managing everything behind the scenes,
          </span>
          <span>
            {" "}you’re free to relax and celebrate.
          </span>
        </p>
      </div>

    </div>
  </div>
</section>



    
    </>)
}