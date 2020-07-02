
const fs = require('fs')

module.exports = {
    name: "frrem",
    group: "fun",
    command: true,
    guildOnly: true,
cooldown: 5,
async run(message, args) {

if(!message.member.hasPermission(['MANAGE_MESSAGES']) && message.author.id !== `329023088517971969`) return message.channel.send(`You cannot do this.`)


var dmusers = JSON.parse(fs.readFileSync("./frusers.json", "utf8"))

var user = message.guild.members.get(args[0]) || message.mentions.members.first();

if(!user) return message.channel.send(`Put a valid user!`)
else

if(!dmusers.find(e => e == user.id)) return message.channel.send(`User not in the DB.`)

var position = dmusers.indexOf(user.id)

dmusers.splice(position, 1, )


fs.writeFile("./frusers.json", JSON.stringify(dmusers, null, `\t`),(err) => {
    if(err) console.log(err);
});

await message.react(`☑`)

}}