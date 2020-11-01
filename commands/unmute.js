module.exports.run = async (bot,message,args) => {
    const Discord = require('discord.js')
    const ms = require('ms')
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Koi zaroorat nahi beta!')
          
      
      let person = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[1]))
      if(!person) return message.reply("Oye YE kaun hai?Thikse mention kar kisiko!")

      let mainrole = message.guild.roles.cache.find(role => role.name === "Nuc Fam")
      let muterole = message.guild.roles.cache.find(role => role.name === "Muted")
      console.log(person.roles.cache.map(role => role.name))
      
       

     if(!person.roles.cache.has(muterole.id)){
    
            message.channel.send('He is already unmuted!')
            return
            
            
            }

        let ureason =  args[1]
        if(!ureason) return message.reply("Darinde ko kyu unmute kar raha hai?GIVE Reason like this: +unmute @mention reason") 
      
      person.roles.remove(muterole.id)
      person.roles.add(mainrole.id)
      message.channel.send("User Unmuted before mute duration was completed.")
      unmutedforetime = new Discord.MessageEmbed()
            .setColor("#FF4D00")
            .setTitle("User Unmuted!")
            .addField("User:" , person.user.username , true)
            .addField('Unmuted by:', message.author.username , true)
            .addField('Reason:'  , ureason , true)
            .setTimestamp()
            .setFooter("Dev: RLX | BlazingDragon" , 'https://i.imgur.com/5O2LozU.jpg')
        message.channel.send(unmutedforetime)  
        client.channels.cache.get('727772378268172340').send(unmutedforetime)

}

module.exports.help = {
    name: "unmute",
    aliases: ["Unmute"]
}