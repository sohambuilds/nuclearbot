module.exports.run = async(bot,message,args) => {
    if(message.channel.name.startsWith('modthread') || message.channel.name.startsWith('giveawaysuggestion')){

        message.channel.delete();
    }
    else{message.channel.send("NO U <:SaaleNoob:717419994820116530>")}

}

module.exports.help = {
    name: "close",
    aliases: ["bandh","Close"]
}