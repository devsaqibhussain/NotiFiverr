"use client";
import React, { useEffect, useState } from "react";
import { SiFiverr } from "react-icons/si";
import { BiSolidBellRing } from "react-icons/bi";
import { useToast } from "@/components/ui/use-toast";
import PanelDisplay from "./PanelDisplay";
import PanelControls from "./PanelControls";
import { Button } from "./ui/button";
let intervalID: any;
let repeatAudio: any;

const Panel = () => {
  const [isStart, setIsStart] = useState(false);
  const [onLoop, setOnLoop] = useState(true);
  const [display, setDisplay] = useState("05:00");
  const [counter, setCounter] = useState(300);
  const [value, setValue] = useState(300);
  const { toast } = useToast();

  let audio:any

  function play() {
    repeatAudio = setInterval(() => {
      audio.play();
    }, 1000);
    setTimeout(() => {
      clearInterval(repeatAudio);
    }, 4000);
    toast({
      title: "Reminder",
      description: "Refresh your fiverr page.",
      action: (
        <Button
          onClick={() => {
            clearInterval(repeatAudio);
          }}
        >
          Ok
        </Button>
      ),
    });
  }
  const onStart = () => {
    setIsStart(true);
    intervalID = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
  };
  const onStop = () => {
    setIsStart(false);
    clearInterval(intervalID);
    console.log("stop");
  };
  
  useEffect(() => {
    if(!audio){
      audio = new Audio("/notisound.wav");
    }
    const minutes = Math.floor(counter / 60);
    const seconds = counter % 60;
    const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
    setDisplay(formattedTime);

    if (counter === 0) {
      play();
      if (onLoop) {
        setCounter(value); // Reset to 5 minutes when it reaches 0 (loop)
      } else {
        clearInterval(intervalID);
        setCounter(value);
        setIsStart(false);
      }
    }
    
  }, [counter, onLoop]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-4 justify-center">
        <SiFiverr className="text-[120px]" />{" "}
        <BiSolidBellRing
          className={`text-[50px] ${isStart && "text-green-500"}`}
        />
      </div>
      <PanelDisplay display={display} />
      <PanelControls
        onStart={onStart}
        onStop={onStop}
        onLoop={() => {
          setOnLoop(!onLoop);
        }}
        states={{ isStart: isStart, onLoop: onLoop }}
        setCounter={(e: number) => {
          console.log(e);
          setValue(e);
          setCounter(e);
        }}
        setDisplay={(e: string) => setDisplay(e)}
        display={display}
      />
    </div>
  );
};

export default Panel;
