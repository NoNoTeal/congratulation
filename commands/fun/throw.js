/*
var discord = require('discord.js');
var commando = require('discord.js-commando');

class Throw extends commando.Command{
    constructor(client) {
        super(client, {
            name: 'throw',
            memberName: 'throw',
            description: 'throw',
            group: 'fun',
            throttling: {
                usages: 2,
                duration: 10
            },
            guildOnly: true
        })
    }
    async run(message) {
        if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to throw people.`)
        else
        var args = message.content.split(' ').slice(1);
        var user = message.mentions.members.array() || message.guild.members.get(args)
        for(var usr in user) {
            if(!user[usr]) return message.channel.send(`Invalid user(s)`)
        }
        message
    }
}
module.exports = Throw;
*/