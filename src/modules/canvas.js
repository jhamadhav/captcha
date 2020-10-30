const { getRandomText } = require("./randomText");
const { registerFont, createCanvas } = require("canvas");
registerFont("./fonts/HennyPenny-Regular.ttf", { family: 'Henny Penny' });

const getImageData = (W = 200, H = 60) => {
    let canvas = createCanvas(W, H);
    let ctx = canvas.getContext('2d');
    let text = getRandomText();
    // Write captcha text on a image
    ctx.fillStyle = "#c3c3c3";
    ctx.rect(0, 0, W, H);
    ctx.fill();
    ctx.fillStyle = "#262626";
    ctx.font = '30px "Henny Penny"';
    ctx.rotate(0.1);
    ctx.fillText(text, W / 10, 30, W);

    return canvas.toDataURL();
}

module.exports = { getImageData };