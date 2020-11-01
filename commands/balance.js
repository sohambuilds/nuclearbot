const { Message } = require("discord.js");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");


mongoose.connect(botconfig.mongoPass,{
    useNewUrlParser: true,
    useUnifiedTopology: true

} )
const Data = require("../models/data.js");

module.exports.run = async(bot, message, args) =>{
    const Discord = require('discord.js')
       const target = message.mentions.users.first() || message.author
     Data.findOne({
         userID: target.id
     },(err,data) =>{
         if(!data)
         {
             message.channel.send("Say *hi* to initiate ur Nucoin account")
         }
         else{
             let paisembed = new Discord.MessageEmbed()
                 .setColor('#ffa500')
                 .setThumbnail('https://i.imgur.com/zfBX1bw.png')
                 .setTitle(`Nucoin Balance`)
                 .setDescription(`${target.username} has **${data.money}** Nucoins`)
                 .setTimestamp()
                 .setFooter(`Blazing's Bewildering Bots Inc.` , 'https://i.imgur.com/5O2LozU.jpg')
             return message.channel.send(paisembed)
         }
     })
}

module.exports.help = {
    name: "balance",
    aliases: ["bal" , "money" ]
}