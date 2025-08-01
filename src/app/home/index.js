"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const LandingSection = () => {
  const serachParams = useSearchParams();

  useEffect(() => {
    
  }, [serachParams]);

  return (
    <>
      <main className="home_landing page-wrapper flex flex-col items-center justify-center w-full overflow-hidden">
        Homepage
      </main>
    </>
  );
};

export default LandingSection;
