function names() {
    let name = prompt("Name please!");
    if(name != null && name != false) {
        $(".name").html(name);
        profile.name = name;
        saveProfileInfo("name");
    }
}
