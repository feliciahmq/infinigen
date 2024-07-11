"use client"

import { Zap } from "lucide-react";
import { Button } from "./ui/button";

interface SubscriptionButtonProps {
  isPremium: boolean;
};

export const SubscriptionButton = ({
  isPremium = false
}: SubscriptionButtonProps) => {
  return (
    <Button variant={isPremium ? "default" : "gradient"}>
      {isPremium ? "Manage Subscription" : "Upgrade"}
      {!isPremium && <Zap className="w-4 h-4 ml-2 fill-white"/>}
    </Button>
  )
}