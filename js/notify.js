class notify {
    constructor(content, title) {
        this.notify = document.createElement("div");
        this.notify.innerHTML = '<div class="toast" data-autohide="false">'+
        '<div class="toast-header">'+
          '<img src="images/notify.png" class="rounded mr-2" alt="...">'+
          '<strong class="mr-auto">' + title + '</strong>'+
          '<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">'+
            '<span aria-hidden="true">&times;</span>'+
          '</button>'+
        '</div>'+
        '<div class="toast-body">'+
          content+
       ' </div>'+
     '</div>';
    }
}
let notifications = [
    new notify("Hello", "new update! This is a test"),
]

for(index in notifications) {
    document.getElementById("notifications").appendChild(notifications[index].notify);
}
$('.toast').toast('show');
