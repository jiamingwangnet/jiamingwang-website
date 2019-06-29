var buy = 0
var stuff = 0
var points = 0
var no = 0
var a = 0
var b = 0
var c = 0
var d = a * b * c;
function addBuy() {
	buy += 1599;
	document.getElementById("hello").innerHTML = "your money: $ " + buy;
}

function buyStuffx() {
	if (buy > 99899) {
	
	buy -= 99900;
	document.getElementById("hid").innerHTML = "diamond";
	a++
	}else{
		alert("low money or only buy once");
			}
}
function buyStuffy() {
	if (buy > 9999) {
	
	buy -= 10000;
	document.getElementById("his").innerHTML = "gold";
	b++
	}else{
		alert("low money or only buy once");
			}
}
function buyStuffm() {
	if (buy > 998) {
	
	buy -= 999;
	document.getElementById("hia").innerHTML = "tools";
	c++
	}else{
		alert("low money or only buy once");
			}
}


function makeJewelry() {
	if ((a * b * c)  == 1) {
		
	document.getElementById("hid").innerHTML = "bits of diamond";
	document.getElementById("his").innerHTML = "bits of gold";
	document.getElementById("hia").innerHTML = "used tools";
	document.getElementById("hq").innerHTML = "j";
	document.getElementById("hw").innerHTML = "e";
	document.getElementById("he").innerHTML = "w";
	document.getElementById("hr").innerHTML = "e";
	document.getElementById("ht").innerHTML = "l";
	document.getElementById("hy").innerHTML = "r";
	document.getElementById("hu").innerHTML = "y";
	a--
	b--
	c--
	no += 2
	}else{
		alert("nope");
	}
}
function sendJewelry() {
	if (no == 2) {
	document.getElementById("hid").innerHTML = "  ";
	document.getElementById("his").innerHTML = "  ";
	document.getElementById("hia").innerHTML = "  ";
	document.getElementById("hq").innerHTML = "  ";
	document.getElementById("hw").innerHTML = "  ";
	document.getElementById("he").innerHTML = "  ";
	document.getElementById("hr").innerHTML = "  ";
	document.getElementById("ht").innerHTML = "  ";
	document.getElementById("hy").innerHTML = "  ";
	document.getElementById("hu").innerHTML = "  ";
	points += 1
		document.getElementById("boo").innerHTML = "points: " + points;
		no -= 2
		buy -= 2000
	}else{
		alert("no jewelry to send");
	}
}
function resetGame() {
	alert("your points: " + points);
	alert("3");
	alert("2");
	alert("1");
	window.location.href = "game2.html";
}

function showMoney() {
	document.getElementById("hello").innerHTML = "your money: $ " + buy;
	setTimeout(showMoney(), 1)
}
showMoney() 