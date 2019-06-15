function displayModel() {
    $(".model").show();
    $(".model").css({
        opacity: 0,
    });
    $(".model").animate({opacity: "1"});
}

function hideModel() {
    $(".model").animate({opacity: "0"});
    $(".model").hide();
}

//-----------------------------------------------------model2------------------

function displayModel2() {
    $(".modelBack").show();
}

function hideModel2() {
    $(".modelBack").hide();
}