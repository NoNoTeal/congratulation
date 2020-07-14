
const fliphelper = require(`../../phrases/fliphelper.json`)

module.exports = {
    name: "flip",
    description: 'flip someone or flip someone off',
    group: "fun",
    command: true,
    guildOnly: true,
cooldown: 5,
async run(message) {

var args = message.content.split(/\s+/).slice(1);
var user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

if(!user) return message.channel.send(`You need someone to flip, please \`ping\` someone or use their \`ID\`!`)
else

if(user.id == message.client.user.id) return message.channel.send(`I'm sorry, but I'm not a physical object to flip.`)
else

if(user.id == message.author.id) return message.channel.send(`You can't flip yourself.`)
else

var good = fliphelper.good[Math.floor(Math.random() * fliphelper.good.length)]
var bad = fliphelper.fail[Math.floor(Math.random() * fliphelper.fail.length)]


var phrases = [
    `\`${message.author.tag}\` flipped <@${user.id}> into a pile of ${good}!`,
    `<@${user.id}> was almost flipped by \`${message.author.tag}\` with ${bad}!`,
    `\`${message.author.tag}\` flipped <@${user.id}> into a pile of ${good}!`,
    `<@${user.id}> was almost flipped by \`${message.author.tag}\` with ${bad}!`,
    `\`${message.author.tag}\` flipped <@${user.id}> into a pile of ${good}!`,
    `<@${user.id}> was almost flipped by \`${message.author.tag}\` with ${bad}!`,
    `\`${message.author.tag}\` flipped <@${user.id}> into a pile of ${good}!`,
    `<@${user.id}> was almost flipped by \`${message.author.tag}\` with ${bad}!`,
    `\`${message.author.tag}\` flipped <@${user.id}> into a pile of ${good}!`,
    `<@${user.id}> was almost flipped by \`${message.author.tag}\` with ${bad}!`,
    `\`${message.author.tag}\` flipped <@${user.id}> into a pile of ${good}!`,
    `<@${user.id}> was almost flipped by \`${message.author.tag}\` with ${bad}!`,
    `\`${message.author.tag}\` flipped <@${user.id}> into a pile of ${good}!`,
    `<@${user.id}> was almost flipped by \`${message.author.tag}\` with ${bad}!`,
    `<@${user.id}> was flipped off by \`${message.author.tag}\``
]

var phrase = phrases[Math.floor(Math.random() * phrases.length)]

message.channel.send(phrase)

}}