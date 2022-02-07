import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const usePortal = (component: React.ReactNode) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const navigation = document.getElementById("navigation");

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return isMounted && navigation
    ? createPortal(component, navigation)
    : null;
};

export default usePortal;
