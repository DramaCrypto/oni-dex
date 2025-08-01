"use client";

import React, { useState, useEffect, useContext } from "react";
import Expand from "react-expand-animated";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

import NavItem from "./NavItem";
import SmallIconOnlyBtn from "../../Button/SmallIconOnlyBtn";

//! import the Image
import ActiveLaunch from "@/assets/icons/active_launch.svg";
import ActiveTools from "@/assets/icons/active_tools.svg";
import ActiveAudit from "@/assets/icons/active_audit.svg";

import Telegram from "@/assets/icons/telegram.svg";
import Twitter from "@/assets/icons/twitter.svg";

import {
  AIRDROP,
  BUY_CRYPTO_FIAT,
  CREATE_LOCK,
  CREATE_TOKEN,
  FAIR_LAUNCH,
  FARMS,
  GALA_BRIDGE,
  GAMES,
  NEWS,
  CATEGORIES,
  POSTS,
  LAUNCHPAD,
  LEADERBOARD,
  LIQUIDITY,
  LIQUIDITY_LIST,
  LOTTERY,
  MAIN_BRIDGE,
  NFT_MP,
  NORMAL,
  ONI_AUDIT,
  ONI_LOCK,
  POOLS,
  PRESALE,
  SHOP,
  STAKING_POOL,
  SWAP,
  LAUNCHPADS,
  UTILITYNFTS,
  SPHERES,
  SPHEREDASH,
  GAMESPHERES,
  GAMESPHEREDASH,
  LOTTERY_HISTORY,
  LOTTERY_LEADERBOARD,
} from "./menu_index";
import {
  AirdropIcon,
  AuditIcon,
  BuyIcon,
  CreateTokenIcon,
  GiftIcon,
  LaunchpadsIcon,
  LeaderboardIcon,
  LotteryIcon,
  MainBridgeIcon,
  OniLockIcon,
  PoolIcon,
  PresaleIcon,
  StakingPoolIcon,
  GamesIcon,
} from "./Icons";
import { PurchaseContext } from "@/contexts/PurchaseContext";

