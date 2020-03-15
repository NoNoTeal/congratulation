const Discord = require("discord.js");
const Commando = require("discord.js-commando");
const botconfig = require(`../../botconfig.json`);

class ban extends Commando.Command
{
    constructor(client) {
        super(client, {
            name: "ban",
            group: "fun",
            memberName: "ban",
            description: "ban",
            throttling: {
                usages: 2,
                duration: 10
            },
        })
    }
async run(message) {

    if(message.author.bot) return
    else
  if (message.channel instanceof Discord.DMChannel) return 
  else

  var args = message.content.split(/ +/).slice(1);
  let banReason = args.slice(1).join(' ');  

  const user = message.mentions.members.first() || message.guild.members.get(args[0])
  if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to ban.`)
else
if(!user) return message.channel.send(`Invalid user!`).then(msg => {msg.delete(10000)}).then(message.delete(10)).catch(error => console.log(error));
else
if(user.id === message.client.user.id) return message.channel.send(`You can't ban me.`).then(msg => {msg.delete(10000)}).then(message.delete(10)).catch(error => console.log(error));
else

if(!banReason.length > 466) return message.channel.send(`Please make your ban reason shorter. Limit is \`466\` characters`).then(msg => {msg.delete(10000)}).then(message.delete(10)).catch(error => console.log(error));
else

if(!banReason.length) {
    banReason = `*No Reason Provided*`
}

var embed = new Discord.RichEmbed()
.setTitle(`New Banned User`)
.addField(`Moderator`, message.author)
.addField(`Banned User`, user)
.addField(`Reason`, banReason)
.setColor(0xff0000)
.setTimestamp()
message.channel.send(embed)

    
}}
module.exports = ban;