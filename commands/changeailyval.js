const Discord = require('discord.js')
const mongoose = require('mongoose')
const botconfig = require('../botconfig.json')

mongoose.connect(botconfig.mongoPass,{
    useNewUrlParser: true,
    useUnifiedTopology: true

} )

const Data = require('../models/data')

module.exports.run = (bot,message,args) =>{
    return
Data.find({
    lb:'all'
},(err,data) =>{
    for(i in data){
        data[i].set('robtimer' , Date.now()) 
        
        data[i].save()
    }
    console.log(data)
})
}

module.exports.help ={
    name:'updt',
    aliases:[]
}