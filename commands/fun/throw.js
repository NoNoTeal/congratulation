
var botconfig = require('./../../botconfig.json')

module.exports = {
    name: "throw",
    group: "fun",
    command: true,
    guildOnly: true,
    description: 'Throw someone',
    cooldown: 5,
    async run(message) {
        if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to throw people.`)
        else
        var args = message.content.split(/\s+/).slice(1).join(' ')
        var useray = args.split(' | ').shift()
        var regex = /\d+/g
        var users = useray.match(regex)
        var c = []
        for(var user in users) {
            if(!message.guild.members.get(users[user])) continue
            if(users[user] == message.member.id) continue
            if(users[user] == message.guild.me.id) continue
            if(c.includes(`<@!${users[user]}>`) == true) continue
            c.push(`<@!${users[user]}>`)
        }  
        if(c.length > 10) {c.slice(0, 10)}
        if(c.length == 0) return message.channel.send(`${message.author} throws an Error`)
        var responses = [
            `${message.author} throws ${c.join(', ')}.`,
            `${message.author} failed to throw.`
        ]
        var response = responses[Math.floor(Math.random() * responses.length)]
        message.channel.send(response)
    }
}