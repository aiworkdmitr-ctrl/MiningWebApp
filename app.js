const tg = window.Telegram.WebApp;
tg.ready()
const user = tg.initDataUnsafe.user;
if (user) {
    document.getElementById('message').innerText = `Здравствуй, ${user.first_name}, ты в SelenHub!`;
    } else {
        document.getElementById('message').innerText = 'Открой меня через Telegram-бот';
    }
document.addEventListener('DOMContentLoaded', function() {

var adButton = document.getElementById('rewardAdBtn');
if (adButton) {
adButton.addEventListener('click', function() {
if (typeof TadsWidget === 'undefined') {
alert('Рекламв временно недоступна');
return;
}

TadsWidget.showRewarded({
widgetId: "9726",
onReward: function() {

alert('Спасибо за просмотр,награда начислена')

},
onClose: function() {
console.log('Реклама закрыта без награды');
}
});


});
}

});
