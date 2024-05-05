import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import SortBar from "../components/sortBar";
function BotsPage() {
  //start here with your code for step one
  const[bots, setBots]= useState([])

  function addBot(newBot){
    setBots(bots.map((bo)=> (bo.id=== newBot.id ? {...bo,army:true} :bo)))
  }
  function removeBot(bot){
    setBots(bots.map((bo)=> (bo.id=== bot.id ? {...bo,army:false} :bo)))
  }
  function handleSort(criteria) {
    const sortedBots = [...bots].sort((a, b) => b[criteria] - a[criteria]);
    setBots(sortedBots);
  }
  useEffect(()=>{
    fetch("http://localhost:8002/bots")
    .then((res) => res.json())
    .then((data) => setBots(data))
  }, [])


  //delete
  function deleteBot(bot){
   fetch(`http://localhost:8002/bots/${bot.id}`, {
    method:"DELETE"
   })
   .then(res=>res.json())
   .then(()=>{
    const remainingBots=bots.filter((bo)=> bo.id !== bot.id );
    setBots(remainingBots)
   })
  
  
    }
  return (
    <div>
      <SortBar onSort={handleSort}/>
      <YourBotArmy bots={bots.filter((bo)=>(bo.army))}
      removeBot={removeBot}
      deleteBot={deleteBot}
      />
      <BotCollection bot={bots} addBot={addBot}/>
     
    </div>
  )
}

export default BotsPage;