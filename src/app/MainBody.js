"use client";
import { useState, useEffect, useContext } from "react";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { MantineProvider } from "@mantine/core";

import "./globals.css";
import "../../public/scss/style.scss";
import "../../public/css/plugins/feature.css";

import SideBar from "@/components/Layouts/SideBar";
import Header from "@/components/Layouts/Header";

const inter = Inter({ subsets: ["latin"] });

export default function MainBody({ children }) {
  const [sideBarShow, setSideBarShow] = useState(false);
  const [isLanding, setIsLanding] = useState(false);
  const pathname = usePathname();
  const [showNotification, setShowNotification] = useState(true);
  useEffect(() => {
    if (
      pathname.includes("/") ||
      pathname.includes("utilitynfts") ||
      pathname.includes("presale") ||
      pathname.includes("spheres") ||
      pathname.includes("spheredash") ||
      pathname.includes("games") ||
      pathname.includes("game-spheres") ||
      pathname.includes("game-spheredash/")
    ) {
      setIsLanding(true);
    } else {
      setIsLanding(false);
    }
  }, [pathname]);


  return (
    <>
      <head>
        {/* <!-- Primary Meta Tags --> */}
        <title>ONI Exchange</title>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
        <link rel="shortcut icon" href="/logo.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <meta name="title" content="ONI Exchange" />
        <meta
          name="description"
          content="The biggest DEX in the making: Launchpad, trading, social engagement, gaming and innovation, all in one place."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oni.exchange/" />
        <meta property="og:title" content="ONI Exchange" />
        <meta
          property="og:description"
          content="The biggest DEX in the making: Launchpad, trading, social engagement, gaming and innovation, all in one place."
        />
        {/* <meta property="og:image" content="/metadata.jpg" /> */}
        <meta property="og:image" content="/logo.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="/logo.png" />
        <meta property="twitter:url" content="https://oni.exchange" />
        <meta property="twitter:title" content="ONI Exchange" />
        <meta
          property="twitter:description"
          content="The biggest DEX in the making: Launchpad, trading, social engagement, gaming and innovation, all in one place."
        />
        <meta property="twitter:image" content="/logo.png" />
        {/* <meta
          http-esquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app www.googletagmanager.com; style-src 'self' 'unsafe-inline'; media-src 'none'; connect-src *; font-src 'self'; frame-src giscus.app"
        /> */}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H0SJ4CLDL4"
          id="analytics-script"
          strategy="lazyOnload"
          onLoad={(e) => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());

            gtag("config", "G-H0SJ4CLDL4");
          }}
        />

        <Script
          id="fb-pixel-for-main"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '431139009746401');
              fbq('track', 'PageView');
          `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=431139009746401&ev=PageView&noscript=1"
          />
        </noscript>

        <Script
          id="fb-pixel-for-all"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '431139009746401');
            fbq('track', 'ViewContent');
          `,
          }}
        />

        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=431139009746401&ev=PageView&noscript=1"
          />
        </noscript>

        <Script
          id="pixel-for-1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                 !function(_window, _document) {
                  var OB_ADV_ID = '0012197c4abdf93884ce31da6d9d32f22e';
                  if (_window.obApi) {
                    var toArray = function(object) {
                      return Object.prototype.toString.call(object) === '[object Array]' ? object : [object];
                    };
                    _window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));
                    return;
                  }
                  var api = _window.obApi = function() {
                    api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);
                  };
                  api.version = '1.1';
                  api.loaded = true;
                  api.marketerId = OB_ADV_ID;
                  api.queue = [];
                  var tag = _document.createElement('script');
                  tag.async = true;
                  tag.src = '//amplify.outbrain.com/cp/obtp.js';
                  tag.type = 'text/javascript';
                  var script = _document.getElementsByTagName('script')[0];
                  script.parentNode.insertBefore(tag, script);
                }(window, document);

                obApi('track', 'PAGE_VIEW');

              `,
          }}
        />
        <Script
          id="pixel-for-3"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                  !function(_window, _document) {
                  var OB_ADV_ID = '0012197c4abdf93884ce31da6d9d32f22e';
                  if (_window.obApi) {
                    var toArray = function(object) {
                      return Object.prototype.toString.call(object) === '[object Array]' ? object : [object];
                    };
                    _window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));
                    return;
                  }
                  var api = _window.obApi = function() {
                    api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);
                  };
                  api.version = '1.1';
                  api.loaded = true;
                  api.marketerId = OB_ADV_ID;
                  api.queue = [];
                  var tag = _document.createElement('script');
                  tag.async = true;
                  tag.src = '//amplify.outbrain.com/cp/obtp.js';
                  tag.type = 'text/javascript';
                  var script = _document.getElementsByTagName('script')[0];
                  script.parentNode.insertBefore(tag, script);
                }(window, document);

                obApi('track', 'Content view');


              `,
          }}
        />
        <Script
          id="pixel-for-registration "
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                   !function(_window, _document) {
                    var OB_ADV_ID = '0012197c4abdf93884ce31da6d9d32f22e';
                    if (_window.obApi) {
                      var toArray = function(object) {
                        return Object.prototype.toString.call(object) === '[object Array]' ? object : [object];
                      };
                      _window.obApi.marketerId = toArray(_window.obApi.marketerId).concat(toArray(OB_ADV_ID));
                      return;
                    }
                    var api = _window.obApi = function() {
                      api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);
                    };
                    api.version = '1.1';
                    api.loaded = true;
                    api.marketerId = OB_ADV_ID;
                    api.queue = [];
                    var tag = _document.createElement('script');
                    tag.async = true;
                    tag.src = '//amplify.outbrain.com/cp/obtp.js';
                    tag.type = 'text/javascript';
                    var script = _document.getElementsByTagName('script')[0];
                    script.parentNode.insertBefore(tag, script);
                  }(window, document);

                  obApi('track', 'Registration');

              `,
          }}
        />

        <Script
          id="pixel-for-Ttaboola1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                   window._tfa = window._tfa || [];
                  window._tfa.push({notify: 'event', name: 'page_view', id: 1709485});
                  !function (t, f, a, x) {
                        if (!document.getElementById(x)) {
                            t.async = 1;t.src = a;t.id=x;f.parentNode.insertBefore(t, f);
                        }
                  }(document.createElement('script'),
                  document.getElementsByTagName('script')[0],
                  '//cdn.taboola.com/libtrc/unip/1709485/tfa.js',
                  'tb_tfa_script');

              `,
          }}
        />

        <Script
          id="pixel-for-Ttaboola-REGISTRATION"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window._tfa = window._tfa || [];
                    window._tfa.push({notify: 'event', name: 'complete_registration', id: 1709485});
              `,
          }}
        />

        <Script
          id="pixel-for-Ttaboola2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                    window._tfa = window._tfa || [];
                    window._tfa.push({notify: 'event', name: 'view_content', id: 1709485});

              `,
          }}
        />

        <Script
          id="Oni Cookie3"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                    var script = document.createElement('script');
                    script.defer = true;
                    script.src = 'https://cdn.cookie3.co/scripts/analytics/0.11.4/cookie3.analytics.min.js';
                    script.dataset.siteId = "1429";
                    document.getElementsByTagName('head')[0].appendChild(script);
              `,
          }}
        />
        <Script
          id="Pix3l installation"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                    !function(p,i,x,e,l,s)
                    {p.slq||(s=p.slq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments)},s.queue=[],l=i.createElement(x),l.async=!0,l.src='https://v1.slise.xyz/scripts/pix3l.js',l.id='slise-pix3l',l.setAttribute('data-slise-adv-id',e),e=i.getElementsByTagName(x)[0],e.parentNode.insertBefore(l,e))}(window,document,'script','adv-297');
              `,
          }}
        />
        <Script
          id="HypeLab"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                    !(function (h, y, p, e, l, a, b) {
                      ((l = document.createElement(h)).async = !0),
                        (l.src = y),
                        (l.onload = function () {
                          (a = new HypeLabAnalytics.Client({ environment: p, propertySlug: e, ...a })), HypeLabAnalytics.setClient(a);
                        }),
                        (b = document.getElementsByTagName(h)[0]).parentNode.insertBefore(l, b);
                    })('script', 'https://api.hypelab.com/v1/scripts/ha-sdk.js?v=0', 'production', '<YOUR_PROPERTY_SLUG>', {});
              `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Toaster
          position="top-center"
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 3000 },
            className: "myToast",
          }}
        />

        <MantineProvider>
          <div className="flex max-lg:hidden w-full">
            <SideBar
              mobileView={false}
              show={true}
              showNotification={showNotification}
            />
            <div className="w-full">
              <Header
                mobileView={false}
                showNotification={showNotification}
                setShowNotification={setShowNotification}
              />
              <div
                className={`w-full pl-[285px] ${
                  // showNotification ? "pt-[130px]" : "pt-[80px]"
                  showNotification ? "pt-[80px]" : "pt-[80px]"
                } -ml-[1px] min-h-screen `}
              >
                {isLanding ? (
                  <div className="px-0 pb-16 pt-0 w-full">
                    {children}
                  </div>
                ) : (
                  <div className="px-4 md:px-8 xl:px-12 2xl:px-[120px] pb-16 pt-8 w-full">
                    {children}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <SideBar
              mobileView={true}
              show={sideBarShow}
              setShow={setSideBarShow}
              showNotification={showNotification}
            />
            <div>
              <div className="w-[100%] h-full">
                <Header
                  mobileView={true}
                  show={sideBarShow}
                  setShow={setSideBarShow}
                  showNotification={showNotification}
                  setShowNotification={setShowNotification}
                />
                <div
                  className={`px-5 ${
                    showNotification ? "pt-[68px]" : "pt-[68px]"
                    // showNotification ? "pt-[160px]" : "pt-[68px]"
                  }`}
                >
                  {children}
                </div>
              </div>
            </div>
          </div>
        </MantineProvider>
              
      </body>
    </>
  );
}