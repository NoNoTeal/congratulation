

const slaphelper = require(`../../phrases/slaphelper.json`);
const Util = require("../../util/util");

module.exports = {
    name: "slap",
    group: "fun",
    command: true,
    guildOnly: true,
    description: 'Slap someone',
    cooldown: 5,
async run(message) {

    var args = message.content.split(/\s+/).slice(1);
    var user = await Util.userParsePlus(message, args, 'member');
    
    if(!user) return message.channel.send(`You need someone to slap, please \`ping\` someone or use their \`ID\`!`)
    else
    
    if(user.id == message.client.user.id) return message.channel.send(`\`body.js\` wasn't located.`)
    else

var object = slaphelper[Math.floor(Math.random() * slaphelper.length)]

message.channel.send(`\`${message.author.tag}\` is slapping ${user} with ${object}!`)

}}