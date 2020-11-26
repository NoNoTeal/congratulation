const fighthelper = require(`../../phrases/fighthelper.json`);
const Util = require("../../util/util");

module.exports = {
    name: "fight",
    group: "fun",
    command: true,
    guildOnly: true,
cooldown: 5,
description: 'Fight a person',
async run(message) {

    var args = message.content.split(/\s+/).slice(1);
    let user = await Util.userParsePlus(message, args, 'member');
    
    if(!user) return message.channel.send(`You need to fight someone, please \`ping\` someone or use their \`ID\`!`)
    else
if(user.id === message.client.user.id) return message.channel.send(`You cannot fight me.`)
if(user.id === message.author.id) return message.channel.send(`${message.author} fought themselves in confusion.`)

var good = fighthelper.good[Math.floor(Math.random() * fighthelper.good.length)] 
var fail = fighthelper.fail[Math.floor(Math.random() * fighthelper.fail.length)] 

var phrases = [
    `${user} is getting hit by \`${message.author.tag}\` with ${good}.`,
    `\`${message.author.tag}\` tried to fight ${user} with ${fail} but it wasn't that good..`,
]

var phrase = phrases[Math.floor(Math.random() * phrases.length)]

message.channel.send(phrase)

}}
