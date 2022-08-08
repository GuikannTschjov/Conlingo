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