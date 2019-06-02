function randomNumber() {
    let number = Math.floor(Math.random() * 8) + 1;
    document.getElementById("number").innerHTML = number;
}