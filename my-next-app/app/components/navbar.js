"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
const router = useRouter();
  const navItem =
    "font-satoshi text-white text-[12px] sm:text-[13px] lg:text-[14px] font-normal tracking-[0.22em] uppercase relative link";

  return (
    <>
      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-6 sm:gap-8 lg:gap-10">
        <button className={navItem}
         onClick={() => router.push("/")}
        >HOME</button>
        <button className={navItem}
         onClick={() => router.push("/services")}
        >SERVICES</button>
        <button className={navItem}>ABOUT US</button>
        <button className={navItem}>CONTACT</button>
      </nav>
{/* MOBILE TOGGLE */}
{/* PREMIUM MOBILE TOGGLE */}
<button
  onClick={() => setOpen(true)}
  aria-label="Open menu"
  className="md:hidden flex flex-col gap-[6px] group"
>
  <span className="block h-[1px] w-5 bg-white transition-all duration-300 group-hover:w-7"></span>
  <span className="block h-[1px] w-5 bg-white transition-all duration-300 group-hover:w-6"></span>
  <span className="block h-[1px] w-5 bg-white transition-all duration-300 group-hover:w-6"></span>
</button>


      {/* OVERLAY (click blocker) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* SIDEBAR — FULLY OPAQUE */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[75%] max-w-[320px]
          bg-black
          transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
{/* PREMIUM CLOSE BUTTON */}
{/* CLOSE BUTTON */}
<button
  onClick={() => setOpen(false)}
  aria-label="Close menu"
  className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center
             text-white text-2xl font-light leading-none"
>
  ×
</button>



        {/* LINKS */}
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button onClick={() => setOpen(false)} className={navItem}>
            HOME
          </button>
          <button onClick={() => setOpen(false)} className={navItem}>
            SERVICES
          </button>
          <button onClick={() => setOpen(false)} className={navItem}>
            ABOUT US
          </button>
          <button onClick={() => setOpen(false)} className={navItem}>
            CONTACT
          </button>
        </div>
      </aside>
    </>
  );
}
