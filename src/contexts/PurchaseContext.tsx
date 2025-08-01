import React, { useState, useEffect, useRef } from "react";

const PurchaseContext = React.createContext({
  purchaseState: 0,
  setPurchaseState: (val: number) => {},
  isTelegram: false,
  setIsTelegram: (val: boolean) => {},
});

const PurchaseContextProvider = ({ children }) => {
  const [purchaseState, setPurchaseState] = useState(0);
  const [isTelegram, setIsTelegram] = useState(false);
  return (
    <PurchaseContext.Provider
      value={{ purchaseState, setPurchaseState, isTelegram, setIsTelegram }}
    >
      {children}
    </PurchaseContext.Provider>
  );
};

export { PurchaseContext, PurchaseContextProvider };
