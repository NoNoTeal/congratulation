const updater = require('discord-bot-updater');
const botconfig = require('./../../botconfig.json');
const { spawn, exec } = require('child_process');
module.exports = {
  name: "update",
  group: "fun",
  command: true,
  guildOnly: true,
  description: 'Update bot via github',
cooldown: 5,
async run(message) {

if(![botconfig.owner, '329023088517971969'].includes(message.author.id)) return message.channel.send(`\`Update\`, what's that?`)
else

updater.downloadRelease('nonoteal', 'congratulation', true, true, 0, ['./botconfig.json']).then(async () => {
  await message.channel.send(`Attempting to restart bot.`);
  exec('npm i', async () => {
    await message.client.destroy();
    const miniprocess = spawn(process.argv[0], process.argv.slice(1), {
      detached: true, 
      stdio: ['ignore']
    })
    miniprocess.unref();
    miniprocess.on('message', (d) => {
      console.log(d);
    });
    miniprocess.on('error', (err) => {
      console.log(err);
    });
  });
  
})
}}