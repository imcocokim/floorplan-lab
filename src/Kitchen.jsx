import React from "react";
import Oven from "./Oven";
import Sink from "./Sink";

const Kitchen = () => {
  return ( 
    <div id="kitchen">
      <h1>Kitchen</h1>
      <Oven />
      <Sink />
    </div>
  );
}

export default Kitchen;