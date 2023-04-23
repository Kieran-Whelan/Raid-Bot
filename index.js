const Discord = require("discord-user-bots");
const dotenv = require("dotenv");
dotenv.config();
const client = new Discord.Client(process.env.TOKEN);

client.on.ready = function () {
    console.log("Client online!");
};

client.on.message_create = function (message) {
    console.log(message);
};