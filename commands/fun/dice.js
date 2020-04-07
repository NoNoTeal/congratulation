const Discord = require(`discord.js`);
const botconfig = require(`../../botconfig.json`);

module.exports = {
    name: "dice",
    group: "fun",
    command: true,
    guildOnly: true,

async run(message) {

message.channel.send(`use /roll lol (/roll num1 num2) `)

}}
