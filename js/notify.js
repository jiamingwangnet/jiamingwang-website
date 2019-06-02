class notify {
    constructor(content, title) {
        this.notify = document.createElement("div");
        this.notify.innerHTML = "<h1 style='display: inline-block;'>" + title + "  </h1><br><p>" + content + "</p>";
        this.notify.style = 
        "background-color: #4cd2ff;"+
        "color: #4c5bff;"+
        "text-align: center;"+
        "border-radius: 2px;"+
        "padding: 16px;"+
        "position: fixed;"+
        "z-index: 1;"+
        "bottom: 30px;"+
        "font-size: 10px;" +
        "display: block;"
        let that = this;
        this.notify.onmousedown = function() {
            that.linkClose();
        }
        this.notify.onclick = function() {
            that.close();
        }
    }
    
    linkClose() {
        let timeout = setTimeout()
        alert("link");
        this.notify.style.display = "none";
    }
    close() {
        this.notify.style.display = "none";  
    }
}
let notifications = [
    new notify("test", "Big test"),
    new notify("test2", "Big test2"),
    new notify("test3", "Big test3")
]

for(index in notifications) {
    document.getElementById("notifications").appendChild(notifications[index].notify);
}
