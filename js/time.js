function time() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    h = displayZero(h);
    m = displayZero(m);
    $("#time").html(h + ":" + m);
    let y = new Date();
    let mo = new Date();
    let da = new Date();
    let fullDate = da.getDate() + "/" + (mo.getMonth() + 1) + "/" + y.getFullYear();
    $(".datetime").html(fullDate);
    let loop = setTimeout(time, 1);
}
function displayZero(time) {
    if (time < 10) {
        time = "0" + time;
    };
    return time;
}