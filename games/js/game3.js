var x = 0;
var points = 0;

class theBoard {
	constructor() {
		this.element = document.createElement( "div" );
		this.element.style.width = "600px";
		this.element.style.height = "400px";
		this.element.style.border = "1px solid";
		this.element.style.lineHeight = 0;
		this.element.style.marginLeft = "500px";
	}
	addBlock( block ) {
		this.element.appendChild( block.element );
	}
	addPerson( person ) {
		this.element.appendChild( person.element );
	}
	addButton( mybutton ) {
		this.element.appendChild( mybutton.element );
	}
	addButton2( mybutton2 ) {
		this.element.appendChild( mybutton2.element );
	}addButton3( mybutton3 ) {
		this.element.appendChild( mybutton3.element );
	}
}
class theBlock {
	constructor() {
		this.element = document.createElement( "div" );
		this.element.style.width = "40px";
		this.element.style.height = "40px";
		this.element.style.border = "1px solid";
		this.element.style.lineHeight = 0;
		this.element.style.padding = "0"
		this.element.style.margin = "0";
		this.element.style.backgroundColor = "green";
		this.element.style.display = "inline-block";
		this.element.style.marginTop = "359px";
		var that = this;
		this.element.onclick = function() {
			if (that.element.style.opacity == "0") {
				return;
			}
			that.removeBlock();
		}
	}
	removeBlock() {
		this.element.style.opacity = "0";
		points += 10
		document.getElementById("points").innerHTML = "points: " + points;
	}
}
class thePerson {
	constructor() {
		var right = false; 
		this.element = document.createElement( "div" );
		this.element.style.backgroundColor = "blue";
		this.element.style.width = "40px";
		this.element.style.height = "80px";
		this.element.style.position = "absolute";
		this.element.style.padding = "0";
		this.element.style.margin = "0";
		this.element.style.marginTop = "279px";
		this.element.style.marginLeft = "0px";
		
	}
		moveForward() {
			
		if (right == true) {
			/* x += 20; */
			alert("true")
			/* this.element.style.marginLeft = x;
			right = false; */
/* 		if () {
			
		} */
		
		}
}
}
class theButton {
	constructor() {
		
		this.element = document.createElement( "button" );
		this.element.innerHTML = "left";
	}
}
class theButton2 {
	constructor() {
		
		this.element = document.createElement( "button" );
		this.element.innerHTML = "jump";
	}
}
class theButton3 {
	constructor() {
		
		this.element = document.createElement( "button" );
		this.element.innerHTML = "right";
	}
}
function makeTrue() {
	right = true;
	alert("true")
}
var board = new theBoard();
var person = new thePerson();
var button1 = new theButton();
var button2 = new theButton2();
var button3 = new theButton3();





/**function moveBackward() {
	if () {
		
	}
}
function moveDown() {
	if () {
		
	}
}
function moveUp() {
	if () {
		

		
	}
}

	
}
function flyUp() {
	if () {

		
	}
}
function flyDown() {
	if () {
		
	}
}**/



var rootButton = document.getElementById( "buttonRoot" );
rootButton.appendChild( mybutton.element )
var rootElement = document.getElementById( "root" );
rootElement.appendChild( board.element );
board.addPerson( person );


var i = 0;
while ( i < 14 ) {
	var block = new theBlock();
	board.addBlock( block );
	i++;
};







