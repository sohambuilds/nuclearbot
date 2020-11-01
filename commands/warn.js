const mongoose = require('mongoose')
const botconfig = require('../botconfig.json')
mongoose.connect(botconfig.mongoPass,{
    useNewUrlParser: true,
    useUnifiedTopology: true

} )

const Data = require("../models/data.js");


module.exports.run = async (bot,message,args) => {
    const Discord = require('discord.js')
    
    if(!message.member.hasPermission("KICK_MEMBERS")){

       
        message.channel.send("You have been warned by yourself for trying to warn someone <:SaaleNoob:717419994820116530>")
        return


    }
     if(!message.mentions.members.first()){
        message.channel.send("Mention someone u fool!")

        return
    }

     

      dott = `${message.mentions.members.first()}`
      mlength = dott.length
       message.content = message.content.slice(6 + mlength);





    if(message.content.length == 0){

        message.content = "No specified reason"
    }

       Data.findOne({
           userID:message.mentions.users.first().id
       },async (err,data) =>{
           if(!data){
               message.channel.send('Unable to count warns for a user who hasnt sent any messages!')
           }
           else{
               data.warns = data.warns + 1
               await mention.send(`You have been warned by ${message.author.username};Further violations of server rules will lead to a ban. Reason: ${message.content} `).then((sttt) => {
                var log = new Discord.MessageEmbed()
                 .setColor('#FF0000')
                 .setTitle('User Warned!')
                 .addField('User:' ,  message.mentions.members.first().user.username ,true)
                 .addField('By:', message.author.username,true)
                 .addField('Reason:', message.content)
                 .addField('Warn count:' , data.warns)
                 .setTimestamp()
                 .setFooter('Dev: RLX | BlazingDragon' , 'https://i.imgur.com/5O2LozU.jpg')
                message.channel.send(log);
                bot.channels.cache.get('742395668362035211').send(log)
                data.save()
                
            }).catch(err => {
                message.channel.send("This user has turned off his DMs!Kick him out of the server!!")
                bot.users.cache.get('324442848759906314').send(`Couldnt warn one user...${err}`)
     
                
                return
            })
               if(data.warns >= 3){
                   message.channel.send('This user has exceeded his warn count!')
                   

               }
           }
       })

       
}

module.exports.help = {
    name: "warn",
    aliases: ["Warn"]
}