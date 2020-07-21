var {MessageEmbed} = require('discord.js');
var rq = new MessageEmbed()
.setColor(0xFF0000)
.setTimestamp()
.setTitle(`Request @ here`)
.setDescription(`[Google Forms](https://docs.google.com/forms/d/e/1FAIpQLSc8uzcKGZ6tI7TYzlQLi5gAfhw_wUsWc9gIY-YXN8MQK3Seow/viewform)`)
module.exports = {
    name: "fr",
    group: "fun",
    command: true,
    cooldown: 5,
description: 'Send in a feature request.',
async run(message) {

message.channel.send(rq)
}}
