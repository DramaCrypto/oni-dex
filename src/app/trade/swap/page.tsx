"use client";

import SwapForm from "@/components/trade/swap/SwapForm";
import { useHasMounted } from "@/hooks/useHasMounted";

const SwapPage = () => {
  const hasMounted = useHasMounted();

  if (hasMounted) {
    return (
      <div className="flex flex-col items-center justify-center w-full pt-20" id="swap_page">
        <SwapForm />
      </div>
    );
  }
};

export default SwapPage;