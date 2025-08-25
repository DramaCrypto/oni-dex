"use client";

import { PurchaseContextProvider } from "@/contexts/PurchaseContext";
import SwapProvider from '@/contexts/SwapContext';
import MainBody from "./MainBody";

export default function RootLayout({ children }) {
  return (
    <html lang="en" prefix="og: http://ogp.me/ns#">
      <PurchaseContextProvider>
        <SwapProvider>
          <MainBody>{children}</MainBody>
        </SwapProvider>
      </PurchaseContextProvider>
    </html>
  );
}
