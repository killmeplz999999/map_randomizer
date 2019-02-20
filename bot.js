const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!map') {




			var map ='none ';
			var rdmmap = Math.floor(Math.random() * 8);
			var bscmsg = "You will be playing the map ";
			var pnmb = Math.floor(Math.random() * 2);
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
    	
		message.reply(bscmsg + map + pnmbf);

				  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
        
