let profile = {
    name: "name",
    pic: "images/defaut.bmp",
}
function saveProfileInfo(info) {
    if(info == "pic") {
        localStorage.setItem("profilePic", profile.pic);
    }else if (info == "name") {
        localStorage.setItem("profileName", profile.name);
    } 
}
function getProfileInfo(info) {
    if(info == "pic") {
        let pic = localStorage.getItem("profilePic", profile.pic);
        $(".modelImage").attr("src", pic);
        $(".image").attr("src", pic);
    }else if (info == "name") {
        let name = localStorage.getItem("profileName", profile.name);
        $(".name").html(name);
    } else if(info == 'both') {
        let pic = localStorage.getItem("profilePic", profile.pic);
        $(".modelImage").attr("src", pic);
        $(".image").attr("src", pic);
        let name = localStorage.getItem("profileName", profile.name);
        $(".name").html(name);
    }
}