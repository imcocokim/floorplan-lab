import React from "react";
import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  return ( 
    <div id="floorplan">
    <Bedroom bedNum={1}/>
    <Kitchen />
    <Bath size="Full"/>
    <Bedroom bedNum={2}/>
    <LivingRoom />
    <Bath size="Half"/>
    <Bedroom bedNum={3}/>
    </div>
  );
}

export default FloorPlan;