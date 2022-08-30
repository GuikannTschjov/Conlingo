function c(){document.getElementById("check").disabled=false}
function d(){document.getElementById("check").disabled=true;}
function retry() {
	document.getElementById("wrong").style.left="-100%";
	document.getElementById("wrong").style.right="100%";
	}
function right() {
	document.getElementById("right").style.left="0";
	document.getElementById("right").style.right="0";
	}
function wrong() {
	document.getElementById("wrong").style.left="0";
	document.getElementById("wrong").style.right="0";
	}


function next(isCourseEnd) {
	var str = window.location.href;
	if (isCourseEnd == true) {
		var lastSlash=str.lastIndexOf("/");
		var secondLastSlash=str.lastIndexOf("/",lastSlash-1);
		n = Number(str.substring(secondLastSlash+1, lastSlash))
		location.href="../"+(n+1)+"/tips.html"
	}
	else {
		str = str.substring(str.lastIndexOf("z")+1, str.lastIndexOf("."));
		location.href = './Qui' + (Number(str)+1)
		}
	}

var string = '<button id="check" onmousedown="check()" disabled>CHECK<\/button><div id="wrong">Whoops. Let’s try again.<button id="retry" onclick="retry()">RETRY<\/button><\/div><div id="right">Well done!<button id="next" onclick="next(isCourseEnd)">NEXT<\/button><\/div>'
document.write(string);

	function shatter(parentId) {
		parent = document.getElementById(parentId)
		for (i = 1; i <= 10; i++) {
			parent.appendChild(parent.childNodes[Math.ceil(Math.random()*parent.children.length)]);
			}
		}