const Util = require("../../util/util");

module.exports = {
    name: "hug",
    group: "fun",
    command: true,
    guildOnly: true,
cooldown: 5,
description: 'Hug someone',
async run(message) {

var args = message.content.split(/\s+/).slice(1);
var user = await Util.userParsePlus(message, args, 'member');
if(!user) return message.channel.send(`${message.author} hugged.`)

message.channel.send(`Hey ${user}, ${message.author.tag} just gave you a great big hug! 🤗`)

}}