var sco = 0, alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z"
], gameover=false;
document.getElementById("a").innerHTML = alphabet[Math.floor(Math.random() * 26)]
document.getElementById("b").innerHTML = alphabet.join("").replace(document.getElementById("a").innerHTML, "").split("")[
    Math.floor(Math.random() * 25)]
document.getElementById("c").innerHTML = alphabet.join("").replace(document.getElementById("a").innerHTML, "").replace(
    document.getElementById("b").innerHTML, "").split("")[Math.floor(Math.random() * 24)]
document.getElementById("d").innerHTML = alphabet.join("").replace(document.getElementById("a").innerHTML, "").replace(
    document.getElementById("b").innerHTML, "").replace(document.getElementById("c").innerHTML, "").split("")[Math.floor(
    Math.random() * 23)]
document.getElementById("e").innerHTML = alphabet.join("").replace(document.getElementById("a").innerHTML, "").replace(
    document.getElementById("b").innerHTML, "").replace(document.getElementById("c").innerHTML, "").replace(document.getElementById("c").innerHTML, "").split("")[Math.floor(
    Math.random() * 22)]
document.getElementById("f").innerHTML = alphabet.join("").replace(document.getElementById("a").innerHTML, "").replace(
    document.getElementById("b").innerHTML, "").replace(document.getElementById("c").innerHTML, "").replace(
    document.getElementById("d").innerHTML, "").replace(document.getElementById("e").innerHTML, "").split("")[Math.floor(Math.random() * 21)]
document.getElementById("g").innerHTML = alphabet.join("").replace(document.getElementById("a").innerHTML, "").replace(
    document.getElementById("b").innerHTML, "").replace(document.getElementById("c").innerHTML, "").replace(
    document.getElementById("d").innerHTML, "").replace(document.getElementById("e").innerHTML, "").replace(document.getElementById("f").innerHTML, "").split("")[Math.floor(
    Math.random() * 20)]
document.getElementById("h").innerHTML = alphabet.join("").replace(document.getElementById("a").innerHTML, "").replace(
    document.getElementById("b").innerHTML, "").replace(document.getElementById("c").innerHTML, "").replace(
    document.getElementById("d").innerHTML, "").replace(document.getElementById("e").innerHTML, "").replace(
    document.getElementById("f").innerHTML, "").replace(document.getElementById("g").innerHTML, "").split("")[Math.floor(Math.random() * 19)]
document.getElementById("i").innerHTML = alphabet.join("").replace(document.getElementById("a").innerHTML, "").replace(
    document.getElementById("b").innerHTML, "").replace(document.getElementById("c").innerHTML, "").replace(
    document.getElementById("d").innerHTML, "").replace(document.getElementById("e").innerHTML, "").replace(
    document.getElementById("f").innerHTML, "").replace(document.getElementById("g").innerHTML, "").replace(document.getElementById("h").innerHTML, "").split("")[Math.floor(
    Math.random() * 18)]

