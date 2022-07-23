const sentences = [
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.",
    "Don’t walk in front of me... I may not follow. Don’t walk behind me... I may not lead. Walk beside me... just be my friend.",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
    "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    "Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.",
    "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference."
], alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var scoreLetter = 0, livesLetter = 3, keysSentence = 0, sentenceInterval, timerInterval, timeLetter, letterInterval;

function playLetter() {
    clearInterval(letterInterval);
    clearInterval(timerInterval);
    let time = new Date();
    document.getElementById("menu").classList.remove("show");
    document.getElementById("gameOverLetter").classList.remove("show");
    document.getElementById("scoreLetter").innerText = "0";
    document.getElementById("livesLetter").innerText = "3"
    document.getElementById("gameLetter").classList.add("show");
    document.getElementById("countdownLetter").classList.add("show");
    timeLetter = 9;
    scoreLetter = 0;
    livesLetter = 3;
    let interval = setInterval(function () {
        document.getElementById("letterReady").innerText = Math.ceil((Number(time) + 3000 - Number(new Date())) / 1000) + " sec(s)";
    }, 30);
    setTimeout(function () {
        document.getElementById("quitLetter").classList.add("show")
        clearInterval(interval);
        document.getElementById("countdownLetter").classList.remove("show");
        for (let y of document.getElementsByClassName("timer")) {
            y.innerText = "9s";
        }
        letterInterval = setInterval(function () {
            timeLetter *= 0.99999;
        }, 10)
        timerInterval = setInterval(function () {
            for (let y of document.getElementsByClassName("timer")) {
                y.innerText = Number(y.innerText.replace("s", "")) - 1 + "s"
                if (y.innerText == "0s") {
                    document.getElementById("finalScoreLetter").innerText = scoreLetter;
                    document.getElementById("gameOverLetter").classList.add("show");
                }
            }
        }, 1000);
    }, 3000);

    for (let e of document.querySelectorAll("#gameLetter div .key")) {
        e.innerText = alphabet[Math.floor(Math.random() * 26)];
    }
}

function playSentence() {
    clearInterval(sentenceInterval);
    let date = new Date();
    keysSentence = 0;
    document.getElementById("menu").classList.remove("show");
    document.getElementById("gameSentence").classList.add("show");
    document.getElementById("sentence").innerHTML = "";
    let str = sentences[Math.floor(Math.random() * sentences.length)];
    str = str.split("");
    for (let i of str) {
        document.getElementById("sentence").innerHTML += ("<span class='keySentence'>" + i + "</span>");
    }
    let interval = setInterval(function () {
        document.getElementById("sentenceReady").innerText = Math.ceil((Number(date) + 3000 - Number(new Date())) / 1000) + " sec(s)";
    }, 30);
    setTimeout(function () {
        clearInterval(interval);
        date = new Date();
        sentenceInterval = setInterval(function () {
            document.getElementById("sentenceReady").innerText = ((Number(new Date()) - Number(date)) / 1000).toFixed(2) + "s";
            document.getElementById("speedSentence").innerText = (keysSentence / ((Number(new Date()) - Number(date)) / 1000) * 60).toFixed(3) + "keys per min";
        }, 10)
        document.getElementById("quitSentence").classList.add("show");
    }, 3000)
}

function quitLetter() {
    document.getElementById("quitLetter").classList.remove("show");
    document.getElementById("menu").classList.add("show");
    document.getElementById("gameLetter").classList.remove("show");
}

function quitSentence() {
    document.getElementById("quitSentence").classList.remove("show");
    document.getElementById("menu").classList.add("show");
    document.getElementById("gameSentence").classList.remove("show");
}

function back() {
    document.getElementById("gameLetter").classList.remove("show");
    document.getElementById("gameSentence").classList.remove("show");
    document.getElementById("menu").classList.add("show");
}

function keydown(event) {
    if (document.getElementById("gameLetter").classList.contains("show")) {
        let s = scoreLetter;
        for (let i of document.querySelectorAll("#gameLetter div .key")) {
            if (i.innerText.toLowerCase() == event.key.toLowerCase()) {
                i.innerText = alphabet[Math.floor(Math.random() * alphabet.length)];
                i.parentNode.getElementsByClassName("timer")[0].innerText = timeLetter.toFixed(0) + "s"
                scoreLetter++;
            }
        }
        if (scoreLetter == s) {
            livesLetter--;
        }
        document.getElementById("scoreLetter").innerText = scoreLetter;
        document.getElementById("livesLetter").innerText = livesLetter;
        if (livesLetter <= 0) {
            document.getElementById("finalScoreLetter").innerText = scoreLetter;
            document.getElementById("gameOverLetter").classList.add("show");
        }
    } else if (document.getElementById("gameSentence").classList.contains("show")) {
        for (let x of document.getElementById("sentence").childNodes) {
            if (!x.classList.contains("green")) {
                if (x.innerText.toLowerCase() == event.key.toLowerCase()) {
                    x.classList.add("green");
                    keysSentence++;
                }
                if (keysSentence == document.getElementById("sentence").innerText.length) {
                    clearInterval(sentenceInterval);
                }
                break;
            }
        }
    }
}