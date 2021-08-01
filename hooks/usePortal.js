import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const usePortal = (component) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return isMounted
    ? createPortal(component, document.getElementById("navigation"))
    : null;
};

export default usePortal;
