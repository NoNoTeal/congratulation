var discord = require('discord.js');
const Util = require('../../util/util');
// var hamburgers = require('./../../phrases/hamburgerhelper.json'); might stir up political controversy.
module.exports = {
    name: "holiday",
    group: "fun",
    command: true,
    cooldown: 5,
    description: 'Wish a happy <holiday> to someone.',
async run(message) {
    var args = message.content.split(/ +/).slice(1);  
    const user = await Util.userParsePlus(message, args, 'member');
    var holiday;
    if(!user) return message.channel.send('You must `ping` or put an `id` of someone you want to wish a happy holiday to.');
    if(user.id == message.author.id || user.id == message.client.user.id) return message.channel.send(`Please wish a holiday to someone else.`);
    if(!args[1]) {
        //holiday = hamburgers[Math.floor(Math.random() * hamburgers.length)];
        return message.channel.send(`Please supply a holiday.`)
    } else holiday = args.slice(1).join(' ')
    holiday = holiday.length > 1000 ? holiday.slice(0, 1000 - 3).concat('...') : holiday;
    message.channel.send(`${user}, \`${message.author.tag}\` wishes you a happy ${holiday}.`)
}}
