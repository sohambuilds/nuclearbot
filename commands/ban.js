
const { Message } = require('discord.js')
const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")){

        await message.channel.send("Kya bakchodi kar raha hai be! <:SaaleNoob:717419994820116530>")
          return
 
 
      }
        
        dott = `${message.mentions.members.first()}`
        mlength = dott.length
         message.content = message.content.slice(5 + mlength);
 
 
        
 
      if(message.content.length == 0){
 
          message.content = "No specified reason"
      }
 
      if(!message.mentions.members.first()){
          message.channel.send("Mention someone u fool!")
 
          return
      }
     
 
 
         await mention.send(`You have been banned from the Nuclear Plays YT server by ${message.author.username}. Reason: ${message.content} `).catch(err => {
 
             message.channel.send("Couldn't DM this guy...");
             bot.users.cache.get('324442848759906314').send(`ERROR OCCURRED WHILE SENDING BAN MESSAGE ${err}`)
         })
 
         message.mentions.members.first().ban().then((sttr) => {
 
             
             var blog = new Discord.MessageEmbed()
              .setColor('#FFFF00')
              .setTitle(`Banned another guy Permanently!!Bwahahaha!!`)
              .addField('User:' , message.mentions.members.first().user.username ,true)
              .addField('By:', message.author.username,true)
              .addField('Reason:', message.content)
              .setTimestamp()
              .setFooter('Dev: RLX | BlazingDragon' , 'https://i.imgur.com/5O2LozU.jpg')
             message.channel.send(blog)
             bot.channels.cache.get('742395668362035211').send(blog)
 
        }).catch(err => {
             message.channel.send("Cannot ban this person")
             bot.users.cache.get('324442848759906314').send(`Couldnt ban one user...${err}`)
         })
 
 
}
module.exports.help = {
name: "ban",
aliases: ["Ban"]
}