"use client";

import { useEffect, useState } from "react";
import { PremiumUpgrade } from "./premiumUpgrade";

export const UpgradeProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PremiumUpgrade />
    </>
  )
}