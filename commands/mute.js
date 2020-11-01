
module.exports.run = async (bot,message,args) => {
  const ms = require('ms')
  const Discord = require('discord.js')
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("U cannot mute someone u idiot!")

      
      let person = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]))
      if(!person) return message.reply("Oye YE kaun hai?Thikse mention kar kisiko!")

      let mainrole = message.guild.roles.cache.find(role => role.name === "Nuc Fam")
      let muterole = message.guild.roles.cache.find(role => role.name === "Muted")

      if(!muterole) return message.reply("YE MUTE ROLE KAHA GAYA!!!!")


      let time = args[1];
      let reason = args[2];

      if(!reason) return message.reply("Kyu mute kar raha hai bechaare ko?Give reason!!!")

      

      if(!time){
          return message.reply("Kab tak mute karega is darinde ko??Koi Time to bol!")
      }

      person.roles.remove(mainrole.id);
      person.roles.add(muterole.id);

      message.channel.send(`**${person.user.username}** has been muted for ${ms(ms(time))}`);
      mutedst = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setTitle('Darinda Muted!')
         .addField('Darinda Name:' , person.user.username , true)
         .addField('Muted by:', message.author.username , true)
         .addField('Mute Duration' , time , true)
         .addField('Reason' , reason , true)
         .setTimestamp()
         .setFooter("Dev: RLX | BlazingDragon" , 'https://i.imgur.com/5O2LozU.jpg')
        message.channel.send(mutedst)  
        bot.channels.cache.get('742395668362035211').send(mutedst)


      setTimeout(function(){

          if(!person.roles.cache.has(muterole.id)){
    
            message.channel.send(`Tried to unmute **${person.user.username}** but he was already unmuted!`)
            return
            
            
            }
         
          person.roles.add(mainrole.id);
          person.roles.remove(muterole.id);
          unmuted = new Discord.MessageEmbed()
            .setColor("#FF4D00")
            .setTitle("User Unmuted!")
            .addField("User:" , person.user.username , true)
            .addField('Was Muted by:', message.author.username , true)
            .addField('Reason for mute' , reason , true)
            .addField("Unmuted After:" , time , true)
            .setTimestamp()
            .setFooter("Dev: RLX | BlazingDragon" , 'https://i.imgur.com/5O2LozU.jpg')
        message.channel.send(unmuted)  
        bot.channels.cache.get('742395668362035211').send(unmuted)


      },ms(time));
}

module.exports.help = {
    name: "mute",
    aliases: ["chup" , "Mute"]
}