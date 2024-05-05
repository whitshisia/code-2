import React from "react";

function YourBotArmy({army, onRelease,onDischarge}) {
  //your bot army code here...
const handleRelease = (bot) => {
  onRelease(bot)
}
const handleDischarge = (bot) => {
  onDischarge(bot)
}

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {army.map(bot => (
           <div>key={bot.id} 
           <p>{bot.name }</p>
           <img alt="oh no!" src={bot.avatar_url} />
            <button onClick={() => handleRelease(bot)}>Release</button>
          <button onClick={() => handleDischarge(bot)}>Discharge</button>
          </div>
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
