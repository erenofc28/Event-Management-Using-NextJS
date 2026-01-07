"use client";

import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className="w-full bg-[#2835AB] text-white relative overflow-hidden">
      <div className="max-w-[1920px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[300px] lg:min-h-[422px]">
          {/* Left Section - Logo and Navigation */}
          <div className="lg:col-span-5 px-6 py-12 lg:px-[125px] lg:py-16 flex flex-col justify-between">
            {/* Logo */}
            <div className="mb-8 lg:mb-0">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/da220b8eeb35861e68729be785389aeaba71fe45?width=149" 
                alt="Kalakar Events"
                className="h-12 lg:h-[75px] w-auto lg:transform  lg:origin-left mb-15"
              />
            </div>
            
            {/* Navigation */}
            <nav className="flex flex-col gap-4 lg:gap-9">
              <a 
                href="#" 
                onClick={() => router.push("/")}
                className="font-satoshi text-base leading-[150%] hover:opacity-80 transition-opacity"
              >
                HOME
              </a>
              <a 
                onClick={() => router.push("/services")}
                href="#" 
                className="font-satoshi text-base leading-[150%] hover:opacity-80 transition-opacity"
              >
                SERVICES
              </a>
              <a 
                href="#" 
                className="font-satoshi text-base leading-[150%] hover:opacity-80 transition-opacity"
              >
                ABOUT US
              </a>
              <a 
                href="#" 
                className="font-satoshi text-base leading-[150%] hover:opacity-80 transition-opacity"
              >
                CONTACT US
              </a>
            </nav>
          </div>

          {/* Right Section - Contact and Social */}
          <div className="lg:col-span-7 px-6 py-12 lg:px-16 lg:py-16 border-t lg:border-t lg:border-l border-white lg:rounded-tl-[128px] relative">
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-0 mb-8 lg:mb-auto">
              {/* Contact Info */}
              <div className="flex flex-col gap-4">
                <h3 className="font-satoshi text-xs font-medium leading-[150%] tracking-[0.48px] uppercase opacity-100">
                  Contact
                </h3>
                <div className="flex flex-col gap-1">
                  <a 
                    href="tel:+919999999999" 
                    className="font-satoshi text-lg font-medium leading-[130%] hover:opacity-80 transition-opacity"
                  >
                    +91 99999 99999
                  </a>
                  <a 
                    href="https://kalakarevents.com" 
                    className="font-satoshi text-lg font-medium leading-[130%] hover:opacity-80 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    kalakarevents.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex flex-col gap-4">
                <h3 className="font-satoshi text-xs font-medium leading-[150%] tracking-[0.48px] uppercase opacity-100">
                  Follow us
                </h3>
                <div className="flex gap-1.5">
                  {/* Instagram */}
                  <a 
                    href="#" 
                  className="
  w-[50px] h-[50px] rounded-full
  border border-white/60
  flex items-center justify-center
  transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
  hover:bg-white/10
  hover:border-white
  hover:-translate-y-[2px]
