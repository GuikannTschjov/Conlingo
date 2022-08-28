function move(num) {
    var top = document.getElementById("top")
    var card = document.getElementById("card" + num)
    if (top.contains(card)) {
        document.getElementById("bottom").appendChild(card);
    }
    else {
        top.appendChild(card);
    }
    observe()
}
function observe() {
    if(document.getElementById("top").childNodes[1] == undefined)
    {d()}
    else {c()}
}
function check() {
    var i=1
    var wrongs = 0
    var top = document.getElementById("top")
    while (document.getElementById("top").childNodes[i] !== undefined) {
        if (top.childNodes[i].id !== "card"+i) {
            wrongs = 1
            break;
        }
        i++
    }
    if (i !== wordCardNum + 1) {wrongs = 1}
    if (wrongs == 0)  {right()}
    else {wrong()}
    }


    var pic = [];
    pic[0] = "https://www.emojiall.com/images/svg/twitter/1f9d5-1f3fd.svg";
    pic[1] = "https://www.emojiall.com/images/svg/twitter/1f469-1f3fb-200d-1f3a4.svg";
    pic[2] = "https://www.emojiall.com/images/svg/twitter/1f471-1f3fb-200d-2642-fe0f.svg";
    pic[3] = "https://www.emojiall.com/images/svg/twitter/1f475-1f3fc.svg";
    pic[4] = "https://www.emojiall.com/images/svg/twitter/1f9d1-1f3fc-200d-1f9b2.svg";
    pic[5] = "https://www.emojiall.com/images/svg/twitter/1f468-1f3fd-200d-1f3a8.svg";
    pic[6] = "https://www.emojiall.com/images/svg/twitter/1f469-1f3ff-200d-1f9b1.svg";

    var randomBgIndex = Math.round( Math.random() * 6 );

    document.getElementById("charPic").src="pic[randomBgIndex]"