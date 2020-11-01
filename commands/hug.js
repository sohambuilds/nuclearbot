const Discord = require('discord.js')


module.exports.run = (bot,message,args) => {
     let target = message.mentions.users.first()
     if(!target) return message.reply('Mention kar kisiko!')
     if(target.id === message.author.id) return message.reply('nahi beta,aisa nahi karte')

    let rand = [
        'https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif',
        'https://media1.tenor.com/images/f5167c56b1cca2814f9eca99c4f4fab8/tenor.gif?itemid=6155657',
        'https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif',
        'https://media.giphy.com/media/ZRSGWtBJG4Tza/giphy.gif',
        'https://media.giphy.com/media/oHZPerDaubltu/giphy.gif',
        'https://acegif.com/wp-content/uploads/anime-kiss-m.gif',
        'https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif',
        'https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif',
        'https://media0.giphy.com/media/KH1CTZtw1iP3W/source.gif',
        'https://tenor.com/view/hentai-heaven-cheering-counting-gif-14212663'
    ]
        
    let a = rand[Math.floor(Math.random()*rand.length)]
    message.channel.send(`${message.author.username} has kissed ${target.username}! ${a}`)
        
    
}

module.exports.help ={
    name: 'kiss',
    aliases: []
}