var Discord = require('discord.js')
var thing = require('discord.js/src/util/Constants')
var Commando = require('discord.js-commando')
var botconfig = require('./botconfig.json')
var client = new Commando.Client({
    disableEveryone: true,
    owner: `${botconfig.owner}`,
    unknownCommandResponse: false,
    commandPrefix: `${botconfig.prefix}`
})
if(botconfig.mobile == true) {
thing.DefaultOptions.ws.properties.$browser = 'Discord iOS'
}
require("./util/eventhandler")(client)
client.registry.registerGroup('fun', 'Fun');
client.registry.registerGroup('util','Util');
client.registry.registerDefaultTypes()
client.registry.registerDefaultGroups();
client.registry.registerDefaultCommands({
  help: false,
  prefix: true,
  eval_: true,
  ping: true
});
const pkg = require('./package.json')
const emojis = require('./commandhelper/emojis.json')
const fs = require('fs');
client.registry.registerCommandsIn(__dirname + "/commands");
  client.login(botconfig.token)
client.on('guildCreate', async (guild) => {
    if(client.guilds.size > 1) {
     guild.leave()
     throw new Error(`There is a guild limit of 1, just for the server I'm supposed to be in. Leaving guild.`)
  }})
  
  client.on('ready', async () => {
    if(botconfig.prefix.length >= 5) {
    client.destroy()
     throw new Error(`Prefix too long, shutting bot down.`)
  }else return})

    
  client.on('ready', async () => {
    if(!client.guilds.get(botconfig.server)) {
    client.destroy()
     throw new Error(`Can't find the guild ID I was provided with! Shutting bot down.`)
  }else return})

  client.on('message', async (msg) => {
    if(msg.content !== `${botconfig.prefix}version`) return
    else
    msg.delete()
    client.user.setPresence({activity: { name: `Version ${pkg.version}`}})
  })

  client.on('message', async (msg) => {
    if(msg.author.bot) return
    else
    if(!msg.content.includes(`@someone`)) return
    else
    if(msg.channel instanceof Discord.DMChannel) return
    else
    var content = msg.content
    let count = (content.match(/\@someone+/g) || []).length;
    console.log(count)
    if(count > 6 ) return
    else
    while (count > 0) {
      count--
      msg.channel.send(`\`${msg.guild.members.random().user.tag}\``)
    }
  
  })

  client.on('ready', async () => {
    
    if(!botconfig.server) return
    if(!client.guilds.get(botconfig.server).channels.get(botconfig.reactionarychannel)) return
    else
var c = client.guilds.get(botconfig.server).channels.get(botconfig.reactionarychannel)
    setInterval(async () => {
      let gamer = JSON.parse(fs.readFileSync("./commandhelper/reactionary.json", "utf8"))

      let shuffled = emojis.sort(() => 0.5 - Math.random());
      let selected = shuffled.slice(0, 5);
      let correct = selected[Math.floor(Math.random() * selected.length)]

      var game = await c.send(`React with one of these 5 emotes: ${selected.join(`, `)}`)
      if(!gamer.globalgame) gamer.globalgame = 0
      else
      
      gamer.globalgame++;
      fs.writeFile("./commandhelper/reactionary.json", JSON.stringify(gamer, null, `\t`),(err) => {
        if(err) console.log(err);
    });
      var filter = (reaction) => reaction.emoji.name === correct
      var collecter = await game.createReactionCollector(filter, { time: 60000 })



      collecter.on('collect', async(r) => {
        c.send(`It seems <@${r.users.first().id}> has won! (Correct emote: ${correct})`)

        if(!gamer[r.users.first().id]) gamer[r.users.first().id] = 0
        else
        gamer[r.users.first().id]++;
        fs.writeFile("./commandhelper/reactionary.json", JSON.stringify(gamer, null, `\t`),(err) => {
          if(err) console.log(err);
      });
        collecter.stop()

    })
      collecter.on('end', () => {
        game.edit(`~~React with one of these 5 emotes: ${selected.join(`, `)}, ~~Correct Emoji: ${correct}.`)
        setTimeout(() => {
          if(game.deleted !== false) return
          else
          game.delete()
        }, 120000);
      })
    }, 3.6e+6);
  })