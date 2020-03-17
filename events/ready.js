var config = require("../botconfig.json")
var pkg = require('../package.json')
module.exports = bot => {
    console.log(`${bot.user.username} is online`)

    bot.user.setStatus(`online`);

    let statuses = [
        `${config.prefix}help for help!`,
        `Version ${pkg.version}`
    ]
setInterval(() => {     

    var status = statuses[Math.floor(Math.random() * statuses.length)]

    bot.user.setActivity(status, {type: 0})

}, 10000);
}