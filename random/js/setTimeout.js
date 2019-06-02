var thing = 0
var thinga = 0
var thingx = 0
var thingxp = 0
function setTime() {
	if (thing < 1000) {
	thing++ 
	document.getElementById("hi").innerHTML = thing;
		makeStuff();
	setTimeout(setTime, 100);
	}
}

function makeStuff() {
	if (thing == 1000) {
		thinga++ 
	document.getElementById("his").innerHTML = thinga;
		maBott();
	setTimeout(makeStuff, 100);
	}
	
}

function maBott() {
	if (thinga < 1000) {
		document.getElementById("hiss").innerHTML = thingx;
		thingx++
	setTimeout(maBott, 100);
	}
}

function noVo() {
	if (thingx == 1000) {
		window.loacation.href = "setTimeout.html"
	}
}
function noVox() {
	thingxp++
	document.getElementById("hisss").innerHTML = thingxp
	setTimeout(noVox, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001)
	
}