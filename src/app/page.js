"use client";

import LandingSection from "./Home";
import Link from "next/link";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="w-full">
      <Suspense>
        <LandingSection />
      </Suspense>

      <Link className="" href={"/"}>
        <div className="fixed z-10 bottom-[32px] right-[32px] text-[#7376aa] w-[32px] h-[32px] rounded-full border border-[#ffffff0a] bg-gradient-to-b from-[#1d1c2d] to-[#201f36] text-[24px] cursor-pointer flex items-center justify-center">
          <i className="feather-chevron-up"></i>
        </div>
      </Link>
    </div>
  );
}
