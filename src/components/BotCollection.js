import React from "react";
import BotCard from "./BotCard";

function BotCollection({bot, addBot}) {
  // Your code here
  const allBots= bot.map((bo)=>{
      return <BotCard key={bo.id} bot={bo} clickEvent={addBot}/>
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        
        Collection of all bots
        {allBots}
      </div>
    </div>
  );
}

export default BotCollection;