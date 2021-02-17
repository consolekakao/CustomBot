//커스텀 봇
const Discord = require("discord.js");
const mysql = require("mysql");

const config = require("./config.json")

const client = new Discord.Client();
let connection = mysql.createConnection({
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.database,
});


client.once("ready", () => {
    let now = new Date();
    console.log(`■□■□■□■  BOT READY! ${now.getFullYear()}-${Number(now.getMonth())+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ■□■□■□■□■□■□ `);
   client.user.setActivity(`경기 운영`);
  });


  client.on("message", async message => { 
    if (message.author.bot) return;
   
    if(message.author.id != '526415286358769664' && message.author.id != '444862001777475594' && message.author.id != '481052468277411850' )return; 




    if(message.content.startsWith(`!마이크차단`)){
      if(message.member.voice.channel){
      let channel = message.member.voice.channel;
       for (let member of channel.members) {
          if(member[1].roles.cache.has('811550967081205770') || member[1].roles.cache.has('811551330753183755') ){ 
         member[1].voice.setMute(true);
          }
       }
      }

      else{
          message.reply('먼저 음성채널에 참가해주세요.')
      }
     }


     if(message.content.startsWith(`!마이크해제`)){
      if(message.member.voice.channel){
      let channel = message.member.voice.channel;
       for (let member of channel.members) {
          if(member[1].roles.cache.has('811550967081205770') || member[1].roles.cache.has('811551330753183755') ){ 
         member[1].voice.setMute(false);
          }
       }
      }

      else{
          message.reply('먼저 음성채널에 참가해주세요.')
      }
     }

     if(message.content.startsWith(`!헤드셋차단`)){
      if(message.member.voice.channel){
      let channel = message.member.voice.channel;
       for (let member of channel.members) {
          if(member[1].roles.cache.has('811550967081205770') || member[1].roles.cache.has('811551330753183755') ){ 
         member[1].voice.setDeaf(true);
          }
       }
      }

      else{
          message.reply('먼저 음성채널에 참가해주세요.')
      }
     }


     if(message.content.startsWith(`!헤드셋해제`)){
      if(message.member.voice.channel){
      let channel = message.member.voice.channel;
       for (let member of channel.members) {
          if(member[1].roles.cache.has('811550967081205770') || member[1].roles.cache.has('811551330753183755') ){ 
         member[1].voice.setDeaf(false);
          }
       }
      }

      else{
          message.reply('먼저 음성채널에 참가해주세요.')
      }
     }



    if(message.content.startsWith(`!전체차단`)){
        if(message.member.voice.channel){
        let channel = message.member.voice.channel;
         for (let member of channel.members) {
            if(member[1].roles.cache.has('811550967081205770') || member[1].roles.cache.has('811551330753183755') ){ 
           member[1].voice.setMute(true);
           member[1].voice.setDeaf(true);
            }
         }
        }

        else{
            message.reply('먼저 음성채널에 참가해주세요.')
        }
       }
   
       else if(message.content.startsWith(`!전체해제`)){

        if(message.member.voice.channel){
         let channel = message.member.voice.channel;
          for (let member of channel.members) {
            if(member[1].roles.cache.has('811550967081205770') || member[1].roles.cache.has('811551330753183755') ){
              
            member[1].voice.setMute(false);
            member[1].voice.setDeaf(false);
              }
          }
        }
        else{
        message.reply('먼저 음성채널에 참가해주세요.')
    }

    }

    else if(message.content.includes(`help`)){
      message.reply(`\n!마이크차단 (참가자 전원 마이크 차단) \n!마이크해제 (참가자 전원 마이크 차단해제) \n!헤드셋차단 (참가자 전원 헤드셋 차단)\n!헤드셋해제 (참가자 전원 헤드셋 차단해제)\n!전체차단 (참가자 전원 마이크/헤드셋 차단)\n!전체해제 (참가자 전원 마이크/헤드셋 차단해제)`)
    }


    

    })


    client.login(config.discordapikey);