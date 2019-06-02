function names() {
    let name = prompt("Name please!");
    if(name != null && name != false) {
        localStorage.setItem("name", name);
        $(".name").html(name);
    }
}

function getName() {
    let newName = localStorage.getItem("name");
    $(".name").html(newName);
}
