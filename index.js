const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = new require('chalk');
const dotenv = require('dotenv');
const request = require('request');
const {readFileSync, promises: fsPromises} = require('fs');
const prefix = "$";

dotenv.config();

let htmlText = "";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomUrl() {
    const contents = readFileSync("copypasta.txt", 'utf-8');
    const arr = contents.split(/\r?\n/);

    return arr[getRandomInt(0, arr.length - 1)];
}

function fetch() {
    request("https://copypastatext.com/" + getRandomUrl() + "/", function (error, response, body) {
        htmlText = body.match(/<code>([^<]+)<\/code>/)[1].toString();

        if (htmlText.length > 1900) {
            htmlText = htmlText.substring(0, 1900);
        }
    }) 
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

client.on('ready', async () => {
    console.log("");                                   
    console.log((chalk.green(`#####    #####      ####     ####    #####          #         #   #####    `)));
    console.log((chalk.green(`#        #    #    #    #   #        #    #        # #            #    #   `)));
    console.log((chalk.green(`#        #    #    #    #   #        #    #       #   #       #   #     #  `)));
    console.log((chalk.green(`#####    #####     #    #   #  ##    #####        #####       #   #      # `)));
    console.log((chalk.green(`#        #   #     #    #   #    #   #   #       #     #      #   #     #  `)));
    console.log((chalk.green(`#        #    #    #    #   #    #   #    #     #       #     #   #    #   `)));
    console.log((chalk.green(`#        #     #    ####     ####    #     #   #         #    #   #####    `)));
    console.log("");                                                                  
    console.log((chalk.cyan(`Discord: FrogDog#4630`)));   
    console.log((chalk.cyan(`Github: https://github.com/FrogDog56`)));
    console.log((chalk.cyan(`Repo: https://github.com/FrogDog56/Raid-Bot`)));    
    console.log(""); 
    console.log((chalk.red(`Successfully logged in as ${client.user.tag}`)));

    client.user.setActivity({
        game : {
            name : "Heck",
            type : "PLAYING"
        }
    });
});

client.on('message', async (msg) => {
    //user check
    if (msg.author.id != "652627153418190881") {
        return;
    }

    //checks for client prefix
    if (msg.content.toString()[0] === prefix) {
        let msgStr = msg.content.toString().concat(" ", "end");
        //current index is set to 1 so we ignore prefix
        let currentIndex = 1;
        let args = [];
        //gets all args from string
        for (let i = 1; i < msgStr.length; i++) {
            if (msgStr[i] === " ") {
                args.push(msgStr.substring(currentIndex, i));
                currentIndex = i += 1;
                console.log(args); 
            }
        }

        if (args[0] === "repeat") {
            for (let i = 0; i < parseInt(args[1]); i++) {
                let msgWords = [];
                for (let j = 2; j < args.length; j++) {
                    msgWords.push(args[j]);
                };
                msg.channel.send(msgWords.toString().replaceAll(",", " "));
                await sleep(500);
            }
        } else if (args[0] === "shitpost") {
            fetch();
            await sleep(1000);
            msg.channel.send(htmlText);
        } else {
            msg.channel.send("Error: no such command exists!");
        }
    }
});

client.login(process.env.TOKEN);