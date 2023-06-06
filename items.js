const axios = require('axios');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
const fetch = require("node-fetch");

var quality = require('./itemQuality')

async function fetchData(url){
    let response = await fetch(url);
    let jsonRes = await response.json();
    return jsonRes["lowest_price"].json();
}
function Blue(id){
    let a = ""
    switch (id) {
        //bizon
        case 0:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098651867187249224/image.png", [quality.ppBizonFN, "Factory New"], [quality.ppBizonMW, "Minimal Wear"], [quality.ppBizonFT, "Field Tested"], [quality.ppBizonWW, "Well Worn"], [quality.ppBizonBS, "Battle Scared"]];
        break;
        //nova
        case 1:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098651630213279764/image.png", [quality.novaFN, "Factory New"], [quality.novaMW, "Minimal Wear"], [quality.novaFT, "Field Tested"], [quality.novaWW, "Well Worn"], [quality.novaBS, "Battle Scared"]];
        break;
        //mac
        case 2:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098652122012209242/image.png", [quality.macFN, "Factory New"], [quality.macMW, "Minimal Wear"], [quality.macFT, "Field Tested"], [quality.macWW, "Well Worn"], [quality.macBS, "Battle Scared"]];
        break;mac
        //p250
        case 3:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098652142128078939/image.png", [quality.p250FN, "Factory New"], [quality.p250MW, "Minimal Wear"], [quality.p250FT, "Field Tested"], [quality.p250WW, "Well Worn"], [quality.p250BS, "Battle Scared"]];
        break;
        //sg
        case 4:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098652163913293844/image.png", [quality.sgFN, "Factory New"], [quality.sgMW, "Minimal Wear"], [quality.sgFT, "Field Tested"], [quality.sgWW, "Well Worn"], [quality.sgBS, "Battle Scared"]];
        break;
        //tec-9
        case 5:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098652185576869968/image.png", [quality.tecFN, "Factory New"], [quality.tecMW, "Minimal Wear"], [quality.tecFT, "Field Tested"], [quality.tecWW, "Well Worn"], [quality.tecBS, "Battle Scared"]];
        break;
        //five-seven
        case 6:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098652209228562564/image.png", [quality.fsFN, "Factory New"], [quality.fsMW, "Minimal Wear"], [quality.fsFT, "Field Tested"], [quality.fsWW, "Well Worn"], [quality.fsBS, "Battle Scared"]];
        break;
    }
    return a;
}

function Purple(id){
    let a = ""
    switch (id) {
        //sawed-off
        case 0:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098652230208454766/image.png", [quality.sawedoffFN, "Factory New"], [quality.sawedoffMW, "Minimal Wear"], [quality.sawedoffFT, "Field Tested"], [quality.sawedoffWW, "Well Worn"], [quality.sawedoffBS, "Battle Scared"]];
        break;
        //aug
        case 1:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098652251750416434/image.png", [quality.augFN, "Factory New"], [quality.augMW, "Minimal Wear"], [quality.augFT, "Field Tested"], [quality.augWW, "Well Worn"], [quality.augBS, "Battle Scared"]];
        break;
        //p90
        case 2:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098652276329042030/image.png", [quality.p90FN, "Factory New"], [quality.p90MW, "Minimal Wear"], [quality.p90FT, "Field Tested"], [quality.p90WW, "Well Worn"], [quality.p90BS, "Battle Scared"]];
        break;
        //r8
        case 3:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098652291889889402/image.png", [quality.r8FN, "Factory New"], [quality.r8MW, "Minimal Wear"], [quality.r8FT, "Field Tested"], [quality.r8WW, "Well Worn"], [quality.r8BS, "Battle Scared"]];
        break;
        //awp
        case 4:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098652309296259152/image.png", [quality.awpFN, "Factory New"], [quality.awpMW, "Minimal Wear"], [quality.awpFT, "Field Tested"], [quality.awpWW, "Well Worn"], [quality.awpBS, "Battle Scared"]];
        break;
    }
    return a;
}

function Pink(id){
    let a = ""
    switch (id) {
        //scar
        case 0:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098652331064705154/image.png", [quality.scarFN, "Factory New"], [quality.scarMW, "Minimal Wear"], [quality.scarFT, "Field Tested"], [quality.scarWW, "Well Worn"], [quality.scarBS, "Battle Scared"]];
        break;
        //p2000
        case 1:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098652360852652052/image.png", [quality.p2000FN, "Factory New"], [quality.p2000MW, "Minimal Wear"], [quality.p2000FT, "Field Tested"], [quality.p2000WW, "Well Worn"], [quality.p2000BS, "Battle Scared"]];
        break;
        //m4a4
        case 2:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098652378149953606/image.png", [quality.m4a4FN, "Factory New"], [quality.m4a4MW, "Minimal Wear"], [quality.m4a4FT, "Field Tested"], [quality.m4a4WW, "Well Worn"], [quality.m4a4BS, "Battle Scared"]];
        break;
    }
    return a;
}

function Red(id){
    let a = ""
    switch (id) {
        //glock
        case 0:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098652393878593656/image.png", [quality.glockFN, "Factory New"], [quality.glockMW, "Minimal Wear"], [quality.glockFT, "Field Tested"], [quality.glockWW, "Well Worn"], [quality.glockBS, "Battle Scared"]];
        break;
        //m4a1-s
        case 1:
        a = ["https://cdn.discordapp.com/attachments/1098651612643332106/1098652410504822824/image.png", [quality.m4a1FN, "Factory New"], [quality.m4a1MW, "Minimal Wear"], [quality.m4a1FT, "Field Tested"], [quality.m4a1WW, "Well Worn"], [quality.m4a1BS, "Battle Scared"]];
        break;
    }
    return a;
}

function Knife(id){
    let a = ""
    switch (id) {
        case 0:
        a = "https://pbs.twimg.com/profile_images/1508062569524781056/NOaiibVF_400x400.jpg";
        break;
    }
    return a;
}

module.exports ={
    Blue,
    Purple,
    Pink,
    Red,
    Knife,
}