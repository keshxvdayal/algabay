const widgetConfig = {
  symbols: [
    {
      proName: "FOREXCOM:SPXUSD",
      title: "S&P 500 Index",
    },
    {
      proName: "FOREXCOM:NSXUSD",
      title: "US 100 Cash CFD",
    },
    {
      proName: "FX_IDC:EURUSD",
      title: "EUR to USD",
    },
    {
      description: "",
      proName: "NSE:HDFCBANK",
    },
    {
      description: "",
      proName: "NSE:NIFTY",
    },
    {
      description: "",
      proName: "NSEIX:NIFTY1!",
    },
  ],
  showSymbolLogo: true,
  isTransparent: false,
  displayMode: "adaptive",
  colorTheme: "dark",
  locale: "in",
};

// Export the widget configuration object
export default widgetConfig;
