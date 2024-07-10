"use client";

import Heading from "@/components/heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { MessageSquare } from "lucide-react";
import { Empty } from "@/components/empty";
import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import { BotAvatar } from "@/components/bot-avatar";

interface Message {
  content: string;
  role: "user" | "system";
}

const Conversation = () => {
  const isLoading = false;
  const messages: Message[] = [
    { content: "What is the radius of the sun?", role: "user" },
    { content: "The radius of the Sun is approximately 696,340 kilometers (432,685 miles).", role: "system" },
    { content: "What is the radius of the moon?", role: "user" },
    { content: "The radius of the Moon is approximately 1,737.4 kilometers (1,079.6 miles).", role: "system" },
    { content: "Thank you.", role: "user" },
    { content: "You're welcome! If you have any more questions, feel free to ask.", role: "system" }
  ];

  return (
    <div>
      <Heading 
        title="Conversation"
        description="Our AI Conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-4">
        <div>
          <div>
            <div
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <div className="col-span-12 lg:col-span-10">
                <div className="m-0 p-0">
                  <Input 
                    className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    placeholder="Message InfiniGen"
                  />
                </div>
              </div>
              <Button className="col-span-12 lg:col-span-2 w-full" type="submit">
                Generate
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-4 mt-4">
          {messages.length === 0 && !isLoading && (
              <Empty label="No conversation started."/>
            )}
            <div className="flex flex-col gap-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn("p-8 w-full flex items-start gap-x-8 rounded-lg", 
                    message.role === "user" ? "bg-white border border-black/10" : "bg-muted"
                  )}
                >
                  {message.role === "user" ? <UserAvatar /> : <BotAvatar /> }
                  <p className="text-sm">
                    {message.content}
                  </p>
                </div>
              ))} 
            </div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;