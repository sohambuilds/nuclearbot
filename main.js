const token = process.env.token;
const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "+"
const ms = require('ms')

client.on("ready", async () => {



    console.log(  "I am READY!")

    setInterval(function() {

        let activities = [ `+Dev: BlazingDragon#2021` ,  '+help for Payment and Support | +info for List Of Commands']

       let activity = activities[Math.floor(Math.random()*activities.length)]

       let modroles = ['653115183950200833', '730313466094813225', '551936470458433536', '732818401516453959', '732818652059140127', ]

       numberomember =`${client.users.cache.size}`

       client.user.setActivity(activity, { type: "WATCHING"})
    }, 5000)


})


client.on ("message"  , async message  =>  {

     const args = message.content.slice(prefix.length).trim().split(' ');
    let pandaemojis = ['686511879459307541' , '707199467446599702' , '707116706262417440' , '707199422387453963' , ]


    console.log(message.author.username);
    console.log(message.content);

    mention = message.mentions.users.first();

    const server = message.guild;


      if (message.channel.type === 'dm') {

      if (message.author.bot) return;

         client.users.cache.get("324442848759906314").send(`${message.author.username}: ${message.content}`);
         message.author.send("Ight,imma send that to Blazing.My DMs r closed kiddo.If you wanna contact server/tourney support,or get tourney payment,type *+help* inside the Nuclear Plays server.")

    
    return;}



      if(message.author.bot){
          return;
      }



     

     if(message.content.startsWith(prefix + "say" )){

         message.delete();

         sendmessage = message.content.slice(5);

         if(sendmessage.length == 0){

             message.channel.say('Oye kya bhej raha hai! <:SaaleNoob:717419994820116530>')


         }

         message.channel.send(sendmessage);




     }




     if (message.content.startsWith(prefix + "help")){

        message.react('✅');

      

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

            },
            {
                id: '653115183950200833',
                allow: ['VIEW_CHANNEL']

            },
            {
                id: '730313466094813225',
                allow: ['VIEW_CHANNEL']

            },
            {
                id: '551936470458433536',
                allow: ['VIEW_CHANNEL']
            },
            {  
                id: '732818401516453959',
                allow: ['VIEW_CHANNEL']


            },
            {
                id: '732818652059140127',
                allow: ['VIEW_CHANNEL']



            }


          ]



        }).then(channel =>{
            channel.send(`<@&653115183950200833>, <@${message.author.id}> needs help,<:blob:733588221455499315>.. <@${message.author.id}> ,if you are here to claim tournament prizes,please provide ur **PayTm** number and **QR Code**`)
              message.channel.send(`Created a new support/payment thread in <#${channel.id}> <:blob:733588221455499315>`)
        })

    }
    if (message.content.startsWith(prefix + "close")){

        if(message.channel.name.startsWith('modthread')){

            message.channel.delete();
        }
        else{message.channel.send("NO U <:SaaleNoob:717419994820116530>")}



    }
    if (message.content.startsWith(prefix + "members")){

        message.channel.send(`There are ${numberomember} people in this server,<:ThugPika:717419918852882476>`)



    }
    if (message.content.startsWith(prefix + "apply")){

        message.react('✅');
        message.channel.send("Application form has been sent to ur dms!")

        message.author.send("https://forms.gle/6sQ4hhZmuYDwXegj8  ye lo beta,yaha jaake apply karo")

        client.users.cache.get('551936470458433536').send(`${message.author.username} might be applying for staff roles!`);
        client.users.cache.get('324442848759906314').send(`${message.author.username} applied for staff.`)



    }
    if (message.content.startsWith(prefix + "send")){
        
        
        if (mention == null){

            message.channel.send("Kisko bhej raha hai chutiye")
            
            
            
            return;}
       
        message.delete();
        mentionMessage = message.content.slice (5);
        mention.send (`${message.author.username}: ${mentionMessage}`);
        message.channel.send("Message sent to DMs!");
    
    }

   





    if(message.content.startsWith(prefix + 'kick')){

     if(!message.member.hasPermission("KICK_MEMBERS")){

         message.channel.send("Kick to hoga tu <:SaaleNoob:717419994820116530>")
         return


     }
        dott = `${message.mentions.members.first()}`
       mlength = dott.length
        message.content = message.content.slice(6 + mlength);

     if(message.content.length == 0){

         message.content = "No specified reason"
     }
      if(!message.mentions.members.first()){
         message.channel.send("Uss darinde ko mention ksr jo kick hone wala hai!!")


         return
     }


       await mention.send(`You have been kicked from the Nuclear Plays YT server by ${message.author.username}. Reason: ${message.content} `).catch(err =>{
           message.channel.send("Unable to send messages to this user!!I couldn't DM him about this kick.")
           client.users.cache.get('324442848759906314').send(`an error occurred while trying to kick a dude ${err}`)
           


       })
        await message.mentions.members.first().kick().then((abc) => {
             var klog = new Discord.MessageEmbed()
             .setColor('FF003C')
             .setTitle(`Whoa,U Just Kicked Out This Dude!`)
             .addField('User:' , message.mentions.members.first().user.username ,true)
             .addField('By:', message.author.username,true)
             .addField('Reason:', message.content)
             .setTimestamp()
             .setFooter('Dev: RLX | BlazingDragon' , 'https://i.imgur.com/5O2LozU.jpg')
             message.channel.send(klog)
             client.channels.cache.get('727772378268172340').send(klog)




        }).catch(err=>{message.channel.send("Uh Oh,couldn't kick this boi..") 
        client.users.cache.get('324442848759906314').send(`Couldnt kick.. ${err}`)
        return
        })
        message.channel.send(`Whoa,you just kicked out **${message.mentions.members.first().user.username}**` )





    }

    if(message.content.startsWith(prefix + 'ban')){

     if(!message.member.hasPermission("BAN_MEMBERS")){

       await message.channel.send("Kya bakchodi kar raha hai be! <:SaaleNoob:717419994820116530>")
         return


     }
       
       dott = `${message.mentions.members.first()}`
       mlength = dott.length
        message.content = message.content.slice(5 + mlength);


       

     if(message.content.length == 0){

         message.content = "No specified reason"
     }

     if(!message.mentions.members.first()){
         message.channel.send("Mention someone u fool!")

         return
     }
    


        await mention.send(`You have been banned from the Nuclear Plays YT server by ${message.author.username}. Reason: ${message.content} `).catch(err => {

            message.channel.send("Couldn't DM this guy...");
            client.users.cache.get('324442848759906314').send(`ERROR OCCURRED WHILE SENDING BAN MESSAGE ${err}`)
        })

        message.mentions.members.first().ban().then((sttr) => {

            
            var blog = new Discord.MessageEmbed()
             .setColor('#FFFF00')
             .setTitle(`Banned another guy Permanently!!Bwahahaha!!`)
             .addField('User:' , message.mentions.members.first().user.username ,true)
             .addField('By:', message.author.username,true)
             .addField('Reason:', message.content)
             .setTimestamp()
             .setFooter('Dev: RLX | BlazingDragon' , 'https://i.imgur.com/5O2LozU.jpg')
            message.channel.send(blog)
            client.channels.cache.get('727772378268172340').send(blog)

       }) .catch(err => {
            message.channel.send("Cannot ban this person")
            client.users.cache.get('324442848759906314').send(`Couldnt ban one user...${err}`)
        })


    } 
    


    if(message.content.startsWith(prefix + 'warn')){

     if(!message.member.hasPermission("KICK_MEMBERS")){

         message.channel.send("You have been warned by yourself for trying to warn someone <:SaaleNoob:717419994820116530>")
         return


     }
      if(!message.mentions.members.first()){
         message.channel.send("Mention someone u fool!")

         return
     }

      

       dott = `${message.mentions.members.first()}`
       mlength = dott.length
        message.content = message.content.slice(6 + mlength);





     if(message.content.length == 0){

         message.content = "No specified reason"
     }
        

        await mention.send(`You have been warned by ${message.author.username};Further violations of server rules will lead to a ban. Reason: ${message.content} `).then((sttt) => {
            var log = new Discord.MessageEmbed()
             .setColor('#FF0000')
             .setTitle('User Warned!')
             .addField('User:' ,  message.mentions.members.first().user.username ,true)
             .addField('By:', message.author.username,true)
             .addField('Reason:', message.content)
             .setTimestamp()
             .setFooter('Dev: RLX | BlazingDragon' , 'https://i.imgur.com/5O2LozU.jpg')
            message.channel.send(log);
            client.channels.cache.get('727772378268172340').send(log)
        }).catch(err => {
            message.channel.send("Couldnt warn this user!")
            client.users.cache.get('324442848759906314').send(`Couldnt warn one user...${err}`)

            
            return
        })
          

    }

    if(message.content.startsWith(prefix + "mute")){
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("U cannot mute someone u idiot!")

      let args = message.content.substring(prefix.length).split(" ");
      let person = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[1]))
      if(!person) return message.reply("Oye YE kaun hai?Thikse mention kar kisiko!")

      let mainrole = message.guild.roles.cache.find(role => role.name === "Nuc Fam")
      let muterole = message.guild.roles.cache.find(role => role.name === "Muted")

      if(!muterole) return message.reply("YE MUTE ROLE KAHA GAYA!!!!")


      let time = args[2];
      let reason = args[3];

      if(!reason) return message.reply("Kyu mute kar raha hai bechaare ko?Give reason!!!")

      

      if(!time){
          return message.reply("Kab tak mute karega is darinde ko??Koi Time to bol!")
      }

      person.roles.remove(mainrole.id);
      person.roles.add(muterole.id);

      message.channel.send(`**${person.user.username}** has been muted for ${ms(ms(time))}`);
      mutedst = new Discord.MessageEmbed()
         .setColor('#FF0000')
         .setTitle('Darinda Muted!')
         .addField('Darinda Name:' , person.user.username , true)
         .addField('Muted by:', message.author.username , true)
         .addField('Mute Duration' , time , true)
         .addField('Reason' , reason , true)
         .setTimestamp()
         .setFooter("Dev: RLX | BlazingDragon" , 'https://i.imgur.com/5O2LozU.jpg')
        message.channel.send(mutedst)  
        client.channels.cache.get('727772378268172340').send(mutedst)


      setTimeout(function(){

          if(!person.roles.cache.has(muterole.id)){
    
            message.channel.send(`Tried to unmute **${person.user.username}** but he was already unmuted!`)
            return
            
            
            }
         
          person.roles.add(mainrole.id);
          person.roles.remove(muterole.id);
          unmuted = new Discord.MessageEmbed()
            .setColor("#FF4D00")
            .setTitle("User Unmuted!")
            .addField("User:" , person.user.username , true)
            .addField('Was Muted by:', message.author.username , true)
            .addField('Reason for mute' , reason , true)
            .addField("Unmuted After:" , time , true)
            .setTimestamp()
            .setFooter("Dev: RLX | BlazingDragon" , 'https://i.imgur.com/5O2LozU.jpg')
        message.channel.send(unmuted)  
        client.channels.cache.get('727772378268172340').send(unmuted)


      },ms(time));
    }

      if(message.content.startsWith(prefix + 'unmute')){
          if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Koi zaroorat nahi beta!')
          
      let args = message.content.substring(prefix.length).split(" ");
      let person = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[1]))
      if(!person) return message.reply("Oye YE kaun hai?Thikse mention kar kisiko!")

      let mainrole = message.guild.roles.cache.find(role => role.name === "Nuc Fam")
      let muterole = message.guild.roles.cache.find(role => role.name === "Muted")
      console.log(person.roles.cache.map(role => role.name))
      
       

     if(!person.roles.cache.has(muterole.id)){
    
            message.channel.send('He is already unmuted!')
            return
            
            
            }

        let ureason =  args[2]
        if(!ureason) return message.reply("Darinde ko kyu unmute kar raha hai?GIVE Reason like this: +unmute @mention reason") 
      
      person.roles.remove(muterole.id)
      person.roles.add(mainrole.id)
      message.channel.send("User Unmuted before mute duration was completed.")
      unmutedforetime = new Discord.MessageEmbed()
            .setColor("#FF4D00")
            .setTitle("User Unmuted!")
            .addField("User:" , person.user.username , true)
            .addField('Unmuted by:', message.author.username , true)
            .addField('Reason:'  , ureason , true)
            .setTimestamp()
            .setFooter("Dev: RLX | BlazingDragon" , 'https://i.imgur.com/5O2LozU.jpg')
        message.channel.send(unmutedforetime)  
        client.channels.cache.get('727772378268172340').send(unmutedforetime)

          
 }



     message.content = message.content.toLowerCase();
    if(message.content.includes("pandu")){

        let ranpanda = pandaemojis[Math.floor(Math.random()*pandaemojis.length)]

        message.react(`${ranpanda}`);

    }
    if(message.content.includes("panda")){

        let ranpanda = pandaemojis[Math.floor(Math.random()*pandaemojis.length)]

        message.react(`${ranpanda}`);

    }
    if(message.content.startsWith(prefix + "dev")){

       var rtm = new Discord.MessageEmbed()
          .setTitle("Developer info:")
          .setThumbnail('https://i.imgur.com/5O2LozU.jpg')
          .setColor("00FFE6")
          .addField('Dev:' ,  client.users.cache.get('324442848759906314').username , true)
          .addField('Location:','Kolkata,West Bengal')
          .addField('Age:' , '15')
          .addField('Language used:','node.js || D.js v12.2.0')
          
          .addField('Bot Launch Date:','22/07/2020')
          .addField("Want a Custom Bot For Your Server!" , "DM Blazing RIGHT AWAY!!")
          .setTimestamp()
          .setFooter('Dev: RLX | BlazingDragon' , 'https://i.imgur.com/5O2LozU.jpg')
          

       message.channel.send(rtm);   



    }

    if(message.content.startsWith(prefix + "info")){

        var informatics = new Discord.MessageEmbed()
            .setColor('#FF4D00')
            .setTitle('List of all my commands!')
            .setThumbnail('https://i.imgur.com/4ylgDHM.png')
            .addField('+help','creates a new support thread,use for contacting modmail for support or for Receiving Tounament Payments!')
            .addField('+close' , 'closes your modmail' )
            .addField('+say putsomethinghere','says whatever u put in place of putsomethinghere.')
            .addField('+send @mention messagehere', 'sends a message to mentioned user.')
            .addField('+apply' , 'DMs u a staff application form')
            .addField('+members', 'Returns the number of members inside the server')
            .addField('+warn @mention reason' , 'Warns mentioned user with specified reason.')
            .addField('+kick @mention reason' , 'Kicks mentioned user with specified reason')
            .addField('+ban @mention reason' , 'Bans mentioned user with specified reason')
            .addField('+mute @mention duration reason' , 'mutes for specified duration(e.g:1s,1m,1h,1d etc...u cannot put it like 1d 20 m or 1h 10 m ..')
            .addField('+Dev' , 'Gives u info about me')
            .addField('+unmute @mention reason' , 'Unmutes muted user with given reason.')
            
            .addField('Welcoming and ByeBye:' , 'Sends messages in respective channels;')
            .addField('If message contains any references of panda:', 'reacts with a random panda emoji' )
            .setTimestamp()
            .setFooter('Dev: RLX | BlazingDragon' , 'https://i.imgur.com/5O2LozU.jpg');

        message.channel.send(informatics)






    }














    


})

client.on('guildMemberAdd' , member => 
{

member.send(`Welcome to the Nuclear Plays server, ${member}! :tada: Make sure you check out our official Relics Elysia club in Brawl Stars,and join us in if you're looking for a NOICE,active and friendly club! Also,make sure u send a screenshot of your profile in the verification channel if you aren't already verified in a relics server!


 `);
client.guilds.cache.get('651726134551117824').channels.cache.get('660741471766315068').send(`<@${member.id}> has joined the server :tada: !!!Now the server has ${client.users.cache.size} members!`)

});

client.on('guildMemberRemove' , member =>{

client.guilds.cache.get('651726134551117824').channels.cache.get('660741586812010509').send(`**${member.user.username}** has left the server for unknown and probably stupid reasons <:thonkweight:735113872159014912> ....Now we have ${client.users.cache.size} members in the server.`)



});

client.login(token);

