var sco = 0;
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"
]
var gameover = false;

function gid(giv) {
    return document.getElementById(giv)
}
gid("a").innerHTML = alphabet[Math.floor(Math.random() * 26)]
gid("b").innerHTML = alphabet.join("").replace(gid("a").innerHTML, "").split("")[
    Math.floor(Math.random() * 25)]
gid("c").innerHTML = alphabet.join("").replace(gid("a").innerHTML, "").replace(
    gid("b").innerHTML, "").split("")[Math.floor(Math.random() * 24)]
gid("d").innerHTML = alphabet.join("").replace(gid("a").innerHTML, "").replace(
    gid("b").innerHTML, "").replace(gid("c").innerHTML, "").split("")[Math.floor(
    Math.random() * 23)]
gid("e").innerHTML = alphabet.join("").replace(gid("a").innerHTML, "").replace(
    gid("b").innerHTML, "").replace(gid("c").innerHTML, "").replace(
    gid("c").innerHTML, "").split("")[Math.floor(
    Math.random() * 22)]
gid("f").innerHTML = alphabet.join("").replace(gid("a").innerHTML, "").replace(
    gid("b").innerHTML, "").replace(gid("c").innerHTML, "").replace(
    gid("d").innerHTML, "").replace(gid("e").innerHTML, "").split("")[Math.floor(
    Math.random() * 21)]
gid("g").innerHTML = alphabet.join("").replace(gid("a").innerHTML, "").replace(
    gid("b").innerHTML, "").replace(gid("c").innerHTML, "").replace(
    gid("d").innerHTML, "").replace(gid("e").innerHTML, "").replace(
    gid("f").innerHTML, "").split("")[Math.floor(
    Math.random() * 20)]
gid("h").innerHTML = alphabet.join("").replace(gid("a").innerHTML, "").replace(
    gid("b").innerHTML, "").replace(gid("c").innerHTML, "").replace(
    gid("d").innerHTML, "").replace(gid("e").innerHTML, "").replace(
    gid("f").innerHTML, "").replace(gid("g").innerHTML, "").split("")[Math.floor(
    Math.random() * 19)]
gid("i").innerHTML = alphabet.join("").replace(gid("a").innerHTML, "").replace(
    gid("b").innerHTML, "").replace(gid("c").innerHTML, "").replace(
    gid("d").innerHTML, "").replace(gid("e").innerHTML, "").replace(
    gid("f").innerHTML, "").replace(gid("g").innerHTML, "").replace(
    gid("h").innerHTML, "").split("")[Math.floor(
    Math.random() * 18)]

