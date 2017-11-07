var header = $('body');

var backgrounds = new Array(
    'url("../img/bg1.png")'
  , 'url("../img/bg2.png")'
  , 'url("../img/bg3.png")'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 6000);

header.css('background-image', backgrounds[0]);
