const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz";

const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max - min) + min);
}

const getRandomText = (length = 6) => {
    let text = "";
    for (let i = 0; i <= length; i++) {
        text += allLetters[random(0, allLetters.length - 1)];
    }
    return text;
}

module.exports = { getRandomText };