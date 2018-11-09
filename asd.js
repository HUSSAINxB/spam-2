const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("510071577753288704")
setInterval(function() {
channel.send(`HUSSAINxB2`);
}, 25)
})
 
 

client.login(process.env.BOT_TOKEN);
