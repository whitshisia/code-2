import React ,{useState}from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import axios from "axios";

function BotsPage() {
  //start here with your code for step one
  const [army, setArmy] = useState([])

  const enlistBot = (bot) => {
    setArmy([...army,bot])
  }

  const releaseBot = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id))
  }

  const dischargeBot = (bot) => {
    axios.delete(`/bots/${bot.id}`)
    .then(response => {
      console.log('Bot discharged successfully:', response.data);
      setArmy(army.filter(b => b.id !== bot.id));
    })
  }

  return (
    <div>
     <YourBotArmy army={army} onRelease={releaseBot} onDischarge={dischargeBot} />
      <BotCollection onEnlist={enlistBot}/>

    </div>
  )
}

export default BotsPage;
