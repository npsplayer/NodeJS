const TelegramBot = require('node-telegram-bot-api');
const token = '1269474311:AAHfB_5h3HXTFZ2FE0unHzEc06IrHn3peE4';
const bot = new TelegramBot(token, { polling: { interval: 5000 } });

bot.onText(/(.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, 'echo: ' + resp);
});