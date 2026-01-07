import BrandLogos from "./brandlogos";
import TrustedByBanner from "./trustedByBanner";
import ContactForm from "./contactForm";

export default function contact() {
  return (
    <div className="min-h-screen bg-white">
<div className="h-[60px]">

</div>
      
      {/* Trusted By Banner */}

         
            {/* Brand Logos Section */}
      {/* <BrandLogos /> */}
   <TrustedByBanner />
      {/* Divider Line */}
      <div className="w-full h-px bg-black" />
      
      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}
