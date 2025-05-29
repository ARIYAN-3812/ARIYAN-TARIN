/** I am doing this coding with a lot of difficulty, please don't post it yourself¯\_(ツ)_/¯ **/
module.exports.config = {
  name: "hot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ariyan",
  description: "HOT VEDIO",
  commandCategory: "Hình ảnh",
  usages: "sad vedio",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["𝐂𝐫𝐞𝐝𝐢𝐭 : 𝗔𝗥𝗜𝗬𝗔𝗡 𝗖𝗛𝗢𝗪𝗗𝗛𝗨𝗥𝗬"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
   "https://drive.google.com/file/d/1mwj9Vmi0zIcGd-2nrR8UyMXnUNQheaCI/view?usp=drivesdk",
    "https://drive.google.com/file/d/1j3mkNWV61wksetGzukJaNzxFPDpZaGif/view?usp=drivesdk",
    "https://drive.google.com/file/d/1j1RS316XRWuWPHjA5HZHbF1g_nqFk36L/view?usp=drivesdk",
    "https://drive.google.com/file/d/1lCEeEaZcVqNOtDzg-4Jd5PaD_jqxqvvR/view?usp=drivesdk",
    "https://drive.google.com/file/d/1lDX4mhEkofer9kne1vA1NDS01NV8s4oU/view?usp=drivesdk",
    "https://drive.google.com/file/d/1lLPUZKkUC3Bt4NjMrGIDd52qlbILuixp/view?usp=drivesdk",
    "https://drive.google.com/file/d/1lUD9FrGeMSvkwPJYbgg0zYG1BkxThmEI/view?usp=drivesdk",
    "https://drive.google.com/file/d/1lVc-qR6_Kp5H6p9wdjCMkRcY3V9I9XA3/view?usp=drivesdk",
    "https://drive.google.com/file/d/1lXicEHTtGE5bcYs1PVaoIGBndCg4a0O8/view?usp=drivesdk",
    "https://drive.google.com/file/d/1la_1Ou3xuPY2H_-Jy17UqjeNKKkb1fGt/view?usp=drivesdk",
    "https://drive.google.com/file/d/1ljaofA8zXsbAyXzfhagQJe898-m0IQKQ/view?usp=drivesdk",
    "https://drive.google.com/file/d/1ln6B7xLbFWUZn2fzCBa5sPscMlfDiN3H/view?usp=drivesdk",
    "https://drive.google.com/file/d/1loZ9_1vLqdYgwcU5Ag2MKrH1jQ8JGf3I/view?usp=drivesdk",
    
];
     var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/15.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/15.mp4"));    
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/15.mp4")).on("close",() => callback());
   };
