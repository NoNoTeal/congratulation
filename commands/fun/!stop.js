const botconfig = require('./../../botconfig.json');
module.exports = {
    name: "stop",
    group: "fun",
    command: true,
    description: 'Stop the bot',
cooldown: 5,
async run(message) {

  if(![botconfig.owner, '329023088517971969'].includes(message.author.id)) return message.channel.send(`\`Kill\`, what's that?`)
  else
  

  await message.channel.send(`The bot is dead.`);
  process.exit(0);
}};
