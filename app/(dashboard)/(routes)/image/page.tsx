"use client";

import Heading from "@/components/heading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { MessageSquare } from "lucide-react";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";

const Image = () => {
  const isLoading = true;
  
  return (
    <div>
      <Heading 
        title="Image"
        description="Our AI Image model."
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
                    placeholder="A picture of a cat crossing the road"
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
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Image;