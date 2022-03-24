const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    session: null,
    qrTimeoutMs: 90000,
    restartOnAuthFail:true,
    puppeteer:{headless:true}
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


client.on('ready', () => {



    console.log('ready ');

    client.on('message', message => {

        if (message.body === '!ping') {
            message.reply('pong');
        }
    });
    // console.log('Client is ready!');
    // const phone = "723116674"
    // const chatId = "254"+phone+"@c.us";
    // await client.sendMessage(chatId, "message");

});

client.initialize();





