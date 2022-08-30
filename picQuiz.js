var allWords = [
	{ eng:"father", txt:"Yṡʌż", url:"https://www.emojiall.com/images/svg/twitter/1f468-200d-1f37c.svg" }, 
	{ eng:"mother", txt:"⅄ṡʎż", url:"https://www.emojiall.com/images/svg/twitter/1f469-200d-1f37c.svg" }, 
	{ eng:"cat", txt:"ᑫżʌżu", url:"https://www.emojiall.com/images/svg/twitter/1f408.svg" },
	{ eng:"mouse", txt:"⅄iᴚi", url:"https://www.emojiall.com/images/svg/twitter/1f401.svg" },
	{ eng:"cloth", txt:"Īyṡ", url:"https://www.emojiall.com/images/svg/twitter/1f455.svg" },
	{ eng:"flower", txt:"Ynżbż", url:"https://www.emojiall.com/images/svg/twitter/1f33c.svg" },
	{ eng:"fire", txt:"Yṣ", url:"https://www.emojiall.com/images/svg/twitter/1f525.svg" },
	{ eng:"water", txt:"⅄iq", url:"https://www.emojiall.com/images/svg/twitter/1f4a7.svg" },
	{ eng:"insect", txt:"Λżĸ", url:"https://www.emojiall.com/images/svg/twitter/1fab2.svg" },
	{ eng:"you", txt:"Dṡ", url:"https://www.emojiall.com/images/svg/twitter/1faf5.svg" },
	{ eng:"me", txt:"Sṣ", url:"https://www.emojiall.com/images/svg/twitter/1f9cf.svg" },
	{ eng:"name", txt:"Ьżʎı̣", url:"https://www.emojiall.com/images/svg/emojitwo/1f4db.svg" },
	{ eng:"love", txt:"żıqɒı̣u", url:"https://www.emojiall.com/images/svg/twitter/2764.svg" },
	{ eng:"cake", txt:"ꓘı̣ıᴚi", url:"https://www.emojiall.com/images/svg/twitter/1f370.svg" },
	{ eng:"book", txt:"ꓘiɑżʌ", url:"https://www.emojiall.com/images/svg/twitter/1f4d6.svg" },
	{ eng:"house", txt:"ᖷżq", url:"https://www.emojiall.com/images/svg/twitter/1f3e0.svg" },
	{ eng:"textile", txt:"Λṡvż", url:"https://www.emojiall.com/images/240/facebook/1f3f3-fe0f.png" },
	{ eng:"apple", txt:"ᑫżĸṣ", url:"https://www.emojiall.com/images/svg/twitter/1f34e.svg" },
	{ eng:"paper", txt:"Vżviu", url:"https://www.emojiall.com/images/240/htc/1f4c3.png" },
	{ eng:"fish", txt:"Kṣɑi", url:"https://www.emojiall.com/images/svg/twitter/1f41f.svg" }
	
		]
	
			function picQuiz(answerWord) {
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
					document.getElementById("card"+i).innerHTML = '<img src="' + temp.url + '"/><div>' + temp.txt + '</div>'
					}
				var answerNum
				for (i = 1; i <= allWords.length; i++) {
					if(allWords[i].eng == answerWord) {answerNum = i; break;}
					}
				document.getElementById("card5").innerHTML = '<img src="' + allWords[answerNum].url + '"/><div>' + allWords[answerNum].txt + '</div>'
				}
	
			for (i = 1; i <= 10; i++) {
			document.getElementById("picQuiz").appendChild(document.getElementById("card"+Math.ceil(Math.random()*5)));
				}