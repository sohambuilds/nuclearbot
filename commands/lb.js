const Discord = require('discord.js')
const { Message, DiscordAPIError } = require("discord.js");
const mongoose = require("mongoose");
const botconfig = require("../botconfig.json");


mongoose.connect(botconfig.mongoPass,{
    useNewUrlParser: true,
    useUnifiedTopology: true

} )
const Data = require("../models/data.js");




module.exports.run =(bot,message,args) => {

    Data.find({
        lb: "all"

    }).sort([['money','descending']]).exec((err,res)=>{

        if(err) console.log(err);

        var page = Math.ceil(res.length / 10);

        let embedd = new Discord.MessageEmbed()
        .setColor('#ffa500')
        .setTitle('Nucoin Leaderboards')
        .setThumbnail('https://i.imgur.com/zfBX1bw.png')
        .setTimestamp()

        let pg = parseInt(args[0]);
        if(pg != Math.floor(pg)) pg = 1;
        if(!pg) pg = 1
        let end = pg*10
        let start = (pg*10) - 10

        if(res.length === 0){
            embedd.addField("Error" , "No pages found!");
        }
        else if(res.length <= end) {
            embedd.setFooter(`page ${pg} of ${page} | Blazing's Bot Inc.` , 'https://i.imgur.com/5O2LozU.jpg');
            for( i = start;i<res.length;i++){
                embedd.addField(`${i+1}. ${res[i].name}`,`**${res[i].money.toLocaleString()}** NC`);
            }
        }else{
            embedd.setFooter(`page ${pg} of ${page} | Blazing's Bot Inc.` , 'https://i.imgur.com/5O2LozU.jpg');
            for(i = start; i < end;i++){
                embedd.addField(`${i+1}. ${res[i].name}`,`**${res[i].money.toLocaleString()}** NC`);
                
            }
        }
        
     message.channel.send(embedd)

    }
          
    
    
    )

}

module.exports.help = {
    name: "leaderboards",
    aliases:["lb" , "top"]
}
