const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = new require('chalk');
const dotenv = require('dotenv');
const prefix = "$";

dotenv.config();


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

client.on('ready', async () => {
    console.log("");                                   
    console.log((chalk.green(`#####    #####      ####     ####    #####          #         #   #####    `)));
    console.log((chalk.green(`#        #    #    #    #   #        #    #        # #            #    #   `)));
    console.log((chalk.green(`#        #    #    #    #   #        #    #       #   #       #   #     #  `)));
    console.log((chalk.green(`#####    #####     #    #   #  ##    #####        #####       #   #      # `)));
    console.log((chalk.green(`#        #   #     #    #   #    #   #   #       #      #     #   #     #  `)));
    console.log((chalk.green(`#        #    #    #    #   #    #   #    #     #        #    #   #    #   `)));
    console.log((chalk.green(`#        #     #    ####     ####    #     #   #          #   #   #####    `)));
    console.log("");                                                                  
    console.log((chalk.cyan(`Discord: FrogDog#4630`)));   
    console.log((chalk.cyan(`Github: https://github.com/FrogDog56`)));  
    console.log(""); 
    console.log((chalk.red(`Successfully logged in as ${client.user.tag}`)));                             
});

client.on('message', async (msg) => {
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
        } else {
            msg.channel.send("Error: no such command exists!");
        }
    }
});

client.login(process.env.TOKEN);