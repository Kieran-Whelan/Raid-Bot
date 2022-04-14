const Discord = require('discord.js');
const client = new Discord.Client();
const dotenv = require('dotenv');

dotenv.config()

client.on('ready', msg => {
    /*
    console.log("");                                   
    console.log((chalk.cyan(`                                            #####                           `)));
    console.log((chalk.cyan(`                                           #        #####          `)));
    console.log((chalk.cyan(`                                           #        #    #        `)));
    console.log((chalk.cyan(`                                           #####    #    #        `)));
    console.log((chalk.cyan(`                                           #        #####      `)));
    console.log((chalk.cyan(`                                           #        #    #       `)));
    console.log((chalk.cyan(`                                           #        #      #      `)));
    console.log("");                                                                  
    console.log((chalk.red(`                                                         Discord: FrogDog#4630`)));   
    console.log((chalk.red(`                                                        Github: https://github.com/GalackQSM`)));  
    console.log("");     
    */
   console.log("Logged in as")                             
});

client.login(process.env.TOKEN)