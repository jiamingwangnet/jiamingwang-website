function addItem() {
    let newItem = document.createElement("li");
    newItem.innerHTML = document.getElementById("box").value;
    newItem.onclick = removeItem;
    document.getElementById("list").appendChild(newItem);
    saveList();
}
function removeItem() {
    $(this).slideToggle();
    document.getElementById("list").removeChild(this);
    $(this).slideToggle();
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