const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
}

function openPage(page) {
    if (tg) {
        tg.sendData(JSON.stringify({ action: page }));
        tg.close();
    } else {
        alert("این بخش باید از داخل Telegram باز شود.");
    }
}
