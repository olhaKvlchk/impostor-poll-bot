require('dotenv').config();

const { Telegraf } = require('telegraf');
const schedule = require('node-schedule');

const bot = new Telegraf(process.env.TOKEN);
const question = 'Амогусная пятничная голосовалка:';
const options = ['20:00', '20:30', '21:00', 'Не определился', 'Не приду'];

bot.hears('hi', (ctx) => ctx.reply('Hello, nice to meet you!'));

const create_poll = () => {
	bot.telegram.sendPoll(process.env.CHAT_ID, question, options, {
		is_anonymous: false,
		allows_multiple_answers: true,
	});
};

schedule.scheduleJob('15 16 * * 4', create_poll);

console.log("I'm running!");
bot.launch();
