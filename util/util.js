const Discord = require('discord.js');
class Util {
    /**
     * Gets a user from message.
     * @param {Discord.Message} message Discord.JS message
     * @param {String[]} args Arguments from command
     * @param {String} type Member or User: Which form do you want the user in?
     * @param {Number} argNum Where is the user part in the message? (Arg. Array index)
     */
    static async userParsePlus(message, args, type, argNum = 0) {
      var guild = message.guild;
      var user;
      if(guild) {
        if(args[0]) {
          var num=/\d+/i.exec(args.join(' '));
          if(Array.isArray(num)) {
            var id;
            try{
              id=(await message.guild.members.fetch(num[0]));
            } catch {/* Invalid ID */}
            if(id) {user=id.user};
          };
          var arg=(await message.guild.members.fetch({query:args[argNum],limit:1})).first();
          if(arg) {
            user=arg.user;
          };
        };
      };
      if(user) {
      if(guild && type.toLowerCase() == "member") {
        return guild.member(user);
      } else return user;
      } else return null;
    }
};
module.exports = Util;