const fs = require("fs");
module.exports.config = {
  name: "abhishek4",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "ABHISHEK", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Gm") ||
     react.includes("GOOD morning ") || react.includes("good morning ") || react.includes("gm") ||
react.includes("Good morning ") ||
react.includes("Good morning  all")) {
    var msg = {
        body: `【  𝐆00𝐃 𝐌0𝐑𝐍𝐈𝐍𝐆 𝐌𝐄𝐑𝐈 𝐉𝐀𝐍_______❤️】`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧡", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
