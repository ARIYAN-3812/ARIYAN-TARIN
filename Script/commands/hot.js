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
   "https://drive.google.com/file/d/1j5__adNsO6c-u-e2znSMpM_rrCIIYJSe/view?usp=drivesdk",
    "https://drive.google.com/file/d/1j3mkNWV61wksetGzukJaNzxFPDpZaGif/view?usp=drivesdk",
    "https://drive.google.com/file/d/1j1RS316XRWuWPHjA5HZHbF1g_nqFk36L/view?usp=drivesdk",
    "https://drive.google.com/file/d/1j-lQUx_o7PiMHAACpWGFRq_uJTl2LqRK/view?usp=drivesdk",
    "https://drive.google.com/file/d/1j-LD_mGSNL9U34Srw59dOLHQ91EZ_ZQv/view?usp=drivesdk",
    "https://drive.google.com/file/d/1j-D08UTETWaO2LYStD7LGHjjtboywgn0/view?usp=drivesdk",
    "https://drive.google.com/file/d/1izTFNyp0OqpsJoMOLnLy9YkUc34gleq-/view?usp=drivesdk",
    "https://drive.google.com/file/d/1ipwnEpjNzKxb5la3H_NeNmkHOn1UPkE9/view?usp=drivesdk",
    "https://drive.google.com/file/d/1hkIUi-NzNkjSNkG7zUS4FgLoO7pYOC1J/view?usp=drivesdk",
    "https://drive.google.com/file/d/1hnHD2fvEy8nWWvcfOK_1qz0ZETugi1aJ/view?usp=drivesdk",
    "https://drive.google.com/file/d/1hwreSL-EpRqcy4Ts2KLLZPcpck9_QQtv/view?usp=drivesdk",
    "https://drive.google.com/file/d/1hz_FV9wROsIiVh170C6OeOMoxfmsX2w4/view?usp=drivesdk",
    "https://drive.google.com/file/d/1i-iJhurSzUv1LBsKAopCFDLTftMU0TIO/view?usp=drivesdk",
    "https://drive.google.com/file/d/1i61wgQpWtqIsc3BB-qUkrrDdBjQQU8X4/view?usp=drivesdk",
    "https://drive.google.com/file/d/1i6hLiZf5jzGp8xurAgiaec8QhcQILnkP/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iGasMxDVfi-S796OdKvf4ekJlWmO1dJQ/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iLjSDTaCvQQr0d84LXEy0lzmujfX9g_d/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iOB2ebyL3yyvwHVz2ZTAUxda8tN3kPjl/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iSGcc_zNHsz4NwrHdkjTUujAjcXRG1ac/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iZhE65iXCVGYUHKOrgqopJLwWsjfViR_/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iaBEt50uvT4h5jNaaO5Meg_RZI8Zf1ZT/view?usp=drivesdk",
    "https://drive.google.com/file/d/1igQqHecObuKqI-gJNQ3iSF6EeZlJvoIs/view?usp=drivesdk",
    "https://drive.google.com/file/d/1ii5ar_MvnVe0UZsvtiR-0k_sqstACIIv/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iiavmsy-zKNeOXDNJ51_kADSNoZK-zts/view?usp=drivesdk",
    "https://drive.google.com/file/d/1iou8mJClmvwBewNDaobIEM7Ysv94JPB0/view?usp=drivesdk",
    "https://drive.google.com/file/d/1jCP5l_2ZnncacgsuJ5t67ZooTn8kdfUw/view?usp=drivesdk",
    "https://drive.google.com/file/d/1keIo08OOfahaZ48JZLhutDp6ttAi9yS2/view?usp=drivesdk",
    "https://drive.google.com/file/d/1kgz8r3ny4KAIXwUuMupJQyi9mz64PAD4/view?usp=drivesdk",
    "https://drive.google.com/file/d/1kmzSmcdeSwjLe8d-1lN-0AnGOrBcvgoA/view?usp=drivesdk",
    "https://drive.google.com/file/d/1kp_xXHrgTNgcqb5TpfDb3dv5y4OCMZmi/view?usp=drivesdk",
    "https://drive.google.com/file/d/1ksy1naJBtdrtYOHwfNzo3q_-DfkuGTzC/view?usp=drivesdk",
    "https://drive.google.com/file/d/1ku7vB8h9CGwO2sier5tCuPyy7BcwWq38/view?usp=drivesdk",
    "https://drive.google.com/file/d/1kxUzBr1HfrULTxbMsgzYtGqd5j8CTzam/view?usp=drivesdk",
    "https://drive.google.com/file/d/1l2CBJgtxgUro-9cbjOhjF5sFDHcTRRdI/view?usp=drivesdk",
    "https://drive.google.com/file/d/1l4wb-2v7wPMrlXLqrXqhN35RretX-5XF/view?usp=drivesdk",
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
