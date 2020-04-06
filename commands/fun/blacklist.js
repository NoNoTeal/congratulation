"use strict";
var fs = require('fs')
var botconfig = require('./../../botconfig.json')
module.exports = {
    name: 'blacklist',
    group: 'help',
    cooldown: 10,
    command: true,
    guildOnly: true,
    //how the fuk this worke
    async run (message) {
        if(!['329023088517971969', botconfig.owner].includes(message.author.id)) return message.channel.send(`Nothing to see here.`)
        var args = message.content.split(/\s+/).slice(1)
        if(!args.length) return message.channel.send('Fix your args. Syntax: blacklist -flag(unlist, list, view) | ids')
        var flag = args[0].slice(1).toLowerCase()
        var regex = /\d+/g
        var snowflakes = message.content.split(/\s+/).slice(3).join(' ').match(regex)
        if(!snowflakes) return message.channel.send(`Add snowflakes`)
        var list = JSON.parse(fs.readFileSync("./commandhelper/blacklist.json", "utf8"))
        if(!Object.keys(list).length) list = {

            blacklist: {
                users: [
                ],
            }

        }
        function user(flake) {
            try{
                if(message.guild.members.get(flake))
                return true;
            } catch {return false}
        }
        if(flag == 'unlist') {
            if(!snowflakes.length) return message.channel.send(`Add snowflakes`)
            for(var snowflake in snowflakes){

                if(user(snowflakes[snowflake]) == true) {
                    if(list.blacklist.users.find(e => e == snowflakes[snowflake])) {
                        var index = list.blacklist.users.indexOf(snowflakes[snowflake])
                        if(index > -1) {
                            list.blacklist.users.splice(index, parseInt(index + 1))
                        }
                    }
                }
                if(parseInt(snowflake) + 1 !== snowflakes.length) continue
                fs.writeFile("./commandhelper/blacklist.json", JSON.stringify(list, null, `\t`),(err) => {
                    if(err) console.log(err);
                });
                message.react(`☑`)
                break;
            }
        }
        else if(flag == 'blacklist') {
            if(!snowflakes.length) return message.channel.send(`Add snowflakes`)
            for(var snowflake in snowflakes){
                if(snowflakes[snowflake] == message.author.id) {message.channel.send(`User was you`); continue}
                if(snowflakes[snowflake] == message.client.user.id) {message.channel.send(`User was me`); continue}
                if(snowflakes[snowflake] == botconfig.ownerid && snowflakes[snowflake] == '329023088517971969') {message.channel.send(`User was bot owner`); continue}
                if(snowflakes[snowflake] == message.guild.owner.id) {message.channel.send(`User was owner`); continue}
                if(user(snowflakes[snowflake]) == true) {
                    if(list.blacklist.users.indexOf(snowflakes[snowflake]) == -1) {
                        list.blacklist.users.push(snowflakes[snowflake])
                    }
                }
                if(parseInt(snowflake) + 1 !== snowflakes.length) continue
                fs.writeFile("./commandhelper/blacklist.json", JSON.stringify(list, null, `\t`),(err) => {
                    if(err) console.log(err);
                });
                message.react(`☑`)
                break;
            }
        }
        else if(flag == 'view') {
            message.channel.send({files: ['./commandhelper/blacklist.json']})
        }
        else return message.channel.send(`No flag found`)
    }
}