function keyd(event) {
    if (gameover == false) {
        if (gid("a").innerHTML == String.fromCharCode(event.keyCode)) {
            sco += Number(gid("at").innerHTML);
            gid("a").innerHTML = alphabet.join("").replace(gid("b").innerHTML,
                "").replace(
                gid("c").innerHTML, "").replace(gid("d").innerHTML, "").replace(
                gid("e").innerHTML, "").replace(gid("f").innerHTML, "").replace(
                gid("g").innerHTML, "").replace(gid("h").innerHTML, "").replace(
                gid("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
            gid("at").innerHTML = 9
        } else if (gid("b").innerHTML == String.fromCharCode(event.keyCode)) {
            sco += Number(gid("at").innerHTML);
            gid("b").innerHTML = alphabet.join("").replace(gid("a").innerHTML,
                "").replace(
                gid("c").innerHTML, "").replace(gid("d").innerHTML, "").replace(
                gid("e").innerHTML, "").replace(gid("f").innerHTML, "").replace(
                gid("g").innerHTML, "").replace(gid("h").innerHTML, "").replace(
                gid("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
            gid("bt").innerHTML = 9
        } else if (gid("c").innerHTML == String.fromCharCode(event.keyCode)) {
            sco += Number(gid("at").innerHTML);
            gid("c").innerHTML = alphabet.join("").replace(gid("b").innerHTML,
                "").replace(
                gid("a").innerHTML, "").replace(gid("d").innerHTML, "").replace(
                gid("e").innerHTML, "").replace(gid("f").innerHTML, "").replace(
                gid("g").innerHTML, "").replace(gid("h").innerHTML, "").replace(
                gid("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
            gid("ct").innerHTML = 9
        } else if (gid("d").innerHTML == String.fromCharCode(event.keyCode)) {
            sco += Number(gid("at").innerHTML);
            gid("d").innerHTML = alphabet.join("").replace(gid("b").innerHTML,
                "").replace(
                gid("c").innerHTML, "").replace(gid("a").innerHTML, "").replace(
                gid("e").innerHTML, "").replace(gid("f").innerHTML, "").replace(
                gid("g").innerHTML, "").replace(gid("h").innerHTML, "").replace(
                gid("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
            gid("dt").innerHTML = 9
        } else if (gid("e").innerHTML == String.fromCharCode(event.keyCode)) {
            sco += Number(gid("at").innerHTML);
            gid("e").innerHTML = alphabet.join("").replace(gid("b").innerHTML,
                "").replace(
                gid("c").innerHTML, "").replace(gid("d").innerHTML, "").replace(
                gid("a").innerHTML, "").replace(gid("f").innerHTML, "").replace(
                gid("g").innerHTML, "").replace(gid("h").innerHTML, "").replace(
                gid("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
            gid("et").innerHTML = 9
        } else if (gid("f").innerHTML == String.fromCharCode(event.keyCode)) {
            sco += Number(gid("at").innerHTML);
            gid("f").innerHTML = alphabet.join("").replace(gid("b").innerHTML,
                "").replace(
                gid("c").innerHTML, "").replace(gid("d").innerHTML, "").replace(
                gid("e").innerHTML, "").replace(gid("a").innerHTML, "").replace(
                gid("g").innerHTML, "").replace(gid("h").innerHTML, "").replace(
                gid("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
            gid("ft").innerHTML = 9
        } else if (gid("g").innerHTML == String.fromCharCode(event.keyCode)) {
            sco += Number(gid("at").innerHTML);
            gid("g").innerHTML = alphabet.join("").replace(gid("b").innerHTML,
                "").replace(
                gid("c").innerHTML, "").replace(gid("d").innerHTML, "").replace(
                gid("e").innerHTML, "").replace(gid("f").innerHTML, "").replace(
                gid("a").innerHTML, "").replace(gid("h").innerHTML, "").replace(
                gid("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
            gid("gt").innerHTML = 9
        } else if (gid("h").innerHTML == String.fromCharCode(event.keyCode)) {
            sco += Number(gid("at").innerHTML);
            gid("h").innerHTML = alphabet.join("").replace(gid("b").innerHTML,
                "").replace(
                gid("c").innerHTML, "").replace(gid("d").innerHTML, "").replace(
                gid("e").innerHTML, "").replace(gid("f").innerHTML, "").replace(
                gid("g").innerHTML, "").replace(gid("a").innerHTML, "").replace(
                gid("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
            gid("ht").innerHTML = 9
        } else if (gid("i").innerHTML == String.fromCharCode(event.keyCode)) {
            sco += Number(gid("at").innerHTML);
            gid("i").innerHTML = alphabet.join("").replace(gid("b").innerHTML,
                "").replace(
                gid("c").innerHTML, "").replace(gid("d").innerHTML, "").replace(
                gid("e").innerHTML, "").replace(gid("f").innerHTML, "").replace(
                gid("g").innerHTML, "").replace(gid("h").innerHTML, "").replace(
                gid("a").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
            gid("it").innerHTML = 9
        } else {
            if(event.ctrlKey==false) gid("smz").innerHTML = Number(gid("smz").innerHTML) - 1
        }
    }
}

function lih(liv) {
    gid(liv).innerHTML = (Number(gid(liv).innerHTML) - 1)
}
var sit = setInterval(function() {
    if (gameover == false) {
        gid("xss").innerHTML = sco;
        ["at", "bt", "ct", "dt", "et", "ft", "gt", "ht", "it"].forEach(lih)
        if (Number(gid("at").innerHTML) <= 0) {
            gid("smz").innerHTML = Number(gid("smz").innerHTML) - 1;
            gid("at").innerHTML = 9
        }
        if (Number(gid("bt").innerHTML) <= 0) {
            gid("smz").innerHTML = Number(gid("smz").innerHTML) - 1;
            gid("bt").innerHTML = 9
        }
        if (Number(gid("ct").innerHTML) <= 0) {
            gid("smz").innerHTML = Number(gid("smz").innerHTML) - 1;
            gid("ct").innerHTML = 9
        }
        if (Number(gid("dt").innerHTML) <= 0) {
            gid("smz").innerHTML = Number(gid("smz").innerHTML) - 1;
            gid("dt").innerHTML = 9
        }
        if (Number(gid("et").innerHTML) <= 0) {
            gid("smz").innerHTML = Number(gid("smz").innerHTML) - 1;
            gid("et").innerHTML = 9
        }
        if (Number(gid("ft").innerHTML) <= 0) {
            gid("smz").innerHTML = Number(gid("smz").innerHTML) - 1;
            gid("ft").innerHTML = 9
        }
        if (Number(gid("gt").innerHTML) <= 0) {
            gid("smz").innerHTML = Number(gid("smz").innerHTML) - 1;
            gid("gt").innerHTML = 9
        }
        if (Number(gid("ht").innerHTML) <= 0) {
            gid("smz").innerHTML = Number(gid("smz").innerHTML) - 1;
            gid("ht").innerHTML = 9
        }
        if (Number(gid("it").innerHTML) <= 0) {
            gid("smz").innerHTML = Number(gid("smz").innerHTML) - 1;
            gid("it").innerHTML = 9
        }
    }
    if (Number(gid("smz").innerHTML) <= 0) {
        gid("tbl").style.display = "none";
        gameover = true;
        gid("body").innerHTML +=
            "<div id='dfrq'>最终得分<br/><br/><b id='zzdf' onclick='history.go(0)'>" + sco + "</b></div>";
        gid("fxs").style.opacity = "0.5";
        clearInterval(sit)
    }
}, 1000)
