const Discord = require('discord.js')
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");

mongoose.connect(botconfig.mongoPass,{
    useNewUrlParser: true,
    useUnifiedTopology: true

} )
const Data = require("../models/data.js");

module.exports.run = async (bot,message,args) =>{

    
    
    if(!message.mentions.users.first()){
        message.reply('Kisko paise de raha hai?')
        return
    }
    if(message.mentions.users.first().id === message.author.id){
        message.channel.send('U cannot give money to yourself')
        return
    }
    if(!args[1]){
        message.reply('Kitne paise de raha hai?')
        return
    }
    if(args[1] < 0){
        message.reply('Tring to find loopholes,huh?')
        return
    }
    let ded = parseInt(args[1])
    
    if(ded === 'NaN'){
        message.channel.send('Kitne paise de raha hai??')
        return
    }
    Data.findOne({
        userID: message.mentions.users.first().id
    },async (err,adata) =>{
            if(!adata){
                const newData = new Data({
                    name: message.mentions.users.first().username,
                    userID: message.mentions.users.first().id,
                    money: 0,
                    lb: 'all',
                    xpp: 0,
                    xpl: 1,
                    daily: Date.now(),
                    begtimer:Date.now(),
                    robtimer:Date.now(),
                    warns: 0
                })
               await newData.save().catch(err => console.log(err));
               message.channel.send(`Made a Nucoin account for **${message.mentions.users.first().username}**!`)
               

                
                
            }
            else{
            Data.findOne({
                userID: message.author.id
            },async (err,bdata)=>{
                if(!bdata) return message.reply('Say **hi** to initiate your account')
        
                var prevbal = bdata.money
                bdata.money = bdata.money - ded
                await bdata.save()
        
            })
            Data.findOne({
                userID: message.mentions.users.first().id
            },async (err,data) =>{
        
                if(!data) return message.channel.send('Please Try again.')
        
                
                data.money = data.money + ded
                let rnewmoney = data.money
                data.save()
        
        
            })
            givenembed = new Discord.MessageEmbed()
            .setTitle('Nucoin Transfer Processed!')
            .setColor('#ffa500')
            .setTimestamp()
            .setThumbnail('https://i.imgur.com/zfBX1bw.png')
            .setFooter("Blazing's Transactions Inc.")
            .setDescription(`You sent **${ded}** NC to **${message.mentions.users.first().username}**`)
            
            message.channel.send(givenembed)
            
        }

        
    })
    
    
    
    
   


}

module.exports.help = {
    name:"give",
    aliases:['donate']
}