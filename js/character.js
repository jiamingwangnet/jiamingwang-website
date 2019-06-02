function randNum() {
    let rand = Math.floor(Math.random() * 10) + 1;
    if (rand == 1) {
        $(".long").show();
    } else {
        $(".long").hide();
    }
}
function sayHi() {
    let things = ["can you play a game?", "what is 10+100?"];
    let games = ["games/game.html", "games/game2.html", "games/new_game.html", "games/game5.html"]
    let rr = Math.floor((Math.random() * 4) + 0);
    alert("YO " + myGoodName.toUpperCase() + "!");
    let r = Math.floor(Math.random() * 2)
    if (things[r] == "can you play a game?") {
        alert(things[0]);
        let game = confirm("Do you want to play a game?");
        if (game == true) {
            alert("COOL!");
            addPoints(3);
            readPoints();
            savePoints();
            window.location.href = games[rr];
            $(".long").hide();
        } else {
            alert("WHAT? NO?");
            $(".long").hide();
        }
    }
    if (things[r] == things[1]) {
        alert(things[1]);
        let ans = prompt("answer:")
        if (ans == 110) {
            alert("GOOD!");
            addPoints(2);
            readPoints();
            savePoints();
            $(".long").hide();
        } else {
            alert("NOPE!");
            $(".long").hide();
        }
    }
}