
var botconfig = require('./../../botconfig.json')

module.exports = {
    name: "throw",
    group: "fun",
    command: true,
    guildOnly: true,
    description: 'Throw someone',
    cooldown: 5,
    async run(message) {
        var args = message.content.split(/\s+/).slice(1);
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        
        if(!user) return message.channel.send(`You need someone to throw, please \`ping\` someone or use their \`ID\`!`)
        else
        var responses = [
            `${message.author} throws ${user}.`,
            `${message.author} failed to throw ${user}.`
        ]
        var response = responses[Math.floor(Math.random() * responses.length)]
        message.channel.send(response)
    }
}