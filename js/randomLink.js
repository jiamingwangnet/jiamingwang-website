let links = ["random/nothing.html", "random/nonononon.html", "random/diamond.html", "random/setTimeout.html", "random/cool.html"];

function random() {
    let r = Math.floor((Math.random() * 5) + 0);
    window.location.href = links[r];
}