import React from "react";
import { Button } from "@/components/ui/button";
import { LoopIcon, StopIcon, PlayIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PanelControls = ({ ...props }) => {
  return (
    <div className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="border border-input p-2 rounded-md">
          {props.display}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => {
              props.setDisplay("05:00");
              props.setCounter(5);
            }}
          >
            05:00
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              props.setDisplay("10:00");
              props.setCounter(10);
            }}
          >
            10:00
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              props.setDisplay("15:00");
              props.setCounter(15);
            }}
          >
            15:00
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              props.setDisplay("20:00");
              props.setCounter(20);
            }}
          >
            20:00
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {props.states.isStart ? (
        <Button variant={"outline"} onClick={props.onStart}>
          <StopIcon /> Stop
        </Button>
      ) : (
        <Button variant={"outline"} onClick={props.onStart}>
          <PlayIcon />
          Start
        </Button>
      )}

      {props.states.onLoop ? (
        <Button
          variant={"outline"}
          onClick={props.onLoop}
          size="icon"
          className="bg-green-500/20 dark:bg-green-500/50 hover:bg-green-500 dark:hover:bg-green-500/40"
        >
          <LoopIcon />
        </Button>
      ) : (
        <Button
          variant={"destructive"}
          onClick={props.onLoop}
          size="icon"
          
        >
          <LoopIcon />
        </Button>
      )}
    </div>
  );
};

export default PanelControls;
