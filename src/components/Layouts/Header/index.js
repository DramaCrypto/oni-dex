"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import sal from "sal.js";
import IconBtn from "../../Button/IconBtn";

import logo from "@/assets/image/logo.png";
import topbg from "@/assets/image/top-banner.png";

import Home from "@/assets/icons/home.svg";
import Docs from "@/assets/icons/docs.svg";
import Alert from "@/assets/icons/alerts.svg";
import FlashClub from "@/assets/image/logo.png";
import Wallet from "@/assets/icons/wallet.svg";
import Add from "@/assets/icons/add.svg";
import CloseIcon from "@/assets/icons/close.svg";
import subtractIcon from "@/assets/icons/subtract.svg";

import EtherNetIcon from "@/assets/icons/ether-net.svg";
import BNBNetIcon from "@/assets/icons/bnb-net.svg";
import OpBNBNetIcon from "@/assets/icons/opbnb-net.svg";
import PolygonNetIcon from "@/assets/icons/polygon-net.svg";
import ArbitrumNetIcon from "@/assets/icons/arb_icon.svg";
import AvalancheNetIcon from "@/assets/icons/avax.svg";
import SepoliaNetIcon from "@/assets/icons/sepolia-net.svg";
import GalaNetIcon from "@/assets/icons/gala_circle.svg";

import warningIcon from "@/assets/icons/warning.svg";
import UKIcon from "@/assets/icons/uk.svg";
import MenuIcon from "@/assets/icons/menu.svg";

import { useRouter } from "next/navigation";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import ButtonColor from "@/components/Button/ButtonColor";
import CustomModal from "@/components/Modal/CustomModal";

import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";


const Notification = ({ setShowNotification }) => {
  const handleClick = () => { };
  return (
    <div
      className="relative w-full h-[50px] max-md:h-auto max-md:py-2 flex items-center justify-center"
      style={{ backgroundImage: `url('${topbg.src}')` }}
    >
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center  max-md:flex-col">
          <div className="flex flex-row items-center gap-10 max-md:flex-col max-md:gap-2">
            <div className="flex flex-row items-center gap-5 max-md:flex-col max-md:gap-2">
              <span className="rainbow-badge">PHISHING WARNING</span>
              <span className="news-text max-md:text-xl">
                Please make sure your're visiting https://oni.exchange
              </span>
            </div>
            <div className="right-button">
              <Link
                className="btn-read-more"
                href={"/presale"}
                onClick={() => {
                  setShowNotification(false);
                }}
                target="_self"
              >
                <span>
                  Presale is Live! <i className="feather-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-[42px]  max-md:top-[10px] max-lg:right-[16px]">
        <button
          className="flex items-center justify-center w-[32px] h-[32px] border border-[#ffffff0a] rounded-full"
          onClick={() => setShowNotification(false)}
        >
          <i className="feather-x"></i>
        </button>
      </div>
    </div>
  );
};

