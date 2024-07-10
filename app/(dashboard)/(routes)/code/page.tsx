"use client";

import Heading from "@/components/heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { MessageSquare } from "lucide-react";
import { Empty } from "@/components/empty";

const Code = () => {

  return (
    <div>
      <Heading 
        title="Code"
        description="Our AI Code model."
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
                    placeholder="Layout of an ecommerce platform"
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
          <Empty label="No conversation started."/>
        </div>
      </div>
    </div>
  );
}

export default Code;