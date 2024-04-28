import "./CSS/header.css";
import { HamburgerMenu } from "./design/Header";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/new/logo.png";

const Header = () => {
  const [openNavigation] = useState(false);
  const tickerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
        { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
        { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
        { description: "", proName: "NSE:HDFCBANK" },
        { description: "", proName: "NSE:NIFTY" },
        { description: "", proName: "NSEIX:NIFTY1!" },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "in",
    });

    // Append the script to the target element
    if (tickerRef.current) {
      tickerRef.current.appendChild(script);
    }

    return () => {
      // Clean up: remove the script when the component unmounts
      if (tickerRef.current) {
        tickerRef.current.removeChild(script);
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once after mount
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm p-8 "
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[11rem] xl:mr-8" href="#hero">
          <img src={logo} className="logo" alt="Logo" />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <HamburgerMenu />
        </nav>

        <button className="btn-5">FinChat</button>
      </div>
      <div className="tradingview-widget-container  ">
        <div
          className="tradingview-widget-container__widget"
          ref={tickerRef}
        ></div>
      </div>
    </div>
  );
};

export default Header;
