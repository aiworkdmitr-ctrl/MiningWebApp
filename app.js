const tg = window.Telegram.WebApp;
tg.ready()
const user = tg.initDataUnsafe.user;
if (user) {
    document.getElementById('message').innerText = `Здравствуй, ${user.first_name}, ты в SelenHub!`;
    } else {
        document.getElementById('message').innerText = 'Открой меня через Telegram-бот';
    }
    document.getElementById('myButton').addEventListener('click', function() {
        tg.showAlert('Ты активировал кнопку!');
});
