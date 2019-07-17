let websiteObj = {
    count: 0,
    messages: []
};

function update() {
    var dataObj = {
        operation: "update",
        data: {
            id: "1",
            counter: websiteObj.count,
            messages: websiteObj.messages
        }
    };
    $.ajax({
        type: "POST",
        url: "https://r1t82p38nc.execute-api.us-east-2.amazonaws.com/default/JmWebsiteFunction",
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        data: JSON.stringify(dataObj),
        success: function (result) {
            console.log(result);
        }
    });
}
function load() {
    var dataObj = {
        operation: "query",
        data: {
            id: "1"
        }
    };
    $.ajax({
        type: "POST",
        url: "https://r1t82p38nc.execute-api.us-east-2.amazonaws.com/default/JmWebsiteFunction",
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        data: JSON.stringify(dataObj),
        success: function (result) {
            console.log(result);
            websiteObj.count = result.data.Item.counter;
            add();
        }
    });
}
function loadMessages() {
    var dataObj = {
        operation: "query",
        data: {
            id: "1"
        }
    };
    $.ajax({
        type: "POST",
        url: "https://r1t82p38nc.execute-api.us-east-2.amazonaws.com/default/JmWebsiteFunction",
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        data: JSON.stringify(dataObj),
        success: function (result) {
            console.log(result);
            websiteObj.messages = result.data.Item.messages;
            if(websiteObj.messages[0] != undefined) {
                document.getElementById("messages").appendChild(websiteObj.messages[0].message);
            }
        }
    });
}
function updateMessages() {
    var dataObj = {
        operation: "update",
        data: {
            id: "1",
            messages: websiteObj.messages
        }
    };
    $.ajax({
        type: "POST",
        url: "https://r1t82p38nc.execute-api.us-east-2.amazonaws.com/default/JmWebsiteFunction",
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        data: JSON.stringify(dataObj),
        success: function (result) {
            console.log(result);
        }
    });
}
//-----------------count-----------------
function add() {
    websiteObj.count++;
    update();
    $('#result').html(websiteObj.count);
}
//----------------message----------
let timeDate = new Date()
let hour = timeDate.getHours();
let min = timeDate.getMinutes();
function displayZero(time) {
    if (time < 10) {
        time = "0" + time;
    };
    return time;
}
min = displayZero(min)
hour = displayZero(hour)
let dateTime = new Date()
class Message {
    constructor(message) {
        this.message = document.createElement("div");
        this.message.innerHTML =  "<img class='image3' src='" + profile.pic + "'>" + "<h4 class='inlineBlock'>Name: " + profile.name + ", Date: " + dateTime.getDate() + "/" + (dateTime.getMonth() + 1) + "/" + dateTime.getFullYear() + ", Time: " + hour + ":" + min + "</h4><p>" + message + "</p>";
        this.message.className = "message";
    }
}
function sendMessage() {
    let text = document.getElementById("text").value;
    if(text != "") {
        websiteObj.messages.unshift(new Message(text))
        updateMessages();
        document.getElementById("text").value = "";
        if(websiteObj.messages.length > 100) {
            websiteObj.messages.pop();
            updateMessages();
            loadMessages()
        }
        loadMessages()
    }
}


