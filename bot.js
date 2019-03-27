const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!map') {




			var map ='none ';
			var rdmmap = Math.floor(Math.random() * 3);
			var bscmsg = "You will be playing the map ";
			var pnmb = Math.floor(Math.random() * 2);
			var pnmbf = 'text';
			if (pnmb==0){pnmbf = 'as P1.';}
			if (pnmb==1){pnmbf = 'as P2.';}
if (rdmmap==0){map='Dueling Peaks (Z27TXBWT) ';}
if (rdmmap==1){map='Watch Your Back (V3Z6ELNU) ';}
if (rdmmap==2){map='Hinterland Hijinks 1.3 (MRM3H534) ';}
if (rdmmap==3){map='Skirmish (GW24RKRB) ';}
    	
		message.reply(bscmsg + map + pnmbf);

				  	}
	if (message.content === '!flip' or message.content === '!coin' or message.content === '!coinflip' or message.content === '!flipcoin' or) {




			var pnmb = Math.floor(Math.random() * 2);
			var bscmsg = "You !flip the !coin and it's: ";
			if (pnmb==0){pnmbf = 'Heads. ';}
			if (pnmb==1){pnmbf = 'Tails. ';}

    	
		message.reply(bscmsg + pnmbf);

				  	}
	
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
        
