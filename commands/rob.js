const Discord = require('discord.js')
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");

mongoose.connect(botconfig.mongoPass,{
    useNewUrlParser: true,
    useUnifiedTopology: true

} )
const Data = require('../models/data')
module.exports.run = (bot,message,args)=>{



if(!message.mentions.users.first()) return message.channel.send('Cant rob nobody!!')    
if(message.author.id === message.mentions.users.first().id) return message.reply('Tring to trick insurance companies or wut!?')
const robtimer = 150000
    Data.find({
        lb: 'all',
        userID: { $in: [message.author.id, message.mentions.users.first().id] }

      },(err,data) =>{
          if(!data[0]) return 'Say hi to initiate your account and then try the command again!'
          if(!data[1]) return 'The user you are trying to rob doesnt even have an account!'
          if(data[1].money < 300) return 'Target has less than 300 nucoins.You cant rob him!'
          if(data[0].money < 70) return 'You need atleast 70 coins to try and rob somebody!'
          let cval
          switch(data[0].money){
              case data[0].money <= 70:
                  cval = 1
                  break;
              case data[0].money < 300 && data[0].money > 70:
                  cval = 2
                  break;
                 
                  
          }



      })


}
module.exports.help = {
    name:'rob',
    aliases:[]
}