const Header = ({ mobileView, show, setShow, showNotification, setShowNotification }) => {
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();

  // show modal for gala account 
  const [showModal, setShowModal] = useState(false);
  const openGalaAccountModal = () => {
    setShowModal(true)
  }
  const { openChainModal } = useChainModal();
  const [loginStatus, setLoginStatus] = useState(false);
  const [isSupportedChain, setIsSupportedChain] = useState(false);

  useEffect(() => {
    const isLoggedin = true;
    setLoginStatus(isLoggedin);
  }, []);

  const chainList = {
    1: EtherNetIcon,
    56: BNBNetIcon,
    137: PolygonNetIcon,
    42161: ArbitrumNetIcon,
    43114: AvalancheNetIcon,
    11155111: SepoliaNetIcon,
  };

  const mainnet = [
    { name: "Ethereum", icon: EtherNetIcon, index: 1 },
    { name: "BNB Smart Chain", icon: BNBNetIcon, index: 2 },
    { name: "OpBNB Mainnet", icon: OpBNBNetIcon, index: 3 },
    { name: "Polygon", icon: PolygonNetIcon, index: 4 },
  ];

  const testnet = [
    { name: "Goerli", icon: EtherNetIcon, index: 5 },
    { name: "BNB Smart Chain", icon: BNBNetIcon, index: 6 },
    { name: "OpBNB", icon: OpBNBNetIcon, index: 7 },
    { name: "Polygon (mumbai)", icon: PolygonNetIcon, index: 8 },
  ];

  const lanList = [
    {
      name: "UK",
      img: UKIcon,
    },
  ];

  // const [showNotification, setShowNotification] = useState(true);
  const [netShow, setNetShow] = useState(false);
  const [lanShow, setLanShow] = useState(false);
  const [createShow, setCreateShow] = useState(false);

  const router = useRouter();
  const myref = useRef(undefined);
  useEffect(() => {
    sal();

    const cards = document.querySelectorAll(".bg-flashlight");

    cards.forEach((bgflashlight) => {
      bgflashlight.onmousemove = function (e) {
        let x = e.pageX - bgflashlight.offsetLeft;
        let y = e.pageY - bgflashlight.offsetTop;

        bgflashlight.style.setProperty("--x", x + "px");
        bgflashlight.style.setProperty("--y", y + "px");
      };
    });
  }, []);
  const onMove = (e) => {
    sal();
    const cards = myref.current.getBoundingClientRect();
    let x = e.clientX - cards.left;
    let y = e.clientY - cards.top;
    myref.current.style.setProperty("--x", x + "px");
    myref.current.style.setProperty("--y", y + "px");
  };

  const inputGalaAddress = useRef(null);
  const copyHandle = () => {
    if (loginStatus && inputGalaAddress) {
      navigator.clipboard.writeText(galaWalletString(address));
      toast.success("Copied Address!");
    }
  };

  return (
    <>
      <div className="fixed w-full left-0 top-0 bg-[#070710]/[.99] ml-[-1px] hidden lg:flex items-center justify-center flex-col z-[999] border-b border-[#ffffff1a]">
        {/* {showNotification &&
          <Notification setShowNotification={setShowNotification} />
        } */}

        <div className="w-full flex items-center justify-between px-14 h-[80px]">
          <div className="flex gap-2" id="header">
            <Link
              className="flex items-center gap-x-2 w-[200px] xl:w-[256px]"
              href={"/"}
              onClick={() => {
                setActive(-1);
              }}
              target="_self"
            >
              <img src={logo.src} alt="logo" className="w-[42px]" />
              <p className="text-[#cac8ec] text-[24px] font-bold">ONI DEX</p>
            </Link>
            <Link href={"/"}>
              <IconBtn
                text="Home"
                className="bg-[#7064e900]"
                TxSize="text-[10px] xl:text-[12px] 2xl:text-[14px]"
                icon={Home}
                heigh="h-[40px]"
                iconHeight={20}
              />
            </Link>
            <Link href={"https://oni.gitbook.io/oni.exchange"} target="_blank">
              <IconBtn
                text="Docs"
                className="bg-[#7064e900]"
                TxSize="text-[10px] xl:text-[12px] 2xl:text-[14px]"
                icon={Docs}
                heigh="h-[40px]"
                iconHeight={20}
              />
            </Link>
            <Link href={"https://t.me/oni_exchange"} target="_blank">
              <IconBtn
                text="Join Our Telegram"
                className="bg-[#7064e900]"
                TxSize="text-[10px] xl:text-[12px] 2xl:text-[14px]"
                icon={Alert}
                heigh="h-[40px]"
                iconHeight={20}
              />
            </Link>
            <Link href={"https://talk.oni.exchange"} target="_self">
              <IconBtn
                text="Join ONI TALK"
                icon={FlashClub}
                heigh="h-[40px]"
                className="bg-[#7064e900]"
                TxSize="text-[10px] xl:text-[12px] 2xl:text-[14px]"
                iconHeight={25}
              />
            </Link>
          </div>

          <div className="flex gap-x-[15.05px]">
            <IconBtn
              text="Create"
              icon={Add}
              rounded="rounded-full"
              TxclassName="text-white"
              TxSize="text-[10px] xl:text-[12px] 2xl:text-[14px]"
              heigh="h-[40px]"
              px="px-[18px]"
              py="py-[5px]"
              iconHeight={20}
              borderColor="border-[#ffffff1a]"
              onClick={() => setCreateShow(!createShow)}
            />
            <IconBtn
              text={
                isSupportedChain
                  ? (chain ? chain?.name : DEFAULT_CHAIN.name)
                  : "Wrong Network"
              }
              icon={
                isSupportedChain
                  ? chain ? chainList[chain?.id] : chainList[DEFAULT_CHAIN.id]
                  : warningIcon
              }

              BgclassName="bg-[#7064e900]"
              TxclassName="text-white"
              TxSize="text-[10px] xl:text-[12px] 2xl:text-[14px]"
              heigh="h-[40px]"
              px="px-[18px]"
              py="py-[5px]"
              iconHeight={20}
              openChainModal
              onClick={openChainModal}
            />
            <ButtonColor
              text="Connect"
              icon={Wallet}
              BgclassName="bg-gradient-to-b from-[#b0d304] to-[#368600]"
              TxclassName="text-[#fff]"
              TxSize="text-[16px]"
              rounded="rounded-[10px]"
              heigh="h-[40px]"
              no_border
              px="px-[18px]"
              py="py-[5px]"
              onClick={loginStatus ? openAccountModal : openConnectModal}
            />
          </div>
          {lanShow && (
            <div className="bg-[#1B1B1B] flex flex-col rounded-lg absolute top-[60px] right-[590px] z-50 pb-2">
              {lanList.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row py-3 px-5 border-b border-white gap-3 cursor-pointer"
                  onClick={() => setLanShow(false)}
                >
                  <img src={item.img.src} alt="image" />
                  <p className="text-white">{item.name}</p>
                </div>
              ))}
            </div>
          )}

          {netShow && (
            <div className="fixed flex top-0 left-0 w-screen h-screen z-50 justify-center items-center bg-[#000] bg-opacity-50">
              <div className="bg-[#1B1B1B] rounded-lg w-[370px] pt-6 pb-4 bg-flashlight ">
                <div className="flex flex-row px-[20px] pb-[16px] justify-between">
                  <p className="text-white text-[20px]">Switch Network</p>
                  <img
                    src={CloseIcon.src}
                    alt="icon"
                    className="cursor-pointer"
                    onClick={() => setNetShow(false)}
                  />
                </div>
                <div className="text-2xl text-[#FCBF07] py-[13px] text-center">
                  Mainnet
                </div>
                {mainnet.map((item, index) => (
                  <div
                    key={index}
                    className="py-3 px-5 flex flex-row gap-3 items-center border-b border-[#2C2C2C] cursor-pointer"
                    onClick={() => setNetShow(false)}
                  >
                    <img src={item.icon.src} alt="icon" />
                    <p className="text-white text-xl">{item.name}</p>
                  </div>
                ))}

                <div className="text-2xl text-[#FCBF07] py-[13px] text-center">
                  Testnet
                </div>

                {testnet.map((item, index) => (
                  <div
                    key={index}
                    className="py-3 px-5 flex flex-row gap-3 items-center border-b border-[#2C2C2C] cursor-pointer"
                    onClick={() => setNetShow(false)}
                  >
                    <img src={item.icon.src} alt="icon" />
                    <p className="text-white text-xl">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {createShow && (
            <>
              <div
                className="fixed bg-transparent top-0 left-0 w-screen h-screen z-10 "
                onClick={() => {
                  setCreateShow(false);
                }}
              ></div>
              <div className="bg-[#1B1B1B] rounded-[8px] shadow-[0_8px_55px_0_rgba(0, 0, 0, 0.20)] absolute top-[110px] right-[242px] z-50 w-[400px] z-20 ">
                <div
                  className="relative py-6 bg-flashlight rounded-[8px] "
                  ref={myref}
                  onMouseMove={(e) => onMove(e)}
                >
                  <p className="text-center text-[#7064e9] text-[25.6px]">
                    Create
                  </p>
                  <div className="flex px-[28.5px] py-[25px]">
                    <div className="flex flex-col gap-5 pr-[39px] py-[15px]">
                      <button
                        onClick={() => {
                          setCreateShow(false);
                          router.push("/create-token");
                        }}
                        className="outline-none border border-[#ffffff1a] rounded-[23px] flex flex-row items-center justify-center w-[131px] h-[41px] text-[#7376aa] text-[13px]"
                      >
                        Token
                      </button>
                      <button
                        onClick={() => {
                          setCreateShow(false);
                          router.push("/launch/launchpad");
                        }}
                        className="outline-none border border-[#ffffff1a] rounded-[23px] flex flex-row items-center justify-center w-[131px] h-[41px] text-[#7376aa] text-[13px]"
                      >
                        Launchpad
                      </button>
                      <button
                        onClick={() => {
                          setCreateShow(false);
                          router.push("/launch/fair-launch");
                        }}
                        className="outline-none border border-[#ffffff1a] rounded-[23px] flex flex-row items-center justify-center w-[131px] h-[41px] text-[#7376aa] text-[13px]"
                      >
                        Fair Launch
                      </button>
                    </div>
                    <div className="separator-animated-vertical animated-true"></div>
                    <div className="flex flex-col gap-5 pl-[39px] py-[15px]">
                      <button
                        onClick={() => {
                          setCreateShow(false);
                          router.push("/launch/create-staking");
                        }}
                        className="outline-none border border-[#ffffff1a] rounded-[23px] flex flex-row items-center justify-center w-[131px] h-[41px] text-[#7376aa] text-[13px]"
                      >
                        Staking Pool
                      </button>
                      <button
                        onClick={() => {
                          setCreateShow(false);
                          router.push("/launch/create-lock");
                        }}
                        className="outline-none border border-[#ffffff1a] rounded-[23px] flex flex-row items-center justify-center w-[131px] h-[41px] text-[#7376aa] text-[13px]"
                      >
                        Lock
                      </button>
                      <button
                        onClick={() => {
                          setCreateShow(false);
                          router.push("/airdrop");
                        }}
                        className="outline-none border border-[#ffffff1a] rounded-[23px] flex flex-row items-center justify-center w-[131px] h-[41px] text-[#7376aa] text-[13px]"
                      >
                        Airdrop
                      </button>
                    </div>
                  </div>
                  <p className="text-xl text-[#7376aa] text-center">
                    Apply For ONI Grant
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="fixed lg:hidden  w-[100vw] left-0 top-0 bg-[#070710]/[.99] z-[999]">

        <div className="flex flex-row p-5 justify-between ">
          <div className="flex flex-row items-center gap-1">
            <img
              src={MenuIcon.src}
              alt="menu"
              className="cursor-pointer mr-5"
              onClick={() => {
                setShow(!show);
              }}
            />
            <Link
              className="flex items-center gap-x-2"
              href={"/"}
              onClick={() => {
                setActive(-1);
              }}
              target="_self"
            >
              <img src={logo.src} alt="flash" className="w-[42px]" />
            </Link>
          </div>
          <div className="flex flex-row items-center gap-1">
            <IconBtn
              text={""}
              icon={
                isSupportedChain
                  ? chain ? chainList[chain?.id] : chainList[DEFAULT_CHAIN.id]
                  : warningIcon
              }
              BgclassName="bg-[#7064e900]"
              TxclassName="text-white"
              TxSize="text-[10px] xl:text-[12px] 2xl:text-[14px]"
              heigh="h-[30px]"
              px="px-[0px]"
              py="py-[0px]"
              openChainModal
              onClick={openChainModal}
            />

            <ButtonColor
              icon={null}
              BgclassName="bg-gradient-to-b from-[#b0d304] to-[#368600]"
              TxclassName="text-[#fff]"
              TxSize="text-[16px]"
              rounded="rounded-[10px]"
              heigh="h-[35px]"
              no_border
              px="px-[18px]"
              py="py-[5px]"
              text="Connect"
              onClick={openConnectModal}
            />

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
