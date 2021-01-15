const botconfig = require('./../../botconfig.json');
const { spawn, exec } = require('child_process');
module.exports = {
    name: "restart",
    group: "fun",
    command: true,
    description: 'Restart bot',
    cooldown: 5,
async run(message) {

  if(![botconfig.owner, '329023088517971969'].includes(message.author.id)) return message.channel.send(`\`Restart\`, what's that?`)
  else
  

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

}};
