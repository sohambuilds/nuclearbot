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
     
    
let timeout = 30000

 Data.findOne({
    userID: message.author.id
},(err,data) =>{
    if(!data) return message.channel.send('say *hi* to initiate ur account')
    if(err) return message.channel.send(`Please Try Again,an Error occurred!${err}`)

    if(timeout - (Date.now() - data.begtimer)>0){
       let time = ms(timeout - (Date.now() - data.begtimer));
      

       let worklater = new Discord.MessageEmbed()
       .setColor('#ff0000')
       .setThumbnail('https://i.imgur.com/zfBX1bw.png')
       .setTimestamp()
       .setFooter(`Blazing's Bewildering Bots Inc.` , 'https://i.imgur.com/5O2LozU.jpg')
       .setTitle('Abe Saale Bhikari!!')
       .setDescription(`You were just donated some money! U can ask for bheek again in ${time} `)
       message.channel.send(worklater)
     

    } 
    else{
    let donators = ["Narendra Modi" , "Osama Been Laggin","Supercell Gods" , "BlazingDragon" , "BlazingDragon" , "BlazingDragon" , "NuChomu" , "ISIS" , "Panda" , "Rockstar Games" , "ToTu" , "VinayaChomu" , "Phaltu Siris" , "Obama" , "Trump" , "Mia Khalifa" , "Lana Rhodes" , "Logan Paul" , "Jake Paul" , "Kurzgesagt" , "Pewdiepie" , "Hindustani Bhau" , "Tathaagat Shukla" , "Carryminati" , "Yogi Adityanath" , "Relics Gaming" , "Mystic Winter" , "EZ|Gooose"]
    let give_note = ["Lele bhikari" , "*In panda accent* Tu gareeb hai" , "Daya aagayi tere micro pp pe" , "Thanks for the blowjob last night" , "Kal jo huya,wo kisiko pata nahi lagna chaiye ;-)" , "Advance payment for ur sesky videos" , "Tera pp bohot chota hai" , "ARRE YARRR" , "Send BOBS and VEGENE" , "I very much likes ur videos on xvideos","thanks for donating to my nude stream last night!" , 'Nuc ko thokne ka advance payment' , 'Advance payment for stealing pandas pp' , 'Mummy ko mat batana' , 'Kal raat ke videos ka payment','Ye le,and PLEASE STOP SENDING ME UR NUDES']
    let nogive_note = ['Bhaag Chutiye' , 'Ur bobs r too small' , 'Bhai,lund dekhke maza nahi aaya.','Pahle diccpic,pher payment.', 'U not satisfy me last night', 'Viagra lena bandh kar,paisa de dunga.']

let randperson = donators[Math.floor(Math.random()*donators.length)]
let randnote = give_note[Math.floor(Math.random()*give_note.length)]
let randngnote = nogive_note[Math.floor(Math.random()*nogive_note.length)]
let amountearned = Math.floor(Math.random()*10) 

let worked = new Discord.MessageEmbed()

.setColor('RANDOM')

.setTimestamp()
.setThumbnail('https://i.imgur.com/zfBX1bw.png')
.setFooter('Fkin Bhikaris')
if(amountearned === 0){
    worked.setTitle(`${randperson} has a message for you!`)
    worked.setDescription(`**${randperson}:** ${randngnote} . Tere liye 0 Nucoins.`)
    data.begtimer = Date.now()
    data.save()
    message.channel.send(worked)
    return
}
worked.setTitle(`${randperson} gave you some bheek!!`)
worked.setDescription(`**${randperson}:** ${randnote}! take **${amountearned}** NC `)
data.money = data.money + amountearned 

data.begtimer = Date.now()
 data.save()

message.channel.send(worked)



}



}

)

}


module.exports.help = {
    name: 'beg',
    aliases:["bheek" ,]
}