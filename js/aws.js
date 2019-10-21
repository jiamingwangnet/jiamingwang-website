let websiteObj = {
    count: 0,
    messages: []

};
let newMessages = [];
let newCount = 0;

function update() {
    let url = window.location.pathname;
    let filename = url.substring(url.lastIndexOf('/')+1);
    let dataObj;
    if(filename == "index.html") {
        getMessage();
        dataObj = {
            operation: "update",
            data: {
                id: "1",
                visits: websiteObj.count,
                messages: newMessages
            }
        };
    } else if (filename == "comments.html") {
        getCount();
        dataObj = {
            operation: "update",
            data: {
                id: "1",
                visits: newCount,
                messages: websiteObj.messages
            }
        };
    }
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

            if(filename == "comments.html") {
                load();
            }
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
            let url = window.location.pathname;
            let filename = url.substring(url.lastIndexOf('/')+1);

            
            
            if(filename == "index.html") {
                websiteObj.count = result.data.Item.visits;
                add();
            } else {
                websiteObj.messages = result.data.Item.messages;
                document.getElementById("messages").innerHTML = "";
                
                // if(websiteObj.messages[0] != undefined) {
                    for(index in websiteObj.messages) {
                        
                        let message = new Message(websiteObj.messages[index]);
                        document.getElementById("messages").appendChild(message.message);
                    }
                // }
            }
        }
    });
}

function getMessage() {
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
            newMessages = result.data.Item.messages;
        }
    });
}

function getCount() {
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
            newCount = result.data.Item.visits;
        }
    });
}

function clearMessages() {
    websiteObj.messages = [];
    update()
}
//-----------------count-----------------
function add() {
    websiteObj.count++;
    update();
    $('#result').html(websiteObj.count);
}
//----------------message----------
// time stuff
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

/*
declaration of Message
*/
let dateTime = new Date()
class Message {
    constructor(message) {
        this.message = document.createElement("div");
        this.message.innerHTML =  "<img class='image3' src='" + 
        profile.pic + 
        "'>" + 
        "<h4 class='inlineBlock'>Name: " + 
        profile.name + 
        ", Date: " + 
        dateTime.getDate() + 
        "/" + 
        (dateTime.getMonth() + 1) + 
        "/" + 
        dateTime.getFullYear() + 
        ", Time: " + 
        hour + ":" + 
        min + 
        "</h4><p>" + 
        message + 
        "</p>"
        this.message.className = "message";
    }
}
/*
adds a Message class to websiteObj.messages
updates the message
*/
function sendMessage() {
    let text = document.getElementById("text").value;
    if(text != "") {
        if(websiteObj.messages == undefined) {
            websiteObj.messages = [];
        }
        websiteObj.messages.unshift(text);
        //websiteObj.messages.unshift(new Message(text))
        update();
        document.getElementById("text").value = "";
        if(websiteObj.messages.length > 100) {
            websiteObj.messages.pop();
            update();
        }
    }
}


