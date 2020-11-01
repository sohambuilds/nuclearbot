const { DiscordAPIError } = require("discord.js");
const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {
    message.react('✅');

    const server = message.guild;
         console.log("1")
        server.channels.create(`modthread-${message.author.username}` , {
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
            channel.send(`<@551936470458433536>, <@${message.author.id}> needs help!!<@${message.author.id}>  if you are here for tourney payment, Please Fill These Details
            •Your Paytm Name
            •Your Paytm Number
            •Your In Game Name
            •Tourney Winning Date
            •Tourney Number (example- SSD-42, DSD-09, 3v3-04)
            •Total Amount Won
            •Your Paytm QR Code`)
            let payembed = new Discord.MessageEmbed()
            .setTitle('Payment/Support thread created!')
            .setColor('#00FFE6')
            .setDescription(`Created a new support/payment thread in <#${channel.id}> <a:vvPeeking:762216643879239720>`)
            .setTimestamp()
              message.channel.send(payembed)
        })

    }
    module.exports.help = {
        name: "support",
        aliases: ["Help" , "Halp" ,"pay" , "payme" , "paisa"]
    }