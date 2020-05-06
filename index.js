const Discord = require('discord.js');
const { prefix, token } = require('./config.json')
const client = new Discord.Client();

let lisas_smiley = ['🤮', '🤢', '😡', '😠', '🤬', '👎', '🖕', '😣'];

let lisas = ['*YAWN*', 'Fuck off Retard', 'FUCK OFF BUSHPIG!', 'LOSERS', 'PATHETIC', 'GET A LIFE', 'you reckon obsessed much fucktard', 'WAAAAAAAHHHH!!!!', 'NO, U!', 'In your dreams GTFO my discord'];
let lisas_counter = ['IM REAL LISA, THIS FAKE LISA NEEDS TO FUCK OFF', 'IM REAL LISA!', 'THIS LOSER MUST GO', 'FAKE LISA NEEDS TO BE BANNED'];
let lisas_m0nde = ['Yeah, and one of the last things I saw was monde posting that my dad molested me. What a pathetic loser. I mean nope. Sick in the head. All you can do is make up pathetic shit like that.', 'You’re a fucktard, I heard you in it yesterday saying some pretty bad things about me so fuck off', 'Fuck right off monde', 'You’re pathetic \nBev will NOT be in the discord and she thinks you’re scum \nWe’ve spent all day together', 'Monde you’re a loser', 'Monde is brown cody', 'Monde is pretty pathetic but maks takes the cake', 'Fuck off you disgusting pig', 'Monde is a pathetic, driveling, ugly blob.', 'Monde is cringe'];
let lisas_dustin = ['Dustin is moronic and desperate to fit in, I think he has half a brain cell... and he shares that with Deso', 'You’re a brain dead fucking moron. \n I bring more than you, always have, always will. \nI bring it. \nYou just ass sniff', 'Fuck off moron. \nFuck off back to discord and post about tap water for half an hour.\nYou aren’t needed here'];
let lisas_maks = ['Maks is a pathetic, desperate loser who sounds like he has Down syndrome', 'Maks you have yellow teeth and dog breath', 'Maks youre an obsessed try-hard drop-kick', 'Maks youre a psychopath who sounds like you have brain damage', 'Maks is alone and always will be', 'Fuck off maks', 'Maks is an obsessed bushpig', 'Fuck off maks you obsessed bushpig', 'Maks is the worst, he’s obsessed'];
let randm = function(r) {
    return r[Math.floor(Math.random() * r.length)];
}

let percentage = 20;
let crit = function() {
    return parseInt((1 * (Math.random() * 100)));
}

let delay = function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    //delay(3000).then(() => alert('runs after 3 seconds'));

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    //console.log(message.content)


    //thumbs down for m0nde and marks98 each message
    // delay(3500).then(function() {
    //     if (message.member.id === "336520135131267073" || message.member.id === "438322675786579969") {
    //         message.react('👎');
    //     }
    // });


    //Lisa is listening
    if (message.content.includes('lisa') || message.content.includes('Lisa')) {
        //critical strike
        //ctrl+shift+\ jump bracket in visual code
        if (percentage >= crit()) {
            let embed = new Discord.RichEmbed();
            let member = message.member.user;
            message.channel.startTyping();

            //random react 
            delay(3500).then(function() {
                message.react(`${randm(lisas_smiley)}`);

            });


            //m0nde
            //message.member.user.tag
            if (message.member.id === '336520135131267073') {
                // delay(7000).then(function() {
                //     embed.setDescription(`${member} ${message.content}`);
                //     message.channel.send({ embed });
                // });
                delay(7010).then(function() {
                    message.channel.send(`${randm(lisas_m0nde)}`);
                    message.channel.stopTyping();
                });
                //tim    
            } else if (message.member.id === '183742520277073920') {
                // delay(6000).then(function() {
                //     embed.setDescription(`${member} ${message.content}`);
                //     message.channel.send({ embed });
                // });
                delay(6010).then(function() {
                    message.channel.send(`Tim I would not fuck you because you are not very smart and repulsive so FUCK OFF`)
                    message.channel.stopTyping();
                });
                //maks    
            } else if (message.member.id === '438322675786579969') {
                // delay(5000).then(function() {
                //     embed.setDescription(`${member} ${message.content}`);
                //     message.channel.send({ embed });
                // });
                delay(5010).then(function() {
                    message.channel.send(`${randm(lisas_maks)}`)
                    message.channel.stopTyping();
                });
                //Dustin    
            } else if (message.member.id === '259545075774783498') {
                // delay(5000).then(function() {
                //     embed.setDescription(`${member} ${message.content}`);
                //     message.channel.send({ embed });
                // });
                delay(5010).then(function() {
                    message.channel.send(`${randm(lisas_dustin)}`)
                    message.channel.stopTyping();
                });
                //real lisa
            } else if (message.member.id === '185585161038069760') {
                // delay(5000).then(function() {
                //     embed.setDescription(`${member} ${message.content}`);
                //     message.channel.send({ embed });
                // });
                delay(5010).then(function() {
                    message.channel.send(`${randm(lisas_counter)}`)
                    message.channel.stopTyping();
                });
            }
            //other person
            else {
                //message.channel.send(`${member} ${randm(lisas)}`)

                // delay(5000).then(function() {
                //     embed.setDescription(`${member} ${message.content}`);
                //     message.channel.send({ embed });
                // });
                delay(5010).then(function() {
                    message.channel.send(`${member} ${randm(lisas)}`);
                    message.channel.stopTyping();
                });
            }
        } else {
            //failed
        }

    }
    if (message.content.includes('lisa') && message.content.includes('weed')) {
        delay(3500).then(function() {
            message.react(`${randm(lisas_smiley)}`);

        });

        delay(7010).then(function() {
            message.channel.send(`Fuck off you retard pig. \nI have never said I have sex for weed.`);
            message.channel.stopTyping();
        });

    } else if (message.content.startsWith(`${prefix}:fuckoff`)) {
        //message.channel.send(randm(lisas))
        let member = message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(`I JUST KILLED THAT LOSER ${member.displayName} NOW EAT MY ASS :middle_finger:`)
        })
    } else if (message.content.startsWith(`${prefix}:name`)) {
        let member = message.mentions.members.first();
        member.setNickname('I SHOULD NOT POST A REPEATER PIC').then((member) => {
            message.channel.send(`I CALLED HIS/HER NAME AS ${member.nickname}`)
        })
    } else if (message.content.startsWith(`${prefix}:iq`)) {
        let embed = new Discord.RichEmbed();
        embed.addField(`Degrees?`, `2 Degrees`);
        embed.addField(`IQ?`, `140`)
        embed.setColor('LUMINOUS_VIVID_PINK');
        embed.setDescription(`I have 2 degrees and an IQ of 140.`);
        embed.setFooter(`I'm much better than yours.`);
        message.channel.send({ embed });
    }


})


client.login(token);