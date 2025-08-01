"use client";
import React from 'react'
import { Carousel } from '@mantine/carousel';

import { useMemo } from "react";
import moment from "moment";
import { useActiveWeb3 } from "@/hooks/useActiveWeb3";
import { truncateWalletString } from "@/utils";

export default function CompetitionCarouselCard({ row, rank }) {
  const itemClass = 'w-full'
  const { chain } = useActiveWeb3();

  const oniTokenSymbol = "ONI";
  const nativeCurrencySymbol = useMemo(() => {
    if (chain && (chain.nativeCurrency.symbol == "BNB" || chain.nativeCurrency.symbol == "ETH" || chain.nativeCurrency.symbol == "SEP")) {
      return chain.nativeCurrency.symbol;
    }
    return "BNB";
  }, [chain]);
  
  return (
    <Carousel.Slide className={itemClass}>
      <div
      className={`w-full ${
        rank === 1
          ? "bg-[#EFD015]"
          : rank === 2
          ? "bg-[#D3D1C5]"
          : rank === 3
          ? "bg-[#D78C36]"
          : "bg-[#070710]"
      } rounded-xl px-5 py-4 flex items-center justify-between max-md:flex-wrap`}
    >
      <span className="w-[5%] max-md:w-full flex justify-between">
        <p
          className={`hidden max-md:flex  ${
            rank === 1 || rank === 2 || rank === 3
              ? "text-[#000] font-bold"
              : "text-[#CCCEEF]"
          }`}
        >
          Rank
        </p>
        <p
          className={`w-full whitespace-nowrap  max-md:w-auto ${
            rank === 1 || rank === 2 || rank === 3 ? "text-[#06060E]" : ""
          }`}
        >
          {rank}
        </p>
      </span>
      <span className="w-[25%] max-md:w-full flex justify-between">
        <p
          className={`hidden max-md:flex  ${
            rank === 1 || rank === 2 || rank === 3
              ? "text-[#000] font-bold"
              : "text-[#CCCEEF]"
          }`}
        >
          Wallet
        </p>
        <p
          className={`w-full whitespace-nowrap max-md:w-auto text-center max-md:text-end ${
            rank === 1 || rank === 2 || rank === 3 ? "text-[#06060E]" : ""
          }`}
        >
          {truncateWalletString(row?.address)}
        </p>
      </span>
      <span className="w-[20%] max-md:w-full flex justify-between">
        <p
          className={`hidden max-md:flex  ${
            rank === 1 || rank === 2 || rank === 3
              ? "text-[#000] font-bold"
              : "text-[#CCCEEF]"
          }`}
        >
          Date
        </p>
        <p
          className={`w-full whitespace-nowrap max-md:w-auto text-center max-md:text-start ${
            rank === 1 || rank === 2 || rank === 3 ? "text-[#06060E]" : ""
          }`}
        >
          {moment(row?.timestamp * 1000)
            .utc()
            .format("YYYY.MM.DD HH:mm")}
        </p>
      </span>
      <span className="w-[10%] max-md:w-full flex justify-between">
        <p
          className={`hidden max-md:flex  ${
            rank === 1 || rank === 2 || rank === 3
              ? "text-[#000] font-bold"
              : "text-[#CCCEEF]"
          }`}
        >
          No of TX
        </p>
        <p
          className={`w-full whitespace-nowrap max-md:w-auto text-center max-md:text-end ${
            rank === 1 || rank === 2 || rank === 3 ? "text-[#06060E]" : ""
          }`}
        >
          {row?.txCount}
        </p>
      </span>
      <span className="w-[20%] max-md:w-full flex justify-between">
        <p
          className={`hidden max-md:flex  ${
            rank === 1 || rank === 2 || rank === 3
              ? "text-[#000] font-bold"
              : "text-[#CCCEEF]"
          }`}
        >
          Total Buy
        </p>
        <p
          className={`w-full whitespace-nowrap max-md:w-auto text-center max-md:text-start font-bold ${
            rank === 1 || rank === 2 || rank === 3 ? "text-[#06060E]" : ""
          }`}
        >
          {row?.amount.toLocaleString("en-US", { maximumFractionDigits: 3 })}{" "}
          {nativeCurrencySymbol}
        </p>
      </span>
      <span className="w-[20%] max-md:w-full flex justify-between">
        <p
          className={`hidden max-md:flex  ${
            rank === 1 || rank === 2 || rank === 3
              ? "text-[#000] font-bold"
              : "text-[#CCCEEF]"
          }`}
        >
          Prize
        </p>
        <p
          className={`w-full whitespace-nowrap max-md:w-auto text-end max-md:text-start ${
            rank === 1 || rank === 2 || rank === 3 ? "text-[#06060E]" : ""
          }`}
        >
          {row?.reward.toLocaleString("en-US", { maximumFractionDigits: 0 })}{" "}
          {oniTokenSymbol}
        </p>
      </span>
    </div>
    </Carousel.Slide>
  )
}
