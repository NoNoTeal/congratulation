var Discord = require('discord.js')
var thing = require('discord.js/src/util/Constants')
var botconfig = require('./botconfig.json')
var client = new Discord.Client({
    disableEveryone: true,
    owner: `${botconfig.owner}`,
})
client.commands = new Discord.Collection();
client.cmdDir = new Discord.Collection();
const prefix = botconfig.prefix.toLowerCase()
if(botconfig.mobile == true) {
thing.DefaultOptions.ws.properties.$browser = 'Discord iOS'
}
require("./util/eventhandler")(client)
const pkg = require('./package.json')
const fs = require('fs');
  client.login(botconfig.token)
client.on('guildCreate', async (guild) => {
    if(client.guilds.size > 1) {
     guild.leave()
     throw new Error(`There is a guild limit of 1, just for the server I'm supposed to be in. Leaving guild.`)
  }})

  client.on('ready', async () => {
    if(client.guilds.size > 1) {
     client.destroy()
     throw new Error(`There is a guild limit of 1, just for the server I'm supposed to be in only one. Killing client until I am only in one guild`)
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

function cmdSetup() {
var files = fs.readdirSync('./commands/').filter(n => n !== '.DS_Store')
files.forEach(async (folder) => {
  var cmdfolder = Object.values(require('require-all')(__dirname + `/commands/${folder}`))
  var filename = Object.keys(require('require-all')(__dirname + `/commands/${folder}`))
  for(var key in cmdfolder) {
  if(!cmdfolder[key].name) throw new Error(`Name all commands.`)
  if(!cmdfolder[key].group) throw new Error(`Group command for: ${key.name}`)
  var file = require(`./commands/${folder}/${filename[key]}`)
  if(file.command !== true) continue
  else 

  file.fileName = filename[key]
  file.group = folder

  client.commands.set(file.name, file);
  client.cmdDir.set(file.name, `${folder}/${filename[key]}`)
  }

})}

cmdSetup()
const cooldowns = new Discord.Collection();
client.on('message', async (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/\s+/);
  const commandName = args.shift().toLowerCase();
  if(typeof client.commands.get(commandName) == 'string') return;
  const command = client.commands.get(commandName) 
      || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return message.channel.send(`Invalid command do \`${prefix}help\` to get help.`)
  const cmdfile = client.cmdDir.get(command.name)

  var blacklist = JSON.parse(fs.readFileSync("./commandhelper/blacklist.json", 'utf8'))
  if(Object.keys(blacklist).length) {
    var busers = blacklist.blacklist.users
    for(var buser in busers) {
      if(message.member.id == busers[buser]) return message.channel.send(`You're blacklisted.`)
    }
  } else

    if(command.guildOnly == true) {
      if(message.channel instanceof Discord.DMChannel) {
    return message.channel.send(`Do this in a guild.`);
      }
    }


    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Discord.Collection());
    }
  
  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;
  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
  
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.channel.send(`Wait \`${timeLeft.toFixed(1)}\` before doing the \`${botconfig.prefix}${command.name}\` command again.`).then(m => {m.delete({timeout: 10000})})
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
try {
  delete require.cache[require.resolve(`./commands/${cmdfile}.js`)]
  var nCMD = require(`./commands/${cmdfile}.js`)
  client.commands.set(nCMD.name, nCMD)
  nCMD.run(message)
} catch (error) {
	console.error(error);
  message.react(`⚠️`)
}
})