import React, {Dispatch, SetStateAction} from "react";

interface IContext {
  isNavOpen: boolean,
  setIsNavOpen: Dispatch<SetStateAction<boolean>>,
}

const Context = React.createContext<IContext | null>(null);


export default Context;
