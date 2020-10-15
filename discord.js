const Discord = require("discord.js");

const Client = new Discord.Client(); 

const prefix = 'bh!';

Client.once('ready', ()=>{
    console.log("BTHgamingBot is online");
});

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commnand = args.shift().toLocaleLowerCase();

    if(commnand === 'botngu'){
        message.channel.send('địt mẹ thằng lồn <:chumahne:761919503649996830>');
    }else if (commnand === 'stupidbot'){
    message.channel.send('Fuck you <:batngo:725382269375610880>');
    } 

    const embedhelp = new Discord.MessageEmbed()
     .setColor('#93FFFF')
     .setTitle('✅Đây là phần help✅')
     .setDescription('đây là bảng bot beta nên còn sai sót')
     .addFields(
       { name:'bh!botngu ', value:'dùng dể chửi bot'},
       { name:'bh!stupidbot ', value:'( dùng để chửi bot nhưng bằng engrick ) <:batngo:725382269375610880>'},
       { name:'bh!thangoatconstupid ', value:'( dùng để chửi thằng oắt con )'},
       { name:'bh!longdepzai ', value:'( dùng để khen admin **LONG** trong server)'},
       { name:'bh!henrystickmin ',value:'( just **DANCE** )'},
     )
    if(commnand==='help'){
        message.react('✅')
        message.author.send(embedhelp)
    }

    if(commnand === 'thangoatconstupid'){
        message.channel.send('Yes hahahahaha <:chumahne:761919503649996830>');
    }

    if(commnand ==='longdepzai'){
        message.channel.send('Long đẹp trai (tui ko cho=>>)  <:lmao:765918223618146335>')
    }

    if(commnand === 'henrystickmin'){
        message.channel.send('<a:henrystickmin:763226720051789845>');
        message.react('<a:henrystickmin:763226720051789845>')
    }

    if(commnand === 'siptea'){
        message.channel.send('<a:siptea:765929840226336769>')
    }

    if(commnand === 'linkservertest2020pro'){
        message.author.send('https://discord.gg/EaTqArD')
    }
    
});

Client.login("NzQxNjA0ODQxNjIwNjM1Njk4.Xy5_VA.2rivRNXvRtc-CdanDN5JgLNbRO4")
