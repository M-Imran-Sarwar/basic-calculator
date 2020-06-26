function getNumber(num){
    var display = document.getElementById("display-1");
    display.value += num;
}

function allClear(){
    var display = document.getElementById("display-1");
    display.value = "";
}

function getResult(){
     var display = document.getElementById("display-1");
     display.value = eval(display.value)
}