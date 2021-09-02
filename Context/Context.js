import React from "react";

const Context = React.createContext({
  isNavOpen: false,
  setIsNavOpen: () => {},
});

export default Context;
