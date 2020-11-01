const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    message.react('✅');

    const server = message.guild;
         console.log("1")
        server.channels.create(`giveawaysuggestion-${message.author.username}` , {
          type: 'text',

          permissionOverwrites: [

            {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL']

            },
            {
                id: message.author.id,
                allow:  ['VIEW_CHANNEL']

            }
            
            


            


          ]



        }).then(channel =>{
            channel.send(`<@324442848759906314>,we have a new command suggestor!`)
            let payembed = new Discord.MessageEmbed()
            .setTitle('Command/Feature suggestion thread created')
            .setColor('#00FFE6')
            .setDescription(`Created a new suggestion thread in <#${channel.id}> !! Give your suggestion there. <a:vvPeeking:762216643879239720>`)
            .setTimestamp()
              message.channel.send(payembed)
        })

    }
    module.exports.help = {
        name: "suggest",
        aliases: []
    }