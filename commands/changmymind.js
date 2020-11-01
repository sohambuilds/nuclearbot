const { Canvas } = require("canvas");

const canva = require('canvacord')
const Discord = require('discord.js')

const  { MessageAttachment } = require('discord.js')
module.exports.run = async (bot,message,args) =>{
    const text = args.join(' ')
    if(!text) return message.channel.send('Kis cheez ka change my mind!?')

    let triggered = await canva.Canvas.changemymind(text);
    let attachment = new MessageAttachment(triggered, 'triggered.png');
    return message.channel.send(attachment)
}
module.exports.help = {
    name:'cmm',
    aliases:['changemymind']
}