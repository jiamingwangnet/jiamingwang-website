let random = Math.floor(Math.random() * 100);

function isHigher() {
    let myNumber = document.getElementById("n").value;
    if (random > myNumber) {
        alert("the number is higher than " + myNumber);
    } else {
        if (random == myNumber) {
            alert("the number is " + myNumber + ", YOU WON!!");
        } else {
            alert("the number is lower than " + myNumber);  
        }
    }
}

function isMyNumber() {
    let myNumber = document.getElementById("n").value;
    if (random == myNumber) {
        alert("the number is " + myNumber + ", YOU WON!!");
    } else {
        alert("the number is not " + myNumber);
    }
}