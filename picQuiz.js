var allWords = [
	{ eng:"father", txt:"Fuba", url:"https://www.emojiall.com/images/svg/twitter/1f468-200d-1f37c.svg" }, 
	{ eng:"mother", txt:"Muma", url:"https://www.emojiall.com/images/svg/twitter/1f469-200d-1f37c.svg" },
	{ eng:"smoke", txt:"Fum", url:"https://www.emojiall.com/images/svg/twitter/1f32b.svg" }, 
	{ eng:"cat", txt:"Sabal", url:"https://www.emojiall.com/images/svg/twitter/1f408.svg" },
	{ eng:"mouse", txt:"Miki", url:"https://www.emojiall.com/images/svg/twitter/1f401.svg" },
	{ eng:"cloth", txt:"Ifu", url:"https://www.emojiall.com/images/svg/twitter/1f455.svg" },
	{ eng:"flower", txt:"Flana", url:"https://www.emojiall.com/images/svg/twitter/1f33c.svg" },
	{ eng:"fire", txt:"Fo", url:"https://www.emojiall.com/images/svg/twitter/1f525.svg" },
	{ eng:"water", txt:"Mis", url:"https://d2pur3iezf4d1j.cloudfront.net/images/7afea32bcf0e8c6f9d446ad4aad416be" },
	{ eng:"insect", txt:"Bag", url:"https://www.emojiall.com/images/svg/twitter/1fab2.svg" },
	{ eng:"you", txt:"Du", url:"https://www.emojiall.com/images/svg/twitter/1faf5.svg" },
	{ eng:"me", txt:"Wo", url:"https://www.emojiall.com/images/svg/twitter/1f9cf.svg" },
	{ eng:"name", txt:"Name`", url:"https://www.emojiall.com/images/svg/emojitwo/1f4db.svg" },
	{ eng:"love", txt:"aysdel", url:"https://www.emojiall.com/images/svg/twitter/2764.svg" },
	{ eng:"cake", txt:"Keyki", url:"https://www.emojiall.com/images/svg/twitter/1f370.svg" },
	{ eng:"book", txt:"Kitab", url:"https://www.emojiall.com/images/svg/twitter/1f4d6.svg" },
	{ eng:"house", txt:"Has", url:"https://www.emojiall.com/images/svg/twitter/1f3e0.svg" },
	{ eng:"textile", txt:"Bupa", url:"https://www.emojiall.com/images/240/facebook/1f3f3-fe0f.png" },
	{ eng:"apple", txt:"Sago", url:"https://www.emojiall.com/images/svg/twitter/1f34e.svg" },
	{ eng:"paper", txt:"Papil", url:"https://www.emojiall.com/images/240/htc/1f4c3.png" },
	{ eng:"fish", txt:"Goti", url:"https://www.emojiall.com/images/svg/twitter/1f41f.svg" },
	{ eng:"girl", txt:"Loli", url:"https://www.emojiall.com/images/svg/twitter/1f467.svg" },
	{ eng:"boy", txt:"Shota", url:"https://www.emojiall.com/images/svg/twitter/1f466.svg" },
	{ eng:"man", txt:"Nam", url:"https://www.emojiall.com/images/svg/twitter/1f468.svg" },
	{ eng:"woman", txt:"Flaw", url:"https://www.emojiall.com/images/svg/twitter/1f469.svg" },
	{ eng:"person", txt:"Man", url:"https://www.emojiall.com/images/svg/twitter/1f464.svg" },
	{ eng:"people", txt:"Hoyt", url:"https://www.emojiall.com/images/svg/twitter/1f465.svg" },
	{ eng:"milk", txt:"Nyuk", url:"https://d2pur3iezf4d1j.cloudfront.net/images/645fa42dcea02c7e2970a1285e321562" },
	{ eng:"dog", txt:"Snubi", url:"https://www.emojiall.com/images/svg/emojitwo/1f415.svg" }
	
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
				for (i = 0; i <= allWords.length; i++) {
					if(allWords[i].eng == answerWord) {answerNum = i; break;}
					}
				document.getElementById("card5").innerHTML = '<img src="' + allWords[answerNum].url + '"/><div>' + allWords[answerNum].txt + '</div>'
				}

shatter("picQuiz")