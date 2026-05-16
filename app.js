// TELEGRAM
const tg = window.Telegram.WebApp;
tg.ready();
const user = tg.initDataUnsafe.user;
if (user) {
    document.getElementById('message').innerText = `Здравствуй, ${user.first_name}, ты в SelenHub!`;
} else {
    document.getElementById('message').innerText = 'Открой меня через Telegram-бот';
}

// ADS
document.addEventListener("DOMContentLoaded", function() {
    const WIDGET_ID = "9726";
    const IS_DEBUG = false;
    const btnIdSelector = "rewardAdBtn";

    const onShowRewardCallback = (result) => {
        console.log('Show ads, reward user:', result);
        alert('Ты получил награду!');
    };

    const onAdsNotFound = () => {
        console.log('No ads found to show');
        alert('Реклама временно недоступна. Попробуй позже.');
    };

    const adController = window.tads.init({
        widgetId: WIDGET_ID,
        type: 'fullscreen',
        debug: IS_DEBUG,
        onShowReward: onShowRewardCallback,
        onAdsNotFound: onAdsNotFound,
    });

    document.getElementById(btnIdSelector).addEventListener('click', () => {
        adController.loadAd()
            .then(() => adController.showAd())
            .catch((err) => {
                console.log(err);
                onAdsNotFound();
            });
    });
});
