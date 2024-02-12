import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

function App() {
  const [allBots, setAllBots] = useState([]);
  const [userArmy, setUserArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3008/bots')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setAllBots(data);
      })
      .catch(error => {
        console.error('Error fetching bots:', error);
      });
  }, []);

  const enlistBot = (bot) => {
    if (!userArmy.some(enlistedBot => enlistedBot.id === bot.id)) setUserArmy([...userArmy, bot]);
  };

  const dischargeFromArmy = (botId) => {
    setUserArmy(prevUserArmy => prevUserArmy.filter(bot => bot.id !== botId));
  };
 
  const deleteBot = (botId) => {
    fetch(`http://localhost:3007/bots/${botId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete bot from backend');
      }
      return response.json();
    })
    .then(data => {
      console.log('Bot deleted successfully:', data);
    
      setUserArmy(prevUserArmy => prevUserArmy.filter(bot => bot.id !== botId));
    })
    .catch(error => {
      console.error('Error deleting bot:', error);
    });
  };
  
  
  

  return (
    <div className="App">
      <h1>Welcome to Bot Battlr</h1>
      <div className="container">
        <div className="main-content">
          <BotCollection bots={allBots} enlistBot={enlistBot} deleteBot={deleteBot} />
        </div>
        <div className="side-content">
          <YourBotArmy userArmy={userArmy} dischargeFromArmy={dischargeFromArmy} deleteBot={deleteBot} />
        </div>
      </div>
    </div>
  );
}

export default App;
