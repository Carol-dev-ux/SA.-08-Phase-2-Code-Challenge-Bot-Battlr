import React from 'react';

const BotCollection = ({ bots, enlistBot, deleteBot }) => {
  const handleEnlistClick = (bot) => {
    enlistBot(bot);
  };

  const handleDeleteClick = (botId) => {
    deleteBot(botId);
  };

  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bot-list">
        {bots.map(bot => (
          <div className="bot-card" key={bot.id} onClick={() => handleEnlistClick(bot)}>
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt={bot.name} />
            <p>id: {bot.id}</p>
            <p>health: {bot.health}</p>
            <p>damage: {bot.damage}</p>
            <p>armor: {bot.armor}</p>
            <p>bot_class: {bot.bot_class}</p>
            <p>catchphrase: {bot.catchphrase}</p>
            <button className="delete-button" onClick={(e) => {e.stopPropagation(); handleDeleteClick(bot.id);}}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotCollection;



