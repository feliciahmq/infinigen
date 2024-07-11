import Heading from "@/components/heading";
import { Settings } from "lucide-react";

import { SubscriptionButton } from "@/components/subscriptionButton";

const SettingsPage = () => {
  const isPremium = false;

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPremium ? "You are currently on a Premium plan." : "You are currently on a Free plan."}
        </div>
        <SubscriptionButton isPremium={isPremium}/>
      </div>
    </div>
  )
}

export default SettingsPage;