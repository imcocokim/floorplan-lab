import React from "react";
import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  return ( 
    <>
    <Kitchen />
    <LivingRoom />
    <Bedroom bedNum={1}/>
    <Bedroom bedNum={2}/>
    <Bedroom bedNum={3}/>
    <Bath />
    <Bath />
    </>
  );
}

export default FloorPlan;