const randomPuppy = require("random-puppy")
const Discord = require('discord.js')
module.exports.help ={
    name:'hentai',
    aliases:[]

}

module.exports.run = async (bot,message,args) =>{
    return
    titles = ['Anime Hentai','2,4,6,8, LETS GO MATHSDEBATE',]
let randtitle = titles[Math.floor(Math.random()*titles.length)]
    const subrdt = ["hentai"]
    const img = await randomPuppy(subrdt[0])
    const embed = new Discord.MessageEmbed()
    .setColor('#FF69B4')
    .setImage(img)
    .setTitle(randtitle)
}