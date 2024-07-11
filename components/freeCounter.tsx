"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";

import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { usePremiumUpgrade } from "@/hooks/usePremiumUpgrade";

interface FreeCounterProps {
  apiLimitCount: number;
};

export const FreeCounter = ({
  apiLimitCount = 0
}: FreeCounterProps) => {
  const premiumUpgrade = usePremiumUpgrade();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const MAX_FREE_COUNTS = 5;

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>
            <Progress 
              className="h-3"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button onClick={premiumUpgrade.onOpen} className="w-full" variant="gradient">
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white"/>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}