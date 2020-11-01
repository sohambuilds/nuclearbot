const { Canvas } = require("canvas");

const canva = require('canvacord')
const Discord = require('discord.js')

const  { MessageAttachment } = require('discord.js')
module.exports.run = async (bot,message,args) =>{
    let target = message.mentions.users.first() || message.author;
    let triggered = await canva.Canvas.trigger(target.displayAvatarURL({format: 'png' , dynamic: false}));
    let attachment = new MessageAttachment(triggered, 'triggered.gif');
    return message.channel.send(attachment)
}
module.exports.help = {
    name:'trigger',
    aliases:[]
}