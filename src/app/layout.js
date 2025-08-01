"use client";

import { PurchaseContextProvider } from "@/contexts/PurchaseContext";
import MainBody from "./MainBody";

export default function RootLayout({ children }) {
  return (
    <html lang="en" prefix="og: http://ogp.me/ns#">
      <PurchaseContextProvider>
        <MainBody>{children}</MainBody>
      </PurchaseContextProvider>
    </html>
  );
}