"

                    aria-label="Instagram"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 1.6265C11.3855 1.6265 11.7108 1.6265 12.6867 1.6265C13.5542 1.6265 13.988 1.8434 14.3133 1.9518C14.747 2.1687 15.0723 2.2771 15.3976 2.6024C15.7229 2.9277 15.9398 3.253 16.0482 3.6867C16.1566 4.012 16.2651 4.4458 16.3735 5.3133C16.3735 6.2892 16.3735 6.506 16.3735 9C16.3735 11.494 16.3735 11.7108 16.3735 12.6867C16.3735 13.5542 16.1566 13.988 16.0482 14.3133C15.8313 14.747 15.7229 15.0723 15.3976 15.3976C15.0723 15.7229 14.747 15.9398 14.3133 16.0482C13.988 16.1566 13.5542 16.2651 12.6867 16.3735C11.7108 16.3735 11.494 16.3735 9 16.3735C6.506 16.3735 6.2892 16.3735 5.3133 16.3735C4.4458 16.3735 4.012 16.1566 3.6867 16.0482C3.253 15.8313 2.9277 15.7229 2.6024 15.3976C2.2771 15.0723 2.0602 14.747 1.9518 14.3133C1.8434 13.988 1.7349 13.5542 1.6265 12.6867C1.6265 11.7108 1.6265 11.494 1.6265 9C1.6265 6.506 1.6265 6.2892 1.6265 5.3133C1.6265 4.4458 1.8434 4.012 1.9518 3.6867C2.1687 3.253 2.2771 2.9277 2.6024 2.6024C2.9277 2.2771 3.253 2.0602 3.6867 1.9518C4.012 1.8434 4.4458 1.7349 5.3133 1.6265C6.2892 1.6265 6.6145 1.6265 9 1.6265ZM9 0C6.506 0 6.2892 0 5.3133 0C4.3374 0 3.6867 0.2169 3.1446 0.4337C2.6024 0.6506 2.0602 0.9759 1.5181 1.5181C0.9759 2.0602 0.759 2.494 0.4337 3.1446C0.2169 3.6867 0.1084 4.3374 0 5.3133C0 6.2892 0 6.6145 0 9C0 11.494 0 11.7108 0 12.6867C0 13.6627 0.2169 14.3133 0.4337 14.8554C0.6506 15.3976 0.9759 15.9398 1.5181 16.4819C2.0602 17.0241 2.494 17.241 3.1446 17.5663C3.6867 17.7831 4.3374 17.8916 5.3133 18C6.2892 18 6.6145 18 9 18C11.3855 18 11.7108 18 12.6867 18C13.6627 18 14.3133 17.7831 14.8554 17.5663C15.3976 17.3494 15.9398 17.0241 16.4819 16.4819C17.0241 15.9398 17.241 15.506 17.5663 14.8554C17.7831 14.3133 17.8916 13.6627 18 12.6867C18 11.7108 18 11.3855 18 9C18 6.6145 18 6.2892 18 5.3133C18 4.3374 17.7831 3.6867 17.5663 3.1446C17.3494 2.6024 17.0241 2.0602 16.4819 1.5181C15.9398 0.9759 15.506 0.759 14.8554 0.4337C14.3133 0.2169 13.6627 0.1084 12.6867 0C11.7108 0 11.494 0 9 0Z" fill="white"/>
                      <path d="M9 4.3373C6.3976 4.3373 4.3373 6.3976 4.3373 9C4.3373 11.6024 6.3976 13.6627 9 13.6627C11.6024 13.6627 13.6627 11.6024 13.6627 9C13.6627 6.3976 11.6024 4.3373 9 4.3373ZM9 12.0361C7.3735 12.0361 5.9639 10.7349 5.9639 9C5.9639 7.3735 7.2651 5.9639 9 5.9639C10.6265 5.9639 12.0361 7.2651 12.0361 9C12.0361 10.6265 10.6265 12.0361 9 12.0361Z" fill="white"/>
                      <path d="M13.7711 5.3133C14.3699 5.3133 14.8554 4.8278 14.8554 4.2289C14.8554 3.6301 14.3699 3.1446 13.7711 3.1446C13.1722 3.1446 12.6867 3.6301 12.6867 4.2289C12.6867 4.8278 13.1722 5.3133 13.7711 5.3133Z" fill="white"/>
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a 
                    href="#" 
                   className="
  w-[50px] h-[50px] rounded-full
  border border-white/60
  flex items-center justify-center
  transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
  hover:bg-white/10
  hover:border-white
  hover:-translate-y-[2px]
