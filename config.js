const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_40_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDksXG4gICAgICAgIDU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc0LFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNixcbiAgICAgICAgNTIsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NixcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTczLFxuICAgICAgICA2MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgODAsXG4gICAgICAgIDI1LFxuICAgICAgICAzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA0MixcbiAgICAgICAgMTE2LFxuICAgICAgICAzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDkwLFxuICAgICAgICAzMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDU2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM3LFxuICAgICAgICAzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5MixcbiAgICAgICAgODUsXG4gICAgICAgIDg1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlNUd3VXK2VNODhiY1dQbVp4SXNKbWx2dzRzU1Fod2JFVWhQYS9KeDlyMDg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImg2OEJQNzgtVE4tb0tnY3U3TFZUVXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNGEwZTAyOTMtYmQ4Yi00NmE4LTg1MzMtNDk2ODllNjEwZmZjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDE4LFxuICAgICAgMTI3LFxuICAgICAgMTM3LFxuICAgICAgMTc1LFxuICAgICAgMTAwLFxuICAgICAgMjMsXG4gICAgICAxMjUsXG4gICAgICAyMzAsXG4gICAgICAxNDUsXG4gICAgICAxMjMsXG4gICAgICA2MixcbiAgICAgIDI0NixcbiAgICAgIDgsXG4gICAgICAxNTksXG4gICAgICA4NCxcbiAgICAgIDEzNyxcbiAgICAgIDU3LFxuICAgICAgMzMsXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgMzIsXG4gICAgICAyMzEsXG4gICAgICA3OCxcbiAgICAgIDMyLFxuICAgICAgNSxcbiAgICAgIDI1MSxcbiAgICAgIDIyNyxcbiAgICAgIDMxLFxuICAgICAgNDgsXG4gICAgICAxODIsXG4gICAgICAxNjYsXG4gICAgICAxMjgsXG4gICAgICAyMTEsXG4gICAgICAxNjAsXG4gICAgICAxMSxcbiAgICAgIDUzLFxuICAgICAgMjM1LFxuICAgICAgNzIsXG4gICAgICAxNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQR1QrS3dDRUlYZ2tya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldZSlQrU1dhL2tkcnpJWWlGYzZjb3dXMmMzRndoWDVXZlpncHNWOHFrZzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZm5DWHlkNG9TQ3N0QW5aWlVJWncwYzgyUGlPd2RhcS84RU1qNERHZjZ1OUpubGV4aE1tNUdMOWoxNFNWeFNvdktxWjN6S0tkODBSSnhsaGp3VnNvQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRi9laDNHRi91S2ZmTGcrTlIybmZub1lzd01CaFlhbkptMks1MkNMUDZCKy9acE9nOFQ3N09OYmlYT096MmJnZGVhY3Zmck5PWGRHTEkyQnc3VUgrQ2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3ODU2MjAyMDM6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNzQ1MjI0MTA2NDE4NjozNEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc4NTYyMDIwMzozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNDU3NjEwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQm1zXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCbXMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvNE9DbGp6WjZkQ01vUE5KNlppY0JiNkNLeC9ib3pYZTZWQmtpOXMyZlFrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjYzMTExNDIyNSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNDU3NjE0ODk4XCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
