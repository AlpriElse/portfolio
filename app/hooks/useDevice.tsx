import { useEffect, useState } from "react";

import { BREAKPOINT_MD_PX } from "../constants/Breakpoints";

export enum DeviceType {
  MOBILE,
  DESKTOP,
}

export default function useDevice() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth < BREAKPOINT_MD_PX) {
    return {
      deviceType: DeviceType.MOBILE,
    };
  }

  return {
    deviceType: DeviceType.DESKTOP,
  };
}
