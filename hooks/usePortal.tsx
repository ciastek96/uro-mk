import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const usePortal = (component: React.ReactNode) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return isMounted
    ? createPortal(component, document.getElementById("navigation") as Element)
    : null;
};

export default usePortal;
