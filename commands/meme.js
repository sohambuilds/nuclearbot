const api = require('imageapi.js')
const Discord = require('discord.js')
module.exports.run = async (bot,message,args) =>{
    let subreddit = args[0]
    if(!subreddit) return message.reply('Mention a valid subreddit!!!')
    try{
        let img = await api(subreddit)
        const meme = new Discord.MessageEmbed()
        .setTitle(`a random meme from r/${subreddit}`)
        .setColor('RANDOM')
        .setImage(img)
        .setURL(`https://reddit.com/r/${subreddit}`)
        message.channel.send(meme)

    }catch(err){
        return message.channel.send(err)
    }
}
module.exports.help = {
    name:'meme',
    aliases:[]
}