const Discord = require('discord.js')

module.exports.run = (bot,message,args) =>{
let cdl = new Discord.MessageEmbed()
.setColor('#ffa500')
.setTimestamp()
.setFooter(`Blazing's BewilderingBots Inc.` , 'https://i.imgur.com/5O2LozU.jpg')

    if(!args[0]){
        cdl.setTitle('Select a command category!')
        cdl.addField('Payment and Support(1)' , 'Payment and Support commands')
        cdl.addField('Economy and Nucoins(2)' , 'Currency Related~ commands')
        cdl.addField('Moderation(3)' , 'Commands exclusive to mods')
        cdl.addField('Fun(4)' , 'Vanity features and commands')
        cdl.addField('Messaging and Others(5)','Miscellanious commands')
        cdl.setDescription('Use ur command like this: +commands 2')
    }
    switch (args[0]) {
        case '1':
            cdl.setTitle('Payment and Support commands!')
            cdl.addField('+payme/+support' , 'Creates a Payment or Support channel')
            cdl.addField('+close' , 'Closes your Payment/Support channel')
             break;
    
        case '2':
            cdl.setTitle('Economy and Nucoin commands!')
            cdl.addField('Regular Rewards:' , 'Gives you one Nucoin per message sent in general chat or nucoin grind chat')
            cdl.addField('+bal' , 'Shows your Nucoin balance/Nucoin balance of mentioned user')
            cdl.addField('+lb pg no.' , 'Shows server leaderboards. usage: +lb, +lb 2, +lb 3 etc.')
            cdl.addField('+work' , 'Lets u work and earn between 1-100 Nucoins every 5 mins')
            cdl.addField('+beg' , 'Lets u beg and get between 0-10 nucoins ever 30 seconds')
            cdl.addField('+give @mention amount' , '<Feature Disabled Right Now> Lets u give a specific amount of Nucoins to mentioned user.')
             break;
        case '3':
            cdl.setTitle('Moderation Commands')
            cdl.addField('+purge no. of messages' , 'lets u purge mentioned number of messages')
            cdl.addField('+warn @mention reason' , 'Lets u warn mentioned user')
            cdl.addField('+kick @mention reason' , 'lets u kick mentioned user')
            cdl.addField('+ban @mention reason' , 'Bans mentioned user with specified reason')
            cdl.addField('+mute @mention duration reason' , 'mutes mentioned member for specified duration and reason.E.g: mute @nuc 10m test')
            cdl.addField('+unmute @mention reason','Unmutes muted member for specified duration and reason')
            cdl.addField('+lock' , 'locks channel for all members')
            cdl.addField('+unlock' , 'unlocks channel for all members')
            break;
        case '4':
            cdl.setTitle('Fun Features and commands')
            cdl.addField('panda reference in any message' , 'Reacts with a random panda emoji')
            cdl.addField('+Trigger mention' , 'Triggers mentioned user')
            cdl.addField('+cmm TEXT' , 'puts ur text into change my mind template')
            cdl.addField('+meme <subredditname>' , 'Sends random meme from mentioned subreddit')
            cdl.addField('+kiss @mention' , 'Anime Hentai')
            cdl.addField('+execute @mention' , 'executes mentioned user')
            cdl.setFooter('DM Nuc Bot and Provide ur suggestions!')
            break;
        case '5':
            cdl.setTitle('Miscellanious')
            cdl.addField('+send @mention message' , 'sends message to mentioned user')
            cdl.addField('+say message' , 'says message')  
            cdl.addField('+members' , 'gives number of server members')
            cdl.addField('+dev' , 'gives info about me')
            cdl.addField('+apply' , 'lets you apply for staff positions')  
            break;

        default:
            break;
    }
    message.channel.send(cdl)


}

module.exports.help = {
    name: 'commands',
    aliases: ['info', 'help']
}
