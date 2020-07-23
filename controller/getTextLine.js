const axios = require("axios");

const changeCoin = async (req, res) => {
  const messageCoin = await axios.get(
    "http://data.fixer.io/api/latest?access_key= <input_key_token_fixer>"
  );

  return messageCoin.data;
};

const rate = async (request, response) => {
  const message = await changeCoin();

  let THB = Math.ceil(
    `${message.rates.THB * request.body.events[0].message.text}`
  );

  if (isNaN(THB)) {
    THB = "กรุณากรอกเป็นตัวเลข";
  }

  let token = request.body.events[0].replyToken;

  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer <input_token_line>",
  };

  let data = {
    replyToken: token,
    messages: [
      {
        type: "text",
        text: THB,
      },
    ],
  };

  await axios.post("https://api.line.me/v2/bot/message/reply", data, {
    headers: headers,
  });
};

module.exports = { rate };
