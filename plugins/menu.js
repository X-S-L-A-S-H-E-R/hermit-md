const {
    Function,
    isPublic,
    Fancy,
    prefix,
    parsedUrl,
    formatp,
    commands
} = require('../lib/');

const {
    BOT_INFO,
    VIDEO_MENU,
    MODE,
    PREFIX,
    VERSION
} = require('../config');

const os = require('os');
const speed = require('performance-now');

Function({
    pattern: 'menu',
    fromMe: isPublic,
    type: 'info'
}, async (message, match, client) => {
    const commandslist = {};
    for (const command of commands) {
        if (command.dontAddCommandList === false && command.pattern !== undefined) {
            try {
                var match = command.pattern.toString().match(/(\W*)([A-Za-zğüşıiöç1234567890 ]*)/);
                var mmatch = command.pattern.toString().match(/(\W*)([A-Za-züşiğ öç1234567890]*)/)[2];
            } catch (error) {
                var match = [command.pattern];
            }

            var HANDLER = '';

            if (/\[(\W*)\]/.test(PREFIX)) {
                HANDLER = PREFIX.match(/\[(\W*)\]/)[1][0];
            } else {
                HANDLER = '.';
            }
            if (!commandslist[command.type]) commandslist[command.type] = [];
            commandslist[command.type].push((match.length >= 3 ? (HANDLER + mmatch) : command.pattern).trim());
        }
    }

    let mono = "```";
    let msg = `
ᴋᴏɴɴɪᴄʜɪᴡᴀ *${message.pushName.replace(/[\r\n]+/gm, "")}*..! ​ɪᴍ ɪʀɪs-ᴍᴅ 🍀, ᴀ sɪᴍᴘʟᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴠᴇɴᴏxsᴇɴᴘᴀɪ..!\n\n
「 𝙎𝙮𝙨𝙩𝙚𝙢 𝙄𝙣𝙛𝙤 」\n
𝘽𝙤𝙩 𝙉𝙖𝙢𝙚: ${BOT_INFO.split(";")[0]}
𝙈𝙤𝙙𝙚: ${MODE}
𝙋𝙡𝙪𝙜𝙞𝙣𝙨: ${commands.length}
𝙋𝙧𝙚𝙛𝙞𝙭: [ *${PREFIX}* ]
𝙐𝙥𝙩𝙞𝙢𝙚: ${runtime(process.uptime())}
𝙍𝙖𝙢: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
𝙇𝙞𝙗𝙧𝙖𝙧𝙮: Baileys-Md
`;
    for (const commandType in commandslist) {
        msg += `╭───────────────────
`;
        msg += `│ 「 *${await Fancy(commandType.toUpperCase(), 32)}* 」 `;
        msg += `╰┬──────────────────\n┌┤\n`;
        for (const plugin of commandslist[commandType]) {
            msg += `││◦ ${mono}${await Fancy(plugin.toLowerCase(), 32)}${mono}\n`;
        }
        msg += `│╰──────────────\n`;
        msg += `╰───────────────\n`;
    }

    var vid = await parsedUrl(VIDEO_MENU);
    if (vid.length === 0) {
        vid = ['https://i.imgur.com/s1XbCFo.mp4'];
    }
    const video = vid[Math.floor(Math.random() * vid.length)];
    const type = video.endsWith('mp4') ? 'video' : 'image';
    const buttonMessage = {
        [type]: { url: video },
        gifPlayback: true,
        caption: `${msg}`,
        footer: `${BOT_INFO.split(";")[0] || ' '}`,
        buttons: [{ buttonId: prefix + 'ping', buttonText: { displayText: 'Speed Test' }, type: 1 }, { buttonId: prefix + 'list', buttonText: { displayText: 'List Commands' }, type: 1 }]
    };
    await message.client.sendMessage(message.chat, buttonMessage);
});

const runtime = function(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " d " : " d ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " h " : " h ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " m " : " m ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " s" : " s") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
};

exports.runtime = runtime;