function keyd(event) {
if(gameover==false){
    if (document.getElementById("a").innerHTML == String.fromCharCode(event.keyCode)) {
        sco += Number(document.getElementById("at").innerHTML);
        document.getElementById("a").innerHTML = alphabet.join("").replace(document.getElementById("b").innerHTML, "").replace(
            document.getElementById("c").innerHTML, "").replace(document.getElementById("d").innerHTML, "").replace(
            document.getElementById("e").innerHTML, "").replace(document.getElementById("f").innerHTML, "").replace(
            document.getElementById("g").innerHTML, "").replace(document.getElementById("h").innerHTML, "").replace(
            document.getElementById("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
        document.getElementById("at").innerHTML = 9
    } else if (document.getElementById("b").innerHTML == String.fromCharCode(event.keyCode)) {
        sco += Number(document.getElementById("at").innerHTML);
        document.getElementById("b").innerHTML = alphabet.join("").replace(document.getElementById("a").innerHTML, "").replace(
            document.getElementById("c").innerHTML, "").replace(document.getElementById("d").innerHTML, "").replace(
            document.getElementById("e").innerHTML, "").replace(document.getElementById("f").innerHTML, "").replace(
            document.getElementById("g").innerHTML, "").replace(document.getElementById("h").innerHTML, "").replace(
            document.getElementById("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
        document.getElementById("bt").innerHTML = 9
    } else if (document.getElementById("c").innerHTML == String.fromCharCode(event.keyCode)) {
        sco += Number(document.getElementById("at").innerHTML);
        document.getElementById("c").innerHTML = alphabet.join("").replace(document.getElementById("b").innerHTML, "").replace(
            document.getElementById("a").innerHTML, "").replace(document.getElementById("d").innerHTML, "").replace(
            document.getElementById("e").innerHTML, "").replace(document.getElementById("f").innerHTML, "").replace(
            document.getElementById("g").innerHTML, "").replace(document.getElementById("h").innerHTML, "").replace(
            document.getElementById("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
        document.getElementById("ct").innerHTML = 9
    } else if (document.getElementById("d").innerHTML == String.fromCharCode(event.keyCode)) {
        sco += Number(document.getElementById("at").innerHTML);
        document.getElementById("d").innerHTML = alphabet.join("").replace(document.getElementById("b").innerHTML, "").replace(
            document.getElementById("c").innerHTML, "").replace(document.getElementById("a").innerHTML, "").replace(
            document.getElementById("e").innerHTML, "").replace(document.getElementById("f").innerHTML, "").replace(
            document.getElementById("g").innerHTML, "").replace(document.getElementById("h").innerHTML, "").replace(
            document.getElementById("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
        document.getElementById("dt").innerHTML = 9
    } else if (document.getElementById("e").innerHTML == String.fromCharCode(event.keyCode)) {
        sco += Number(document.getElementById("at").innerHTML);
        document.getElementById("e").innerHTML = alphabet.join("").replace(document.getElementById("b").innerHTML, "").replace(
            document.getElementById("c").innerHTML, "").replace(document.getElementById("d").innerHTML, "").replace(
            document.getElementById("a").innerHTML, "").replace(document.getElementById("f").innerHTML, "").replace(
            document.getElementById("g").innerHTML, "").replace(document.getElementById("h").innerHTML, "").replace(
            document.getElementById("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
        document.getElementById("et").innerHTML = 9
    } else if (document.getElementById("f").innerHTML == String.fromCharCode(event.keyCode)) {
        sco += Number(document.getElementById("at").innerHTML);
        document.getElementById("f").innerHTML = alphabet.join("").replace(document.getElementById("b").innerHTML, "").replace(
            document.getElementById("c").innerHTML, "").replace(document.getElementById("d").innerHTML, "").replace(
            document.getElementById("e").innerHTML, "").replace(document.getElementById("a").innerHTML, "").replace(
            document.getElementById("g").innerHTML, "").replace(document.getElementById("h").innerHTML, "").replace(
            document.getElementById("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
        document.getElementById("ft").innerHTML = 9
    } else if (document.getElementById("g").innerHTML == String.fromCharCode(event.keyCode)) {
        sco += Number(document.getElementById("at").innerHTML);
        document.getElementById("g").innerHTML = alphabet.join("").replace(document.getElementById("b").innerHTML, "").replace(
            document.getElementById("c").innerHTML, "").replace(document.getElementById("d").innerHTML, "").replace(
            document.getElementById("e").innerHTML, "").replace(document.getElementById("f").innerHTML, "").replace(
            document.getElementById("a").innerHTML, "").replace(document.getElementById("h").innerHTML, "").replace(
            document.getElementById("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
        document.getElementById("gt").innerHTML = 9
    } else if (document.getElementById("h").innerHTML == String.fromCharCode(event.keyCode)) {
        sco += Number(document.getElementById("at").innerHTML);
        document.getElementById("h").innerHTML = alphabet.join("").replace(document.getElementById("b").innerHTML, "").replace(
            document.getElementById("c").innerHTML, "").replace(document.getElementById("d").innerHTML, "").replace(
            document.getElementById("e").innerHTML, "").replace(document.getElementById("f").innerHTML, "").replace(
            document.getElementById("g").innerHTML, "").replace(document.getElementById("a").innerHTML, "").replace(
            document.getElementById("i").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
        document.getElementById("ht").innerHTML = 9
    } else if (document.getElementById("i").innerHTML == String.fromCharCode(event.keyCode)) {
        sco += Number(document.getElementById("at").innerHTML);
        document.getElementById("i").innerHTML = alphabet.join("").replace(document.getElementById("b").innerHTML, "").replace(
            document.getElementById("c").innerHTML, "").replace(document.getElementById("d").innerHTML, "").replace(
            document.getElementById("e").innerHTML, "").replace(document.getElementById("f").innerHTML, "").replace(
            document.getElementById("g").innerHTML, "").replace(document.getElementById("h").innerHTML, "").replace(
            document.getElementById("a").innerHTML, "").split("")[Math.floor(Math.random() * 18)]
        document.getElementById("it").innerHTML = 9
    } else {
        document.getElementById("smz").innerHTML = Number(document.getElementById("smz").innerHTML) - 1
    }}
}
function lih(liv){
    document.getElementById(liv).innerHTML = (Number(document.getElementById(liv).innerHTML) - 1)
}
var sit = setInterval(function() {
    if (gameover == false) {
        document.getElementById("xss").innerHTML = sco;
        ["at","bt","ct","dt","et","ft","gt","ht","it"].forEach(lih)
    if (Number(document.getElementById("at").innerHTML) <= 0) {
        document.getElementById("smz").innerHTML = Number(document.getElementById("smz").innerHTML) - 1;
        document.getElementById("at").innerHTML = 9
    }
    if (Number(document.getElementById("bt").innerHTML) <= 0) {
        document.getElementById("smz").innerHTML = Number(document.getElementById("smz").innerHTML) - 1;
        document.getElementById("bt").innerHTML = 9
    }
    if (Number(document.getElementById("ct").innerHTML) <= 0) {
        document.getElementById("smz").innerHTML = Number(document.getElementById("smz").innerHTML) - 1;
        document.getElementById("ct").innerHTML = 9
    }
    if (Number(document.getElementById("dt").innerHTML) <= 0) {
        document.getElementById("smz").innerHTML = Number(document.getElementById("smz").innerHTML) - 1;
        document.getElementById("dt").innerHTML = 9
    }
    if (Number(document.getElementById("et").innerHTML) <= 0) {
        document.getElementById("smz").innerHTML = Number(document.getElementById("smz").innerHTML) - 1;
        document.getElementById("et").innerHTML = 9
    }
    if (Number(document.getElementById("ft").innerHTML) <= 0) {
        document.getElementById("smz").innerHTML = Number(document.getElementById("smz").innerHTML) - 1;
        document.getElementById("ft").innerHTML = 9
    }
    if (Number(document.getElementById("gt").innerHTML) <= 0) {
        document.getElementById("smz").innerHTML = Number(document.getElementById("smz").innerHTML) - 1;
        document.getElementById("gt").innerHTML = 9
    }
    if (Number(document.getElementById("ht").innerHTML) <= 0) {
        document.getElementById("smz").innerHTML = Number(document.getElementById("smz").innerHTML) - 1;
        document.getElementById("ht").innerHTML = 9
    }
    if (Number(document.getElementById("it").innerHTML) <= 0) {
        document.getElementById("smz").innerHTML = Number(document.getElementById("smz").innerHTML) - 1;
        document.getElementById("it").innerHTML = 9
    }
}
    if (Number(document.getElementById("smz").innerHTML) <= 0) {
        document.getElementById("tbl").style.display="none";
gameover=true;
document.getElementById("body").innerHTML+="<div id='dfrq'>最终得分<br/><br/><b id='zzdf' onclick='history.go(0)'>"+sco+"</b></div>";
document.getElementById("fxs").style.opacity="0.5";
clearInterval(sit)
    }
}, 1000)
