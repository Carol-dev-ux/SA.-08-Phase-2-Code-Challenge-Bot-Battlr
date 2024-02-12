const YourBotArmy = ({ userArmy, dischargeFromArmy, deleteBot }) => {
  const handleReleaseClick = (botId) => {
    // Ensure dischargeFromArmy is correctly invoked
    dischargeFromArmy(botId);
    deleteBot(botId);
  };

  return (
    <div className="bot-collection">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {userArmy.map(bot => (
          <div className="bot-card" key={bot.id} onClick={() => handleReleaseClick(bot.id)}>
            <h3>{bot.name}</h3>
            <img src={bot.avatar_url} alt={bot.name} />
            <p>id: {bot.id}</p>
            <p>health: {bot.health}</p>
            <p>damage: {bot.damage}</p>
            <p>armor: {bot.armor}</p>
            <p>bot_class: {bot.bot_class}</p>
            <p>catchphrase: {bot.catchphrase}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default YourBotArmy;
