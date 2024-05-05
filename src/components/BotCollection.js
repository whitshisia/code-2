import axios from "axios";
import React, { useEffect, useState } from "react";
import BotCard from "./BotCard";

function BotCollection({onEnlist}) {
  // Your code here
  const [bots,setBots] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8002/bots')
    .then (r => {
      setBots(r.data)
    });
  },[])
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map(bot => (
          <div>key={bot.id} 
          <BotCard bot={bot} onEnlist={onEnlist} />
          </div>
        ))}
        {/*...and here..*/}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
