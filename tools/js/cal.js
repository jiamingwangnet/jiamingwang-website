let operators = false;
let zero = false;
let str = $("#input").val();
$("button").on("click", function (event) {
    let id = event.target.id;
    let str = $("#input").val();
    let newStr = str.substring(str.length - 1, str.length);
    if(newStr =='+') {
        operators = false;
    } else if (newStr =='-'  ) {
        operators = false;
    } else if ( newStr =='*' ) {
        operators = false;
    } else if (newStr == '/') {
        operators = false;
    }
    if (id == "back") {
        let str = $("#input").val();
        str = str.substring(0, str.length - 1);
        $("#input").val(str);
        if(str != "") {
            operators = true;
        } else {
            operators = false;
        }
        if(str == 0) {
            zero = false;
        }
    }
    if (id == "clear") {
        $("#input").val('')
        zero = false;
        operators = false;
    }
    if (id == "calculate") {
        let cal = $("#input").val();
        let ans = eval(cal);
        $("#input").val(ans);
        if(str == 0) {
            zero = false;
        }
    }
    if (id == "1") {
        $("#input").val($("#input").val() + "1");
        operators = true;
        zero = true;
    }
    if (id == "2") {
        $("#input").val($("#input").val() + "2");
        operators = true;
        zero = true;
    }
    if (id == "3") {
        $("#input").val($("#input").val() + "3");
        operators = true;
        zero = true;
    }
    if (id == "4") {
        $("#input").val($("#input").val() + "4");
        operators = true;
        zero = true;
    }
    if (id == "5") {
        $("#input").val($("#input").val() + "5");
        operators = true;
        zero = true;
    }
    if (id == "6") {
        $("#input").val($("#input").val() + "6");
        operators = true;
        zero = true;
    }
    if (id == "7") {
        $("#input").val($("#input").val() + "7");
        operators = true;
        zero = true;
    }
    if (id == "8") {
        $("#input").val($("#input").val() + "8");
        operators = true;
        zero = true;
    }
    if (id == "9") {
        $("#input").val($("#input").val() + "9");
        operators = true;
        zero = true;
    }
    if (id == "0") {
        if (zero == true) {
            $("#input").val($("#input").val() + "0");
            operators = true;
        }
    }
    if (id == "plus") {
        if (operators == true) {
            $("#input").val($("#input").val() + "+");
            operators = false;
            zero = false;
        }
    }
    if (id == "minus") {
        if (operators == true) {
            $("#input").val($("#input").val() + "-");
            operators = false;
            zero = false;
        }
    }
    if (id == "times") {
        if (operators == true) {
            $("#input").val($("#input").val() + "*");
            operators = false;
            zero = false;
        }
    }
    if (id == "divide") {
        if (operators == true) {
            $("#input").val($("#input").val() + "/");
            operators = false;
            zero = false;
        }
    }

});