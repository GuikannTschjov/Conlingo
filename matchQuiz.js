var cardL
function cr() { 
var x = document.getElementsByClassName("matchCardR");
var i;
for (i = 0; i < x.length; i++) {
    x[i].disabled = false ;
}
}
function dr() { 
var x = document.getElementsByClassName("matchCardR");
var i;
for (i = 0; i < x.length; i++) {
    x[i].disabled = true ;
}
}
function cardR(num) {
    document.getElementById("cardR"+num+"Num").innerText = cardL
    observe()
}
function observe() {
    var empty=0
    var i = 1
    while (i <= 5) {
        if (document.getElementById("cardR" + i + "Num").innerText == "-") {
            empty = 1
            break;
        }
        i++
    }
    if(empty == 1) {d()}
    else {c()}
}
function check() {
    var i = 1
    var wrongs = 0
    while (i<=5) {
        if (document.getElementById("cardR" + i + "Num").innerText !== i + "") {
            wrongs = 1
            break;
        }
        i++
    }
    if (wrongs == 0) { right() }
    else { wrong() }
}

shatter("rightCards")