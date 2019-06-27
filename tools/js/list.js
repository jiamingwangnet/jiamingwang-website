let dot = 1;
localStorage.setItem(dot, "dot");
let dot2 = localStorage.getItem("dot");
function addItem() {
    let newItem = document.createElement("li");
    newItem.innerHTML = document.getElementById("box").value;
    newItem.id = "dot" + dot2;
    dot++;
    localStorage.setItem(dot, "dot");
    newItem.onclick = removeItem;
    document.getElementById("list").appendChild(newItem);
    saveList();
}
function removeItem() {
    document.getElementById("list").removeChild(this);
    // $("."+this.id).slideToggle();
    saveList();
}
function saveList() {
    localStorage.storedList = document.getElementById("list").innerHTML;
}
function loadList() {
    document.getElementById("list").innerHTML = localStorage.storedList;
    for (let i = 0; i < list.children.length; i++) {
        list.children[i].onclick = removeItem;
    }
}