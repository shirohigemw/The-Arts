var header = $('body');

var backgrounds = new Array(
    'url("../the-arts/assets/bg1.png")'
  , 'url("../the-arts/assets/bg2.png")'
  , 'url("../the-arts/assets/bg3.png")'
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 6000);

header.css('background-image', backgrounds[0]);
