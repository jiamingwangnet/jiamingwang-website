$(function() {
    let nav = '<a href="index.html" class="center"><i class="fas fa-home colour"></i> Home</a>'+
   ' <div class="dropdown">'+
        '<button id="dropdownMenuButton" class="down" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' + 
        '<i class="fas fa-bars menuIcon down" '+
            '></i>' +
        '</button>'+

        '<div class="dropdown-menu blueBack" aria-labelledby="dropdownMenuButton">'+
            '<a href="tehNews.html"><i class="fas fa-newspaper colour"></i> News</a>'+
           ' <br>'+
           ' <a href="games.html"><i class="fas fa-gamepad colour"></i> Games</a>'+
           ' <br>'+
          '  <a href="random.html"><i class="fas fa-dice-four colour"></i> Random Things</a>'+
            '<br>'+
            '<a href="comments.html"><i class="fas fa-comments colour"></i> Chat</a>'+
           ' <br>'+
            '<a href="videos.html"><i class="fas fa-video colour"></i> Videos</a>'+
           ' <br>'+
            '<a href="tools.html"><i class="fas fa-wrench colour"></i> Tools</a>'+
           ' <br>'+
            '<a href="hamish.html"><i class="fas fa-paw colour"></i> Hamish</a>'+
            '<br>'+
            '<a href="school.html"><i class="fas fa-school colour"></i> School</a>'+
'        </div>'+
'    </div>'+

    '<a href="tehNews.html" class="none"><i class="fas fa-newspaper colour"></i> News</a>'+
   ' <a href="games.html" class="none"><i class="fas fa-gamepad colour"></i> Games</a>'+
   ' <a href="random.html" class="none"><i class="fas fa-dice-four colour"></i> Random Things</a>'+
   ' <a href="comments.html" class="none"><i class="fas fa-comments colour"></i> Chat</a>'+
   ' <a href="videos.html" class="none"><i class="fas fa-video colour"></i> Videos</a>'+
 '   <a href="tools.html" class="none"><i class="fas fa-wrench colour"></i> Tools</a>'+
   ' <a href="hamish.html" class="none"><i class="fas fa-paw colour"></i> Hamish</a>'+
  '  <a href="school.html" class="none"><i class="fas fa-school colour"></i> School</a>'+
    '<i class="fas fa-user-cog menuIcon" onclick="displayModel()"></i>';
    $(".nav").append(nav);
})
