const Discord = require("discord.js");


module.exports = {
    name: "ban",
    group: "fun",
    command: true,
    guildOnly: true,
    description: 'ban someone',
cooldown: 5,
async run(message) {

  var args = message.content.split(/ +/).slice(1);
  let banReason = args.slice(1).join(' ');  

  const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!user) return message.channel.send(`Invalid user!`).then(msg => {msg.delete(10000)}).then(message.delete(10)).catch(error => console.log(error));
else
if(user.id === message.client.user.id) return message.channel.send(`You can't ban me.`).then(msg => {msg.delete(10000)}).then(message.delete(10)).catch(error => console.log(error));
else

if(!banReason.length > 466) return message.channel.send(`Please make your ban reason shorter. Limit is \`466\` characters`).then(msg => {msg.delete(10000)}).then(message.delete(10)).catch(error => console.log(error));
else

if(!banReason.length) {
    banReason = `*No Reason Provided*`
}

var embed = new Discord.MessageEmbed()
.setTitle(`New Banned User`)
.addField(`Moderator`, message.author)
.addField(`Banned User`, user)
.addField(`Reason`, banReason)
.setColor(0xff0000)
.setTimestamp()
message.channel.send(embed)

    
}}