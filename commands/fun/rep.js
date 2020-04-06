const Discord = require(`discord.js`);
const botconfig = require(`../../botconfig.json`);
const fs = require("fs");

module.exports = {
    name: "poke",
    group: "fun",
    command: true,
    guildOnly: true,
    cooldown: 86400,
async run(message) {

    let replist = JSON.parse(fs.readFileSync("./commandhelper/rep.json", "utf8"))

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to rep.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need someone to give a rep to, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.client.user.id) return message.channel.send(`I don't need rep.`)
else

if(user.id == message.author.id) return message.channel.send(`You can't rep yourself.`)
else
var stars = [
    `🌟`,
    `⭐`,
    `✨`,
    `💫`,
    `☄️`
]
var star = stars[Math.floor(Math.random() * stars.length)]

if(!replist[user.id]) replist[user.id] = {
    count: 0,
    lastcount: 0,
    prevrep: message.author.id,
}


replist[user.id].count++;
replist[user.id].prevrep = message.author.id
replist[user.id].lastcount = replist[user.id].count

fs.writeFile("./commandhelper/rep.json", JSON.stringify(replist, null, `\t`),(err) => {
    if(err) console.log(err);
});

message.channel.send(`<@${user.id}>, \`${message.author.tag}\` has decided to rep you! They gave a ${star}.`)

}}