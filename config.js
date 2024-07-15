const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_24_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDczLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MSxcbiAgICAgICAgODksXG4gICAgICAgIDE0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDU5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMwLFxuICAgICAgICA5MyxcbiAgICAgICAgODgsXG4gICAgICAgIDg3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDU5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAzMixcbiAgICAgICAgODAsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDIsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjksXG4gICAgICAgIDgzLFxuICAgICAgICA5MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDgzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMixcbiAgICAgICAgMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICA5LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjh5MXA5V1gvUWcxZDl4MGVxTmd2S0kvUGpnVUdQaTdpckxoVE5XUm9MSHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5BTXR1cEFOU0lXeHk5VEY4Y3hsMkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTkzZjI5ZWMtZmQ3Zi00YjQ5LTk2NDctY2MxNGY0ZWI3Y2FiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1NSxcbiAgICAgIDE1MyxcbiAgICAgIDEzMCxcbiAgICAgIDE0LFxuICAgICAgMjI1LFxuICAgICAgODgsXG4gICAgICAxOTEsXG4gICAgICAyMjksXG4gICAgICAxNzQsXG4gICAgICA1OSxcbiAgICAgIDE2NyxcbiAgICAgIDE2MCxcbiAgICAgIDYzLFxuICAgICAgMTUsXG4gICAgICAxMSxcbiAgICAgIDIxMyxcbiAgICAgIDM2LFxuICAgICAgMTUyLFxuICAgICAgNjYsXG4gICAgICAzOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUzLFxuICAgICAgMTQ5LFxuICAgICAgMTcyLFxuICAgICAgMjEsXG4gICAgICAyNDcsXG4gICAgICAxNDUsXG4gICAgICAxOTYsXG4gICAgICAxNTQsXG4gICAgICAzNixcbiAgICAgIDEzNCxcbiAgICAgIDEzOCxcbiAgICAgIDEyMCxcbiAgICAgIDIzNCxcbiAgICAgIDIxOCxcbiAgICAgIDEzMCxcbiAgICAgIDY5LFxuICAgICAgMTY1LFxuICAgICAgMjAzLFxuICAgICAgNDEsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04vY2k1SURFT1RuMExRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQmZJOWRjVlFxbW8wU3FCRG5NMXRySmtYNmJaalNOYjR3aHJpc25hMHdqTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzR05adDN3Wm83bEwrTXNQSm5vNlM3V0szTGhIUkFCdWppYXViaDhjUyt6TFJMWUp3TjN1c2xncUhkSEl6eFNOblV5REk4WStiMlN0R2JGZnRVOHdBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPc2kwM25xanpkeGFOZmZYN3VQWjNKcUFyUEJSUXNTYkZra29zRXB3RXh4UHg3WEMrMkRGTXRzNFRZSkJZcFpJVWJGK085M1NnUG8wTmFqa3ZRTk9pQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNzY1MzAwMTIwNzo0NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc3OTc0OTk3ODI3NzE0OjQ0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM3NjUzMDAxMjA3OjQ0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5ODg2NDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMZmlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxmaS5qc29uIjogIntcImtleURhdGFcIjpcIjMxeVZzQkhFNUw3a1F2T1RQaDA2MzBLek1JQytWWXZWN0xmd2FpTEM1Q0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODQzMjQ3MTk5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA4OTA4OTI5NzlcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZmsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3bE9MeDBoWDFzd2V4R2lkQkRpTG1hNHRlY1Fsb0xnTnQ2WlF0THJzd3VRPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg0MzI0NzE5OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5ODg1NzkzMzZcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZmwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSRkRSOXlzOHFlcjBTVGhIMDZveEFIZzV0WWJVeTlXOEsrcVFwaVZucCtZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg0MzI0NzE5OSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzIwOTg4NTgxNDQ3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
