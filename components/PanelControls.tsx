"use client"
import React, {useState} from "react";
import { Button } from "@/components/ui/button";
import { LoopIcon, StopIcon, PlayIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const PanelControls = ({ ...props }) => {
  const [active,setActive] = useState("05:00")
  return (
    <div className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="border border-input p-2 rounded-md">
          {active}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => {
              props.setDisplay("05:00");
              props.setCounter(300);
              setActive("05:00")
            }}
          >
            05:00
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              props.setDisplay("10:00");
              props.setCounter(600);
              setActive("10:00")
            }}
          >
            10:00
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              props.setDisplay("15:00");
              props.setCounter(900);
              setActive("15:00")
            }}
          >
            15:00
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              props.setDisplay("20:00");
              props.setCounter(1200);
              setActive("20:00")
            }}
          >
            20:00
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {props.states.isStart ? (
        <Button variant={"outline"} onClick={props.onStop}>
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
          className="bg-green-500 dark:bg-green-500/50 hover:bg-green-400 dark:hover:bg-green-500/40"
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
