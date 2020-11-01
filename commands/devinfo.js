const Discord = require('discord.js')
module.exports.run = (bot,message,args) =>{
    var rtm = new Discord.MessageEmbed()
    .setTitle("Developer info:")
    .setThumbnail('https://i.imgur.com/5O2LozU.jpg')
    .setColor("00FFE6")
    .addField('Dev:' ,  bot.users.cache.get('324442848759906314').username , true)
    .addField('Location:','Kolkata,West Bengal')
    .addField('Age:' ,'5151 + 420 + 69 days')
    .addField('Language used:','node.js | D.js v12.4.1 | mongoose v5.10.10 | fs v0.1.1 | ms v2.1.2')
    .addField('Current Bot Version' , '2.1.2')
    .addField('Bot Launch Date:','22/07/2020')
    .addField("Want a Custom Bot For Your Server!" , "DM Blazing RIGHT AWAY!!")
    .setTimestamp()
    .setFooter(`Blazing's BewilderingBots Inc.` , 'https://i.imgur.com/5O2LozU.jpg')
    

 message.channel.send(rtm);   

}

module.exports.help = {
    name:"dev",
    aliases:['blaze' , 'BBB' , 'developer']
}