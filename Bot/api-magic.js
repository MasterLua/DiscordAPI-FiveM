const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
//RCON
var Q3RCon = require('quake3-rcon');
var rcon = new Q3RCon({
    address: config.rcon.ip,
    port: config.rcon.port, // optional
    password: config.rcon.password,
    debug: false // optional
});

console.log("------------")

client.on('ready', () => {
    console.log("["+ config.name_server +"] BOT STARTED")
});  

setTimeout(function() {
    console.log("------------")
}, 3000)

client.on('message', message => {
	let args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    //KICK
    if(command == "kick") {
        if(message.member.roles.cache.find(r => r.id === config.roles.staff)) {
            if (args[0]) {
                if (args[1]) {
                    const argss = message.content.slice(config.prefix.length + command.length + args[0].length + 1).trim().split(/ +/g);
                    rcon.send("3A66f8v79EsdNNybDv2TR7 "+args[0]+" "+argss, (response) => {
                        //message.channel.send(argss)
                        client.channels.cache.get("784721745847779341").send("<@"+message.author.id+"> a utilise la commande kick sur l'id " + args[0])
                        if (response) {
                            message.channel.send("**```🤡 Le joueur avec l'id " + args[0] + " a été kick.```**")
                        }else{
                            message.channel.send("**```Error 775```**")
                        }    
                    });
                }
            }
        }else{
            message.channel.send("**```🤡 Vous n'avez pas la permission d'utiliser cette commande.```**")
        }
    }
    //REVIVE
    if(command == "revive") {
        if(message.member.roles.cache.find(r => r.id === config.roles.staff)) {
            if (args[0]) {
                rcon.send("c9hPUU289sLYn4fk42A8Vn " + args[0], (response) => {
                    // Nothing just callback
                    client.channels.cache.get("784721745847779341").send("<@"+message.author.id+"> a utilise la commande revive sur l'id " + args[0])
                    if (response) {
                        message.channel.send("**```🤡 Le joueur avec l'id " + args[0] + " a été revive.```**")
                    }else{
                        message.channel.send("**```Error 775```**")
                    }    
                });
            }
        }else{
            message.channel.send("**```🤡 Vous n'avez pas la permission d'utiliser cette commande.```**")
        }
    }
    //TELEPORT
    if(command == "tp") {
        if(message.member.roles.cache.find(r => r.id === config.roles.staff)) {
            if (args[0]) {
                if (args[1]) {
                    rcon.send("QWraRgEdeXFUA5XsxehTsE " + args[0] + " " + args[1], (response) => {
                        // Nothing just callback
                        client.channels.cache.get("784721745847779341").send("<@"+message.author.id+"> a utilise la commande tp sur l'id " + args[0])
                        if (response) {
                            message.channel.send("**```🤡 Le joueur avec l'id " + args[0] + " a été tp.```**")
                        }else{
                            message.channel.send("**```🤡 Error 775```**")
                        }    
                    });
                }
            }
        }else{
            message.channel.send("**```🤡 Vous n'avez pas la permission d'utiliser cette commande.```**")
        }
    }

    if(command == "giveweapon") {
        if(message.member.roles.cache.find(r => r.id === config.roles.staff)) {
            if (args[0]) {
                if (args[1]) {
                    if (args[2]) {
                        client.channels.cache.get("784721745847779341").send("<@"+message.author.id+"> a utilise la commande giveweapon pour donne l'arme " + args[1] + " a l'id "+args[0]+" avec "+args[2]+" munition.")
                        rcon.send("274PkNXdLLw7G6jqb22GSU " + args[0] + " " + args[1] + " " + args[2], (response) => {
                            // Nothing just callback
                            if (response) {
                                message.channel.send("**```🤡 Le joueur avec l'id " + args[0] + " a recu l'arme "+args[1]+" avec "+args[2]+" munition.```**")
                            }else{
                                message.channel.send("**```🤡 Error 775```**")
                            }    
                        });
                    }
                }
            }
        }else{
            message.channel.send("**```🤡 Vous n'avez pas la permission d'utiliser cette commande.```**")
        }
    }

    if(command == "giveitem") {
        if(message.member.roles.cache.find(r => r.id === config.roles.staff)) {
            if (args[0]) {
                if (args[1]) {
                    if (args[2]) {
                        client.channels.cache.get("784721745847779341").send("<@"+message.author.id+"> a utilise la commande giveitem pour donne l'item " + args[1] + " a l'id "+args[0]+" x"+args[2]+".")
                        rcon.send("rkAcmtzJ5J5ruJ89rXD6C2 " + args[0] + " " + args[1] + " " + args[2], (response) => {
                            // Nothing just callback
                            if (response) {
                                message.channel.send("**```🤡 Le joueur avec l'id " + args[0] + " a recu l'item "+args[1]+" x"+args[2]+".```**")
                            }else{
                                message.channel.send("**```🤡 Error 775```**")
                            }    
                        });
                    }
                }
            }
        }else{
            message.channel.send("**```🤡 Vous n'avez pas la permission d'utiliser cette commande.```**")
        }
    }

    if(command == "givemoney") {
        if(message.member.roles.cache.find(r => r.id === config.roles.staff)) {
            if (args[0]) {
                if (args[1]) {
                    if (args[2]) {
                        client.channels.cache.get("784721745847779341").send("<@"+message.author.id+"> a utilise la commande givemoney pour donne de l'argent type " + args[1] + " a l'id "+args[0]+" "+args[2]+"$.")
                        rcon.send("5pMBYBTCL4xaVVBpuZ5TLD " + args[0] + " " + args[1] + " " + args[2], (response) => {
                            // Nothing just callback
                            if (response) {
                                message.channel.send("**```🤡 Le joueur avec l'id " + args[0] + " a recu de l'argent de type "+args[1]+" avec comme montant "+args[2]+"$.```**")
                            }else{
                                message.channel.send("**```🤡 Error 775```**")
                            }    
                        });
                    }
                }
            }
        }else{
            message.channel.send("**```🤡 Vous n'avez pas la permission d'utiliser cette commande.```**")
        }
    }

    if(command == "tpa") {
        if(message.member.roles.cache.find(r => r.id === config.roles.staff)) {
            if (args[0]) {
                if (args[1]) {
                    client.channels.cache.get("784721745847779341").send("<@"+message.author.id+"> a utilise la commande tpa pour tp l'id " + args[0] + " vers l'id "+args[1]+".")
                    rcon.send("WzjH6732zWg7u62fQhrx6H " + args[1] + " " + args[0], (response) => {
                        // Nothing just callback
                        if (response) {
                            message.channel.send("**```🤡 Le joueur avec l'id " + args[0] + " a été tp a l'id "+args[1]+".```**")
                        }else{
                            message.channel.send("**```🤡 Error 775```**")
                        }    
                    });
                }
            }
        }else{
            message.channel.send("**```🤡 Vous n'avez pas la permission d'utiliser cette commande.```**")
        }
    }

    if(command == "car") {
        if(message.member.roles.cache.find(r => r.id === config.roles.staff)) {
            if (args[0]) {
                if (args[1]) {
                    client.channels.cache.get("784721745847779341").send("<@"+message.author.id+"> a utilise la commande car pour faire apparaitre une voiture a l'id " + args[0] + " le nom de la voiture "+args[1]+".")
                    rcon.send("b6LvdypxZRxPyNqAuMyaRa " + args[0] + " " + args[1], (response) => {
                        // Nothing just callback
                        if (response) {
                            message.channel.send("**```🤡 Le joueur avec l'id " + args[0] + " a recu le vehicule "+args[1]+".```**")
                        }else{
                            message.channel.send("**```🤡 Error 775```**")
                        }    
                    });
                }
            }
        }else{
            message.channel.send("**```🤡 Vous n'avez pas la permission d'utiliser cette commande.```**")
        }
    }

    if(command == "sqlban") {
        if(message.member.roles.cache.find(r => r.id === config.roles.staff)) {
            if (args[0]) {
                if (args[1]) {
                    const argss = message.content.slice(config.prefix.length + command.length + args[0].length +  + args[1].length + 1 + 1).trim().split(/ +/g);
                    client.channels.cache.get("784721745847779341").send("<@"+message.author.id+"> a utilise la commande ban sur l'id " + args[0] + " avec comme temps "+args[1]+" et la raison "+argss+".")

                    rcon.send("CbAmtqaxxHKHmsS54v5WW6 "+args[0]+ " " + args[1] + " " + argss, (response) => {
                        if (response) {
                            message.channel.send("**```🤡 Le joueur avec l'id " + args[0] + " a été banni avec le temps "+ args[1] +" pour la raison "+ argss +".```**")
                        }else{
                            message.channel.send("**```Error 775```**")
                        }    
                    });
                }
            }
        }else{
            message.channel.send("**```🤡 Vous n'avez pas la permission d'utiliser cette commande.```**")
        }
    }

    if(command == "sqlunban") {
        if(message.member.roles.cache.find(r => r.id === config.roles.staff)) {
            if (args[0]) {
                const argss = message.content.slice(config.prefix.length + command.length).trim().split(/ +/g);
                client.channels.cache.get("784721745847779341").send("<@"+message.author.id+"> a utilise la commande sqlunban sur la lisence " + argss)
                rcon.send("8dJ4u4ssRuZcjcG4Tdurba "+argss, (response) => {
                    if (response) {
                        message.channel.send("**```🤡 Le joueur avec la lisence " + argss + " a été debanni.```**")
                    }else{
                        message.channel.send("**```Error 775```**")
                    }    
                });
            }
        }else{
            message.channel.send("**```🤡 Vous n'avez pas la permission d'utiliser cette commande.```**")
        }
    }

    if(command == "message") {
        if(message.member.roles.cache.find(r => r.id === config.roles.staff)) {
            if (args[0]) {
                const argss = message.content.slice(config.prefix.length + command.length + args[0].length + 1).trim().split(/ +/g);
                client.channels.cache.get("784721745847779341").send("<@"+message.author.id+"> a utilise la commande message sur l'id " + args[0] + " avec le message " + argss)
                rcon.send("YuQYVDkwNm3d9m9dbDxEud "+ args[0] + " " + argss, (response) => {
                    if (response) {
                        message.channel.send("**```🤡 Le joueur avec l'id "+args[0]+" a recu le message.```**")
                    }else{
                        message.channel.send("**```Error 775```**")
                    }    
                });
            }
        }else{
            message.channel.send("**```🤡 Vous n'avez pas la permission d'utiliser cette commande.```**")
        }
    }

    if(command == "wype") {
        if(message.member.roles.cache.find(r => r.id === config.roles.gerant)) {
            const argss = message.content.slice(config.prefix.length + command.length).trim().split(/ +/g);
            rcon.send("KYLqBR7wxKmvKzAtrnmVjh "+argss, (response) => {
                if (response) {
                    message.channel.send("**```🤡 Le joueur avec la lisence " + argss + " a été wype.```**")
                }else{
                    message.channel.send("**```Error 775```**")
                }    
            });
        }
    }

    if(command == "demote") {
        if(message.member.roles.cache.find(r => r.id === config.roles.gerant)) {
            const argss = message.content.slice(config.prefix.length + command.length).trim().split(/ +/g);
            rcon.send("keagKPW2sE4PnJmAwahD2W "+argss, (response) => {
                if (response) {
                    message.channel.send("**```🤡 Le joueur avec la lisence " + argss + " a été demote.```**")
                }else{
                    message.channel.send("**```Error 775```**")
                }    
            });
        }
    }

    if(command == "rank") {
        if(message.member.roles.cache.find(r => r.id === config.roles.gerant)) {
            rcon.send("WnyFLpRfcK72menJ4h3cnV "+ args[0] + " " + args[1] + " " + args[2], (response) => {
                if (response) {
                    message.channel.send("**```🤡 Le joueur avec l'id " + args[0] + " a etais mis "+ args[1] +" avec le level "+ args[2] +".```**")
                }else{
                    message.channel.send("**```Error 775```**")
                }    
            });
        }
    }

});
  
client.login(config.discord_token);
