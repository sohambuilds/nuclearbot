const Discord = require('discord.js')
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");
const ms = require('ms')
mongoose.connect(botconfig.mongoPass,{
    useNewUrlParser: true,
    useUnifiedTopology: true

} )
const Data = require("../models/data.js");
module.exports.run = async (bot,message,args) =>{
    
let timeout = 300000

 Data.findOne({
    userID: message.author.id
},(err,data) =>{
    if(!data) return message.channel.send('Say *hi* to initiate ur Nucoin account!')
    if(err) message.channel.send(`Please Try Again,an Error occurred!${err}`)

    if(timeout - (Date.now() - data.daily)>0){
       let time = ms(timeout - (Date.now() - data.daily));
      

       let worklater = new Discord.MessageEmbed()
       .setColor('#ff0000')
       .setThumbnail('https://i.imgur.com/zfBX1bw.png')
       .setTimestamp()
       .setFooter(`Blazing's Bewildering Bots Inc.` , 'https://i.imgur.com/5O2LozU.jpg')
       .setTitle('You have worked already!!')
       .setDescription(`you already worked today! Return again in ${time} `)
       message.channel.send(worklater)
     

    } 
    else{
    let jobs = ["Programmer" , 'Doctor' , 'Shopkeeper' , 'Bus Driver' , 'Racer' , 'Ghost' , 'Prostitute' , 'Porn Star' , 'Nuc GF' , 'Blowjobber' , 'Stripper' , 'Masturbator' , 'Gamer','Jihadist','Yogi','BJP member', 'Jungli Kutta' , 'Chandaalika' , 'Jay Shree Raamist' , 'Brahmin',]
let works = ["made a Discord Bot" , 'gave Blazing a Blowjob', 'fucked Panda' , 'did a Brain Surgery' , 'hijacked a Bus and killed 69 people' , 'sold 420 pounds of weed' , 'uploaded a clip on Pornhub' , 'slept with Nuc' , 'orgasmed 69 times per second','played sex simulator 2020','took a private dance in vanilla unicorn','found a covid vaccine','killed Yogi Adityanath','triggered an atomic bomb','destroyed a distant star system' , 'assassinated PM Modi' , 'made #JayShreeRam go trending on twitter','established Ram Rajya']
let randjob = jobs[Math.floor(Math.random()*jobs.length)]
let randwork = works[Math.floor(Math.random()*works.length)]
let amountearned = Math.floor(Math.random()*50) + 1
let worked = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Work Done!')
.setDescription(`You worked as a **${randjob}** and **${randwork}** to earn **${amountearned} NC**`)
.setThumbnail('https://i.imgur.com/zfBX1bw.png')
.setTimestamp()
.setFooter(`Fkin ${randjob}s`)

data.money = data.money + amountearned 

data.daily = Date.now()
 data.save()

message.channel.send(worked)



}



}

)

}


module.exports.help = {
    name: 'work',
    aliases:["kaam" , 'Work']
}