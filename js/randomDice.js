let dices = ["fas fa-dice-six blue big", "fas fa-dice-five blue big", "fas fa-dice-four blue big", "fas fa-dice-three blue big", "fas fa-dice-two blue big", "fas fa-dice-one blue big"]
$(function() {
    let rand = Math.floor(Math.random() * 5) + 0;
    let attrs = dices[rand];
    $("#dice").attr("class", attrs);
})