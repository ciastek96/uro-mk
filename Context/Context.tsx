import React, {Dispatch, SetStateAction, useContext} from "react";

interface IContext {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}


const initialValue = {
  isNavOpen: false,
  setIsNavOpen: () => {}
};



// const Context = React.createContext<IContext>(initialValue);
// const Context = React.createContext<IContext | null>(null);

// export default Context;

const Context = React.createContext<IContext>(initialValue);
export default Context;
// export const useTheme = () => useContext(Context);
