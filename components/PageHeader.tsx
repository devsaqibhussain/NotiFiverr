import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
const PageHeader = () => {
  return (
    <div className="flex justify-between items-center shadow-md rounded-md p-2">
      <Link
        href={"https://devsaqib.vercel.app/"}
        target="_blank"
        className="font-semibold"
      >
        Dev Saqib
      </Link>
      <div className="flex gap-2">
        <Link href={"https://github.com/devsaqibhussain"} target="_blank">
          <Button variant={"outline"} size={"icon"}>
            <GitHubLogoIcon />
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default PageHeader;
