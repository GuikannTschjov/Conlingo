var allWords = [
{ "eng":"father", "txt":"Yṡʌż" , "url":"https://www.emojiall.com/images/svg/twitter/1f468-200d-1f37c.svg" }, 
{ "eng":"mother", "txt":"⅄ṡʎż" , "pic":"https://www.emojiall.com/images/svg/twitter/1f469-200d-1f37c.svg" }, 
{ "eng":"cat", "txt":"ᑫżʌżu" , "url":"https://www.emojiall.com/images/svg/twitter/1f408.svg" },
{ "eng":"mouse", "txt":"⅄iᴚi" , "url":"https://www.emojiall.com/images/svg/twitter/1f401.svg" },
{ "eng":"cloth", "txt":"Īyṡ" , "url":"https://www.emojiall.com/images/svg/twitter/1f455.svg" },
{ "eng":"flower", "txt":"Ynżbż" , "url":"https://www.emojiall.com/images/svg/twitter/1f33c.svg" },
{ "eng":"fire", "txt":"Yṣ" , "url":"https://www.emojiall.com/images/svg/twitter/1f525.svg" }
    ]

		function data2array(answerWord) {
			var uniqueRand = new Array()
			for (j = 1; j <= 4; j++) {
				var rand = Math.floor(Math.random()*allWords.length)
				var same = false
				if(allWords[rand].eng == answerWord) {j--; continue;}
          	  		for(i=1; i<j; i++) {
					if(rand == uniqueRand[i]) {same = true}
					}
				if(same == true) {j--; continue;}
				uniqueRand[j]= rand
				}
			for (i = 1; i <= 4; i++) {
				temp = allWords[uniqueRand[i]]
				if (temp.eng == answerWord) {i--; continue;}
				document.getElementById("cardPic"+i).src = temp.url
				document.getElementById("cardTxt"+i).innerHTML = temp.txt
				}
			}