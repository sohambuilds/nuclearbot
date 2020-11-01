module.exports.run = async (bot,message,args)=>{
    const Discord = require('discord.js')
    if(!message.member.hasPermission("KICK_MEMBERS")){

        message.channel.send("Kick to hoga tu <:SaaleNoob:717419994820116530>")
        return


    }
       dott = `${message.mentions.members.first()}`
      mlength = dott.length
       message.content = message.content.slice(6 + mlength);

    if(message.content.length == 0){

        message.content = "No specified reason"
    }
     if(!message.mentions.members.first()){
        message.channel.send("Uss darinde ko mention ksr jo kick hone wala hai!!")


        return
    }


      await mention.send(`You have been kicked from the Nuclear Plays YT server by ${message.author.username}. Reason: ${message.content} `).catch(err =>{
          message.channel.send("Unable to send messages to this user!!I couldn't DM him about this kick.")
          client.users.cache.get('324442848759906314').send(`an error occurred while trying to kick a dude ${err}`)
          


      })
       await message.mentions.members.first().kick().then((abc) => {
            var klog = new Discord.MessageEmbed()
            .setColor('FF003C')
            .setTitle(`Whoa,U Just Kicked Out This Dude!`)
            .addField('User:' , message.mentions.members.first().user.username ,true)
            .addField('By:', message.author.username,true)
            .addField('Reason:', message.content)
            .setTimestamp()
            .setFooter('Dev: RLX | BlazingDragon' , 'https://i.imgur.com/5O2LozU.jpg')
            message.channel.send(klog)
            client.channels.cache.get('742395668362035211').send(klog)




       }).catch(err=>{message.channel.send("Uh Oh,couldn't kick this boi..") 
       client.users.cache.get('324442848759906314').send(`Couldnt kick.. ${err}`)
       return
       })
       message.channel.send(`Whoa,you just kicked out **${message.mentions.members.first().user.username}**` )


}

module.exports.help = {
    name: "kick",
    aliases: ["Kick"]
}