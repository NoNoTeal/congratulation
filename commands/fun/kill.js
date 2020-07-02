
const botconfig = require(`../../botconfig.json`);

module.exports = {
    name: "kill",
    group: "fun",
    command: true,
    guildOnly: true,
cooldown: 5,
async run(message) {

if(message.member.roles.some(r => botconfig.trustedroles.includes(r.id)) !== true && botconfig.trustedroles !== null && !message.member.hasPermission(['ADMINISTRATOR'])) return message.channel.send(`Hmm, doesn't seem you have the role required to kill.`)
else

var args = message.content.split(' ').slice(1);
var user = message.mentions.members.first() || message.guild.members.get(args[0])

if(!user) return message.channel.send(`You need someone else to kill, please \`ping\` someone or use their \`ID\`!`)
else
var phrases = [
    `${user} fell off a ladder`,
    `${user} fell off some vines`,
    `${user} fell off some weeping vines`,
    `${user} fell off some twisting vines`,
    `${user} fell off a scaffolding`,
    `${user} fell while climbing`,
    `${user} fell from a high place`,
    `${user} was doomed to fall`,
    `${user} was doomed to fall by <@${message.author.id}>`,
    `${user} fell too far and was finished by <@${message.author.id}>`,
    `${user} was struck by lightning`,
    `${user} was struck by lightning whilst fighting <@${message.author.id}>`,
    `${user} went up in flames`,
    `${user} walked into fire whilst fighting <@${message.author.id}>`,
    `${user} burned to death`,
    `${user} was burnt to a crisp whilst fighting <@${message.author.id}>`,
    `${user} tried to swim in lava`,
    `${user} tried to swim in lava to escape <@${message.author.id}>`,
    `${user} discovered the floor was lava`,
    `${user} walked into danger zone due to <@${message.author.id}>`,
    `${user} suffocated in a wall`,
    `${user} suffocated in a wall whilst fighting <@${message.author.id}>`,
    `${user} was squished too much`,
    `${user} was squashed by <@${message.author.id}>`,
    `${user} drowned`,
    `${user} drowned whilst trying to escape <@${message.author.id}>`,
    `${user} starved to death`,
    `${user} starved to death whilst fighting <@${message.author.id}>`,
    `${user} was pricked to death`,
    `${user} walked into a cactus whilst trying to escape <@${message.author.id}>`,
    `${user} died`,
    `${user} died because of <@${message.author.id}>`,
    `${user} blew up`,
    `${user} was blown up by <@${message.author.id}>`,
    `${user} was killed by magic`,
    `${user} was killed by magic whilst trying to escape <@${message.author.id}>`,
    `${user} was killed by even more magic`,
    `${user} withered away`,
    `${user} withered away whilst fighting <@${message.author.id}>`,
    `${user} was squashed by a falling anvil`,
    `${user} was squashed by a falling anvil whilst fighting <@${message.author.id}>`,
    `${user} was squashed by a falling block`,
    `${user} was squashed by a falling block whilst fighting <@${message.author.id}>`,
    `${user} was slain by <@${message.author.id}>`,
    `${user} was slain by <@${message.author.id}>`,
    `${user} was shot by <@${message.author.id}>`,
    `${user} was fireballed by <@${message.author.id}>`,
    `${user} was pummeled by <@${message.author.id}>`,
    `${user} was killed by <@${message.author.id}> using magic`,
    `${user} was killed trying to hurt <@${message.author.id}>`,
    `${user} was killed by %3$s trying to hurt <@${message.author.id}>`,
    `${user} was impaled by <@${message.author.id}>`,
    `${user} hit the ground too hard`,
    `${user} hit the ground too hard whilst trying to escape <@${message.author.id}>`,
    `${user} fell out of the world`,
    `${user} didn't want to live in the same world as <@${message.author.id}>`,
    `${user} was roasted in dragon breath`,
    `${user} was roasted in dragon breath by <@${message.author.id}>`,
    `${user} experienced kinetic energy`,
    `${user} experienced kinetic energy whilst trying to escape <@${message.author.id}>`,
    `${user} went off with a bang`,
    `${user} went off with a bang whilst fighting <@${message.author.id}>`,
    `${user} was killed by <@${message.author.id}>`,
    `${user} was exploded by the bed.`,
    `${user} was killed by [Intentional Game Design].`,
    `${user} was poked to death by a sweet berry bush`,
    `${user} was poked to death by a sweet berry bush whilst trying to escape <@${message.author.id}>`,
    `${user} was stung to death`,
    `${user} was stung to death by <@${message.author.id}>`
]
if(user.id == message.client.user.id) return message.channel.send(`I'm sorry, \`death.js\` wasn't located.`)
else

if(user.id == message.author.id) return message.channel.send(`You can't kill yourself.`)
else

var phrase = phrases[Math.floor(Math.random() * phrases.length)]

message.channel.send(phrase)

}}