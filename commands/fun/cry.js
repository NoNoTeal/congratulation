const Discord = require("discord.js");
const Util = require("../../util/util");
module.exports = {
    name: "cry",
    group: "fun",
    command: true,
    guildOnly: true,
    description: 'Cry on someone(?)',
cooldown: 5,
async run(message) {

  var args = message.content.split(/ +/).slice(1);  

  const user = await Util.userParsePlus(message, args, 'member');
  if(user) {
    if(user.id == message.author.id) return message.channel.send(`You can't cry on yourself.`)
    else message.channel.send(`${message.author} cries on \`${user.user.tag}\`.`);
  } else message.channel.send(`${message.author} cries.`);
    
}}