"

                    aria-label="WhatsApp"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M15.3 2.5875C13.6125 0.9 11.3625 0 9 0C4.05 0 0 4.05 0 9C0 10.575 0.45 12.15 1.2375 13.5L0 18L4.725 16.7625C6.075 17.4375 7.5375 17.8875 9 17.8875C13.95 17.8875 18 13.8375 18 8.8875C18 6.525 16.9875 4.275 15.3 2.5875ZM9 16.425C7.65 16.425 6.3 16.0875 5.175 15.4125L4.95 15.3L2.1375 16.0875L2.925 13.3875L2.7 13.05C1.9125 11.8125 1.575 10.4625 1.575 9.1125C1.575 5.0625 4.95 1.6875 9 1.6875C11.025 1.6875 12.825 2.475 14.2875 3.825C15.75 5.2875 16.425 7.0875 16.425 9.1125C16.425 13.05 13.1625 16.425 9 16.425ZM13.05 10.8C12.825 10.6875 11.7 10.125 11.475 10.125C11.25 10.0125 11.1375 10.0125 11.025 10.2375C10.9125 10.4625 10.4625 10.9125 10.35 11.1375C10.2375 11.25 10.125 11.25 9.9 11.25C9.675 11.1375 9 10.9125 8.1 10.125C7.425 9.5625 6.975 8.775 6.8625 8.55C6.75 8.325 6.8625 8.2125 6.975 8.1C7.0875 7.9875 7.2 7.875 7.3125 7.7625C7.425 7.65 7.425 7.5375 7.5375 7.425C7.65 7.3125 7.5375 7.2 7.5375 7.0875C7.5375 6.975 7.0875 5.85 6.8625 5.4C6.75 5.0625 6.525 5.0625 6.4125 5.0625C6.3 5.0625 6.1875 5.0625 5.9625 5.0625C5.85 5.0625 5.625 5.0625 5.4 5.2875C5.175 5.5125 4.6125 6.075 4.6125 7.2C4.6125 8.325 5.4 9.3375 5.5125 9.5625C5.625 9.675 7.0875 12.0375 9.3375 12.9375C11.25 13.725 11.5875 13.5 12.0375 13.5C12.4875 13.5 13.3875 12.9375 13.5 12.4875C13.725 11.925 13.725 11.475 13.6125 11.475C13.5 10.9125 13.275 10.9125 13.05 10.8Z" fill="white"/>
                    </svg>
                  </a>

                  {/* Telegram */}
                  <a 
                    href="#" 
                 className="
  w-[50px] h-[50px] rounded-full
  border border-white/60
  flex items-center justify-center
  transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
  hover:bg-white/10
  hover:border-white
  hover:-translate-y-[2px]
"

                    aria-label="Telegram"
                  >
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.237427 6.888C5.06923 4.63 8.29115 3.14138 9.90327 2.42218C14.5063 0.368677 15.4627 0.0119531 16.0861 8.94283e-05C16.2232 -0.00239635 16.5298 0.0340626 16.7284 0.206912C16.8961 0.352901 16.9422 0.549971 16.9643 0.688417C16.9864 0.826863 17.0139 1.14189 16.992 1.38824C16.7426 4.19927 15.6633 11.021 15.1142 14.1694C14.8818 15.5017 14.4244 15.9484 13.9815 15.9921C13.0189 16.0871 12.288 15.3098 11.3558 14.6543C9.89697 13.6287 9.07288 12.9902 7.65685 11.9894C6.02052 10.8327 7.08133 10.197 8.01393 9.158C8.25803 8.88606 12.4988 4.74877 12.5809 4.37343C12.5912 4.32649 12.6007 4.15151 12.5038 4.05912C12.4069 3.96673 12.2639 3.99827 12.1606 4.02349C12.0143 4.05913 9.68385 5.71125 5.16944 8.97983C4.50794 9.46698 3.90872 9.70437 3.37189 9.69204C2.78012 9.67823 1.64174 9.33311 0.795459 9.03799C-0.242465 8.67611 -1.06747 8.48481 -0.995632 7.87008C-0.95823 7.54999 -0.547153 7.22262 0.237427 6.888Z" fill="white"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-auto pt-8 lg:pt-24">
              <p className="font-inter text-xs leading-[150%] opacity-50">
                © 2025 — Copyright
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}