$(function () {
    // Add event listeners to a elements;
    $('a').filter(function (i, d) {
        if (d.href.indexOf('#glass') != -1) {
            return true;
        }
        if (d.href.indexOf('#doorColor') != -1) {
            return true;
        }
    })
        .on('click', function (e) {
            alert('Функционал скрипта ограничен! За возобнавлением работы обращайтесь в telegram: https://t.me/evgeniyvorobev');
        });
})
