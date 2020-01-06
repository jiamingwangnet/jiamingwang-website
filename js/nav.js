$(function() {
    let nav = 
    '<a href="index.html" class="center nava"><i class="fas fa-home colour"></i> Home</a>'+
    '<a href="tehNews.html" class="center nava"><i class="fas fa-newspaper colour"></i> News</a>'+
    ' <a href="games.html" class="center nava"><i class="fas fa-gamepad colour"></i> Games</a>'+
    ' <a href="hamish.html" class="center nava"><i class="fas fa-paw colour"></i> Hamish</a>' +

   ' <div class="dropdown">'+
        '<button id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onclick="switchSymbol()">' + 
       '<i class="fas fa-angle-double-down menuIcon displayauto" id="downSym"'+
       '></i>'+
        '</button>'+

        '<div class="dropdown-menu blueBack" aria-labelledby="dropdownMenuButton">'+
          '  <a href="random.html" class="nava"><i class="fas fa-dice-four blue"></i> Random Things</a>'+
            '<br>'+
            '<a href="comments.html" class="nava"><i class="fas fa-comments blue"></i> Chat</a>'+
           ' <br>'+
            '<a href="videos.html" class="nava"><i class="fas fa-video blue"></i> Videos</a>'+
           ' <br>'+
            '<a href="tools.html" class="nava"><i class="fas fa-wrench blue"></i> Tools</a>'+
           ' <br>'+
            '<a href="school.html" class="nava"><i class="fas fa-school blue"></i> School</a>'+
'        </div>'+
'    </div>'
    $(".nav").append(nav);
})

function switchSymbol() {
    let btn = document.getElementById("downSym");

    if(btn.className == "fas fa-angle-double-down menuIcon") {
        btn.className = "fas fa-angle-double-up  menuIcon"
    } else {
        btn.className = "fas fa-angle-double-down menuIcon"
    }
}
