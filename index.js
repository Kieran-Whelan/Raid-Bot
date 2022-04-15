const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = new require('chalk');
const dotenv = require('dotenv');
const prefix = "!";

dotenv.config()

client.on('ready', () => {
    console.log("");                                   
    console.log((chalk.green(`#####    #####      ####`)));
    console.log((chalk.green(`#        #    #    #    #`)));
    console.log((chalk.green(`#        #    #    #    #`)));
    console.log((chalk.green(`#####    #####     #    #`)));
    console.log((chalk.green(`#        #   #     #    #`)));
    console.log((chalk.green(`#        #    #    #    #`)));
    console.log((chalk.green(`#        #     #    ####`)));
    console.log("");                                                                  
    console.log((chalk.cyan(`Discord: FrogDog#4630`)));   
    console.log((chalk.cyan(`Github: https://github.com/GalackQSM`)));  
    console.log(""); 
    console.log((chalk.red(`Successfully logged in as ${client.user.tag}`)));                             
});

client.on('message', (msg) => {
    if (msg.content.startsWith(prefix)) {
        if (msg.content.includes("spam")) {
            msg.channel.send("spam")
        }
    }
});

client.login(process.env.TOKEN);