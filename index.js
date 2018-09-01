const Discord = require('discord.js');

const TOKEN = "NDYwNzAyOTA2NTc2OTI4NzY4.Dk2s-A.PNQayLh2FcFFAy4_ZVV60tiQ0RA"
const PREFIX = "ves!";
var bot = new Discord.Client();

bot.on("Ready", function() {
    console.log("Ready");
});

bot.on("message", function(message){
    if (message.author.equals(bot.user)) return;
    
    if (!message.content.startsWith(PREFIX)) return; 
    
    var args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args[0].toLowerCase()) {
    case "embedroles":
        var embedroles = new Discord.RichEmbed()
        .addField("<:owner:479648954955333632> — Owners", "**They are the leaders of the server**, صاحب السيرفر :) ")
        .addField("<:staff:479648964422008832> — Staff", "**They are our server's staff, they are ready to help and guide you in the server if you need it.** مراقبين السيرفر  ")
        .addField("<:Youtuber:479648941818773504> — Youtubers", "**Role that can be obtained by having at least 1,000 subscribers on YouTube.**, تقدر تأخذ الرول اذا معاك اقل شي 1000 متابع فاليوتيوب ")
        .addField("<:Devs:479648952145149952> — Devs", "**This role shows that you are a bot or videogame developer and also an expert on everything related to computing. **,هذا الرول اذا كنت بوت او مطور بوت فالسيرفر  ")
        .addField("<:Streamers:479648958432542721> — Streamers", "**Role that can be obtained by having at least 500 followers on Twitch**, تقدر تاخذ الرول اذا معاك اقل شي 500 متابع فالتويتش ")
        .addField("<:Designers:479648959543902228> — Designers", "**This role is for artists. This includes virtual drawings or hand made, and Photoshop designs are also accepted . If you want to get this role, post an example of your art in the <#475069743955574794> ** الرول للمصممين , رسامين, وحتا الجرافيك ديزاين ككل ,اذا تبي الرول ارسل نموذج من تصاميمك هنا <#475069743955574794>   ")
        .addField("<:Ves:479648964560551967> — Vεs", "**Default role given to server members. **, الرتبة الاساسية لاعضاء السيرفر ")
        .addField("<:Bots:479648848952819742> — Bots", "**Bots that benefit the server, and other functions. **, بوتات السيرفر ")
        .addField("<:NoXP:479648953680527385> — No-XP", "**This role is given to people who can't win XP from <@!159985870458322944> anymore, due to reasons like flooding, XP farming, etc. **الرول ذا للناس الي شغلها سبام عشن تلفل :3 ")
        .setColor(0xFFBCE2)
        .setFooter("Ves")
        .setThumbnail("https://cdn.discordapp.com/emojis/467696562764513280.png")
        

        message.channel.sendEmbed(embedroles);
    break;


    case "embedroleimg":
    var embedroleimg = new Discord.RichEmbed()

    .setImage("https://c.top4top.net/p_95827euh2.gif")
    .setColor(0xFFBCE2)

    message.channel.sendEmbed(embedroleimg);
    break;
 
    case "embedruleimg":
    var embedruleimg = new Discord.RichEmbed()

    .setImage("https://cdn.discordapp.com/attachments/451494797690011658/467375952150921226/Rules.gif")
    .setColor(0xFFBCE2)

    message.channel.sendEmbed(embedruleimg);
    break;
    


    case "leveling":
        var leveling = new Discord.RichEmbed()
        .addField("<:top1:480115785491021834> — Top 1", "**Mee6 اول واحد فالترتيب حق **")
        .addField("<:top2:480115786292396032> — Top 2", "**Mee6 ثاني واحد فالترتيب حق **")
        .addField("<:top3:480115786229481472> — Top 3", "**Mee6 ثالث واحد فالترتيب حق **")
        .addField("<:Cosmic:480115778348253197> — Cosmic (LvL 5)", "")
        .addField("<:Cookie:480115777153007626> — Cookie (LvL 10)", "")
        .addField("<:Light:480115785851994113> — Light (LvL 20)", "")
        .addField("<:Water:480115785998663690> — Water (LvL 30)", "")
        .addField("<:Electro:480115779367469107> — Electro (LvL 40)", "")
        .addField("<:Snow:480115786514694144> — Snow (LvL 50)", "**audit-logs اذا حصل ووصلت لذا الرانك بتشوف **")
        .setColor(0xFFBCE2)
        .setFooter("Ves")
        .setThumbnail("https://cdn.discordapp.com/emojis/467494107607203872.png")
        

        message.channel.sendEmbed(leveling);
        break;


        

     case "levelimg":
         var levelimg = new Discord.RichEmbed()

    .setImage("https://cdn.discordapp.com/attachments/339405328691101696/467358176770129931/Levels.gif")
    .setColor(0xFFBCE2)

    message.channel.sendEmbed(levelimg);
    break;







    case "send":
    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();
    
        if (!suggestchannel) {
            return message.reply("Please Mention the channel!")
        }
    
        if (!suggestmessage) {
            return message.reply("Plase Give Text To Suggestion Channel!")
        }
    
        let embed = new Discord.RichEmbed()
            .addField("**", `${suggestmessage}`)
            .setColor(0xFFBCE2)
            suggestchannel.send({
                embed
            }).then(msg => {
                msg.react("").then(r => msg.react(""))
            });
        
        
            message.reply(`Your Suggestion is sended.`)
            return;
        break;
    



    
    }
});
bot.login(TOKEN);
