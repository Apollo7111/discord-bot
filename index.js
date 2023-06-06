require('dotenv').config();
const itemQuality = require('./items');
// import { Blue } from './items';


const axios = require('axios');
const fetch = require("node-fetch");
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });



let isOpening = false;
client.on('ready', () => {
    console.log('bot is ready');
})
client.login(process.env.DISCORD_BOT_ID);
client.on('messageCreate', async (message) => {
    messageArray = message.content.split(" ");
    if (messageArray[0] == '!roll') {
        let roll = 0;
        if(messageArray[1] / 1 == messageArray[1]){
            roll = Math.floor(Math.random() * messageArray[1]) + 1
        }
        else{
            roll = Math.floor(Math.random() * 100) + 1
            messageArray[1] = 100;
        }
        message.channel.send("```" +`fix\n ${message.author.username} rolls: ${roll} (1-${messageArray[1]})`+ "```")
        message.delete(message.id);

    }
    if (message.content === '!case' && isOpening == false) {
        isOpening = true;
        message.channel.send("**Openning case...**");
        let chance = Math.floor(Math.random() * 10000)
        if (chance <=  7992 ){
            let item = Math.floor(Math.random() * 7);
            let quality = Math.floor(Math.random() * 5) + 1;

            setTimeout(() => { message.channel.send("```You got a blue```"); }, 1800);
            setTimeout(() => { message.channel.send(itemQuality.Blue(item)[0]); }, 2000);

            fetch(itemQuality.Blue(item)[quality][0])
            .then((data) => data.json()
            .then(function(result){
                if(result != null){
                setTimeout(() => { message.channel.send("```" + itemQuality.Blue(item)[quality][1] + ": " + result["lowest_price"]+"```") }, 2200);
                }
                else{
                setTimeout(() => { message.channel.send("```" + itemQuality.Blue(item)[quality][1]+ ": " + "Couldn't get the price```") }, 2200);
                }
            }));
            setTimeout(() => { isOpening = false }, 2400);
        }
        else if (chance >= 7993 && chance <= 9590){
            let item = Math.floor(Math.random() * 5);
            let quality = Math.floor(Math.random() * 5) + 1;

            setTimeout(() => { message.channel.send("```You got a purple```"); }, 1800);
            setTimeout(() => { message.channel.send(itemQuality.Purple(item)[0]); }, 2000);
            
            fetch(itemQuality.Purple(item)[quality][0])
            .then((data) => data.json()
            .then(function(result){
                if(result != null){
                    setTimeout(() => { message.channel.send("```" + itemQuality.Purple(item)[quality][1] + ": " + result["lowest_price"]+"```") }, 2200);
                }
                else{
                setTimeout(() => { message.channel.send("```" + itemQuality.Purple(item)[quality][1]+ ": " + "Couldn't get the price```") }, 2200);
                    }
            }));

            setTimeout(() => { isOpening = false }, 2400);
        }
        else if (chance >= 9591 && chance <= 9910){
            let item = Math.floor(Math.random() * 3);
            let quality = Math.floor(Math.random() * 5) + 1;

            setTimeout(() => { message.channel.send("```You got a pink```"); }, 1800);
            setTimeout(() => { message.channel.send(itemQuality.Pink(item)[0]); }, 2000);
            
            fetch(itemQuality.Pink(item)[quality][0])
            .then((data) => data.json()
            .then(function(result){
                if(result != null){
                    setTimeout(() => { message.channel.send("```" + itemQuality.Pink(item)[quality][1] + ": " + result["lowest_price"]+"```") }, 2200);
                }
                else{
                setTimeout(() => { message.channel.send("```" + itemQuality.Pink(item)[quality][1]+ ": " + "Couldn't get the price```") }, 2200);
                    }
            }));

            setTimeout(() => { isOpening = false }, 2400);
        }
        else if (chance >= 9911 && chance <= 9974){
            let item = Math.floor(Math.random() * 2);
            let quality = Math.floor(Math.random() * 5) + 1;

            setTimeout(() => { message.channel.send("```You got a red```"); }, 1800);
            setTimeout(() => { message.channel.send(itemQuality.Red(item)[0]); }, 2000);
            
            fetch(itemQuality.Red(item)[quality][0])
            .then((data) => data.json()
            .then(function(result){
                if(result != null){
                    setTimeout(() => { message.channel.send("```" + itemQuality.Red(item)[quality][1] + ": " + result["lowest_price"]+"```") }, 2200);
                }
                else{
                setTimeout(() => { message.channel.send("```" + itemQuality.Red(item)[quality][1]+ ": " + "Couldn't get the price```") }, 2200);
                    }
            }));

            setTimeout(() => { isOpening = false }, 2400);
        }
        else if (chance >= 9975){

            message.channel.send("```You got a knife```");
            message.channel.send(itemQuality.Knife(0));
            message.channel.send('**5 Gazillion Dollars**')
        }

        
    }
    else if(message.content === '!case' && isOpening == true){
        message.reply({
            content: "**Wait for the current case to open!**",
        })
    }
})

