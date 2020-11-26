const Discord = require("discord.js");
const Util = require("../../util/util");


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

  const user = await Util.userParsePlus(message, args, 'member');
if(!user) return message.channel.send(`Invalid user!`)
else
if(user.id === message.client.user.id) return message.channel.send(`You can't ban me.`)
else

if(!banReason.length > 466) return message.channel.send(`Please make your ban reason shorter. Limit is \`466\` characters`)
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