const Discord = require(`discord.js`);
const Commando = require(`discord.js-commando`);
const botconfig = require(`../../botconfig.json`);

class kill extends Commando.Command{
    constructor(client) {
        super(client, {
            name: 'kill',
            group: 'fun',
            memberName: 'kill',
            description: 'it\'s not as bad as it sounds.',
            throttling:{
                usages: 2,
                duration: 10
            }
        })
    }
async run(message) {
if(message.author.bot) return message.channel.send(`I'm sorry, but two bots killing each other are NOT a thing! (They are but for me, no...)`)
else
if(message.channel instanceof Discord.DMChannel) return message.channel.send(`Who are you going to kill in a DM channel?!`)
else

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to kill.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need someone else to kill, please \`ping\` someone or use their \`ID\`!`)
else
var phrases = [
`<@${user.id}> fell off a ladder`,
`<@${user.id}> fell off some vines`,
`<@${user.id}> fell out of the water`,
`<@${user.id}> fell from a high place`,
`<@${user.id}> was doomed to fall`,
`<@${user.id}> was doomed to fall by \`${message.author.tag}\``,
`<@${user.id}> fell too far and was finished by \`${message.author.tag}\``,
`<@${user.id}> was struck by lightning`,
`<@${user.id}> went up in flames`,
`<@${user.id}> walked into fire whilst fighting \`${message.author.tag}\``,
`<@${user.id}> burned to death`,
`<@${user.id}> was burnt to a crisp whilst fighting \`${message.author.tag}\``,
`<@${user.id}> tried to swim in lava`,
`<@${user.id}> tried to swim in lava to escape \`${message.author.tag}\``,
`<@${user.id}> discovered floor was lava`,
`<@${user.id}> walked into danger zone due to \`${message.author.tag}\``,
`<@${user.id}> suffocated in a wall`,
`<@${user.id}> was squished too much`,
`<@${user.id}> drowned`,
`<@${user.id}> drowned whilst trying to escape \`${message.author.tag}\``,
`<@${user.id}> starved to death`,
`<@${user.id}> was pricked to death`,
`<@${user.id}> walked into a cactus whilst trying to escape \`${message.author.tag}\``,
`<@${user.id}> died`,
`<@${user.id}> blew up`,
`<@${user.id}> was blown up by \`${message.author.tag}\``,
`<@${user.id}> was killed by magic`,
`<@${user.id}> withered away`,
`<@${user.id}> was squashed by a falling anvil`,
`<@${user.id}> was squashed by a falling block`,
`<@${user.id}> was slain by \`${message.author.tag}\``,
`<@${user.id}> was shot by \`${message.author.tag}\``,
`<@${user.id}> was fireballed by \`${message.author.tag}\``,
`<@${user.id}> was pummeled by \`${message.author.tag}\``,
`<@${user.id}> was killed by \`${message.author.tag}\` using magic`,
`<@${user.id}> was killed trying to hurt \`${message.author.tag}\``,
`<@${user.id}> hit the ground too hard`,
`<@${user.id}> fell out of the world`,
`<@${user.id}> was roasted in dragon breath`,
`<@${user.id}> experienced kinetic energy`,
`<@${user.id}> went off with a bang`
]
if(user.id == message.client.user.id) return message.channel.send(`I'm sorry, \`death.js\` wasn't located.`)
else

if(user.id == message.author.id) return message.channel.send(`You can't kill yourself.`)
else

var phrase = phrases[Math.floor(Math.random() * phrases.length)]

message.channel.send(phrase)

}}

module.exports = kill;