const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "923184474176"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI || ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-g1y0.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 




global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,2348084684270";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348084684270";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Wolfie",
  ownername:process.env.OWNER_NAME|| "Wisdom",


  sessionName:process.env.SESSION_ID|| "SESSION_01_01_20_24_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEVKQ2dwNHF6ZmxTTVhNeHNnbXBra1FqcURFNDNXOTN3anJBSVpVRnhsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHBzakxSZktPV042citwR2VJWjBMZHBRNTNaL0xJYm9FZktRazNYdk5Xcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TEErR2szRDhFVkZ3WHkrcURPN01heEorUWIwR3cxLythMUxLWUVhYm1jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlV1SXAxZjJudmZsMlBxby9aL1lBQmplQm1LV1RDdWRQNkNWcG1pc0JZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNOUi9yanZzbzRQL3FZMy9NeXptUW9vRUdnNm1OOVRvczl2TFRtaWpYbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ino4SjZENlBIL3ExSUdOTUZPYnRHbzNhMXZTNFpsdkRReVN2MUtrUG9iVG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUxWK283eCsxTkoxRGZrSUxlNyttRGlMNG9vWXEvQVJXemI1Wkh1WjJsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazJoQjVWVVNMUmJnVjl1a1Z3VWVoTlJ6QXgvWGNoVEVnSGFyNE5oalVWMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFDMUZaWTgvNW5RWUdnem10VTNnL2k5QVZoMDZpL2xzMldNSnNDRndVN1JTcXMydE1UbzRUVzBFOUl6UkFVZlFyL0VtOXU4N3poRzlkRFF5MnpnV0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6ImNoNXBYdTBBRUp2eVNZS0ZudVNTTVhrRW9rbHpmdmM1WitQZU56dmQ4RDA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IklPOXd4YU9ZVHQyVkVSM3cxRy1fakEiLCJwaG9uZUlkIjoiNWE5MTM0ODQtMDhmNy00ODJiLThlZTAtMzc2NTE4ZmQ2YWY1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5ORVBQT2crb29mZGdSMWoyZWdaWkw5dUY4UT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEROaXgxUlA1TnA4cEV6OTlEYWl6RXRDc0w4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHpmME5vR0VNbnY1cXdHR0FFPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJvUklKVEVBOHlGbFp5OVNyN1l1UUxuN1NWN21VWlM0Q1Z3N3lGaUxvc1hBPSIsImFjY291bnRTaWduYXR1cmUiOiJOMkVHNVlTVWxYbDN5MThyblBadUQ5QzdCb1dxNGtYSzhackFQVWJSVWVEQzRBTEdqeVdVR056NEFjUHFGZ0JYR2FUSnVxM25Dc0hyNTZOVzU3S3JCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWjFOU2w3R2sraE10YkF0elJaWVVHOGxSK3A0V0htcHI0S29CbVVlcDF0Mi9zNm1QR2NLK2EwcGZmYUhzVVJZQVEvWGl0cUV6a1JqS0VTVU5jZ2djRFE9PSJ9LCJtZSI6eyJpZCI6IjIzNDgwODQ2ODQyNzA6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn5iOIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwODQ2ODQyNzA6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhRVNDVXhBUE1oWldjdlVxKzJMa0M1KzBsZTVsR1V1QWxjTzhoWWk2TEZ3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzA0NTcyODc3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1PaiJ9",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