const SideBar = ({ show, mobileView, setShow, showNotification }) => {
  const [active, setActive] = useState(0);
  const [isExpandTrade, setIsExpandTrade] = useState(false);
  const [isExpandSphere, setIsExpandSphere] = useState(true);
  const [isExpandGame, setIsExpandGame] = useState(true);
  const [isExpandCreate, setIsExpandCreate] = useState(false);
  const [isExpandExplorer, setIsExpandExplorer] = useState(false);

  const styles = {
    open: { width: "100%" },
    close: { width: "100%" },
  };
  const transitions = ["height", "opacity", "background"];

  const routerList = [
    {
      text: "Launchpads",
      icon: <LaunchpadsIcon />,
      path: "/launchpads",
      active: LAUNCHPADS,
    },
    {
      text: "Farms",
      img: "airplay",
      path: "/farms",
      active: FARMS,
    },
    {
      text: "Pools",
      icon: <PoolIcon />,
      path: "/staking-pool",
      active: POOLS,
      state: "BETA",
    },
    {
      text: "Leaderboard",
      icon: <LeaderboardIcon />,
      path: "/leaderboard",
      active: LEADERBOARD,
    },
  ];

  const router = useRouter();
  const pathname = usePathname();

  const onNavItemClick = (index) => {
    setActive(index);
    if (index === 1) {
      router.push("/about");
    }
  };

  useEffect(() => {
    var temp;
    if (pathname[pathname.length - 1] === "/") {
      temp = pathname.slice(0, pathname.length - 1);
    }
    routerList.forEach((item) => {
      if (item.path == temp) {
        setActive(item.active);
      }
      if (pathname.indexOf("create-staking") > 0) {
        setActive(STAKING_POOL);
      }
      if (pathname.indexOf("airdrop") > 0) {
        setActive(AIRDROP);
      }
      if (pathname.indexOf("flash-audit-result") > 0) {
        setActive(ONI_AUDIT);
      }
      if (pathname.indexOf("buy-fiat") > 0) {
        setActive(BUY_CRYPTO_FIAT);
      }
      if (pathname.indexOf("spheres") > 0) {
        setActive(SPHERES);
      }
     if (pathname.indexOf("spheredash") > 0) {
        setActive(SPHEREDASH);
      }
      if (pathname.indexOf("game-spheredash") > 0) {
        setActive(GAMESPHEREDASH);
      }
      if (pathname.indexOf("game-spheres") > 0) {
        setActive(GAMESPHERES);
      }
    });
    if (pathname.indexOf("main_bridge") > 0) {
      setActive(MAIN_BRIDGE);
    }
  }, [pathname]);

  return (
    <>
      {mobileView && (
        <div
          className={`fixed top-0 left-0 w-screen h-screen z-40 ${show ? "block" : "hidden"
            }`}
          onClick={() => {
            setShow && setShow(false);
          }}
        ></div>
      )}
      <div
        className={` fixed h-screen overflow-hidden overflow-y-auto top-0 bg-[#070710] border-r border-[#ffffff1a] w-[286px] pb-[150px] z-10 ${mobileView
          ? "z-50 transition-opacity duration-1000 pt-[68px]"
          : showNotification
            ? "pt-[82px]"
            : "pt-[82px]"
          // : showNotification ? 'pt-[130px]' : 'pt-[90px]'
          } ${show ? "block" : "hidden"}`}
      >
      <div className="sidebar w-full h-full overflow-hidden overflow-y-auto ">
      <div className="mt-[28px]">
        <p className="text-[#ffffff] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10">
          ONI News
        </p>
        <div className="flex flex-col mt-5 gap-y-2">
          <NavItem
              text="Latest News"
              icon={<LaunchpadsIcon />}
              index={NEWS}
              onClick={() => setActive(NEWS)}
              active={active === NEWS && true}
              path={"/news"}
              state="BETA"
              onCloseMenu1={() => setShow && setShow(false)}
            />
        </div>
        <hr className="h-px w-[256px] mt-5 ml-10 bg-[#2C2C2C] border-0"></hr>
      </div>

      <div className="mt-[26px]">
        <p className="text-[#ffffff] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10">
          PRESALE LIVE
        </p>
        <div className="flex flex-col mt-5 gap-y-2">
          <NavItem
            text="$ONI Presale"
            icon={<PresaleIcon />}
            index={PRESALE}
            onClick={() => setActive(PRESALE)}
            active={active === PRESALE && true}
            path={"/presale"}
            state="LIVE"
            onCloseMenu1={() => setShow && setShow(false)}
          />

          <NavItem
            text="Utility NFT Mint"
            img={"image"}
            index={UTILITYNFTS}
            onClick={() => setActive(UTILITYNFTS)}
            active={active === UTILITYNFTS && true}
            path={"/utilitynfts"}
            state="LIVE"
            onCloseMenu1={() => setShow && setShow(false)}
          />
        </div>
        <hr className="h-px w-[256px] mt-5 ml-10 bg-[#2C2C2C] border-0"></hr>
      </div>

      <div className="mt-[28px]">
        <p
          className="cursor-pointer text-[#ffffff] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10 flex itens-center justify-between pr-4"
          onClick={() => setIsExpandSphere(!isExpandSphere)}
        >
          ONI MAIN SPHERES{" "}
          <i className={`feather-${!isExpandSphere ? "plus" : "minus"}`}></i>
        </p>
        <Expand
          open={isExpandSphere}
          duration={300}
          styles={styles}
          transitions={transitions}
        >
          <div
            className="flex flex-col mt-5 gap-y-2"
            onClick={() => setShow && setShow(false)}
          >
            <NavItem
              text="Buy Spheres"
              icon={<LaunchpadsIcon />}
              active_img={ActiveLaunch}
              index={SPHERES}
              onClick={() => setActive(SPHERES)}
              onCloseMenu2={() => setShow && setShow(false)}
              active={active === SPHERES && true}
              state="LIVE"
              path={"/spheres"}
            />

            <NavItem
              text="Dashboard"
              icon={<StakingPoolIcon />}
              active_img={ActiveLaunch}
              active={active == SPHEREDASH && true}
              state="LIVE"
              index={SPHEREDASH}
              onClick={() => setActive(SPHEREDASH)}
              onCloseMenu={() => setShow && setShow(false)}
              path="/spheredash"
            />
          </div>
        </Expand>
        <hr className="h-px w-[256px] mt-5 ml-10 bg-[#2C2C2C] border-0"></hr>
      </div>

      <div className="mt-[28px]">
        <p
          className="cursor-pointer text-[#ffffff] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10 flex itens-center justify-between pr-4"
          onClick={() => setIsExpandGame(!isExpandGame)}
        >
          ONI GAME SPHERES{" "}
          <i className={`feather-${!isExpandGame ? "plus" : "minus"}`}></i>
        </p>
        <Expand
          open={isExpandGame}
          duration={300}
          styles={styles}
          transitions={transitions}
        >
          <div
            className="flex flex-col mt-5 gap-y-2"
            onClick={() => setShow && setShow(false)}
          >
            <NavItem
              text="Buy Spheres"
              icon={<LaunchpadsIcon />}
              active_img={ActiveLaunch}
              index={GAMESPHERES}
              onClick={() => setActive(GAMESPHERES)}
              onCloseMenu2={() => setShow && setShow(false)}
              active={active === GAMESPHERES && true}
              state="LIVE"
              path={"/game-spheres"}
            />
            <NavItem
              text="Dashboard"
              icon={<StakingPoolIcon />}
              active_img={ActiveLaunch}
              active={active == GAMESPHEREDASH && true}
              state="LIVE"
              index={GAMESPHEREDASH}
              onClick={() => setActive(GAMESPHEREDASH)}
              onCloseMenu={() => setShow && setShow(false)}
              path="/game-spheredash"
            />
          </div>
        </Expand>
        <hr className="h-px w-[256px] mt-5 ml-10 bg-[#2C2C2C] border-0"></hr>
      </div>

      <div className="mt-[28px]">
        <p
          className="cursor-pointer text-[#ffffff] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10 flex itens-center justify-between pr-4"
          onClick={() => setIsExpandGame(!isExpandGame)}
        >
          GAMING & NFT{" "}
          <i className={`feather-${!isExpandGame ? "plus" : "minus"}`}></i>
        </p>
        <Expand
          open={isExpandGame}
          duration={300}
          styles={styles}
          transitions={transitions}
        >
          <div
            className="flex flex-col mt-5 gap-y-2"
            onClick={() => setShow && setShow(false)}
          >
            <NavItem
              text="ONI Games"
              icon={<GamesIcon />}
              active_img={ActiveAudit}
              active={active === GAMES && true}
              onClick={() => setActive(GAMES)}
              index={GAMES}
              state="LIVE"
              path={"/games"}
            />
            <NavItem
              text="NFT Marketplace"
              img={"shopping-cart"}
              active_img={ActiveTools}
              active={active === NFT_MP && true}
              onClick={() => setActive(NFT_MP)}
              index={NFT_MP}
              state="BETA"
              path={"/nft_marketplace"}
            />
            <NavItem
              text="Lottery"
              icon={<LotteryIcon />}
              active_img={ActiveAudit}
              active={active === LOTTERY && true}
              onClick={() => setActive(LOTTERY)}
              index={LOTTERY}
              state="BETA"
              path={"/lottery"}
            />
          </div>
        </Expand>

        <hr className="h-px w-[256px] mt-5 ml-10 bg-[#2C2C2C] border-0"></hr>
      </div>

      <div className="mt-[26px]">
        <p className="text-[#ffffff] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10">
          EXPLORE & EARN
        </p>
        <div
          className="flex flex-col mt-5 gap-y-2"
          onClick={() => setShow && setShow(false)}
        >
          {routerList.map((item, index) => {
            return (
              <NavItem
                key={index}
                text={item.text}
                icon={item.icon}
                active={active === item.active && true}
                onClick={() => setActive(item.active)}
                path={item.path}
                state={item.state}
                index={item.active}
              />
            );
          })}

        </div>
        <hr className="h-px w-[256px] mt-5 ml-10 bg-[#2C2C2C] border-0"></hr>
      </div>

      <div className="mt-[28px]">
        <p
          className="cursor-pointer text-[#ffffff] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10 flex itens-center justify-between pr-4"
          onClick={() => setIsExpandCreate(!isExpandCreate)}
        >
          Create{" "}
          <i className={`feather-${!isExpandCreate ? "plus" : "minus"}`}></i>
        </p>
        <Expand
          open={isExpandCreate}
          duration={300}
          styles={styles}
          transitions={transitions}
        >
          <div
            className="flex flex-col mt-5 gap-y-2"
            onClick={() => setShow && setShow(false)}
          >
            <NavItem
              text="Launchpad"
              icon={<LaunchpadsIcon />}
              active_img={ActiveLaunch}
              right={true}
              active={active >= LAUNCHPAD && active <= FAIR_LAUNCH && true}
              index={LAUNCHPAD}
              onClick={() => setActive(LAUNCHPAD)}
              onCloseMenu={() => setShow && setShow(false)}
              setActive={setActive}
              state="INCOME"
              childItems={[
                {
                  label: "Normal",
                  path: "/launch/launchpad",
                  active: active === NORMAL && true,
                  index: NORMAL,
                },
                {
                  label: "Fair Launch",
                  path: "/launch/fair-launch",
                  active: active === FAIR_LAUNCH && true,
                  index: FAIR_LAUNCH,
                },
              ]}
            />

            <NavItem
              text="Token Creator"
              icon={<CreateTokenIcon />}
              active_img={ActiveAudit}
              index={CREATE_TOKEN}
              onClick={() => setActive(CREATE_TOKEN)}
              onCloseMenu2={() => setShow && setShow(false)}
              active={active === CREATE_TOKEN && true}
              state="BETA"
              path={"/create-token"}
            />

            <NavItem
              text="Staking Pool"
              icon={<StakingPoolIcon />}
              active_img={ActiveLaunch}
              active={active == STAKING_POOL && true}
              state="INCOME"
              index={STAKING_POOL}
              onClick={() => setActive(STAKING_POOL)}
              onCloseMenu={() => setShow && setShow(false)}
              path="/launch/create-staking"
            />

            <NavItem
              text="ONI Lock"
              icon={<OniLockIcon />}
              active_img={ActiveTools}
              right={true}
              index={ONI_LOCK}
              onClick={() => setActive(ONI_LOCK)}
              onCloseMenu={() => setShow && setShow(false)}
              active={active >= ONI_LOCK && active <= LIQUIDITY_LIST && true}
              state="INCOME"
              childItems={[
                {
                  label: "Create Lock",
                  path: "/launch/create-lock/",
                  active: active === CREATE_LOCK && true,
                },
                {
                  label: "Token",
                  path: "/launch/token-lock",
                  active: active === 14 && true,
                  index: 14,
                },
                {
                  label: "Liquidity Liist",
                  // path: "/oni/liquidity_list",
                  active: active === LIQUIDITY_LIST && true,
                },
              ]}
            />
          </div>
        </Expand>
        <hr className="h-px w-[256px] mt-5 ml-10 bg-[#2C2C2C] border-0"></hr>
      </div>

      <div className="mt-[28px]">
        <p
          className="cursor-pointer text-[#ffffff] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10 flex itens-center justify-between pr-4"
          onClick={() => setIsExpandTrade(!isExpandTrade)}
        >
          TRADE{" "}
          <i className={`feather-${!isExpandTrade ? "plus" : "minus"}`}></i>
        </p>
        <Expand
          open={isExpandTrade}
          duration={300}
          styles={styles}
          transitions={transitions}
        >
          <div
            className="flex flex-col mt-5 gap-y-2"
            onClick={() => setShow && setShow(false)}
          >
            <NavItem
              text="Swap"
              img={"code"}
              active_img={ActiveLaunch}
              index={SWAP}
              active={active === SWAP && true}
              state="BETA"
              onClick={() => setActive(SWAP)}
              path="/trade/swap"
            />

            <NavItem
              text="Liquidity"
              img={"gift"}
              active_img={ActiveTools}
              active={active === LIQUIDITY && true}
              index={LIQUIDITY}
              state="INCOME"
              onClick={() => setActive(LIQUIDITY)}
            // path="/trade/liquidity"
            />
            <NavItem
              text="Main Bridge"
              icon={<MainBridgeIcon />}
              onClick={() => setActive(MAIN_BRIDGE)}
              active_img={ActiveAudit}
              active={active === MAIN_BRIDGE && true}
              index={MAIN_BRIDGE}
              state="INCOME"
            // path={"https://oni.exchange"}
            // path='/main_bridge'
            />
            <NavItem
              text="Gala Bridge"
              img={"map"}
              active_img={ActiveAudit}
              active={active === GALA_BRIDGE && true}
              index={GALA_BRIDGE}
              state="INCOME"
              onClick={() => setActive(GALA_BRIDGE)}
            // path={"https://oni.exchange"}
            />
          </div>
        </Expand>

        <hr className="h-px w-[256px] mt-5 ml-10 bg-[#2C2C2C] border-0"></hr>
      </div>

      <div className="mt-[28px]">
        <p className="text-[#ffffff] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10">
          AUDIT
        </p>
        <Link
          href=""
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-x-4 py-4 pl-10 pr-2.5 relative cursor-pointer `}
        >
          <div className="relative w-[32px] overflow-hidden h-[32px] border border-[#ffffff0a] flex items-center justify-center text-[24px] rounded-lg bg-gradient-to-b from-[#1d1c2d] to-[#201f36]">
            <div className={`text-[#7376aa]`}>
              <AuditIcon />
            </div>
          </div>
          <p className={`text-[16px] capitalize 'text-[#7376aa]`}>
            ONI AUDIT
          </p>
        </Link>

        <hr className="h-px w-[256px] mt-5 ml-10 bg-[#2C2C2C] border-0"></hr>
      </div>

      <div className="mt-[28px]">
        <p className="text-[#ffffff] text-[14px] font-semibold uppercase tracking-[1.5px] pl-10">
          BUY
        </p>
        <NavItem
          text="BUY CRYPTO FIAT"
          icon={<BuyIcon />}
          active_img={ActiveAudit}
          index={BUY_CRYPTO_FIAT}
          active={active === BUY_CRYPTO_FIAT && true}
          path={"https://www.moonpay.com/"}
        />
        <hr className="h-px w-[256px] mt-5 ml-10 bg-[#2C2C2C] border-0"></hr>
      </div>

      <div className="mt-6">
        <NavItem
          text="#1 Peoples Choice"
          img={"user"}
          BgClass="bg-[#0f1021]"
        />
      </div>
      <div className="mt-[26px]">
        <div
          className="flex flex-col mt-5 gap-y-2"
          onClick={() => setShow && setShow(false)}
        >
          <NavItem
            text="Airdrop"
            icon={<GiftIcon />}
            index={AIRDROP}
            onClick={() => setActive(AIRDROP)}
            active={active === AIRDROP && true}
            path={"/airdrop"}
            state="Ended"
          />
          {/* <NavItem
            text="Airdrop"
            icon={<AirdropIcon />}
            active_img={ActiveLaunch}
            active={active === AIRDROP && true}
            index={AIRDROP}
            path="/airdrop"
            onClick={() => setActive(AIRDROP)}
          /> */}
        </div>
        <hr className="h-px w-[256px] mt-5 ml-10 bg-[#2C2C2C] border-0"></hr>
      </div>

      </div>
      <div className="fixed bottom-0 w-[285px] p-7">
        <div className="bg-[#0f1021] w-full p-5 rounded-lg">
          <Link href="{AUDIT_LINK}" target="_blank" rel="noreferrer">
            <div className="flex items-center gap-2 mb-5">
              <div className="relative">
                
              </div>
            </div>
          </Link>

          <div className="mt-3 flex items-center justify-between w-full">
            <Link
              href={"https://t.me/oni_exchange"}
              target="_blank"
              rel="noreferrer"
            >
              test
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SideBar;
