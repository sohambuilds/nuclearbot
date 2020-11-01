module.exports.run = async (bot,message,args) =>{
    let target = message.mentions.users.first()
    if(!target) return message.reply('Kisko marega???')
    if(target.id === message.author.id) return message.reply('https://save.org/')

    let shoot = ['https://tenor.com/view/rambo-pumped-gunfire-rage-gif-12359697',
'https://tenor.com/view/gunfire-gif-18344004',
'https://tenor.com/view/gun-gunshot-gunfire-gif-15642482',
'https://tenor.com/view/gun-cat-hats-gunfire-gif-13740634',
'https://tenor.com/search/narcos-mexico-gifs',
'https://i.gifer.com/7a4J.gif',
'https://i.gifer.com/1uhr.gif']
    await message.channel.send(`Preparing to execute ${target.username}`)
    await message.channel.send('3')
    await message.channel.send('2')
    await message.channel.send('1')
    await message.channel.send(`EXECUTING <@${target.id}>`)
    message.channel.send(shoot[Math.floor(Math.random()*shoot.length)])
    message.channel.send('TARGET EXECUTED')

}
module.exports.help = {
    name:"shoot",
    aliases:['golimar' , 'execute']
}