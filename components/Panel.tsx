"use client"
import React, {useState} from 'react'
import { SiFiverr } from 'react-icons/si'
import { BiSolidBellRing } from 'react-icons/bi'
import PanelDisplay from './PanelDisplay'
import PanelControls from './PanelControls'

const Panel = () => {
    const [isStart, setIsStart] = useState(false)
    const [onLoop, setOnLoop] = useState(true)
    const [display, setDisplay] = useState("05:00")
    const [counter, setCounter] = useState(5)
    
  return (
    <div className='flex flex-col items-center'>
      <div className="flex items-center gap-4 justify-center">
        <SiFiverr className="text-[120px]" />{" "}
        <BiSolidBellRing className={`text-[50px] ${isStart && "text-green-500"}`} />
      </div>
        <PanelDisplay display={display}/>
        <PanelControls onStart={()=>{setIsStart(!isStart)}} onLoop={()=>{setOnLoop(!onLoop)}} states={{isStart: isStart, onLoop: onLoop}} setCounter={(e:number)=>setCounter(e)} setDisplay={(e:string)=>setDisplay(e)} display={display}/>
    </div>
  );
};

export default Panel;
