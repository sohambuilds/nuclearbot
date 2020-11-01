module.exports.run = async (bot,message,args) =>{
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('Koi zaroorat nahi hai beta!')
    if(!args[0]) return message.channel.send("Specify how many messages u wanna delete u....")
    delength = args[0]
    if(!delength || delength == 0){
        message.channel.send("I can't delete 0 messages,u mofo")
        return 
     } 

await message.channel.bulkDelete(delength)
.then(messages => console.log(`Bulk deleted ${messages.size} messages`))
.catch(console.error);
message.channel.send(`Deleted ${delength} messages!!`)
}

module.exports.help = {
    name: "purge",
    aliases: ["Purge" , "urade"]
}