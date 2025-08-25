// @ts-nocheck
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// import { useActiveWeb3 } from "@/hooks/useActiveWeb3";
// import { SWAPKIT_API_ENDPOINT, SWAPKIT_API_KEY } from "@/config";

const SWAPKIT_API_ENDPOINT = process.env.NEXT_PUBLIC_SWAPKIT_API_ENDPOINT
const SWAPKIT_API_KEY = process.env.NEXT_PUBLIC_SWAPKIT_API_KEY

export const SwapContext = createContext<{}>({});

export const useProviders = () => {
  const { providersData, updateProviders, allTokens } = useContext(SwapContext);
  return { providersData, updateProviders, allTokens };
};

export const useTokens = () => {
  const { availableTokens, updateAvailableTokens } = useContext(SwapContext);
  return { availableTokens, updateAvailableTokens };
};

export default function SwapProvider({
  children,
}: {
  children: ReactNode;
}): any {
  const [providersData, setProviders] = useState();
  const [allTokens, setAllTokens] = useState([]);
  const [availableTokens, setAvailableTokens] = useState([]);
  // const { chainId, account, publicClient } = useActiveWeb3();

  // update providers
  const updateProviders = useCallback(async () => {
    try {
      const response = await fetch(
        `${SWAPKIT_API_ENDPOINT}/providers`,
        {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            "x-api-key": SWAPKIT_API_KEY,
          }),
        }
      );

      const result = await response.json();

      let allTokens: any[] = [];

      if (result && result.length > 0) {
        const providerResults = await Promise.all(
          result.map(async (provider) => {
            if (!provider?.name) return null;

            const response = await fetch(
              `${SWAPKIT_API_ENDPOINT}/tokens?provider=${provider.name}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  "x-api-key": SWAPKIT_API_KEY,
                },
              }
            );

            const providerResult = await response.json();
            return providerResult?.tokens ?? [];
          })
        );

        // flatten and deduplicate
        const seen = new Set<string>();
        providerResults.flat().forEach((token) => {
          // use some unique key for each token (symbol+chain or address)
          const uniqueKey = `${token.symbol}-${token.chain || ""}-${token.address || ""}`;
          if (!seen.has(uniqueKey)) {
            seen.add(uniqueKey);
            allTokens.push(token);
          }
        });
      }

      setAllTokens(allTokens);

      setProviders(result);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const updateAvailableTokens = useCallback(async (selectedProvider) => {
    try {
      if (!selectedProvider || selectedProvider == "") {
        if (providersData) {
          const defaultProvider = providersData[0]?.name;
          const response = await fetch(`${SWAPKIT_API_ENDPOINT}/tokens?provider=${defaultProvider}`, {
            method: "GET",
            headers: new Headers({
              "Content-Type": "application/json",
              "x-api-key": SWAPKIT_API_KEY,
            }),
          });

          const result = await response.json();
          if (result.provider != defaultProvider) throw result;

          const tokens = result.tokens;
          setAvailableTokens(tokens);
        } else {
          setAvailableTokens([]);
        }
      } else {
        const response = await fetch(`${SWAPKIT_API_ENDPOINT}/tokens?provider=${selectedProvider}`, {
          method: "GET",
          headers: new Headers({
            "Content-Type": "application/json",
            "x-api-key": SWAPKIT_API_KEY,
          }),
        });

        const result = await response.json();
        if (result.provider != selectedProvider) throw result;

        const tokens = result.tokens;
        setAvailableTokens(tokens);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    updateProviders();
    updateAvailableTokens();
  }, []);

  // useEffect(() => {
  //   updateProviders();
  //   updateAvailableTokens();
  // }, [account, chainId]);

  return (
    <SwapContext.Provider value={{ providersData, availableTokens, allTokens, updateProviders, updateAvailableTokens }}>
      {children}
    </SwapContext.Provider>
  );
}
