const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env', override: true });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

const toBool = (x) => (x && x.toLowerCase() === 'true') || false;

global.apikey = {'https://api.adithyan.xyz': 'free'}
global.apiUrl = 'https://api.adithyan.xyz/'

const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL
process.env.NODE_OPTIONS = '--max_old_space_size=2560'
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG)
module.exports = {
    VERSION: 'V-2.0.9', 
    VIDEO_MENU: process.env.VIDEO_MENU || 'https://i.imgur.com/s1XbCFo.mp4',
    SESSION_ID: process.env.SESSION_ID || '',
    MODE: (process.env.MODE || 'private').toLowerCase(),
    HANDLERS: (process.env.PREFIX || '^[.,!]').trim(),
    SEND_READ: (process.env.READ_COMMAND || false),
    READ_MSG: process.env.READ_MSG === 'true', 
    MSG_LOG: convertToBool(process.env.LOG_MSG) || false, 
    BLOCKCHAT: process.env.BLOCK_CHAT === undefined ? false : process.env.BLOCK_CHAT,
    LANG: process.env.LANGUAGE === undefined ? 'EN' : process.env.LANGUAGE.toUpperCase(),
    ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE),
    BOT_NAME: process.env.BOT_NAME || 'ⁱʳⁱˢ ᵇᵃⁱˡᵉʸˢ ᵐᵈ 🍀',
    AUTOMUTE_MSG: process.env.AUTOMUTE_MSG || '```Group is now Muted!```',
    AUTOUNMUTE_MSG: process.env.AUTOUNMUTE_MSG || '```Group is now Unmuted!!```',
    ANTILINK_MSG: process.env.ANTILINK_MSG || '```Link not allowed here!```',
    BOT_INFO: process.env.BOT_INFO || 'ɪʀɪꜱ-ᴍᴅ;Vᴇɴᴏx-Xᴇʀ;8801853262586;https://imgur.com/D60nScQ.jpg',
    AUDIO_DATA: process.env.AUDIO_DATA === undefined ? 'ɪʀɪꜱ-ᴍᴅ;Vᴇɴᴏx-Xᴇʀ;https://imgur.com/D60nScQ.jpg' : process.env.AUDIO_DATA,
    STICKER_DATA: process.env.STICKER_DATA === undefined ? 'Sticker By;🍀 VenoxSenpai\n\n💬 Contact: +8801853262586' : process.env.STICKER_DATA,
    ERROR_MESSAGE: toBool(process.env.ERROR_MESSAGE), 
    SONG_THUMBNAIL: toBool(process.env.SONG_THUMBNAIL),
    WARN: process.env.WARN || '3',
    EXPRESS: toBool(process.env.EXPRESS),
    REJECT_CALL: toBool(process.env.REJECT_CALL),
    KOYEB_API_KEY: process.env.KOYEB_API_KEY || '',
    KOYEB_APP_NAME: process.env.KOYEB_APP_NAME || '',
    TERMUX_VPS: toBool(process.env.TERMUX || process.env.VPS),
    AUTO_STATUS_VIEW: toBool(process.env.AUTO_STATUS_VIEW),
    APIKEY: process.env.APIKEY || 'free',
    AUTH_FILE: process.env.AUTH_FILE || false,
    START_MSG: toBool(process.env.START_MSG || 'true'),
    HEROKU: {
        HEROKU: process.env.HEROKU === undefined ? false : convertToBool(process.env.HEROKU),
        API_KEY: process.env.HEROKU_API_KEY,
        APP_NAME: process.env.HEROKU_APP_NAME
       },
       DATABASE_URL: DATABASE_URL,
       DATABASE:
       DATABASE_URL === './database.db' ? new Sequelize({dialect: 'sqlite', storage: DATABASE_URL, logging: false,}) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: {native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false,}),
       RBG_API_KEY: process.env.REMOVE_BG_API_KEY === undefined ? false : process.env.REMOVE_BG_API_KEY,
       BRAIN_ID: process.env.BRAIN_ID || 'bid=168613&key=EfbnX54Iy9PFIFp3',
       SUDO: process.env.SUDO || '8801853262586,0',
       DEBUG: DEBUG
};
