var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
	   
        args = args.splice(1);
        switch(cmd) {
            // !map
            case 'map':
			var map ='none ';
			var rdmmap = Math.floor(Math.random() * 8);
			var bscmsg = "You will be playing the map ";
			var pnmb = Math.floor(Math.random() * 1);
			var pnmbf = 'text';
			if (pnmb==0){pnmbf = 'as P1.';}
			if (pnmb==1){pnmbf = 'as P2.';}
if (rdmmap==0){map='Arc de Historique (HDNB54D6) ';}
if (rdmmap==1){map='Clam Bay (5NABDY96) ';}
if (rdmmap==2){map='Clearing (WCDH8GHH) ';}
if (rdmmap==3){map='Forgotten Waterways (2GJVHY2Q) ';}
if (rdmmap==4){map='Groovy Shadows... (8TUDU52Z) ';}
if (rdmmap==5){map="Luna's Winter (FQHHR4WX)";}
if (rdmmap==6){map='Skirmish (SJVEW3RQ) ';}
if (rdmmap==7){map='A Thorn In Our Side (BPLF95JN) ';}
if (rdmmap==8){map="Valder's Bane (7262BHZS)";}
                bot.sendMessage({
                    to: channelID,
                    message: bscmsg + map + pnmbf
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});
